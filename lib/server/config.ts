import type { NextApiResponse } from 'next';
import nc from 'next-connect';
import Pino from 'pino-http';
import helmet from 'helmet';
import cors from 'cors';
import dbConnect from './dbConnect';
import { ExtendedNextApiRequest } from '~/types/server';
import { applyAuthMiddleware } from './middleware/auth';
import { applySettingsMiddleware } from './middleware/settings';
import { applyUserAgentMiddleware } from './middleware/ua';

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

const router = (() => {
	// Database initialization
	dbConnect();

	// Router initialization
	const handler = nc<ExtendedNextApiRequest, NextApiResponse>({
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

	return handler;
})();

router.use(helmet());
router.use(cors());
router.use(applyAuthMiddleware);
router.use(applySettingsMiddleware);
router.use(applyUserAgentMiddleware);

if (isDevelopment) {
	router.use(logger);
}

export { router };
