import {IUserSessionModel} from '../../../schemas/userSession';
import {ChannelEnum} from '../../interface';
import {Action, DataActions, DataKeys, ISessionData} from '../../interface/session';

// Act Actions

export const data = (action: Action): DataKeys => {
	return {_channel: ChannelEnum.SESSION, _data: action};
};

// FIX: THIS to use only ID
export const sessionDeleteAction = ({_id}: IUserSessionModel): DataActions => {
	return {_channel: ChannelEnum.SESSION, _data: Action.DELETE, _id};
};

export const sessionListAction = (payload: ISessionData[]): DataActions => {
	return {_channel: ChannelEnum.SESSION, _data: Action.LIST, payload};
};
