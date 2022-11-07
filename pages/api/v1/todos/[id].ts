import { router } from '~/lib/server/config';

router.get((r_, res) => {
	res.status(200).json({ success: true, message: 'Got it' });
});

export default router;
