import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/minecraft';

// Error Actions
export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.MINECRAFT, _data: action};
};