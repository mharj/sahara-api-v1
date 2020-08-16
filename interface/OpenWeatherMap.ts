// tslint:disable: interface-name
export interface OpenWeatherMapData {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	rain?: Rain;
	snow?: Snow;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface Sys {
	type: number;
	id: number;
	message: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface Clouds {
	all: number;
}

interface Rain {
	'1h'?: number;
	'3h'?: number;
}

interface Snow {
	'1h'?: number;
	'3h'?: number;
}

interface Wind {
	speed: number;
	deg: number;
}

interface Main {
	temp: number;
	pressure: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Coord {
	lon: number;
	lat: number;
}
