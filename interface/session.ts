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
type DataSubAction = ChannelData<ISessionChannel, Action.SUB> & IMongoDocument;
type DataUnSubAction = ChannelData<ISessionChannel, Action.UNSUB> & IMongoDocument;
export interface ISessionData extends IMongoDocument {
	issuer: string;
	ip: string;
	name: string;
	os: string | undefined;
	device: string | undefined;
	seen: Date;
	scope: string;
	picture: string | undefined;
}

export type AckKeys = ChannelAck<ISessionChannel, Action>;
export type ActKeys = ChannelAct<ISessionChannel, Action>;
export type ErrorKeys = ChannelError<ISessionChannel, Action>;
export type DataKeys = ChannelData<ISessionChannel, Action>  | DataDeleteAction;
export type DataActions = DataListAction | DataDeleteAction | DataSubAction | DataUnSubAction;
