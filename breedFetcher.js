const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  let data = JSON.parse(body)[0];

  if (!data) {
    console.log(`Breed was not found`);
    return;
  }

  console.log(data);

});