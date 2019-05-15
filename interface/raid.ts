import { ChannelEnum, IChannel } from '.';

export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	CHECK = 'check',
}

export interface IRaidChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.RAID;
}