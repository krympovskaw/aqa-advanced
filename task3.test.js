const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const getUserData = require('./task3');

const mock = new MockAdapter(axios);

describe('getUserData', () => {
  afterEach(() => {
    mock.reset();
  });

  test('successful request returns data', async () => {
    const userData = { id: 1, name: 'John' };
    mock.onGet('/users/1').reply(200, userData);

    const result = await getUserData(1);
    expect(result).toEqual(userData);
  });

  test('failed request throws error', async () => {
    mock.onGet('/users/99').reply(404);

    await expect(getUserData(99)).rejects.toThrow('User not found');
  });
});
