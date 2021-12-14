const supertest = require('supertest');
const { app, server } = require('./../index');

api = supertest(app);

beforeEach(() => {
	//initializeCityDatabase();
});

describe('Testing testing access to endpoints', () => {
	describe('Public endpoints', () => {
		test('GET /api/', async () => {
			await api.get('/api/').expect(200).expect('Content-Type', /json/);
		});

		test('POST /api/auth/login/', async () => {
			let body = {
				user: 'test',
				pass: 'test',
			};
			await api.post('/api/auth/login/').send(body).expect(200).expect('Content-Type', /json/);
		});
	});

	describe('Private endpoints', () => {
		test('GET /api/auth/login/refresh/', async () => {
			await api.get('/api/auth/login/refresh/').expect(401).expect('Content-Type', /json/);
		});
	});
});

afterAll(() => {
	server.close();
});
