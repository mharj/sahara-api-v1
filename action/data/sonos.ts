import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/sonos';

// Error Actions
export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.SONOS, _data: action};
};