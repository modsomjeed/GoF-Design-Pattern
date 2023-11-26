import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachine } from "../gashaponMachine";
import { GashaponMachineState } from "../gashaponMachineState";

describe('[State - lab] Gashapon Machine', () => {
    it('should be outOfCapsule when init', () => {
        const gashapon = new GashaponMachine();
        expect(gashapon.getState()).toBe(GashaponMachineState.outOfCapsule);
    });

    it('should be ready state when reload capsules', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Nami'),
        ]);
        expect(gashapon.getState()).toEqual(GashaponMachineState.ready);
        expect(gashapon.getRemainCapsule()).toEqual(2);
    });

    it('should be hasCoin state when insert coin', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Nami'),
        ]);
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);

        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.readyToSpin);
    });

    it("should be throw error 'You haven't insert any coin.' when eject", () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Nami'),
        ]);

        expect(() => gashapon.ejectCoin()).toThrowError(`You haven't insert any coin.`);
    });

    it('should be able to eject coin when has coin ', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Nami'),
        ]);
        expect(gashapon.getState()).toEqual(GashaponMachineState.ready);

        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);

        const returnedCoin = gashapon.returnCoins();

        // gashapon.ejectCoin();
        // expect(gashapon.getState()).toEqual(GashaponMachineState.ready);
    });
});