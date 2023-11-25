import { GarageDoorDownCommand } from "./command/garageDoorDownCommand";
import { GarageDoorLightOffCommand } from "./command/garageDoorLightOffCommand";
import { GarageDoorLightOnCommand } from "./command/garageDoorLightOnCommand";
import { GarageDoorStopCommand } from "./command/garageDoorStopCommand";
import { GarageDoorUpCommand } from "./command/garageDoorUpCommand";
import { LightOutdoorOffCommand } from "./command/lightOutdoorOffCommand";
import { LightOutdoorOnCommand } from "./command/lightOutdoorOnCommand";
import { Controller } from "./controller";
import { GarageDoor, Light } from "./devices";

describe('[Command - lab] Controller', () => {
  it('[OutdoorLight] should execute device that wrapped with command object', () => {
    //given
    const controller = new Controller();

    const light = new Light();
    light.on = jest.fn();
    light.off = jest.fn();

    //when
    const lightOutdoorOnCommand = new LightOutdoorOnCommand(light);
    const lightOutdoorOffCommand = new LightOutdoorOffCommand(light);

    //then
    controller.execute(lightOutdoorOnCommand);
    expect(light.on).toBeCalledTimes(1);

    controller.execute(lightOutdoorOffCommand);
    expect(light.off).toBeCalledTimes(1);
  });

  it('[GarageDoor] should execute device that wrapped with command object', () => {
    //given
    const controller = new Controller();

    const garageDoor = new GarageDoor();
    garageDoor.down = jest.fn();
    garageDoor.up = jest.fn();
    garageDoor.lightOff = jest.fn();
    garageDoor.lightOn = jest.fn();
    garageDoor.stop = jest.fn();

    //when
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
    const garageDoorLightOffCommand = new GarageDoorLightOffCommand(garageDoor);
    const garageDoorLightOnCommand = new GarageDoorLightOnCommand(garageDoor);
    const garageDoorStopCommand = new GarageDoorStopCommand(garageDoor);

    controller.execute(garageDoorDownCommand);
    expect(garageDoor.down).toBeCalledTimes(1);

    controller.execute(garageDoorUpCommand);
    expect(garageDoor.up).toBeCalledTimes(1);

    controller.execute(garageDoorLightOffCommand);
    expect(garageDoor.lightOff).toBeCalledTimes(1);

    controller.execute(garageDoorLightOnCommand);
    expect(garageDoor.lightOn).toBeCalledTimes(1);

    controller.execute(garageDoorStopCommand);
    expect(garageDoor.stop).toBeCalledTimes(1);

  });
});
