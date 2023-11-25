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
    let total = this.calculateMonthlyFree(this.totalHours, this.packageType);

    return total + (total * this.vatRate) / 100;
  }

  private calculateMonthlyFree(total: number, packageType: string) {
    switch (packageType) {
      case PackageType.FIXED:
        return total = new FixedPackage().monthlyBill(total);
      case PackageType.HOUR_FLEX:
        return total = new HourFlexPackage().monthlyBill(total);
      case PackageType.STEPPING:
        return total = new SteppingPackage().monthlyBill(total);
      default:
        return 0;
    }
  }
}
