import {ChannelEnum} from '../../interface';
import {SonosAct} from '../../interface/act/sonos';
import {Action} from '../../interface/sonos';

// Act Actions
export const subSonosAct = (): SonosAct => {
	return {_channel: ChannelEnum.SONOS, _act: Action.SUB};
};
export const unSubSonosAct = (): SonosAct => {
	return {_channel: ChannelEnum.SONOS, _act: Action.UNSUB};
};
export const toggleSonosAct = (): SonosAct => {
	return {_channel: ChannelEnum.SONOS, _act: Action.TOGGLE};
};
