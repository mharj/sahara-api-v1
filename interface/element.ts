import {Doc} from './mongo';

export const desktopElementTypes = ['weather', 'minecraft'] as const;
export type DesktopElementType = typeof desktopElementTypes[number];

export interface IDesktopElement {
	type: DesktopElementType;
	props: Record<string, any>;
}
export type DesktopElementRaw = Doc<IDesktopElement>;

interface IDesktopElementBase<T extends DesktopElementType> extends IDesktopElement {
	type: T;
	props: Record<string, any>;
}

export interface IMinecraftElementProps {
	uuid: string;
	disabled?: boolean;
}
export interface IMinecraftElement extends IDesktopElementBase<'minecraft'> {
	props: IMinecraftElementProps;
}

export interface IWeatherElementProps {
	id: number;
	key: string;
	disabled?: boolean;
}
export interface IWeatherElement extends IDesktopElementBase<'weather'> {
	props: IWeatherElementProps;
}

export type DesktopElement = IMinecraftElement | IWeatherElement;
