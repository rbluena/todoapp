import supertest from 'supertest';
import apiPaths from '../../utils/api/paths';

/**
 * TODO: Switch to the local database and not remote
 * Also configure CI/CD for the testing
 */

const request = supertest('http://localhost:3000');

describe('[GET] "/api/v1/todos"', () => {
	test('should return list of todos', async () => {
		const response = await request.get(apiPaths.todo.all);
		expect(response.statusCode).toBe(200);
		expect(response.headers['content-type']).toEqual(
			expect.stringContaining('json')
		);
		expect(response.body.success).toBe(true);
		expect(Array.isArray(response.body.data)).toBe(true);
	});
});

describe('[POST] /api/v1/todos', () => {
	test('should add todo item to the database', async () => {
		const data = {
			title: 'Some title',
			description: 'Some description to be created!',
		};

		const response = await request.post(apiPaths.todo.add).send(data);
		expect(response.status).toBe(200);
		expect(response.body.success).toBe(true);
	});
});
