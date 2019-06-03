import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/service';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.SERVICE, _act: action};
};
