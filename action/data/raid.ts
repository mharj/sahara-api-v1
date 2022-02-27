import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/raid';

// Error Actions
export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.RAID, _data: action};
};
