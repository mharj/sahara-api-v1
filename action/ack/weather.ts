import {ChannelEnum} from '../../interface';
import {WeatherAck} from '../../interface/ack/weather';
import {Action} from '../../interface/weather';

// Ack Actions
export const subWeatherAck = (): WeatherAck => {
	return {_channel: ChannelEnum.WEATHER, _ack: Action.SUB};
};

export const unSubWeatherAck = (): WeatherAck => {
	return {_channel: ChannelEnum.WEATHER, _ack: Action.UNSUB};
};
