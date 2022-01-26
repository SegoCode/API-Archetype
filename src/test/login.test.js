const supertest = require('supertest');
const { app, server } = require('./../index');

api = supertest(app);

beforeEach(() => {
	//initializeCityDatabase();
});

describe('Testing testing access to endpoints', () => {
	describe('Public endpoints', () => {
		test('GET /v1.0/', async () => {
			await api.get('/v1.0/').expect(200).expect('Content-Type', /json/);;
		});

		test('POST /v1.0/auth/login/', async () => {
			let body = {
				user: 'test',
				pass: 'test',
			};
			await api.post('/v1.0/auth/login/').send(body).expect(200).expect('Content-Type', /json/);;
		});
	});

	describe('Private endpoints', () => {
		test('GET /1.0/auth/login/refresh/', async () => {
			await api.get('/v1.0/auth/login/refresh').expect(401).expect('Content-Type', /json/);;
		});
	});
});

afterAll(() => {
	server.close();
});
