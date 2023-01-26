import { world } from "@minecraft/server";
import * as ui from '@minecraft/server-ui';

world.events.beforeChat.subscribe(eventData => {
    let sender = eventData.sender
    let message = eventData.message
    
    if (message == `lobby`) {
        sender.runCommandAsync('tp @s 0 40 0')
        sender.tell('§aロビーにテレポートしました')
        eventData.cancel = true
        return;
    } else if (message == `hello`) {
        sender.tell('Hello World!')
        return;
    }
})
