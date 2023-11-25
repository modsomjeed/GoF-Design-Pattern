import { GardenLight } from "../devices";
import { Command } from "./command";

export class GardenLightDimCommand implements Command {
    constructor(private gardenLight: GardenLight) {}

    execute(): void {
        this.gardenLight.dim();
    }
}