import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

// Actions
export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	DATA = 'data',
}

export interface IWeatherChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.WEATHER;
}

export type Ack = ChannelAck<IWeatherChannel, Action>;
export type Act = ChannelAct<IWeatherChannel, Action>;
export type Error = ChannelError<IWeatherChannel, Action>;
export type Data = ChannelData<IWeatherChannel, Action>;
