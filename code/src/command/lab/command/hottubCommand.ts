import { Hottub } from "../devices";
import { Command } from "./command";

export class HottubCirculateCommand implements Command {
    constructor(private hottub: Hottub) {}

    execute(): void {
        this.hottub.circulate();
    }
}

export class HottubJetsOnCommand implements Command {
    constructor(private hottub: Hottub) {}

    execute(): void {
        this.hottub.jetsOn();
    }
}

export class HottubJetsOffCommand implements Command {
    constructor(private hottub: Hottub) {}

    execute(): void {
        this.hottub.jetOff();
    }
}

export class HottubSetTemperatureCommand implements Command {
    constructor(private hottub: Hottub, private temperature: number) {}

    execute(): void {
        this.hottub.setTemperature(this.temperature);
    }
}