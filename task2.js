const axios = require('axios');

async function fetchDataWithConfig(headers, params) {
  try {
    
    const response = await axios.get('https://typicode.com', {
      headers: headers,
      params: params
    });
    return response.config;
  } catch (error) {
    
    return error.config;
  }
}

module.exports = fetchDataWithConfig;

