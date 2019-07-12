import {ChannelEnum} from '../../interface';
import {ActKeys, Action} from '../../interface/minecraft';

// Act Actions
export const act = (action: Action): ActKeys => {
	return {_channel: ChannelEnum.MINECRAFT, _act: action};
};