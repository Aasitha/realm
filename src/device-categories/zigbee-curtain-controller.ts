import Realm from "realm";
export class IZigbeeCurtainControllerStateSchema extends Realm.Object<IZigbeeCurtainControllerStateSchema> {
    static embedded?: boolean = true;
    curtainState?: Realm.Types.Int;


}

export class IZigbeeCurtainControllerPropertiesSchema extends Realm.Object<IZigbeeCurtainControllerPropertiesSchema> {
    static embedded?: boolean = true;
    invertSignal?: Realm.Types.Bool;
    actionTriggerTime?: Realm.Types.Int;
    motorCalibrationTime?: Realm.Types.Int;
    rfremoteEnabled?: Realm.Types.Bool;
    curtainType?: Realm.Types.Int;


}

export class IZigbeeCurtainControllerActionSchema extends Realm.Object<IZigbeeCurtainControllerActionSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    curtainState?: Realm.Types.Int;


}

export class IZigbeeCurtainControllerActivityActionSchema extends Realm.Object<IZigbeeCurtainControllerActivityActionSchema> {
    static embedded?: boolean = true;
    curtainState?: Realm.Types.Int;


}
