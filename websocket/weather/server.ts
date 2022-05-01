export interface WeatherData {
	id: number;
	icon: string;
	name: string;
	temp: number;
	wid: number;
	dt: number;
}

export function isWeatherData(data: unknown): data is WeatherData {
	return typeof data === 'object' && data !== null && 'id' in data && 'icon' in data && 'name' in data && 'temp' in data && 'wid' in data && 'dt' in data;
}

interface Weather {
	stype: 'weather';
	data: WeatherData;
}

export function isWeatherServerPacket(data: unknown): data is Weather {
	return typeof data === 'object' && data !== null && 'stype' in data;
}

export type WeatherServerPacket = Weather;
