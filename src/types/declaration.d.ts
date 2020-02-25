declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.mp4';
declare module '*.scss';{
	const styles: any;
	export = styles;
}
declare module '*.css' {
	const styles: any;
	export = styles;
}

declare interface IClassName {
	className?: string;
}

interface match<Params extends { [K in keyof Params]?: string } = {}> {
	params: Params;
	isExact: boolean;
	path: string;
	url: string;
}

interface StaticContext {
	statusCode?: number;
}

declare interface IWithRouterProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext> {
	history?: any;
	location?: any;
	match?: match<Params>;
	staticContext?: any;
}

declare interface IValidatorProps<T = string> extends IClassName {
	value?: T;
	defaultValue?: T;
	onChange?: (value: T) => void;
	helperText?: string;
	error?: boolean;
}

// 扩展一个静态Promise onstructor属性
declare interface PromiseConstructor {
	static break: Promise;
}

declare module window {
	export const __exampleLocale: any;
	export const stripe: any;
	export const registerElements: any;
}

declare module 'file-saver';
