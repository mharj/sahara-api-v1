import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/weather';

// Ack Actions
export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.WEATHER, _ack: action};
};
