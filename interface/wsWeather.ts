import {IWebsocketRequestBase} from './wsRequest';
import {IWebsocketResponseBase} from './wsResponse';
import {OpenWeatherMapData} from './OpenWeatherMap';

export interface IWeatherRequest extends IWebsocketRequestBase<'weather'> {
	type: 'sub' | 'unsub';
	ids: number[];
}

export interface IWeatherResponse extends IWebsocketResponseBase<'weather'> {
	type: 'data';
	data: OpenWeatherMapData;
}
