import { Light } from "../devices";
import { Command } from "./command";

export class LightOutdoorOffCommand implements Command {

    constructor(private light: Light) {}

    public execute(): void {
        this.light.off();
    }
}

export class LightOutdoorOnCommand implements Command {

    constructor(private light: Light) {}

    public execute(): void {
        this.light.on();
    }
}