import {ChannelEnum} from '../../interface';
import {Act, Action} from '../../interface/minecraft';

// Act Actions
export const act = (action: Action): Act => {
	return {_channel: ChannelEnum.MINECRAFT, _act: action};
};