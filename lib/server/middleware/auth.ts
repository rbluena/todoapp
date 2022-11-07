import { SSRMiddleware } from '../types';

export const applyAuthMiddleware: SSRMiddleware = (req, _res, next) => {
	const basicAuth = req.headers.authorization;
	console.log(basicAuth);
	next();
};
