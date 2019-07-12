import {ChannelEnum} from '../../interface';
import {AckKeys, Action} from '../../interface/session';


export const ack = (action: Action): AckKeys => {
	return {_channel: ChannelEnum.SESSION, _ack: action};
};
