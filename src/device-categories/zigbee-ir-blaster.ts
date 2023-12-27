import Realm from "realm";
export class IZigbeeIRBlasterPropertiesSchema extends Realm.Object<IZigbeeIRBlasterPropertiesSchema> {
    static embedded?: boolean = true;
    blastSignalDelay?: Realm.Types.Int;


}

export class IZigbeeIRBlasterStateSchema extends Realm.Object<IZigbeeIRBlasterStateSchema> {
    static embedded?: boolean = true;
}

export class IZigbeeIRBlasterAction_irBlastActionSchema extends Realm.Object<IZigbeeIRBlasterAction_irBlastActionSchema> {
    static embedded?: boolean = true;
    powerOn?: Realm.Types.Bool;
    temperature?: Realm.Types.Int;
    swingHLevel?: string;
    swingVLevel?: string;
    fanLevel?: string;
    mode?: string;
    updateType?: Realm.Types.Int;
    channelNumber?: Realm.Types.Int;
    source?: string;
    speedLevel?: string;
    ledState?: Realm.Types.Int;



}

export class IZigbeeIRBlasterActionSchema extends Realm.Object<IZigbeeIRBlasterActionSchema> {
    static embedded?: boolean = true;
    remoteId?: string;
    remoteType?: Realm.Types.Int;
    irDevice?: string;
    irBlastAction?: IZigbeeIRBlasterAction_irBlastActionSchema


}
