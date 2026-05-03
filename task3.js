const axios = require('axios');

async function getUserData(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
}

module.exports = getUserData;
