const dictionaryCreationProdServerUrl = 'https://dictionary.iachieved.it/dictionary' // Production server api url for dictionary creation
var request = require("supertest");

// Set Timeout to 20s to ensure sufficient time is given to request calls.
beforeEach(async () => {
  jest.setTimeout(20000)
})

// Avoid Jest open handle error
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 10000)); 
});

// Bind api url to request 
request = request.bind(request, dictionaryCreationProdServerUrl);

/* Test dictionary creation */

// If a dictionary is successfully created, expect property 'id' in response body
describe('Create a New Dictionary', () => {
  test('it should create a new ID', async()  => {
    const res = await request()
      .post('')
      // Set Authorization header
      .set('Authorization', 'Basic cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy')
    expect(res.body).toHaveProperty('id');
    console.log(res.body);
  })
})

// Also, if a dictionary is successfully created, expect returned status: 201
describe('Create a New Dictionary', () => {
  test('it should return 201 status code', async()  => {
    const res = await request()
      .post('')
      // Set Authorization header
      .set('Authorization', 'Basic cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy')
    expect(res.statusCode).toEqual(201);
    console.log(res.statusCode);
  })
})

// If creation of a dictionary fails because of no authorization header, expect returned status: 401
describe('Create a New Dictionary', () => {
  test('it should return 401 status code', async()  => {
    const res = await request()
      .post('')
    expect(res.statusCode).toEqual(401);
    console.log(res.statusCode);
  })
})

