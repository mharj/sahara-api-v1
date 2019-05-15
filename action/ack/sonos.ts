import {ChannelEnum} from '../../interface';
import {SonosAck} from '../../interface/ack/sonos';
import {Action} from '../../interface/sonos';

// Ack Actions
export const subSonosAck = (): SonosAck => {
	return {_channel: ChannelEnum.SONOS, _ack: Action.SUB};
};

export const unSubSonosAck = (): SonosAck => {
	return {_channel: ChannelEnum.SONOS, _ack: Action.UNSUB};
};

export const toggleSonosAck = (): SonosAck => {
	return {_channel: ChannelEnum.SONOS, _ack: Action.TOGGLE};
};
