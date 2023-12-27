import Realm from "realm";
export class IDaliDimmableDriverPropertiesSchema extends Realm.Object<IDaliDimmableDriverPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int
    instantOff?: Realm.Types.Bool
    maxValue?: Realm.Types.Int
    minValue?: Realm.Types.Int
    defaultState?: Realm.Types.Int
    isDriverPropertyUpdated?: Realm.Types.Bool



}

export class IDaliDimmableDriverStateSchema extends Realm.Object<IDaliDimmableDriverStateSchema> {
    static embedded?: boolean = true;
    driverState?: Realm.Types.Int


}

export class IDaliDimmableActionSchema extends Realm.Object<IDaliDimmableActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int
    roomId?: string
    driverState?: Realm.Types.Int


}
