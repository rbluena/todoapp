import { router } from '~/lib/config';
import Todo from '~/models/todo';

router
	.get('/api/todos', async (_, res) => {
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
	.post('/api/todos', (_, res) => {
		res.status(200).json({ message: 'Succefully was created!' });
	});

export default router;