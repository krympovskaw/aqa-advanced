const fetchDataWithConfig = require('./task2');

test('should include custom headers and params', async () => {
  const customHeaders = { 'X-Custom-Header': 'MyValue' };
  const customParams = { id: 1 };

  const config = await fetchDataWithConfig(customHeaders, customParams);

  
  expect(config.headers['X-Custom-Header']).toBe('MyValue');
  
  expect(config.params.id).toBe(1);
});

