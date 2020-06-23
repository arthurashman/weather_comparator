const express = require('express');
const request = require('request-promise');
const api_key = require('./keys').openWeatherApiKey

const options = {
  uri: ,
  json: true
}

request(options)
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));