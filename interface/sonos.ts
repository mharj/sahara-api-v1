import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	TOGGLE = 'toggle',
	STATE = 'state',
	TRACK = 'track',
}

export interface ISonosChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SONOS;
}

export type Ack = ChannelAck<ISonosChannel, Action>;
export type Act = ChannelAct<ISonosChannel, Action>;
export type Error = ChannelError<ISonosChannel, Action>;
export type Data = ChannelData<ISonosChannel, Action>;
