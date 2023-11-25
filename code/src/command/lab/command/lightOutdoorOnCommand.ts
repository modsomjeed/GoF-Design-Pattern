import { Light } from "../devices";
import { Command } from "./command";

export class LightOutdoorOnCommand implements Command {

    constructor(private light: Light) {}

    public execute(): void {
        this.light.on();
    }
}