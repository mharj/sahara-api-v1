import {ChannelEnum} from '../../interface';
import {AckKeys, Action} from '../../interface/minecraft';

// Ack Actions
export const ack = (action: Action): AckKeys => {
	return {_channel: ChannelEnum.MINECRAFT, _ack: action};
};
