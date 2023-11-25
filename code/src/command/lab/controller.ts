import { Command } from "./command/command";

export class Controller {
    execute(command: Command) {
        command.execute();
    }
}
