import {WsService} from './wsService';

export interface IWebsocketResponseBase<T extends WsService> {
	srv: T;
	type: any;
}
