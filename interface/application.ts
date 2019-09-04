export interface IApplication {
	name: string;
	clientId: string;
	homepage: string;
	logo?: string;
	allow_id_token_exchange?: true;
	redirect_uris: string[];
}
