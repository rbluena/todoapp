import { router } from '~/lib/server/config';

router
	.get((_, res) => {
		res.status(200).json({ success: true, message: 'Got it' });
	})
	.put((_, res) => {
		res.status(200).json({ success: true, message: 'Got it!' });
	});

export default router;
