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

interface IProps {
	issuerUrl: string;
	fetchClient?: typeof fetch;
}

export class AuthClient {
	private fetchClient: typeof fetch;
	private issuerUrl: string;
	constructor({issuerUrl, fetchClient}: IProps) {
		this.fetchClient = fetchClient || fetch;
		this.issuerUrl = issuerUrl;
	}
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
		return res.json();
	}
	public async authPassword(
		{username, password, clientId, nonce, scope}: {clientId: string; username: string; scope: string; password: string; nonce?: string},
		appToken: string,
	) {
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
			throw new Error('http error:' + res.status);
		}
		return res.json();
	}
	private async getConfig() {
		const res = await this.fetchClient(`${this.issuerUrl}/.well-known/openid-configuration`);
		return res.json();
	}
}
