export interface IAccessTokenPayload {
	email?: string;
	name?: string;
	picture?: string;
	token_type: string;
	nonce: string;
	roles: string[];
	scope: string;
	sid: string;
}

export interface IAccessTokenResponse {
	access_token: string;
	scope: string;
	refresh_token?: string;
	token_type: string;
	expires_in: number;
}

export interface IAccessTokenExchangeResponse extends IAccessTokenResponse {
	issued_token_type: string;
}
