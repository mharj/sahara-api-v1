import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/minecraft';

// Ack Actions
export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.MINECRAFT, _ack: action};
}