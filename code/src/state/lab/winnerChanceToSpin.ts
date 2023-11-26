import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachine } from "./gashaponMachine";
import { GashaponMachineState } from "./gashaponMachineState";
import { GashaponState } from "./states/gashaponState";

export class WinnerChanceToSpin implements GashaponState {
  constructor(private gashapon: GashaponMachine) {}

  winTheChance(): boolean {
    return Math.random() < 0.5;
  }

  insertCoin(): void {
    throw new Error('Cannot insert coin when ready to spin');
  }

  ejectCoins(): number {
    this.gashapon.setState(GashaponMachineState.ready);
    return this.gashapon.returnCoins();
  }

  spin(): GashaponCapsule[] {
    var returnCapsules: GashaponCapsule[] = [];

    returnCapsules.push(this.gashapon.issueCapsule());
    if (this.winTheChance()) {
      returnCapsules.push(this.gashapon.issueCapsule());
    }

    this.gashapon.setState(
      this.gashapon.getRemainCapsule() === 0
        ? GashaponMachineState.outOfCapsule
        : GashaponMachineState.ready,
    );

    return returnCapsules;
  }
  reload(capsule: GashaponCapsule[]): void {
      
  }
}
