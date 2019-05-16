import {ChannelTypes} from '..';
import {Ack as MinecraftAck} from '../minecraft';
import {Ack as RaidAck} from '../raid';
import {Ack as SonosAck} from '../sonos';
import {Ack as WeatherAck} from '../weather';

export interface IAck<T = string> {
	readonly _ack: T;
}

export type ChannelAck<C extends ChannelTypes, T> = IAck<T> & C;

export type AckTypes = WeatherAck | SonosAck | MinecraftAck | RaidAck;
