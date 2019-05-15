import {ChannelEnum, IChannel} from '.';

// Actions
export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
}

export interface IMinecraftChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.MINECRAFT;
}
