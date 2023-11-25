import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorLightOnCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.lightOn();
    }
}