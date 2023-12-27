import Realm from "realm";

export class IZigbeeContactSensorStateSchema extends Realm.Object<IZigbeeContactSensorStateSchema> {
    static embedded?: boolean = true;
    //modes are assumed to be values of integer
    deviceState?: Realm.Types.Int;
    batteryState?: Realm.Types.Int;



}

export class IZigbeeContactSensorPropertiesSchema extends Realm.Object<IZigbeeContactSensorPropertiesSchema> {
    static embedded?: boolean = true;
    notificationsEnabled?: Realm.Types.Bool;


}

export class IZigbeeContactSensorScheduleActionSchema extends Realm.Object<IZigbeeContactSensorScheduleActionSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    notificationsEnabled?: Realm.Types.Bool;


}
