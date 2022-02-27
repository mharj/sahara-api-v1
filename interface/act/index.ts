import {ChannelTypes} from '..';
import {ActKeys as MinecraftAct} from '../minecraft';
import {Act as RaidAct} from '../raid';
import {Act as ServiceAct} from '../service';
import {ActKeys as SessionAct} from '../session';
import {Act as SonosAct} from '../sonos';
import {Act as WeatherAct} from '../weather';

export interface IAct<T = string> {
	readonly _act: T;
}
export type ChannelAct<C extends ChannelTypes, T> = IAct<T> & C;

export type ActTypes = WeatherAct | RaidAct | SonosAct | MinecraftAct | ServiceAct | SessionAct;
