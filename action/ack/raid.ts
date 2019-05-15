import {ChannelEnum} from '../../interface';
import {RaidAck} from '../../interface/ack/raid';
import {Action} from '../../interface/raid';

// Ack Actions
export const subRaidAck = (): RaidAck => {
	return {_channel: ChannelEnum.RAID, _ack: Action.SUB};
};

export const unSubRaidAck = (): RaidAck => {
	return {_channel: ChannelEnum.RAID, _ack: Action.UNSUB};
};

export const checkRaidAck = (): RaidAck => {
	return {_channel: ChannelEnum.RAID, _ack: Action.CHECK};
};
