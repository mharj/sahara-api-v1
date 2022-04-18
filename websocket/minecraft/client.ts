interface Open {
	ctype: 'open';
}

interface Close {
	ctype: 'close';
}

export function isClientMinecraftPacket(data: unknown): data is MinecraftClientPacket {
	return typeof data === 'object' && data !== null && 'ctype' in data;
}

export type MinecraftClientPacket = Open | Close;