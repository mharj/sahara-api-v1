import {IMinecraftChannel} from './minecraft';
import {IRaidChannel} from './raid';
import {IServiceChannel} from './service';
import {ISessionChannel} from './session';
import {ISonosChannel} from './sonos';
import {IWeatherChannel} from './weather';

export interface IMongoDocument {
	readonly _id: string;
}

export enum ChannelEnum {
	SONOS = 'sonos',
	RAID = 'raid',
	WEATHER = 'weather',
	MINECRAFT = 'minecraft',
	SERVICE = 'service',
	SESSION = 'session',
}

export interface IChannel<C = string> {
	readonly _channel: C;
}
export interface IChannelKey {
	readonly _channel: ChannelEnum;
}

export type LeanMongoDocument<T> = T & {
	readonly _id: any;
	readonly __v?: number;
};

export type ChannelTypes = IWeatherChannel | ISonosChannel | IRaidChannel | IMinecraftChannel | IServiceChannel | ISessionChannel;
