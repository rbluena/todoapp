import { SSRMiddleware } from '~/types/server';

export const applyAllTodosReqValidationMiddleware: SSRMiddleware = (
	req,
	_res,
	next
) => {
	next();
};
