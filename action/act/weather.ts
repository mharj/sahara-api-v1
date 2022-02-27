import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/weather';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.WEATHER, _act: action};
};
