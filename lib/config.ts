import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import Pino from 'pino-http';
import helmet from 'helmet';
import cors from 'cors';

const isDevelopment = process.env.NODE_ENV === 'development';

const logger = Pino({
	transport: {
		target: 'pino-pretty',
		options: {
			translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
			ignore: 'pid,hostname',
			hideObject: true,
			colorize: true,
		},
	},
});

const router = nc<NextApiRequest, NextApiResponse>({
	onError(error, _, res) {
		res.status(501).json({ error: 'Server error', message: error.message });
	},
	onNoMatch(_, res) {
		res.status(404).json({
			error: 'Not Found!',
			message: 'The rosource you are trying to reach is not available!',
		});
	},
});

if (isDevelopment) {
	router.use(logger);
}

router.use(helmet());
router.use(cors());

export { router };
