import {ChannelEnum} from '../../interface';
import {WeatherAct} from '../../interface/act/weather';
import {Action} from '../../interface/weather';

// Act Actions
export const subWeatherAct = (): WeatherAct => {
	return {_channel: ChannelEnum.WEATHER, _act: Action.SUB};
};
export const unSubWeatherAct = (): WeatherAct => {
	return {_channel: ChannelEnum.WEATHER, _act: Action.UNSUB};
};
