import { LightOutdoorOffCommand } from "./command/lightOutdoorOffCommand";
import { LightOutdoorOnCommand } from "./command/lightOutdoorOnCommand";
import { Controller } from "./controller";
import { Light } from "./devices";

describe('[Command - lab] Controller', () => {
  it('should execute device that wrapped with command object', () => {
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
});
