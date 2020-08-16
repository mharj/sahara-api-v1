import * as jwt from 'jsonwebtoken';
import {IOpenIDConfig} from '../interface/openIDConfig';
import {IAuthKeys, IRefreshGrant} from './auth';
import {buildNonce} from './nonce';

export interface IProps {
	issuerUrl: string;
	fetchClient?: typeof fetch;
	clientId: string;
	redirectUri: string;
}

export abstract class CommonClient {
	protected fetchClient: typeof fetch;
	protected issuerUrl: string;
	protected clientId: string;
	protected redirectUri: string;
	constructor({issuerUrl, fetchClient, clientId, redirectUri}: IProps) {
		this.fetchClient = fetchClient || fetch;
		this.issuerUrl = issuerUrl;
		this.redirectUri = redirectUri;
		this.clientId = clientId;
	}
	protected async getConfig(): Promise<IOpenIDConfig> {
		const req = new Request(`${this.issuerUrl}/.well-known/openid-configuration`);
		const res = await this.fetchClient(req);
		return res.json();
	}

	protected async getAccessToken(authKeys: IAuthKeys, appToken: string): Promise<string> {
		if (this.isValidToken(authKeys.accessToken)) {
			return authKeys.accessToken;
		}
		if (this.isValidToken(authKeys.refreshToken)) {
			return await this.getNewAccessToken(authKeys, appToken);
		}
		throw new Error(`Can't get access token`);
	}
	private isValidToken(token: string | undefined) {
		if (!token) {
			return false;
		}
		const now = Math.floor(Date.now() / 1000);
		const decode = jwt.decode(token) as {exp: number};
		if (!decode || now > decode.exp) {
			return false;
		}
		return true;
	}
	private async getNewAccessToken(authKeys: IAuthKeys, appToken: string): Promise<string> {
		if (!authKeys.refreshToken) {
			throw new Error('no refresh token');
		}
		const config = await this.getConfig();
		const nonce = buildNonce();
		const payload: IRefreshGrant = {
			client_id: authKeys.clientId,
			grant_type: 'refresh_token',
			nonce,
			refresh_token: authKeys.refreshToken,
		};
		const body = JSON.stringify(payload);
		const headers = new Headers();
		headers.set('Content-type', 'application/json');
		headers.set('Authorization', 'Bearer ' + appToken);
		headers.set('Content-length', '' + body.length);
		const res = await this.fetchClient(config.token_endpoint, {method: 'POST', body, headers});
		if (res.status !== 200) {
			console.log(await res.text());
			throw new Error('asd' + res.status);
		}
		const data = await res.json();
		if (data.access_token) {
			const decode = jwt.decode(data.access_token) as {nonce: string};
			if (decode.nonce !== nonce) {
				throw new Error('nonce error');
			}
			// tslint:disable-next-line: no-unnecessary-type-assertion
			(authKeys.accessToken as string) = data.access_token as string;
		}
		if (data.refresh_token) {
			// tslint:disable-next-line: no-unnecessary-type-assertion
			(authKeys.refreshToken as string) = data.refresh_token as string;
		}
		return data.access_token;
	}
}
