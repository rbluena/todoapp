import { SSRMiddleware } from '~/types/server';

export const applyAuthMiddleware: SSRMiddleware = (req, _res, next) => {
	const basicAuth = req.headers.authorization;
	console.log(basicAuth);
	next();
};
