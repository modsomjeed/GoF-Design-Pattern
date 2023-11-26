import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";
import { GashaponState } from "./states/gashaponState";
import { ReadyState } from "./states/readyState";

export class GashaponMachine {

    private coins: number = 0;
    private needCoin: number = 4;
    private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
    private capsule: GashaponCapsule[] = [];
    private machineState: GashaponState | undefined;
    private remainCapsule: GashaponCapsule[] = [];
    
    setState(state: GashaponMachineState): void {
        this.state = state;
        if (this.state == GashaponMachineState.ready) {
            this.machineState = new ReadyState(this);
        }
        if(this.state == GashaponMachineState.hasCoin) {
            this.machineState = new ReadyState(this);
        }
    }

    getCoins(): number {
        return this.coins;
    }

    addCoin()
    {
        this.coins++;
    }

    getNeedCoin(): number {
        return this.needCoin;
    }

    getState(): GashaponMachineState
    {
        return this.state
    }

    reload(capsule: GashaponCapsule[]): void
    {
        this.capsule = [...this.capsule, ...capsule];
        this.setState(GashaponMachineState.ready);
    }

    getRemainCapsule(): number {
        return this.capsule.length;
    }

    insertCoin(): void {
        if (this.machineState != null) {
            this.machineState.insertCoin()
        }
        return;
    }

    ejectCoin(): number {
        if (this.machineState != null) {
            return this.machineState.ejectCoins();
        }
        return 0;
    }

    returnCoins() {
        return this.coins;
    }

    issueCapsule(): GashaponCapsule {
        const capsule = this.remainCapsule.pop();
        if (!capsule) {
            throw new Error('Out of capsule');
        }

        this.remainCapsule.slice(0);
        this.coins = 0;
        return capsule;
    }
}