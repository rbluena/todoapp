import { NextApiResponse } from 'next';
// import { NextHandler } from 'next-connect';
import { ExtendedNextApiRequest, SSRMiddleware } from '~/types/server';
import * as todoService from './todo.service';

export const allTodosControllers: SSRMiddleware = async (
	req: ExtendedNextApiRequest,
	res: NextApiResponse
	// _: NextApiHandler
) => {
	try {
		const data = todoService.getAllTodos(req.query);

		res.status(201).json(data);
	} catch (error) {
		//
	}
};
