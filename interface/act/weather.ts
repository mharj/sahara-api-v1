import {ChannelAct} from '../act';
import {Action, IWeatherChannel} from '../weather';

export type WeatherAct = ChannelAct<IWeatherChannel, Action>;
