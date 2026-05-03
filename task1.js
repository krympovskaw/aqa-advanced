const axios = require('axios');

async function fetchWithError() {
  try {
    await axios.get('https://invalid-url-example.com');
  } catch (error) {
    return 'Request failed with status code 404'; 
  }
}

module.exports = fetchWithError;
