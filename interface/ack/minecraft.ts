import {ChannelAck} from '../ack';
import {Action, IMinecraftChannel} from '../minecraft';

export type MinecraftAck = ChannelAck<IMinecraftChannel, Action>;