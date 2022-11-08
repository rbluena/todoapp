import { router } from '~/lib/server/config';
import { allTodosControllers } from '~/lib/server/services/todo/todo.controller';
import apiPaths from '~/utils/api/paths';

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
		res.status(200).json({ message: 'Todo item was successfully created!' });
	});

export default router;
