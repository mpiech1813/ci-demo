//git checkout -b your-name-here
//git push origin your-name-here
// node -v to check version

const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  describe('GET /', () => {
    it('show infromation about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API');
    });
  });
});
