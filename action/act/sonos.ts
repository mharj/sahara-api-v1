import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/sonos';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.SONOS, _act: action};
};
