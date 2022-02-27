import {ChannelTypes} from '..';
import {AckKeys as MinecraftAck} from '../minecraft';
import {Ack as RaidAck} from '../raid';
import {Ack as ServiceAck} from '../service';
import {AckKeys as SessionAck} from '../session';
import {Ack as SonosAck} from '../sonos';
import {Ack as WeatherAck} from '../weather';

export interface IAck<T = string> {
	readonly _ack: T;
}

export type ChannelAck<C extends ChannelTypes, T> = IAck<T> & C;

export type AckTypes = WeatherAck | SonosAck | MinecraftAck | RaidAck | ServiceAck | SessionAck;
