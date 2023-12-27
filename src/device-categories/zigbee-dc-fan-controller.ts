import Realm from "realm";
export class IZigbeeDCFanControllerStateSchema extends Realm.Object<IZigbeeDCFanControllerStateSchema> {
    static embedded?: boolean = true;

    //modes are assumed to be values of integer
    fanState?: Realm.Types.Int;
    lightState?: Realm.Types.Int;
    lightTemperature?: Realm.Types.Int;


}


export class IZigbeeDCFanControllerActionLightStateSchema extends Realm.Object<IZigbeeDCFanControllerActionLightStateSchema> {
    static embedded?: boolean = true;

    lightState?: Realm.Types.Int;
    lightTemperature?: Realm.Types.Int;

}

export class IZigbeeDCFanControllerActionSchema extends Realm.Object<IZigbeeDCFanControllerActionSchema> {
    static embedded?: boolean = true;

    updateType?: Realm.Types.Int;
    deviceId?: string;
    fanState?: Realm.Types.Int;
    lightState?: IZigbeeDCFanControllerActionLightStateSchema


}


export class IZigbeeDCFanControllerPropertiesSchema extends Realm.Object<IZigbeeDCFanControllerPropertiesSchema> {
    static embedded?: boolean = true;

    isReverse?: Realm.Types.Bool;
    isAntiTheft?: Realm.Types.Bool;
    fadeTime?: Realm.Types.Int;
    hasLight?: Realm.Types.Bool;


}

export enum DC_FAN_CONTROLLER_STATES {
    DC_OFF = 0,
    DC_LOW = 1,
    DC_MED = 2,
    DC_HIGH = 3,
    DC_MAX = 4,
    DC_NW = 5
}
