import {ChannelEnum} from '../../interface';
import {MinecraftAck} from '../../interface/ack/minecraft';
import {Action} from '../../interface/minecraft';

// Ack Actions
export const subMinecraftAck = (): MinecraftAck => {
	return {_channel: ChannelEnum.MINECRAFT, _ack: Action.SUB};
};

export const unSubMinecraftAck = (): MinecraftAck => {
	return {_channel: ChannelEnum.MINECRAFT, _ack: Action.UNSUB};
};

