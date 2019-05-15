import {ChannelTypes} from '..';
import {MinecraftAck} from './minecraft';
import {RaidAck} from './raid';
import {SonosAck} from './sonos';
import {WeatherAck} from './weather';

export interface IAck<T = string> {
	readonly _ack: T;
}

export type ChannelAck<C extends ChannelTypes, T> = IAck<T> & C;

export type AckTypes = WeatherAck | SonosAck | MinecraftAck | RaidAck;
