import { router } from '~/lib/server/config';
import Todo from '~/models/todo';
import type { ITodo } from '~/types';
import apiPaths from '~/utils/api/paths';

router
	/**
	 * GET /api/v1/todos
	 *
	 */
	.get(apiPaths.todo.all, async (_req, res): Promise<void> => {
		try {
			const todos: ITodo[] = await Todo.find({});
			res.status(200).json({ success: true, data: todos });
			res.send({ success: true });
		} catch (error) {
			let errorMessage;

			if (error instanceof Error) {
				errorMessage = error.message;
			}

			res.status(400).json({ success: false, error: errorMessage });
		}
	})

	/**
	 * POST /api/v1/todos
	 *
	 */
	.post((_req, res) => {
		res.status(200).json({ message: 'Succefully was created!' });
	});

export default router;
