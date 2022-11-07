/**
 * refs:
 * https://codesandbox.io/s/fbo53
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { Middleware } from 'next-connect';

export enum Locale {
	EN = 'en',
	SW = 'sw',
	DE = 'de-DE',
}

export type ConfigsType = {
	locale: Locale;
	lastVisit: string | null;
};

export type UserAgentType = {
	isLoggedIn: string;
	isMobile: boolean;
	isTablet: boolean;
	isBrowser: boolean;
	isWechat: boolean;
	isMac: boolean;
	isIOSDevice: boolean;
};

export type ServerPropsType = {
	ua?: UserAgentType;
	configs: ConfigsType;
	baseUrl: string;
};

export type ExtendedNextApiRequest = NextApiRequest & {
	props: ServerPropsType;
};

export type SSRMiddleware = Middleware<ExtendedNextApiRequest, NextApiResponse>;
