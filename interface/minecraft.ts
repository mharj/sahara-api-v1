import {ChannelEnum, IChannel} from '.';
import {IMinecraft} from '../../schemas/minecraft';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';

// Actions
export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	DATA = 'data',
	ADD = 'add',
	DELETE = 'del',
}

export interface IMinecraftChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.MINECRAFT;
}

export type Ack = ChannelAck<IMinecraftChannel, Action>;
export type Act = ChannelAct<IMinecraftChannel, Action>;
export type Error = ChannelError<IMinecraftChannel, Action>;
// export type Data = ChannelData<IMinecraftChannel, Action>;

type DataListAction = ChannelData<IMinecraftChannel, Action.DATA> & {
	payload: IMinecraft[];
};

export type Data = DataListAction;
