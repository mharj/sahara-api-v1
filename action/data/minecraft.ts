import {IMinecraft} from '../../../schemas/minecraft';
import {ChannelEnum} from '../../interface';
import {Action, Data} from '../../interface/minecraft';

// Error Actions
/* export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.MINECRAFT, _data: action};
}; */

export const MinecraftListAction = (payload: IMinecraft[]): Data => {
	return {_channel: ChannelEnum.MINECRAFT, _data: Action.DATA, payload};
};
