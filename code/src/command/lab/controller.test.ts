import { GarageDoorDownCommand, GarageDoorLightOffCommand, GarageDoorLightOnCommand, GarageDoorStopCommand, GarageDoorUpCommand } from "./command/garageDoorCommand";
import { GardenLightDimCommand, GardenLightOffCommand, GardenLightOnCommand } from "./command/gardenLightCommand";
import { HottubCirculateCommand, HottubJetsOffCommand, HottubJetsOnCommand, HottubSetTemperatureCommand } from "./command/hottubCommand";
import { LightOutdoorOffCommand, LightOutdoorOnCommand } from "./command/lightOutdoorCommand";
import { Controller } from "./controller";
import { GarageDoor, GardenLight, Hottub, Light } from "./devices";

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

  it('[GardenLight] should execute device that wrapped with command object', () => {
    //given
    const controller = new Controller();

    const gardenLight = new GardenLight();
    gardenLight.on = jest.fn();
    gardenLight.off = jest.fn();
    gardenLight.dim = jest.fn();

    //when
    const gardenLightOnCommand = new GardenLightOnCommand(gardenLight);
    const gardenLightOffCommand = new GardenLightOffCommand(gardenLight);
    const gardenLightDimCommand = new GardenLightDimCommand(gardenLight);

    controller.execute(gardenLightOnCommand);
    expect(gardenLight.on).toBeCalledTimes(1);

    controller.execute(gardenLightOffCommand);
    expect(gardenLight.off).toBeCalledTimes(1);

    controller.execute(gardenLightDimCommand);
    expect(gardenLight.dim).toBeCalledTimes(1);
  });

  it('[Hottub] should execute device that wrapped with command object', () => {
    //given
    const controller = new Controller();

    const hottub = new Hottub();
    hottub.circulate = jest.fn();
    hottub.jetsOn = jest.fn();
    hottub.jetOff = jest.fn();
    hottub.setTemperature = jest.fn();

    //when
    const hottubCirculateCommand = new HottubCirculateCommand(hottub);
    const hottubJetsOnCommand = new HottubJetsOnCommand(hottub);
    const hottubJetsOffCommand = new HottubJetsOffCommand(hottub);
    const hottubSetTemperatureCommand = new HottubSetTemperatureCommand(hottub, 30);

    controller.execute(hottubCirculateCommand);
    expect(hottub.circulate).toBeCalledTimes(1);

    controller.execute(hottubJetsOnCommand);
    expect(hottub.jetsOn).toBeCalledTimes(1);

    controller.execute(hottubJetsOffCommand);
    expect(hottub.jetOff).toBeCalledTimes(1);

    controller.execute(hottubSetTemperatureCommand);
    expect(hottub.setTemperature).toBeCalledTimes(1);
  });
});
