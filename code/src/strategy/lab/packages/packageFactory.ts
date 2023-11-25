import { PackageType } from "../billing";
import { FixedPackage } from "./fixedPackage";
import { HourFlexPackage } from "./hourFlexPackage";
import { SteppingPackage } from "./steppingPackage";
import { UnknownPackage } from "./unknowPackage";

export class PackageFactory {
    static createPackage(type: PackageFactory) {
        switch (type) {
            case PackageType.FIXED:
                return new FixedPackage();
            case PackageType.HOUR_FLEX:
                return new HourFlexPackage();
            case PackageType.STEPPING:
                return new SteppingPackage();
            default:
                return new UnknownPackage();
        }
    }
}