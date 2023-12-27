import { string } from "fp-ts";
import Realm from "realm";
export class IZigbeeNonDimmableDriverPropertiesSchema extends Realm.Object<IZigbeeNonDimmableDriverPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;


}

export class IZigbeeNonDimmableDriverStateSchema extends Realm.Object<IZigbeeNonDimmableDriverStateSchema> {
    static embedded?: boolean = true;
    driverState?: Realm.Types.Int;


}

export class IZigbeeNonDimmableActionSchema extends Realm.Object<IZigbeeNonDimmableActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    driverState?: Realm.Types.Int;


}
