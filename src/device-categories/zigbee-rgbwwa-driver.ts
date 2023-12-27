import Realm from "realm";
export class IRBGSchema extends Realm.Object<IRBGSchema> {
    static embedded?: boolean = true;
    red?: Realm.Types.Int;
    green?: Realm.Types.Int;
    blue?: Realm.Types.Int;
    pattern?: Realm.Types.Int;
    deviceState?: Realm.Types.Int;
    brightness?: Realm.Types.Int;

}
export class IWWASchema extends Realm.Object<IWWASchema> {
    static embedded?: boolean = true;
    warmWhite?: Realm.Types.Int;
    coolWhite?: Realm.Types.Int;
    amber?: Realm.Types.Int;
    deviceState?: Realm.Types.Int;
    brightness?: Realm.Types.Int;

}

export class IZigbeeRgbwwaGroupStateSchema extends Realm.Object<IZigbeeRgbwwaGroupStateSchema> {
    static embedded?: boolean = true;
    updateType?: Realm.Types.Int;
    deviceState?: Realm.Types.Int;
    wwaState?: IWWASchema
    rgbState?: IRBGSchema
}

export class IZigbeeRgbwwaGroupPropertiesSchema extends Realm.Object<IZigbeeRgbwwaGroupPropertiesSchema> {
    static embedded?: boolean = true;
    outputChannels?: Realm.Types.Int;
    rgbEnabled?: Realm.Types.Bool;
    warmWhiteEnabled?: Realm.Types.Bool;
    coolWhiteEnabled?: Realm.Types.Bool;
    amberEnabled?: Realm.Types.Bool;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    defaultUpdateType?: Realm.Types.Int;
    defaultRgbAction?: IRBGSchema
    defaultWwaAction?: IWWASchema

}

export class IZigbeeRgbwwaDriverActionSchema extends Realm.Object<IZigbeeRgbwwaDriverActionSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    updateType?: Realm.Types.Int;
    deviceState?: Realm.Types.Int;
    wwaState?: IWWASchema
    rgbState?: IRBGSchema
}

export class IZigbeeRgbwwaDriverGroupActionSchema extends Realm.Object<IZigbeeRgbwwaDriverGroupActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    updateType?: Realm.Types.Int;
    deviceState?: Realm.Types.Int;
    wwaState?: IWWASchema
    rgbState?: IRBGSchema
}



export class IZigbeeRgbwwaDriverStateSchema extends Realm.Object<IZigbeeRgbwwaDriverStateSchema> {
    static embedded?: boolean = true;
    defaultUpdateType?: Realm.Types.Int;
    lastUpdateType?: Realm.Types.Int;
    defaultRgbAction?: IRBGSchema
    defaultWwaAction?: IWWASchema
    lastUpdatedRGBAction?: IRBGSchema
    lastUpdatedWWAAction?: IWWASchema
}

export class IZigbeeRgbwwaDriverPropertiesSchema extends Realm.Object<IZigbeeRgbwwaDriverPropertiesSchema> {
    static embedded?: boolean = true;
    outputChannels?: Realm.Types.Int;
    rgbEnabled?: Realm.Types.Bool;
    warmWhiteEnabled?: Realm.Types.Bool;
    coolWhiteEnabled?: Realm.Types.Bool;
    amberEnabled?: Realm.Types.Bool;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    iconType?: Realm.Types.Int;
}
