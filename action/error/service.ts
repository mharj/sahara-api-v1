import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/service';

// Act Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.SERVICE, _error: action};
};
