export const RoleNames = [
	'ROLE_LIST',
	'ROLE_ADD',
	'ROLE_MODIFY',
	'ROLE_DELETE',
	'USER_LIST',
	'USER_READ',
	'USER_ADD',
	'USER_MODIFY',
	'USER_DELETE',
	'USER_SWITCH',
	'REGISTRY_READ',
	'REGISTRY_WRITE',
	'MEDIABASE_READ',
	'MEDIABASE_WRITE',
	'MINECRAFT_VIEW',
	'MINECRAFT_EDIT',
	'RAID_LIST',
	'RAID_RUN',
	'SONOS_CONTROL',
	'TRANSLATION_LIST',
	'TRANSLATION_MODIFY',
] as const;

export type RoleName = typeof RoleNames[number];

export function isRoleName(value: any): value is RoleName {
	return typeof value === 'string' && RoleNames.findIndex((name) => name === value) !== -1;
}

export interface IApiRole {
	_id: string;
	name: string;
	description?: string;
	internal: boolean;
}
