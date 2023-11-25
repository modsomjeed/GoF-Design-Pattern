import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorDownCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.down();
    }
}

export class GarageDoorLightOffCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.lightOff();
    }
}

export class GarageDoorLightOnCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.lightOn();
    }
}

export class GarageDoorStopCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.stop();
    }
}

export class GarageDoorUpCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.up();
    }
}
