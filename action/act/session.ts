import {ChannelEnum} from '../../interface';
import {ActKeys, Action} from '../../interface/session';

// Act Actions
export const act = (action: Action): ActKeys => {
	return {_channel: ChannelEnum.SESSION, _act: action};
};
