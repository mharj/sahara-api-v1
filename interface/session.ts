import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

export enum Action {
	LIST = 'LIST',
	DELETE = 'DELETE',
}

export interface ISessionChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SESSION;
}

/* type DataListAction = ChannelData<ISessionChannel, Action.LIST> & {
	payload: ISessionData[];
} */

export interface ISessionData {
	_id: string;
	issuer: string;
	ip: string;
	name: string;
	os: string | undefined;
	device: string | undefined;
	seen: Date;
	scope: string;
	picture: string | undefined;
}

export type Ack = ChannelAck<ISessionChannel, Action>;
export type Act = ChannelAct<ISessionChannel, Action>;
export type Error = ChannelError<ISessionChannel, Action>;
export type Data = ChannelData<ISessionChannel, Action>;