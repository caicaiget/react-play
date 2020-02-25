import { IKV } from 'interface';


export interface IRouter<T = any> {
	// 面包屑的父级路由所在key
	parentKey?: string;
	key: string;
	title: string;
	path: string;
	component?: T;
	exact?: boolean;
	// 显示在导航菜单
	hasNav?: boolean;
	// 显示面包屑
	hasBreadcrumb?: boolean;
}

export interface IRouterTree<T> extends IRouter<T> {
	children?: IRouterTree<T>[];
}

export interface IRouterStut<T> {
	routers: IRouter<T>[];
}

export type LayoutRouter = (JSX.Element | null)[];


export interface IRouterComponent<T> {
	readonly routers: IRouter<T>[];
	readonly routerComponents: IKV;

	routerRenderer: () => LayoutRouter;
	redirectRenderer?: () => JSX.Element;
}
