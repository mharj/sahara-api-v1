import {ChannelEnum} from '../../interface';
import {Action, ActKeys} from '../../interface/session';

// Act Actions
export const act = (action: Action): ActKeys => {
	return {_channel: ChannelEnum.SESSION, _act: action};
};
