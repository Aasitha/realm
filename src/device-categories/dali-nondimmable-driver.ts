import Realm from "realm";
export class IDaliNonDimmableDriverPropertiesSchema extends Realm.Object<IDaliNonDimmableDriverPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int;
    instantOff?: Realm.Types.Bool;
    isDriverPropertyUpdated?: Realm.Types.Bool;




}

export class IDaliNonDimmableDriverStateSchema extends Realm.Object<IDaliNonDimmableDriverStateSchema> {
    static embedded?: boolean = true;
    driverState?: Realm.Types.Int;


}

export class IDaliNonDimmableActionSchema extends Realm.Object<IDaliNonDimmableActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    driverState?: Realm.Types.Int;


}
