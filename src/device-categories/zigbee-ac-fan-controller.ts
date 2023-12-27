import Realm from "realm";

export class IZigbeeACFanControllerStateSchema extends Realm.Object<IZigbeeACFanControllerStateSchema> {
    static embedded?: boolean = true;
    fanState?: Realm.Types.Int;
    lightState?: Realm.Types.Int;
    swingState?: Realm.Types.Int;

    //modes are assumed to be values of integer

}

export class IZigbeeACFanControllerPropertiesSchema extends Realm.Object<IZigbeeACFanControllerPropertiesSchema> {
    static embedded?: boolean = true;
    hasLight?: Realm.Types.Bool;
    hasSwing?: Realm.Types.Bool;


}

export class IZigbeeACFanControllerActionSchema extends Realm.Object<IZigbeeACFanControllerActionSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    deviceId?: string;
    fanState?: Realm.Types.Int;
    lightState?: Realm.Types.Int;
    swingState?: Realm.Types.Int;



}

export enum AC_FAN_CONTROLLER_STATES {
    AC_OFF = 0,
    AC_LOW = 1,
    AC_MED = 2,
    AC_HIGH = 3,
    AC_MAX = 4
}
