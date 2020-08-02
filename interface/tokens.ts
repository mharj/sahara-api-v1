export interface IAccessTokenPayload {
	email?: string;
	name?: string;
	picture?: string;
	token_type: string;
	nonce?: string;
	roles: string[];
	scope: string;
	sid?: string;
}

export interface IAccessTokenResponse {
	access_token: string;
	refresh_token?: string;
	token_type: 'Bearer';
	expires_in: number;
}

export const isValidTokenResponse = (data: any): data is IAccessTokenResponse => {
	return data && 'access_token' in data && 'token_type' in data && 'expires_in' in data;
};

export interface IAccessTokenExchangeResponse extends IAccessTokenResponse {
	issued_token_type: string;
}

export interface IIdTokenPayload {
	email?: string;
	name?: string;
	picture?: string;
	nonce: string;
}

export interface IIdTokenResponse {
	id_token: string;
	scope: string;
	refresh_token?: string;
	token_type: string;
	expires_in: number;
}
export interface IIdTokenExchangeResponse extends IIdTokenResponse {
	issued_token_type: string;
}
