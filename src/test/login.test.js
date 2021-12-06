const supertest = require('supertest');
const { app, server } = require('./../index');

api = supertest(app);

beforeEach(() => {
  //initializeCityDatabase();
});

describe('Testing responses codes', () => {
  describe('Public endpoints', () => {
    test('Test supertest', async () => {
      await api.post('/api/auth/login/').expect(400);
    });
  });

  describe('Private endpoints', () => {
    test('Test supertest', async () => {
      await api.post('/api/auth/login/refresh/').expect(401);
    });
  });
});

afterAll(() => {
  server.close();
});
