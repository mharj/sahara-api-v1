import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/session';

// Act Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.SESSION, _error: action};
};
