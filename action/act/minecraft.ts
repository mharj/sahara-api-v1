import {ChannelEnum} from '../../interface';
import {MinecraftAct} from '../../interface/act/minecraft';
import {Action} from '../../interface/minecraft';

// Act Actions
export const subMinecraftAct = (): MinecraftAct => {
	return {_channel: ChannelEnum.MINECRAFT, _act: Action.SUB};
};
export const unSubMinecraftAct = (): MinecraftAct => {
	return {_channel: ChannelEnum.MINECRAFT, _act: Action.UNSUB};
};
