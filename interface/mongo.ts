/**
 * Mongo ID type
 */
interface IMongoDocument {
	_id: string;
}

/**
 * simple Mongo ID type wrapper
 */
export type Doc<T = Record<string, any>> = IMongoDocument & T;

export const isDoc = <T = any>(doc: any): doc is Doc<T> => {
	return doc && '_id' in doc;
};
