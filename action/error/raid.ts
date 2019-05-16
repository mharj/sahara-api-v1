import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/raid';

// Act Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.RAID, _error: action};
};
