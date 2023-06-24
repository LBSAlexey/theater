const express = require(`express`);
const app = express();
const port = 3005;

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