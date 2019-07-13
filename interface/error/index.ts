import {ChannelTypes} from '..';
import {ErrorKeys as MinecraftError} from '../minecraft';
import {Error as RaidError} from '../raid';
import {Error as ServiceError} from '../service';
import {ErrorKeys as SessionError} from '../session';
import {Error as SonosError} from '../sonos';
import {Error as WeatherError} from '../weather';

export interface IAct<T = string> {
	readonly _error: T;
}
export type ChannelError<C extends ChannelTypes, T> = IAct<T> & C;

export type ErrorTypes = WeatherError | RaidError | SonosError | MinecraftError | ServiceError | SessionError;
