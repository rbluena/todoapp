import { router } from '~/lib/config';

router
	.get('/api/todos', async (_, res) => {
		res.status(200).json({ message: 'Todos api created!' });
	})
	.post('/api/todos', (_, res) => {
		res.status(200).json({ message: 'Succefully was created' });
	});

export default router;
