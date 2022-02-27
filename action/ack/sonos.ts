import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/sonos';

// Ack Actions
export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.SONOS, _ack: action};
};
