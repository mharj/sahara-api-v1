import {ChannelEnum} from '../../interface';
import {Action, Error} from '../../interface/minecraft';

// Error Actions
export const error = (action: Action): Error => {
	return {_channel: ChannelEnum.MINECRAFT, _error: action};
};