import {ChannelEnum, IChannel} from '.';
import {ChannelAck} from './ack';
import {ChannelAct} from './act';
import {ChannelData} from './data';
import {ChannelError} from './error';
import {Doc} from './mongo';

export interface IMinecraft {
	disabled: boolean;
	readonly uuid: string;
	name: string;
	port: number;
	visible: boolean;
	index: number;
}

export type Minecraft = Doc<IMinecraft>;

export interface ICreateMinecraft {
	disabled?: boolean;
	name: string;
	port: number;
	visible?: boolean;
	index: number;
}

// Actions
export enum Action {
	SUB = 'sub',
	UNSUB = 'unsub',
	DATA = 'data',
	ADD = 'add',
	DELETE = 'del',
	LIST = 'list',
}

export interface IMinecraftChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.MINECRAFT;
}

export type AckKeys = ChannelAck<IMinecraftChannel, Action>;
export type ActKeys = ChannelAct<IMinecraftChannel, Action>;
export type ErrorKeys = ChannelError<IMinecraftChannel, Action>;
export type DataKeys = ChannelData<IMinecraftChannel, Action>;

/**
 * TODO: this should be public server output!
 */
type DataListAction = ChannelData<IMinecraftChannel, Action.DATA> & {
	payload: IMinecraft[];
};

type ListAction = ChannelData<IMinecraftChannel, Action.LIST> & {
	payload: IMinecraft[];
};

type DeleteAction = ChannelData<IMinecraftChannel, Action.DELETE> & {
	uuid: string;
};

export type DataActions = DataListAction | DeleteAction | ListAction;
