"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZES1PSchema = exports.KZES1PApplianceSchema = exports.KZES1PApplianceStateSchema = exports.KZES1PAppliancePropertiesSchema = exports.KZES1PSwitchPropertiesSchema = exports.KZES1PSwitchSchema = void 0;
exports.KZES1PSwitchSchema = {
    name: "KZES1PSwitch",
    properties: {
        switchId: "int",
        switchType: "int",
        switchName: "string",
        switchProperties: "KZES1PSwitchProperties",
    }
};
exports.KZES1PSwitchPropertiesSchema = {
    name: "KZES1PSwitchProperties",
    embedded: true,
    properties: {
        applianceId: { type: "string", optional: true },
        groupId: { type: "int", optional: true },
        roomId: { type: "string", optional: true },
        deviceId: { type: "string", optional: true },
    }
};
exports.KZES1PAppliancePropertiesSchema = {
    name: "KZES1PApplianceProperties",
    properties: {
        warmWhitePort: { type: "int", optional: true },
        coolWhitePort: { type: "int", optional: true },
        fadeTime: { type: "int", optional: true },
        fadeDown: { type: "int", optional: true },
        fadeOff: { type: "int", optional: true },
        minValue: { type: "int", optional: true },
        maxValue: { type: "int", optional: true },
        defaultState: { type: "int", optional: true },
        portId: { type: "int", optional: true },
    }
};
exports.KZES1PApplianceStateSchema = {
    name: "KZES1PApplianceState",
    embedded: true,
    properties: {
        switchState: { type: "int", optional: true },
        fanState: { type: "int", optional: true },
        lightState: { type: "int", optional: true },
        warmWhiteState: { type: "int", optional: true },
        coolWhiteState: { type: "int", optional: true },
    }
};
exports.KZES1PApplianceSchema = {
    name: "KZES1PAppliance",
    properties: {
        applianceId: "string",
        applianceName: "string",
        applianceType: "int",
        applianceState: "KZES1PApplianceState",
        applianceProperties: "KZES1PApplianceProperties",
        iconType: "int",
        defaultState: "KZES1PApplianceState",
        inGroup: "bool",
        groupId: "int",
        groupRoom: { type: "string", optional: true },
        lastUpdatedTime: "int",
        lastUpdatedBy: "string",
        lastUpdatedUser: { type: "string", optional: true },
        lastUpdatedSource: "string",
    }
};
exports.KZES1PSchema = {
    name: "KZES1P",
    embedded: true,
    properties: {
        outputPorts: "IEmbeddedSwitchPort[]",
        appliance: "KZES1PAppliance[]",
        switch: "KZES1PSwitch[]",
        isAreaMaster: "mixed",
    }
};
