import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorLightOffCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.lightOff();
    }
}