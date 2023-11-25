import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorStopCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.stop();
    }
}