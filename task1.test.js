const fetchWithError = require('./task1');

test('should return error message for invalid URL', async () => {
  const result = await fetchWithError();
  expect(result).toMatch(/failed/i);
});
