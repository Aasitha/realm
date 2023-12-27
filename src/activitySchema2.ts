export const activitySchema2 = {
    name: "Activity2",
    primaryKey: '_id',
    properties: {
        _id: "string",
        activityId: "string",
        activitySourceInfo: { type: "activitySourceInfo" },
        activityState: { type: "mixed", optional: true },
        activityProperties: { type: "mixed", optional: true },
        activityGMType: { type: "string", optional: true },
        activityIdentifier: { type: "mixed", optional: false },
        activityBy: "string",
        activityAction: {type:"ActivityAction",},
        activitySource: "string",
        activityTime: "int",
        activityUsername: { type: "string", optional: true },
        activityType: "int",
        __v: "int"
    }
}
export const GMApplianceActivityIdentifierSchema = {
    name: "GMApplianceActivityIdentifier",
    properties: {
        applianceId: "string",
        applianceName: "string",
        applianceRoomName: "string",
        applianceSectionName: "string",
        applianceRoomId: "string",
        applianceSectionId: "string",
        applianceIcon: "int",
    }
}
export const GMGroupActivityIdentifierSchema = {
    name: "GMGroupActivityIdentifier",
    properties: {
        groupId: "string",
        groupName: "string",
        groupRoomName: "string",
        groupSectionName: "string",
        groupRoomId: "string",
        groupSectionId: "string",
        groupIcon: "int",
    }
}
export const GMSceneActivityIdentifierSchema = {
    name: "GMSceneActivityIdentifier",
    properties: {
        sceneId: "int",
        sceneName: "string",
        sceneRoomName: "string",
        sceneSectionName: "string",
        sceneRoomId: "string",
        sceneSectionId: "string",
        sceneType: "int",
        scenePresetType: "int",
    }
}
export const ActivityActionSchema = {
    name: "ActivityAction",
    embedded:true,
    properties: {
        embeddedActivityAction: { type: "EmbeddedActivityAction", optional: false },
        iSmartConsoleActivityAction: { type: "SmartConsoleActivityAction", optional: false },
        iRRemoteActivityAction: { type: "IRRemoteActivityAction", optional: false },
        rgbwwaActivityAction: { type: "RgbwwaActivityAction", optional: false },
        driverActivityAction: { type: "DriverActivityAction", optional: false },
        curtainActivityAction: { type: "CurtainActivityAction", optional: false },
        contactSensorActivityAction: { type: "ContactSensorActivityAction", optional: false },
        acFancontrollerActivityAction: { type: "AcFancontrollerActivityAction", optional: false },
        dcFancontrollerActivityAction: { type: "DcFancontrollerActivityAction", optional: false },
        daliColorTunableActivityAction:"DaliColorTunableActivityAction",
        daliDimmableDriverActivityAction:"DaliDimmableDriverActivityAction",
        daliNonDimmableDriverActivityAction:"DaliNonDimmableDriverActivityAction",
        zigbeeDimmableDriverActivityAction:"ZigbeeDimmableDriverActivityAction",
        zigbeeNonDimmableDriverActivity:"ZigbeeNonDimmableDriverActivity",
        inlineDimmerActivityAction:"InlineDimmerActivityAction",
        onOffApplianceActivityAction:"OnOffApplianceActivityAction",
        singleDimmerApplianceActivityAction:"SingleDimmerApplianceActivityAction",
        fanApplianceActivityAction:"FanApplianceActivityAction",
        colorTunableApplianceActivityAction:"ColorTunableApplianceActivityAction",
        keusDeviceActivityAction:"KeusDeviceActivityAction",
        keusSceneActivityAction:"KeusSceneActivityAction",
        keusGroupActivityAction:"KeusGroupActivityAction",

    }
}
export const KeusDeviceActivityActionSchema = {
    name: "KeusDeviceActivityAction",
    properties: {
        deviceId: "string",
        deviceCategory: "string",
        deviceName: "string",
        deviceSection: "string",
        deviceRoom: "string",
        deviceRoomName: "string",
        deviceSectionName: "string",
        deviceArea: "int",
        deviceAction: "mixed"
    }
}
export const activitySourceInfoSchema = {
    name: "activitySourceInfo",
    properties: {
        lastUpdateTime: "int",
        lastUpdatedBy: "string",
        lastUpdateUser: "string",
        lastUpdateSource: "string",
    }
}
export const activityPropertiesSchema = {
    name: "activityProperties",
    properties: {

    }
}
export const EmbeddedActivityActionSchema = {
    name: "EmbeddedActivityAction",
    properties: {
        applianceId: "string",
        applianceName: "string",
        applianceState: "mixed",
        applianceType: "int"
    }
}
export const EmbeddedOnOffApplianceStateSchema = {
    name: "EmbeddedOnOffApplianceState",
    properties: {
        switchState: "int"
    }
}
export const EmbeddedSingleDimmerApplianceStateSchema = {
    name: "EmbeddedSingleDimmerApplianceState",
    properties: {
        switchState: "int"
    }
}
export const EmbeddedFanApplianceStateSchema = {
    name: "EmbeddedFanApplianceState",
    properties: {
        fanState: "int",
    }
}
export const EmbeddedColorTunableApplianceStateSchema = {
    name: "EmbeddedColorTunableApplianceState",
    properties: {
        lightState: "int",
        warmWhiteState: "int",
        coolWhiteState: "int",
    }
}
export const SmartConsoleActivityActionSchema = {
    name: "SmartConsoleActivityAction",
    properties: {
        relayId: "int",
        relayName: "string",
        relayState: "int"
    }
}
export const IRRemoteActivityActionSchema = {
    name: "IRRemoteActivityAction",
    properties: {
        remoteId: "string",
        remoteName: "string",
        remoteType: "int",
        blast_info: "mixed"
    }
}
export const KeusIRACBlastActionSchema = {
    name: "KeusIRACBlastAction",
    properties: {
        updateType: { type: "int", optional: true },
        powerOn: "bool",
        temperature: "int",
        swingHLevel: { type: "string", optional: true },
        swingVLevel: { type: "string", optional: true },
        fanLevel: { type: "string", optional: true },
        mode: { type: "string", optional: true }
    }
}
export const KeusIRAMPBlastActionSchema = {
    name: "KeusIRAMPBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true }
    }
}
export const KeusIRFANBlastActionSchema = {
    name: "KeusIRFANBlastActionSchema",
    properties: {
        powerOn: "bool",
        speedLevel: { type: "string", optional: true },
        mode: { type: "string", optional: true },
        ledState: { type: "int", optional: true },
        updateType: { type: "int", optional: true }
    }
}
export const KeusIRPRBlastActionSchema = {
    name: "KeusIRPRBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true }
    }
}
export const KeusIRTVBlastActionSchema = {
    name: "KeusIRTVBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        channelNumber: { type: "int", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true }
    }
}
export const RgbwwaActivityActionSchema = {
    name: "RgbwwaActivityAction",
    properties: {
        deviceState: "int",
        red: { type: "int", optional: true },
        green: { type: "int", optional: true },
        blue: { type: "int", optional: true },
        warmWhite: { type: "int", optional: true },
        coolWhite: { type: "int", optional: true },
        amber: { type: "int", optional: true },
        pattern: { type: "int", optional: true },
        updateType: { type: "int", optional: true },
    }
}
export const DriverActivityActionSchema = {
    name: "DriverActivityAction",
    properties: {
        driverState: "int"
    }
}
export const CurtainActivityActionSchema = {
    name: "CurtainActivityAction",
    properties: {
        curtainState: "int"
    }
}
export const ContactSensorActivityActionSchema = {
    name: "ContactSensorActivityAction",
    properties: {
        deviceState: { type: "int", optional: true },
        notificationsEnabled: { type: "bool", optional: true }
    }
}
export const AcFancontrollerActivityActionSchema = {
    name: "AcFancontrollerActivityAction",
    properties: {
        fanState: { type: "int", optional: true },
        lightState: { type: "int", optional: true },
        swingState: { type: "int", optional: true }
    }
}
export const DcFancontrollerActivityActionSchema = {
    name: "DcFancontrollerActivityAction",
    properties: {
        fanState: { type: "int", optional: true },
        lightState: { type: "int", optional: true },
        lightTemperature: { type: "int", optional: true },
    }
}
export const DaliColorTunableActivityActionSchema = {
    name: "DaliColorTunableActivityAction",
    properties: {
        driverState: { type: "int", optional: true },
        colorTemperature: { type: "int", optional: true }
    }
}
export const DaliDimmableDriverActivityActionSchema = {
    name: "DaliDimmableDriverActivityAction",
    properties: {
        driverState: { type: "int", optional: true }
    }
}
export const DaliNonDimmableDriverActivityActionSchema = {
    name: "DaliNonDimmableDriverActivityAction",
    properties: {
        driverState: { type: "int", optional: true }
    }
}
export const ZigbeeDimmableDriverActivityActionSchema = {
    name: "ZigbeeDimmableDriverActivityAction",
    properties: {
        driverState: { type: "int", optional: true }
    }
}
export const ZigbeeNonDimmableDriverActivitySchema = {
    name: "ZigbeeNonDimmableDriverActivity",
    properties: {
        driverState: { type: "int", optional: true }
    }
}
export const InlineDimmerActivityActionSchema = {
    name: "InlineDimmerActivityAction",
    properties: {
        driverState: { type: "int", optional: true }
    }
}
export const OnOffApplianceActivityActionSchema = {
    name: "OnOffApplianceActivityAction",
    properties: {
        switchState: "int"
    }
}
export const SingleDimmerApplianceActivityActionSchema = {
    name: "SingleDimmerApplianceActivityAction",
    properties: {
        switchState: "int"
    }
}
export const FanApplianceActivityActionSchema = {
    name: "FanApplianceActivityAction",
    properties: {
        fanState: "int",
    }
}
export const ColorTunableApplianceActivityActionSchema = {
    name: "ColorTunableApplianceActivityAction",
    properties: {
        lightState: "int",
        warmWhiteState: "int",
        coolWhiteState: "int"
    }
}
export const KeusSceneActivityActionSchema = {
    name: "KeusSceneActivityAction",
    properties: {
        sceneId: "int",
        sceneName: "string",
        sceneType: "int",
        sceneSection: "string",
        sceneRoom: "string",
        sceneRoomName: "string",
        sceneArea: "int",
        sceneSectionName: "string",
        scenePresetType: "int"
    }
}
export const KeusGroupActivityActionSchema = {
    name: "KeusGroupActivityAction",
    properties: {
        groupId: "int",
        groupState: "mixed",
        groupName: "string",
        groupRoom: "string",
        groupRoomName: "string",
        groupSectionName: "string",
        groupSection: "string",
        groupType: "int",
        groupArea: "int",
    }
}
export const KeusActivityGroupStateObjectSchema = {
    name: "KeusActivityGroupStateObject",
    properties: {
        driverState: "int",
        red: {type:"int",optional:true},
        green: {type:"int",optional:true},
        blue: {type:"int",optional:true},
        warmWhite: {type:"int",optional:true},
        coolWhite: {type:"int",optional:true},
        amber: {type:"int",optional:true},
        pattern: {type:"int",optional:true},
    }
}
