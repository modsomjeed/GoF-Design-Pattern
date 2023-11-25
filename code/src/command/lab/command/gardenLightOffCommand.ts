import { GardenLight } from "../devices";
import { Command } from "./command";

export class GardenLightOffCommand implements Command {
    constructor(private gardenLight: GardenLight) {}

    execute(): void {
        this.gardenLight.off();
    }
}