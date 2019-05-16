import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/weather';

// Error Actions
export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.WEATHER, _data: action};
};