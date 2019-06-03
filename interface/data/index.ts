import {ChannelTypes} from '..';
import {Data as MinecraftData} from '../minecraft';
import {Data as RaidData} from '../raid';
import {Data as ServiceData} from '../service';
import {Data as SonosData} from '../sonos';
import {Data as WeatherData} from '../weather';

export interface IAct<T = string> {
	readonly _data: T;
}
export type ChannelData<C extends ChannelTypes, T> = IAct<T> & C;

export type DataTypes = MinecraftData | RaidData | SonosData | WeatherData | ServiceData;