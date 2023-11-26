import { Gashapon } from "state/begin/gashapon";
import { GashaponState } from "./gashaponState";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachine } from "../gashaponMachine";

export class ReadyToSpinState implements GashaponState {
  constructor(private gashapon: GashaponMachine) {}

  insertCoin(): void {
    throw new Error('Cannot insert coin when ready to spin');
  }
  ejectCoins(): number {
    this.gashapon.setState(GashaponMachineState.ready);
    return this.gashapon.returnCoins();
  }

  spin(): GashaponCapsule[] {
    const capsule = this.gashapon.issueCapsule();
    if (this.gashapon.getRemainCapsule() === 0) {
      this.gashapon.setState(GashaponMachineState.outOfCapsule);
    } else {
      this.gashapon.setState(GashaponMachineState.ready);
    }
    return [capsule];
  }

  reload(capsule: GashaponCapsule[]): void {
      
  }
}
