import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/session';

// Act Actions

export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.SESSION, _data: action};
};
