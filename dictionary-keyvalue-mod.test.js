var dictionaryKeyValModMockServerUrl = 'https://private-anon-27a0f92936-dictionaryapi.apiary-mock.com/dictionary/id/keys/key' // Mock server api url for key-value modification
var request = require("supertest");
const id = 'aa80055c-e616-4426-8e8b-3b2d2cecc741'; // Declare a constant for known id

// Set Timeout to 20s to ensure sufficient time is given to request calls.
beforeEach(async () => {
  jest.setTimeout(20000)
})

// Avoid Jest open handle error
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 10000)); 
});

// Bind api url to request with known id
request = request.bind(request, dictionaryKeyValModMockServerUrl.replace('id',id));

/* Test key-value pair creation */

// If new key-value pair is succesfully created, expect returned status: 201
describe('Create a New Key Value Pair', () => {
  test('it should return 201 status code', async()  => {
    const res = await request()
      .post('')
      // Set Authorization header
      .set('Authorization', 'Basic cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy')
    expect(res.statusCode).toEqual(201);
    console.log(res.statusCode);
  })
})