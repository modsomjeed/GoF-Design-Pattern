import { BillingType } from "../billingType";

export class FixedPackage implements BillingType {
    monthlyBill(totalHours: number): number {
        return 500;
    }

}