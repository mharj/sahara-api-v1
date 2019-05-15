import {ChannelAck} from '../ack';
import {Action, IRaidChannel} from '../raid';

export type RaidAck = ChannelAck<IRaidChannel, Action>;
