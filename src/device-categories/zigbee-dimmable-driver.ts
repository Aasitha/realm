import { string } from "fp-ts";
import Realm from "realm";
export class IZigbeeDimmableDriverPropertiesSchema extends Realm.Object<IZigbeeDimmableDriverPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;


}

export class IZigbeeDimmableDriverStateSchema extends Realm.Object<IZigbeeDimmableDriverStateSchema> {
    static embedded?: boolean = true;
    driverState?: Realm.Types.Int;


}

export class IZigbeeDimmableActionSchema extends Realm.Object<IZigbeeDimmableActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    driverState?: Realm.Types.Int;


}
