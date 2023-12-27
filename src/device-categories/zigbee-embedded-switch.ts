import Realm from "realm";
export class IEmbeddedApplianceActionSchema extends Realm.Object<IEmbeddedApplianceActionSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    applianceId?: string;
    applianceType?: Realm.Types.Int;
    applianceState?: KZESApplianceStateSchema;


}
// export class applianceStateCollectionSchema = {
//     name: "applianceStateCollection",
//     embedded: true,
//     properties: {
//         iEmbeddedOnOffApplianceState: { type: "IEmbeddedOnOffApplianceState", optional: true },
//         iEmbeddedSingleDimmerApplianceState: { type: "IEmbeddedSingleDimmerApplianceState", optional: true },
//         iEmbeddedFanApplianceState: { type: "IEmbeddedFanApplianceState", optional: true },
//         iEmbeddedColorTunableApplianceState: { type: "IEmbeddedColorTunableApplianceState", optional: true }
//     }
// }

export class IEmbeddedSwitchPortSchema extends Realm.Object<IEmbeddedSwitchPortSchema> {
    static embedded?: boolean = true;
    portId?: Realm.Types.Int;
    portState?: Realm.Types.Int;
    isInAppliance?: Realm.Types.Bool;
    applianceId?: string;


}

export class IApplianceidDeviceidDetailsSchema extends Realm.Object<IApplianceidDeviceidDetailsSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    applianceId?: string;


}

export class IOnOffApplianceGroupPropertiesSchema extends Realm.Object<IOnOffApplianceGroupPropertiesSchema> {
    static embedded?: boolean = true;
    deviceList: Realm.Types.List<IApplianceidDeviceidDetailsSchema>;

}
export class IFanApplianceGroupPropertiesSchema extends Realm.Object<IFanApplianceGroupPropertiesSchema> {
    static embedded?: boolean = true;
    deviceList: Realm.Types.List<IApplianceidDeviceidDetailsSchema>;


}
export class ISingleDimmerApplianceGroupPropertiesSchema extends Realm.Object<ISingleDimmerApplianceGroupPropertiesSchema> {
    static embedded?: boolean = true;
    deviceList: Realm.Types.List<IApplianceidDeviceidDetailsSchema>;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;


}
export class IColorTunableApplianceGroupPropertiesSchema extends Realm.Object<IColorTunableApplianceGroupPropertiesSchema> {
    static embedded?: boolean = true;
    deviceList: Realm.Types.List<IApplianceidDeviceidDetailsSchema>;
    fadeTime?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;


}

export class IEmbeddedOnOffApplianceStateSchema extends Realm.Object<IEmbeddedOnOffApplianceStateSchema> {
    static embedded?: boolean = true;
    switchState?: Realm.Types.Int;


}

export class IEmbeddedOnOffAppliancePropertiesSchema extends Realm.Object<IEmbeddedOnOffAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    portId?: Realm.Types.Int;


}

export class IEmbeddedSingleDimmerApplianceStateSchema extends Realm.Object<IEmbeddedSingleDimmerApplianceStateSchema> {
    static embedded?: boolean = true;
    switchState?: Realm.Types.Int;


}

export class IEmbeddedSingleDimmerAppliancePropertiesSchema extends Realm.Object<IEmbeddedSingleDimmerAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    portId?: Realm.Types.Int;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;


}

export class IEmbeddedFanApplianceStateSchema extends Realm.Object<IEmbeddedFanApplianceStateSchema> {
    static embedded?: boolean = true;
    fanState?: Realm.Types.Int;


}

export class IEmbeddedFanAppliancePropertiesSchema extends Realm.Object<IEmbeddedFanAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    portId?: Realm.Types.Int;


}

export class IEmbeddedColorTunableApplianceStateSchema extends Realm.Object<IEmbeddedColorTunableApplianceStateSchema> {
    static embedded?: boolean = true;
    lightState?: Realm.Types.Int;
    warmWhiteState?: Realm.Types.Int;
    coolWhiteState?: Realm.Types.Int;


}

export class IEmbeddedColorTunableAppliancePropertiesSchema extends Realm.Object<IEmbeddedColorTunableAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    warmWhitePort?: Realm.Types.Int;
    coolWhitePort?: Realm.Types.Int;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;


}
export class IEmbeddedGroupOnOffApplianceActionSchema extends Realm.Object<IEmbeddedGroupOnOffApplianceActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    switchState?: Realm.Types.Int;


}
export class IEmbeddedGroupSingleDimmerApplianceActionSchema extends Realm.Object<IEmbeddedGroupSingleDimmerApplianceActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    switchState?: Realm.Types.Int;


}
export class IEmbeddedGroupFanApplianceActionSchema extends Realm.Object<IEmbeddedGroupFanApplianceActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    fanState?: Realm.Types.Int;


}
export class IEmbeddedGroupColorTunableApplianceActionSchema extends Realm.Object<IEmbeddedGroupColorTunableApplianceActionSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    lightState?: Realm.Types.Int;
    warmWhiteState?: Realm.Types.Int;
    coolWhiteState?: Realm.Types.Int;


}

export class IEmbeddedSwitchAppliancePropertiesSchema extends Realm.Object<IEmbeddedSwitchAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    applianceId?: string;


}
export class IEmbeddedSwitchGroupPropertiesSchema extends Realm.Object<IEmbeddedSwitchGroupPropertiesSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;

}

export class IEmbeddedSwitchAcFanPropertiesSchema extends Realm.Object<IEmbeddedSwitchAcFanPropertiesSchema> {
    static embedded?: boolean = true;
    deviceId?: string;


}
export class IEmbeddedSwitchDcFanPropertiesSchema extends Realm.Object<IEmbeddedSwitchDcFanPropertiesSchema> {
    static embedded?: boolean = true;
    deviceId?: string;


}
export class Collectionschema extends Realm.Object<Collectionschema> {
    static embedded?: boolean = true;
    iEmbeddedColorTunableApplianceProperties?: IEmbeddedColorTunableAppliancePropertiesSchema
    iEmbeddedFanApplianceProperties?: IEmbeddedFanAppliancePropertiesSchema
    iEmbeddedSingleDimmerApplianceProperties?: IEmbeddedSingleDimmerAppliancePropertiesSchema
    iEmbeddedOnOffApplianceProperties?: IEmbeddedOnOffAppliancePropertiesSchema

}
export class KZESAppliancePropertiesSchema extends Realm.Object<KZESAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    warmWhitePort?: Realm.Types.Int;
    coolWhitePort?: Realm.Types.Int;
    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    defaultState?: Realm.Types.Int;
    portId?: Realm.Types.Int;

}
export class KZESApplianceStateSchema extends Realm.Object<KZESApplianceStateSchema> {
    static embedded?: boolean = true;
    switchState?: Realm.Types.Int;
    fanState?: Realm.Types.Int;
    lightState?: Realm.Types.Int;
    warmWhiteState?: Realm.Types.Int;
    coolWhiteState?: Realm.Types.Int;

}
export class IEmbeddedApplianceSchema extends Realm.Object<IEmbeddedApplianceSchema> {
    static embedded?: boolean = true;
    applianceId?: string;
    applianceName?: string;
    applianceType?: Realm.Types.Int;
    applianceState?: KZESApplianceStateSchema
    applianceProperties?: KZESAppliancePropertiesSchema
    iconType?: Realm.Types.Int;
    defaultState?: KZESApplianceStateSchema
    inGroup?: Realm.Types.Bool;
    groupId?: Realm.Types.Int;
    groupRoom?: string;
    lastUpdatedTime?: Realm.Types.Int;
    lastUpdatedBy?: string;
    lastUpdatedUser?: string;
    lastUpdatedSource?: string;


}
export class switchAppliancePropertiesCollectionSchema extends Realm.Object<switchAppliancePropertiesCollectionSchema> {
    static embedded?: boolean = true;
    iEmbeddedSwitchApplianceProperties?: IEmbeddedSwitchAppliancePropertiesSchema
    iEmbeddedSwitchGroupProperties?: IEmbeddedSwitchGroupPropertiesSchema
    iEmbeddedSwitchAcFanProperties?: IEmbeddedSwitchAcFanPropertiesSchema
    iEmbeddedSwitchDcFanProperties?: IEmbeddedSwitchDcFanPropertiesSchema

}
export class KZESSwitchPropertiesSchema extends Realm.Object<KZESSwitchPropertiesSchema> {
    static embedded?: boolean = true;
    applianceId?: string;
    groupId?: Realm.Types.Int;
    roomId?: string;
    deviceId?: string;

}
export class IEmbeddedSwitchSchema extends Realm.Object<IEmbeddedSwitchSchema> {
    static embedded?: boolean = true;
    switchId?: Realm.Types.Int;
    switchType?: Realm.Types.Int;
    switchName?: string;
    switchProperties?: KZESSwitchPropertiesSchema


}

export class IZigbeeEmbeddedSwitchPropertiesSchema extends Realm.Object<IZigbeeEmbeddedSwitchPropertiesSchema> {
    static embedded?: boolean = true;
    outputPorts: Realm.Types.List<IEmbeddedSwitchPortSchema>
    appliance: Realm.Types.List<IEmbeddedApplianceSchema>;
    switch: Realm.Types.List<IEmbeddedSwitchSchema>;
    isAreaMaster?: Realm.Types.Mixed;


}

export class IZigbeeEmbeddedSwitchStateSchema extends Realm.Object<IZigbeeEmbeddedSwitchStateSchema> {
    static embedded?: boolean = true;
}
