import {IMinecraftChannel} from './minecraft';
import {IRaidChannel} from './raid';
import {IServiceChannel} from './service';
import {ISessionChannel} from './session';
import {ISonosChannel} from './sonos';
import {IWeatherChannel} from './weather';

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

export type ChannelTypes = IWeatherChannel | ISonosChannel | IRaidChannel | IMinecraftChannel | IServiceChannel | ISessionChannel;
