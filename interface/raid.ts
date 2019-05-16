import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	CHECK = 'check',
	DATA = 'data',
}

export interface IRaidChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.RAID;
}

export type Ack = ChannelAck<IRaidChannel, Action>;
export type Act = ChannelAct<IRaidChannel, Action>;
export type Error = ChannelError<IRaidChannel, Action>;
export type Data = ChannelData<IRaidChannel, Action>;
