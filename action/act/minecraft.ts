import {ChannelEnum} from '../../interface';
import {Action, ActKeys} from '../../interface/minecraft';

// Act Actions
export const act = (action: Action): ActKeys => {
	return {_channel: ChannelEnum.MINECRAFT, _act: action};
};
