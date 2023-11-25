import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorUpCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}

    public execute(): void {
        this.garageDoor.up();
    }
}