import { FixedPackage } from "./packages/fixedPackage";
import { HourFlexPackage } from "./packages/hourFlexPackage";
import { SteppingPackage } from "./packages/steppingPackage";

export enum PackageType {
  FIXED = 'FIXED',
  HOUR_FLEX = 'HOUR_FLEX',
  STEPPING = 'STEPPING',
  UNKNOWN = 'UNKNOWN',
}

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = 0.0;
    if (this.packageType === PackageType.FIXED) {
      total = new FixedPackage().monthlyBill(this.totalHours);
    } else if (this.packageType === PackageType.HOUR_FLEX) {
      total = new HourFlexPackage().monthlyBill(this.totalHours);
    } else if (this.packageType === PackageType.STEPPING) {
      total = new SteppingPackage().monthlyBill(this.totalHours);
    }

    return total + (total * this.vatRate) / 100;
  }
}
