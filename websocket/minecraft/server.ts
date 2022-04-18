import {IMinecraftData} from '../../interface/wsMinecraft';

interface Discovery {
	stype: 'discovery';
	data: string[];
}

interface Data {
	stype: 'data';
	data: IMinecraftData;
}

export function isMinecraftServerPacket(data: unknown): data is MinecraftServerPacket {
	return typeof data === 'object' && data !== null && 'stype' in data;
}

export type MinecraftServerPacket = Discovery | Data;
