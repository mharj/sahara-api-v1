import {ChannelTypes} from '..';
import {Error as MinecraftError} from '../minecraft';
import {Error as RaidError} from '../raid';
import {Error as SonosError} from '../sonos';
import {Error as WeatherError} from '../weather';

export interface IAct<T = string> {
	readonly _error: T;
}
export type ChannelError<C extends ChannelTypes, T> = IAct<T> & C;

export type ErrorTypes = WeatherError | RaidError | SonosError | MinecraftError;
