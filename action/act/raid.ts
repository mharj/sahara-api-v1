import {ChannelEnum} from '../../interface';
import {RaidAct} from '../../interface/act/raid';
import {Action} from '../../interface/raid';

// Act Actions
export const subRaidAct = (): RaidAct => {
	return {_channel: ChannelEnum.RAID, _act: Action.SUB};
};
export const unSubRaidAct = (): RaidAct => {
	return {_channel: ChannelEnum.RAID, _act: Action.UNSUB};
};
export const checkRaidAct = (): RaidAct => {
	return {_channel: ChannelEnum.RAID, _act: Action.CHECK};
};