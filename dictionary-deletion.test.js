var dictionaryDeletionMockServerUrl = 'https://private-anon-27a0f92936-dictionaryapi.apiary-proxy.com/dictionary/id' // Mock server api url for deletion
var request = require("supertest");
const id = 'aa80055c-e616-4426-8e8b-3b2d2cecc741'

// Set Timeout to 20s to ensure sufficient time is given to request calls.
beforeEach(async () => {
  jest.setTimeout(20000)
})

// Avoid Jest open handle error
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 10000)); 
});

// Bind api url to request with known id
request = request.bind(request, dictionaryDeletionMockServerUrl.replace('id',id));

/* Test dictionary deletion */

// If deletion of a dictionary succeeds, expect returned status: 204
describe('Delete a Dictionary', () => {
  test('it should return 204 status code', async()  => {
    const res = await request()
      .delete('')
      // Set Authorization header
      .set('Authorization', 'Basic cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy')
    expect(res.statusCode).toEqual(204);
    console.log(res.statusCode);
  })
})

// If deletion of a dictionary fails because of no authorization header, expect returned status: 401
describe('Delete a Dictionary', () => {
    test('it should return 401 status code', async()  => {
      const res = await request()
        .delete('')
      expect(res.statusCode).toEqual(401);
      console.log(res.statusCode);
    })
  })






