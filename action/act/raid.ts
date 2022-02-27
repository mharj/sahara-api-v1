import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/raid';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.RAID, _act: action};
};
