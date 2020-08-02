interface IApiError {
	error: string;
	error_description?: string;
}

export const isApiError = (data: any): data is IApiError => {
	return data && 'error' in data;
};
