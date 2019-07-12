import {ChannelEnum} from '../../interface';
import {Action, DataKeys, IMinecraft, DataActions} from '../../interface/minecraft';

// Error Actions
export const data = (action: Action): DataKeys => {
	return {_channel: ChannelEnum.MINECRAFT, _data: action};
};

export const minecraftListAction = (payload: IMinecraft[]): DataActions => {
	return {_channel: ChannelEnum.MINECRAFT, _data: Action.LIST, payload};
};

export const MinecraftPayloadAction = (payload: IMinecraft[]): DataActions => {
	return {_channel: ChannelEnum.MINECRAFT, _data: Action.DATA, payload};
};