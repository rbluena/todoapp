import { NextApiResponse } from 'next';
import { router } from '~/lib/server/config';
import { allTodosControllers } from '~/lib/server/services/todo/todo.controller';
import Todo from '~/models/todo';
import { ExtendedNextApiRequest } from '~/types/server';
import type { ITodo } from '~/types/shared';
import apiPaths from '~/utils/api/paths';

// const allTodosController = (_, res, next) => { }

router
	/**
	 * GET /api/v1/todos
	 *
	 */
	.get(apiPaths.todo.all, allTodosControllers)

	/**
	 * POST /api/v1/todos
	 *
	 */
	.post((_req, res) => {
		res.status(200).json({ message: 'Succefully was created!' });
	});

export default router;
