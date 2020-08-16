import {IMinecreaftRequest} from './wsMinecraft';
import {WsService, wsServiceList} from './wsService';
import {IWeatherRequest} from './wsWeather';

export interface IWebsocketRequestBase<T extends WsService> {
	srv: T;
	type: any;
}

type IWebsocketRequest = IMinecreaftRequest | IWeatherRequest;

export const isWebsocketRequest = (data: any): data is IWebsocketRequest => {
	return 'srv' in data && 'type' in data && wsServiceList.findIndex((srv) => srv === data.srv) !== -1;
};
