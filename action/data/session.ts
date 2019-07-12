import {ChannelEnum} from '../../interface';
import {Action, DataKeys, ISessionData, DataActions} from '../../interface/session';

// Act Actions

export const data = (action: Action): DataKeys => {
	return {_channel: ChannelEnum.SESSION, _data: action};
};

export const sessionDeleteAction = ({_id}: ISessionData): DataActions => {
	return {_channel: ChannelEnum.SESSION, _data: Action.DELETE, _id};
};

export const sessionListAction = (payload: ISessionData[]): DataActions => {
	return {_channel: ChannelEnum.SESSION, _data: Action.LIST, payload};
};
