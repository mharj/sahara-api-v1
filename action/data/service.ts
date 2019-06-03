import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/service';

// Act Actions
export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.SERVICE, _data: action};
};
