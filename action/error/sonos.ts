import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/sonos';

// Act Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.SONOS, _error: action};
};
