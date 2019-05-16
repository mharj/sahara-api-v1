import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/weather';

// Act Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.WEATHER, _error: action};
};