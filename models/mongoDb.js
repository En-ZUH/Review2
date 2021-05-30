'use strict';

const mongoose = require('mongoose');

const artschema = mongoose.Schema({
    title: {
        type: string,
        unique: true,
        lowercase: true,
        trim: true //allowing spaces
    },
    thumbnail: 'string',
    name: 'string',
    description: 'string',
})

const artModel = mongoose.model(artCollection, artschema);

module.exports = artModel;