import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/service';

// Ack Actions
export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.SERVICE, _ack: action};
};
