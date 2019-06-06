import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/session';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.SESSION, _act: action};
};
