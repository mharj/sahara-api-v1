import {isApiError} from '../interface/apiError';
import {IUserMe} from '../interface/user';
import {IAuthKeys} from './auth';
import {CommonClient} from './common';

export class MeClient extends CommonClient {
	public async get(auth: IAuthKeys, appToken: string): Promise<IUserMe> {
		const {userinfo_endpoint} = await this.getConfig();
		if (!userinfo_endpoint) {
			throw new Error('not userinfo endpoint');
		}
		const accessToken = await this.getAccessToken(auth, appToken);
		const headers = new Headers();
		headers.set('Authorization', 'Bearer ' + accessToken);
		const req = new Request(userinfo_endpoint, {headers});
		const res = await this.fetchClient(req);
		if (res.status !== 200) {
			const contentType = res.headers.get('Content-type') || '';
			if (contentType.startsWith('application/json')) {
				const error = await res.json();
				if (isApiError(error)) {
					throw new Error(error.error + ': ' + (error.error_description || ''));
				}
			}
			throw new Error('http error' + res.status);
		}
		return res.json();
	}
}
