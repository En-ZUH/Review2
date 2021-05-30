'use strict';

const express = require('express');
const cors = require('cors');



require('dotenv').config();

const crud = require('./models/crud');
const api = require('./models/api');
const { Mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3500;
Mongoose.connect('mongodb://localhost:27017/artdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('working server 5555');
});
app.post('/art/favorite', crud.creatFn);
app.get('/art/favorite', crud.readFn);
app.put('/art/favorite', crud.updateFn);
app.delete('/art/favorite', crud.deleteFn);

app.get('/art', api);


app.listen(PORT, () => console.log(`app is listening to ${PORT}`));
