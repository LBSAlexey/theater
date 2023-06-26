const express = require(`express`);
const app = express();
const port = 3005;

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
mongoose.connect('mongodb://127.0.0.1:27017/theater');

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


const Actor = new mongoose.model('actor', ActorShema);
const Performance = new mongoose.model('performance', PerformanceShema);

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


