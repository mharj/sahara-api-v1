import {ChannelEnum} from '../../interface';
import {Action, ErrorKeys} from '../../interface/minecraft';

// Error Actions
export const error = (action: Action): ErrorKeys => {
	return {_channel: ChannelEnum.MINECRAFT, _error: action};
};
