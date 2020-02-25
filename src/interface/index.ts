export interface IKV {
	[i: string]: any;
}

export interface IMessage {
	success: boolean;
	message: string;
}

export interface IPagenation {
	page?: number;
	size?: number;
	total?: number;
}

export interface IResource {
	name: string;
	url: string;
}
