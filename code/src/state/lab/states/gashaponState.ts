import { GashaponCapsule } from "../gashaponCapsule";

export interface GashaponState {
    insertCoin(): void;
    ejectCoins(): number;
    spin(): GashaponCapsule[];
    reload(capsule: GashaponCapsule[]): void;
}