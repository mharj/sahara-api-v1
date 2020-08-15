import * as jwt from 'jsonwebtoken';
import {isApiError} from '../interface/apiError';
import {IOpenIDConfig} from '../interface/openIDConfig';
import {IAuthKeys, IRefreshGrant} from './auth';

export interface IProps {
	issuerUrl: string;
	fetchClient?: typeof fetch;
}

export abstract class CommonClient {
	protected fetchClient: typeof fetch;
	protected issuerUrl: string;
	constructor({issuerUrl, fetchClient}: IProps) {
		this.fetchClient = fetchClient || fetch;
		this.issuerUrl = issuerUrl;
	}
	protected async getConfig(): Promise<IOpenIDConfig> {
		const req = new Request(`${this.issuerUrl}/.well-known/openid-configuration`);
		const res = await this.fetchClient(req);
		return res.json();
	}

	protected async getAccessToken(authKeys: IAuthKeys): Promise<string> {
		if (this.isValidToken(authKeys.accessToken)) {
			return authKeys.accessToken;
		}
		if (this.isValidToken(authKeys.refreshToken)) {
			return await this.getNewAccessToken(authKeys);
		}
		throw new Error(`Can't get access token`);
	}
	protected async getErrorMessage(res: Response) {
		let errorMessage = 'http error: ' + res.status;
		const contentType = res.headers.get('Content-type') || '';
		if (contentType.startsWith('application/json')) {
			const body = await res.json();
			if (isApiError(body)) {
				errorMessage = body.error;
				if (body.error_description) {
					errorMessage += ': ' + body.error_description;
				}
			}
		}
		return errorMessage;
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
	private async getNewAccessToken(authKeys: IAuthKeys): Promise<string> {
		if (!authKeys.refreshToken) {
			throw new Error('no refresh token');
		}
		const config = await this.getConfig();
		const payload: IRefreshGrant = {
			client_id: authKeys.clientId,
			nonce: '123',
			refresh_token: authKeys.refreshToken,
		};
		const body = JSON.stringify(payload);
		const headers = new Headers();
		headers.set('Content-type', 'application/json');
		headers.set('Content-length', '' + body.length);
		const res = await this.fetchClient(config.token_endpoint, {method: 'POST', body, headers});
		if (res.status !== 200) {
			const message = await this.getErrorMessage(res);
			throw new Error(message);
		}
		const data = await res.json();
		if (data.access_token) {
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
