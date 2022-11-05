import { router } from '~/lib/config';
import Todo from '~/models/todo';
import apiPaths from '~/utils/api/paths';

router
	/**
	 * GET /api/v1/todos
	 *
	 */
	.get(apiPaths.todo.all, async (_, res) => {
		try {
			const todos = await Todo.find({});
			res.status(200).json({ success: true, data: todos });
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
	.post(apiPaths.todo.add, (_, res) => {
		res.status(200).json({ message: 'Succefully was created!' });
	});

export default router;
