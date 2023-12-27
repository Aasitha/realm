import Realm from "realm";
export class IDaliColorTunableDriverStateSchema extends Realm.Object<IDaliColorTunableDriverStateSchema> {
    static embedded?: boolean = true;
    driverState?: Realm.Types.Int;
    colorTemperature?: Realm.Types.Int;
    lastUpdateBy?: string;
    lastUpdateTime?: Realm.Types.Int;
    lastUpdateUser?: string;
    lastUpdateSource?: string;

}

export class IDaliColorTunableDriverPropertiesSchema extends Realm.Object<IDaliColorTunableDriverPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int;
    instantOff?: Realm.Types.Bool
    maxValue?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    defaultState?: IDaliColorTunableDriverStateSchema
    isDriverPropertyUpdated?: Realm.Types.Bool
    minTemperature?: Realm.Types.Int;
    maxTemperature?: Realm.Types.Int;


};

export class IDaliColorTunableDriverGroupPropertiesSchema extends Realm.Object<IDaliColorTunableDriverGroupPropertiesSchema> {
    static embedded?: boolean = true;
    fadeTime?: Realm.Types.Int;
    instantOff?: Realm.Types.Bool
    maxValue?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    defaultState?: IDaliColorTunableDriverStateSchema
    deviceVoiceName?: string;
    minTemperature?: Realm.Types.Int;
    maxTemperature?: Realm.Types.Int;


};

export class IDaliColorTunableDriverGroupSceneActionSchema extends Realm.Object<IDaliColorTunableDriverGroupSceneActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    driverState?: IDaliColorTunableDriverStateSchema


}


export class IDaliColorTunableDriverGroupScheculeActionSchema extends Realm.Object<IDaliColorTunableDriverGroupScheculeActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    driverState?: IDaliColorTunableDriverStateSchema


}


export class IDaliColorTunableDriverGroupActivitySchema extends Realm.Object<IDaliColorTunableDriverGroupActivitySchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    groupRoom?: string;
    roomId?: string;
    roomName?: string;
    floorId?: string;
    floorName?: string;
    sectionId?: string;
    sectionName?: string;
    driverState?: IDaliColorTunableDriverStateSchema
}





