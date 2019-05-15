import {ChannelAck} from '../ack';
import {Action, ISonosChannel} from '../sonos';

export type SonosAck = ChannelAck<ISonosChannel, Action>;
