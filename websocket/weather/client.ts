interface Open {
	ctype: 'open';
	ids: number[];
}

interface Close {
	ctype: 'close';
}

export function isClientWeatherPacket(data: unknown): data is WeatherClientPacket {
	return typeof data === 'object' && data !== null && 'ctype' in data;
}

export type WeatherClientPacket = Open | Close;
