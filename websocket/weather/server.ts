export interface WeatherData {
	id: number;
	icon: string;
	name: string;
	temp: number;
	wid: number;
	dt: number;
}

interface Weather {
	stype: 'weather';
	data: WeatherData;
}

export function isWeatherServerPacket(data: unknown): data is Weather {
	return typeof data === 'object' && data !== null && 'stype' in data;
}

export type WeatherServerPacket = Weather;
