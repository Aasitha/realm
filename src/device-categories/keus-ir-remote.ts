import Realm from "realm";
//AC
export class IKeusIRACRemotePropertiesSchema extends Realm.Object<IKeusIRACRemotePropertiesSchema> {
    static embedded?: boolean = true;
    temperatureRange: Realm.Types.List<Realm.Types.Int>
    swingHEnabled?: Realm.Types.Bool;
    swingHSelectType?: Realm.Types.Int;
    swingHOptions: Realm.Types.List<string>
    swingVEnabled?: Realm.Types.Bool;
    swingVSelectType?: Realm.Types.Int;
    swingVOptions: Realm.Types.List<string>
    fanEnabled?: Realm.Types.Bool;
    fanSelectType?: Realm.Types.Int;
    fanOptions: Realm.Types.List<string>
    modeEnabled?: Realm.Types.Bool;
    modeSelectType?: Realm.Types.Int;
    modeOptions: Realm.Types.List<string>


}
export class IKeusIRACRemoteStateSchema extends Realm.Object<IKeusIRACRemoteStateSchema> {
    static embedded?: boolean = true;
    powerOn?: Realm.Types.Bool;
    temperature?: Realm.Types.Int;
    swingHLevel?: string
    swingVLevel?: string
    fanLevel?: string
    mode?: string


}
export class IKeusIRACBlastActionSchema extends Realm.Object<IKeusIRACBlastActionSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    powerOn?: Realm.Types.Bool;
    temperature?: Realm.Types.Int;
    swingHLevel?: string
    swingVLevel?: string
    fanLevel?: string
    mode?: string


}

//TV
export class IKeusIRTVRemotePropertiesSchema extends Realm.Object<IKeusIRTVRemotePropertiesSchema> {
    static embedded?: boolean = true;
    sourceEnabled?: Realm.Types.Bool;
    sourceSelectType?: Realm.Types.Int;
    sourceOptions: Realm.Types.List<string>
    modeEnabled?: Realm.Types.Bool;
    modeSelectType?: Realm.Types.Int;
    modeOptions: Realm.Types.List<string>


}
export class IKeusIRTVRemoteStateSchema extends Realm.Object<IKeusIRTVRemoteStateSchema> {
    static embedded?: boolean = true;
}
export class IKeusIRTVBlastActionSchema extends Realm.Object<IKeusIRTVBlastActionSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    powerOn?: Realm.Types.Bool;
    channelNumber?: Realm.Types.Int;
    source?: string
    mode?: string


}

//Amp
export class IKeusIRAMPRemotePropertiesSchema extends Realm.Object<IKeusIRAMPRemotePropertiesSchema> {
    static embedded?: boolean = true;
    sourceEnabled?: Realm.Types.Bool;
    sourceSelectType?: Realm.Types.Int;
    sourceOptions: Realm.Types.List<string>
    modeEnabled?: Realm.Types.Bool;
    modeSelectType?: Realm.Types.Int;
    modeOptions: Realm.Types.List<string>


}
export class IKeusIRAMPRemoteStateSchema extends Realm.Object<IKeusIRAMPRemoteStateSchema> {
    static embedded?: boolean = true;
}
export class IKeusIRAMPBlastActionSchema extends Realm.Object<IKeusIRAMPBlastActionSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    powerOn?: Realm.Types.Bool;
    source?: string
    mode?: string


}

//Pr
export class IKeusIRPRRemotePropertiesSchema extends Realm.Object<IKeusIRPRRemotePropertiesSchema> {
    static embedded?: boolean = true;
    sourceEnabled?: Realm.Types.Bool;
    sourceSelectType?: Realm.Types.Int;
    sourceOptions: Realm.Types.List<string>
    modeEnabled?: Realm.Types.Bool;
    modeSelectType?: Realm.Types.Int;
    modeOptions: Realm.Types.List<string>
    onoffType?: Realm.Types.Int;


}
export class IKeusIRPRRemoteStateSchema extends Realm.Object<IKeusIRPRRemoteStateSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    powerOn?: Realm.Types.Bool;
    source?: string
    mode?: string


}
export class IKeusIRPRBlastActionSchema extends Realm.Object<IKeusIRPRBlastActionSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    powerOn?: Realm.Types.Bool;
    source?: string
    mode?: string


}

//Fan
export class IKeusIRFANRemotePropertiesSchema extends Realm.Object<IKeusIRFANRemotePropertiesSchema> {
    static embedded?: boolean = true;
    speedSelectType?: Realm.Types.Int;
    speedOptions: Realm.Types.List<string>
    modeEnabled?: Realm.Types.Bool;
    modeSelectType?: Realm.Types.Int;
    modeOptions: Realm.Types.List<string>
    ledEnabled?: Realm.Types.Bool;


}
export class IKeusIRFANRemoteStateSchema extends Realm.Object<IKeusIRFANRemoteStateSchema> {
    static embedded?: boolean = true;
    powerOn?: Realm.Types.Bool;
    speedLevel?: string
    mode?: string
    ledState?: Realm.Types.Int;
    updateType?: Realm.Types.Int;


}
export class IKeusIRFANBlastActionSchema extends Realm.Object<IKeusIRFANBlastActionSchema> {
    static embedded?: boolean = true;
    powerOn?: Realm.Types.Bool;
    speedLevel?: string
    mode?: string
    ledState?: Realm.Types.Int;
    updateType?: Realm.Types.Int;


}
