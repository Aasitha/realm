
export const KZES4PSwitchSchema = {
    name: "KZES4PSwitch",
    properties: {
        switchId: "int",
        switchType: "int",
        switchName: "string",
        switchProperties: "KZES1PSwitchProperties",
    }

}
export const KZES4PSwitchPropertiesSchema={
    name:"KZES4PSwitchProperties",
    embedded:true,
    properties:{
        applianceId:{type:"string",optional:true},
        groupId:{type:"int",optional:true},
        roomId:{type:"string",optional:true},
        deviceId:{type:"string",optional:true},

    }
}

export const KZES4PAppliancePropertiesSchema={
    name:"KZES4PApplianceProperties",
    properties:{
        warmWhitePort:{type:"int",optional:true},
        coolWhitePort: {type:"int",optional:true},
        fadeTime: {type:"int",optional:true},
        fadeDown:{type:"int",optional:true},
        fadeOff:{type:"int",optional:true},
        minValue: {type:"int",optional:true},
        maxValue: {type:"int",optional:true},
        defaultState:{type:"int",optional:true},
        portId:{type:"int",optional:true},


    }
}
export const KZES4PApplianceStateSchema={
    name:"KZES4PApplianceState",
    embedded:true,
    properties:{
        switchState:{type:"int",optional:true},
        fanState:{type:"int",optional:true},
        lightState:{type:"int",optional:true},
        warmWhiteState:{type:"int",optional:true},
        coolWhiteState:{type:"int",optional:true},
    }
}
export const KZES4PApplianceSchema = {
    name: "KZES4PAppliance",
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
        groupRoom: {type:"string",optional:true},
        lastUpdatedTime: "int",
        lastUpdatedBy: "string",
        lastUpdatedUser: {type:"string",optional:true},
        lastUpdatedSource: "string",
    }

}
export const KZES4PSchema = {
    name: "KZES4P",
    embedded:true,
    properties: {
        outputPorts: "IEmbeddedSwitchPort[]",
        appliance: "KZES1PAppliance",
        switch: "KZES1PSwitch[]",
        isAreaMaster: "mixed",
    }

}