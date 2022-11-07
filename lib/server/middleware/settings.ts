import { ConfigsType, Locale, SSRMiddleware } from '~/types/server';

/**
 *
 */
const DEFAULT_CONFIGS: ConfigsType = {
	lastVisit: null,
	locale: Locale.EN,
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const applySettingsMiddleware: SSRMiddleware = (req, _res, next) => {
	req.props = {
		...req.props,
		configs: DEFAULT_CONFIGS,
	};

	next();
};
