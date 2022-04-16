interface Weather {
	stype: 'weather';
	data: {
		id: number;
		icon: string;
		name: string;
		temp: number;
		wid: number;
	};
}

export type WeatherServerPacket = Weather;