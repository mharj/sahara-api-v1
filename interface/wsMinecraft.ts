// tslint:disable: array-type
import {IWebsocketRequestBase} from './wsRequest';
import {IWebsocketResponseBase} from './wsResponse';

// CLONED: import {IMinecraftData} from 'minecraft-server-ping/dist/interfaces';

export interface IHandshakeData {
	description: {
		text: string;
		// tslint:disable-next-line: array-type
		extra?: {
			color?: string;
			text: string;
			bold?: boolean;
			strikethrough?: boolean;
		}[];
	};
	players: {
		online: number;
		max: number;
		sample?: {
			name: string;
			id: string;
		}[];
	};
	version: {
		name: string;
		protocol: number;
	};
	ping: number;
	modinfo?: {
		type: string;
		modList: string[];
	};
	favicon?: string;
}
export interface IMinecraftData {
	uuid: string;
	data: IHandshakeData;
}

export interface IMinecreaftRequest extends IWebsocketRequestBase<'minecraft'> {
	type: 'sub' | 'unsub';
}

export interface IMinecraftResponse extends IWebsocketResponseBase<'minecraft'> {
	type: 'data';
	data: IMinecraftData;
}
