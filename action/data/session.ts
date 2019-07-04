import {ChannelEnum} from '../../interface';
import {Action, Data, ISessionData} from '../../interface/session';

// Act Actions

/* export const data = (action: Action): Data => {
	return {_channel: ChannelEnum.SESSION, _data: action};
}; */

export const sessionDeleteAction = ({_id}: ISessionData): Data => {
	return {_channel: ChannelEnum.SESSION, _data: Action.DELETE, _id};
};

export const sessionListAction = (payload: ISessionData[]): Data => {
	return {_channel: ChannelEnum.SESSION, _data: Action.LIST, payload};
};
