export interface IOpenIDConfig {
	issuer: string;
	authorization_endpoint: string;
	token_endpoint: string;
	userinfo_endpoint?: string;
	jwks_uri: string;
	registration_endpoint?: string;
	scopes_supported?: string;
	response_types_supported: string;
	response_modes_supported?: string;
	end_session_endpoint?: string;
	check_session_iframe?: string;
	logout: string; // TODO remove => end_session_endpoint
}
