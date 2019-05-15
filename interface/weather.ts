import {ChannelEnum, IChannel} from '.';

// Actions
export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
}

export interface IWeatherChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.WEATHER;
}
