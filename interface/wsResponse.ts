import {IMinecraftResponse} from './wsMinecraft';
import {WsService, wsServiceList} from './wsService';
import {IWeatherResponse} from './wsWeather';

export interface IWebsocketResponseBase<T extends WsService> {
	srv: T;
	type: any;
}

type IWebsocketResponse = IMinecraftResponse | IWeatherResponse;

export const isWebsocketResponse = (data: any): data is IWebsocketResponse => {
	return 'srv' in data && 'type' in data && wsServiceList.findIndex((srv) => srv === data.srv) !== -1;
};
