import { AdvanceRemoteControl } from "./AdvanceRemoteControl";
import { Radio } from "./Radio";
import { RemoteControl } from "./RemoteControl";
import { TV } from "./TV";

const tv = new TV();

const remoteControl = new RemoteControl(tv);
remoteControl.channelDown();

const radio = new Radio();

const advanceRemoteControl = new AdvanceRemoteControl(radio);

advanceRemoteControl.mute();
