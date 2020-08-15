import {isValidTokenResponse} from '../interface/tokens';
import {CommonClient} from './common';

interface IClientCredentials {
	grant_type: 'client_credentials';
	nonce?: string;
	scope: string;
	redirect_uri: string;
	client_id: string;
	client_secret?: string;
}

interface IPasswordGrant {
	grant_type: 'password';
	nonce?: string;
	scope: string;
	username: string;
	password: string;
	client_id: string;
}

export interface IRefreshGrant {
	client_id: string;
	refresh_token: string;
	nonce: string;
}

export interface IAuthKeys {
	readonly accessToken: string;
	readonly refreshToken: string | undefined;
	readonly clientId: string;
}

export class AuthClient extends CommonClient {
	public async authClientCredentials({
		clientId,
		clientSecret,
		nonce,
		scope,
		redirectUri,
	}: {
		clientId: string;
		nonce?: string;
		clientSecret?: string;
		scope: string;
		redirectUri: string;
	}) {
		const payload: IClientCredentials = {
			client_id: clientId,
			grant_type: 'client_credentials',
			redirect_uri: redirectUri,
			scope,
		};
		if (clientSecret) {
			payload.client_secret = clientSecret;
		}
		if (nonce) {
			payload.nonce = nonce;
		}
		const config = await this.getConfig();
		const body = JSON.stringify(payload);
		const headers = new Headers();
		headers.set('Content-type', 'application/json');
		headers.set('Content-length', '' + body.length);
		const res = await this.fetchClient(config.token_endpoint, {method: 'POST', body, headers});
		if (res.status !== 200) {
			throw new Error('http error:' + res.status);
		}
		const data = await res.json();
		if (!isValidTokenResponse(data)) {
			throw new Error('server not respond valid token response');
		}
		return data;
	}
	public async authPassword(
		{username, password, clientId, nonce, scope}: {clientId: string; username: string; scope: string; password: string; nonce?: string},
		appToken: string,
	): Promise<IAuthKeys> {
		const payload: IPasswordGrant = {
			client_id: clientId,
			grant_type: 'password',
			password,
			scope,
			username,
		};
		if (nonce) {
			payload.nonce = nonce;
		}
		const config = await this.getConfig();
		const body = JSON.stringify(payload);
		const headers = new Headers();
		headers.set('Authorization', 'Bearer ' + appToken);
		headers.set('Content-type', 'application/json');
		headers.set('Content-length', '' + body.length);
		const res = await this.fetchClient(config.token_endpoint, {method: 'POST', body, headers});
		if (res.status !== 200) {
			const message = await this.getErrorMessage(res);
			throw new Error(message);
		}
		const data = await res.json();
		if (!isValidTokenResponse(data)) {
			throw new Error('server not respond valid token response');
		}
		return {
			accessToken: data.access_token,
			clientId,
			refreshToken: data.refresh_token,
		};
	}
}
