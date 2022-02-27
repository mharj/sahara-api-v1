import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';
// Actions
export enum Action {
	REGISTER = 'reg',
	UNREGISTER = 'unreg',
}

export interface IServiceChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SERVICE;
}

export type Ack = ChannelAck<IServiceChannel, Action>;
export type Act = ChannelAct<IServiceChannel, Action>;
export type Error = ChannelError<IServiceChannel, Action>;
export type Data = ChannelData<IServiceChannel, Action>;
