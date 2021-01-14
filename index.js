const { fetchBreedDescription } = require("./breedFetcher");

const args = process.argv.slice(2);

fetchBreedDescription(args, (error, desc) => {
  if (error)
    console.log('Error Fetch Details: ', error);
  else
    console.log(desc);
});
