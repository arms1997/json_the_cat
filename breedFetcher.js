const request = require('request');

const fetchBreedDescription = function (catName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    let data = JSON.parse(body)[0];

    if (!data) {
      callback('breed not found', null);
      return;
    }

    callback(null, data.description);

  });
};

module.exports = { fetchBreedDescription };