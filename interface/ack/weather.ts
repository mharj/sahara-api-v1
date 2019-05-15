import { ChannelAck } from '../ack';
import { Action, IWeatherChannel } from '../weather';

export type WeatherAck = ChannelAck<IWeatherChannel, Action>;