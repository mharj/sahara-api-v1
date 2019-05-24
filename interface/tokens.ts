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