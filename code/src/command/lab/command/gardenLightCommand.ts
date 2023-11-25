import { GardenLight } from "../devices";
import { Command } from "./command";

export class GardenLightOnCommand implements Command {
    constructor(private gardenLight: GardenLight) {}

    execute(): void {
        this.gardenLight.on();
    }
}

export class GardenLightDimCommand implements Command {
    constructor(private gardenLight: GardenLight) {}

    execute(): void {
        this.gardenLight.dim();
    }
}

export class GardenLightOffCommand implements Command {
    constructor(private gardenLight: GardenLight) {}

    execute(): void {
        this.gardenLight.off();
    }
}