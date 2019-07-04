import {ChannelEnum, IChannel, IMongoDocument} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

export enum Action {
	SUB = 'SUB',
	UNSUB = 'UNSUB',
	LIST = 'LIST',
	DELETE = 'DELETE',
}

export interface ISessionChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SESSION;
}

type DataListAction = ChannelData<ISessionChannel, Action.LIST> & {
	payload: ISessionData[];
};

type DataDeleteAction = ChannelData<ISessionChannel, Action.DELETE> & IMongoDocument;

export interface ISessionData extends IMongoDocument {
	issuer: string;
	ip: string;
	name: string;
	seen: Date;
	scope: string;
	picture: string | undefined;
}

export type Ack = ChannelAck<ISessionChannel, Action>;
export type Act = ChannelAct<ISessionChannel, Action>;
export type Error = ChannelError<ISessionChannel, Action>;
export type Data = DataListAction | DataDeleteAction;
