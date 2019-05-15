import {ChannelTypes} from '..';
import {MinecraftAct} from './minecraft';
import {RaidAct} from './raid';
import {SonosAct} from './sonos';
import {WeatherAct} from './weather';

export interface IAct<T = string> {
	readonly _act: T;
}
export type ChannelAct<C extends ChannelTypes, T> = IAct<T> & C;

export type ActTypes = WeatherAct | RaidAct | SonosAct | MinecraftAct;
