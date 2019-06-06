import {ChannelEnum} from '../../interface';
import {Ack, Action} from '../../interface/session';


export const ack = (action: Action): Ack => {
	return {_channel: ChannelEnum.SESSION, _ack: action};
};
