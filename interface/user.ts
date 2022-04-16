import {RoleName} from './role';

export interface IUserMe {
	email: string;
	name: string;
	roles: string[];
	picture: string | undefined;
}

export interface IApiUser {
	_id: string;
	email: string;
	username: string;
}

export interface IApiUserDetail {
	_id: string;
	email: string;
	username: string;
	disabled: boolean;
	roles: RoleName[];
}
