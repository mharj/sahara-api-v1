import {ChannelEnum} from '../../interface';
import {Action, ErrorKeys} from '../../interface/session';

// Act Actions
export const error = (action: Action): ErrorKeys => {
	return {_channel: ChannelEnum.SESSION, _error: action};
};
