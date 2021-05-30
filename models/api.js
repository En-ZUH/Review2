'use strict';
const superagent = require('superagent');

const apiData = async (req, res) => {
    superagent.get(`https://api.artic.edu/api/v1/artworks?limit=10`).then(apiResponse => {
        const resultData = apiResponse.body.data.map(ele => {
            return new Artist(ele);

        })
        res.send(resultData);
    }).catch(err => {
        console.log(err);
    });

}

class Artist {
    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail.lqip;
        this.name = data.artist_display;
        this.description = data.credit_line;
    }
}


module.exports = apiData;