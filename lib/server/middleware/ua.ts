import UAParser from 'ua-parser-js';
import { SSRMiddleware, UserAgentType } from '~/types/server';

export const applyUserAgentMiddleware: SSRMiddleware = (req, _res, next) => {
	const ua = new UAParser(req.headers['user-agent']).getResult();

	req.props = {
		...req.props,
		ua: {
			isMobile: ua.device.type === 'mobile',
			isTablet: ua.device.type === 'tablet',
			isBrowser: !ua.device.type,
			isWechat: ua.browser.name?.toLocaleLowerCase() === 'wechat',
			isMac: !!/Mac|iOS/.test(ua.os.name ?? ''),
			isIOSDevice: !!/iOS/.test(ua.os.name ?? ''),
		} as UserAgentType,
	};

	next();
};
