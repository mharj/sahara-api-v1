import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/raid';

// Ack Actions
export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.RAID, _ack: action};
};