const express = require(`express`);
const bcrypt = require('bcrypt')
const app = express();
const port = 3005;
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');



const { faker, DateModule } = require('@faker-js/faker')

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://127.0.0.1:27017/theater');
} catch(e) {
    console.log(e)
}

secretKey = {
    secret: "SECRET_RANDOM_KEY"
}

const accessToken = (id, roles) => {
    const payload = {
        id, 
        roles,
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

const middleWare = (req, res, next) => {
    if(req.method === "OPTION") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            res.sendStatus(400)
        }

        const decodeDate = jwt.verify(token, secretKey.secret) 
        req.user = decodeDate
        next()
    } catch(e) {
        
    }
}

const ActorShema = new mongoose.Schema({
    fullName: String,
    photo: String,
    info: {
        comment: String, 
        role: String,
        hobbies: String, 
    },
    birthdate: Date
});

const PerformanceShema = new mongoose.Schema({
    title: String,
    photo: [String],
    description: String,
    actors: [{
        type: mongoose.ObjectId,
        ref: 'actor'
    }]

});

const UserShema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        numberPhone: {
            type: Number, 
            required: true, 
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        date: {
            type: Date
        },
        
        username: {
            type: String,
            required: true,
            unique: true,
        },

        roles: {
            type: String,
            ref: 'role'
        },
        
        password: {
            type: String,
            required: true,
            unique: true,
        }
    
})

const RoleShema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        unique: true,
        default: "USER",
    }
})



const Role = new mongoose.model('role', RoleShema);
const User = new mongoose.model('user', UserShema);
const Actor = new mongoose.model('actor', ActorShema);
const Performance = new mongoose.model('performance', PerformanceShema);


class authController {
    async getRegisteration(req, res) {
        try {
                const {username, password, firstName, lastName, date, email, numberPhone} = req.body;
                const users = await User.findOne({username: username});
                if(users) {
                    return res.sendStatus(400).json({message: 'Такой пользователь уже существует'});
                }
                const hashPassword = bcrypt.hashSync(password, 7);
                const role = await Role.findOne({value: "USER"});
                const user = new User({
                    username: username,
                    password: hashPassword,
                    firstName: firstName,
                    lastName: lastName,
                    date: date,
                    email: email,
                    numberPhone: numberPhone,
                    role: [role.value],
                });
                await user.save();
                return res.sendStatus(200);

            
        } catch(e) {
            return res.sendStatus(400).json({message: "Registeration error"});
        }
    }

    async getLogin(req, res) {
        try {
            const {username, password} =  req.body;
            let users = await User.findOne({username: username});
            if(!users) {
                res.sendStatus(400);
            }
            const validPassword = bcrypt.compareSync(password, users.password)
            if(!validPassword) {
                res.sendStatus(400);
            }
            const token = accessToken(user._id, user.roles)
            return res.send(token)
        } catch(e) {

        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.send(users)
        } catch(e) {
            res.sendStatus(404)
        }
    }
}

const controller = new authController;

app.get('/actors', async (req, res) => {
    let actors = await Actor.find();

    res.send(actors)
})

app.get('/actors/personal', async (req, res) => {
    let id = req.query.id
    let actor = await Actor.findOne({_id: id});

    try {
        res.send(actor)

    } catch(e) {
        res.sendStatus('404')
    }
})

app.get('/performance', async (req, res) => {
    let performance = await Performance.find();

    res.send(performance);
});

app.get('/performance/play', async (req, res) => {
    let title = req.query.title;
    let play = await Performance.findOne({title: title}).populate('actors');

    res.send(play);
});


app.post('/registeration', async (req, res) => {
        let username = req.body.username
        let password = req.body.password
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let date = req.body.date
        let email = req.body.email
        let numberPhone = req.body.numberPhone

        const hashPassword = bcrypt.hashSync(password, 7);
        const role = await Role.findOne({value: "USER"});

        const users = await User.findOne({username: username})

        if(users) {
            return
        }

        const user = new User({
            username: username,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName,
            date: date,
            email: email,
            numberPhone: numberPhone,
        });

        await user.save();
        return res.sendStatus(200);

});

app.post('/login', controller.getLogin);

app.get('/user', controller.getUsers);
