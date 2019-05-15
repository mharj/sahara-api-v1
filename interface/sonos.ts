import {ChannelEnum, IChannel} from '.';

export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	TOGGLE = 'toggle',
}

export interface ISonosChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SONOS;
}
