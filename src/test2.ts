const outpotPorts={
    name:"outputPorts",
    properties:{
        portId:"int",
        portState:"int",
        applianceId:"int",
        isInAppliance:"bool"
    }
}
const applianceProperties={
    name:"applianceProperties",
    properties:{
        portId:"int"
    }
}
const applianceState={
    name:"applianceState",
    properties:{
        switchState:"int",
    }
}
const defaultState={
    name:"defaultState",
    properties:{
        switchState:"int",
    }
}
const appliance={
    name:"appliance",
    properties:{
        applianceId:"string",
        iconType:"int",
        inGroup:"bool",
        groupId:"int",
        applianceName:"string",
        applianceType:"int",
        lastUpdatedTime:"int",
        lastUpdatedUser:"string",
        lastUpdatedSource:"string",
        lastUpdatedBy:"string",

    }
}

const deviceProperties={
    name:"deviceProperties",
    properties:{

    }
}
const devices={
    name:"devices",
    properties:{
        _id:"string",
        deviceId:"string",
        masterId:"string",
        firmwareVersion:"string",
        deviceType:"string",
        deviceCategory:"string",
        deviceTypeName:"string",
        deviceTypeDisplayName:"string",
        manufacturerName:"string",
        isConfigured:"bool",
        isHidden:"bool",
        deviceRoom:"string",
        deviceName:"string",
        lastUpdateTime:"int",
        lastUpdateUser:"string",
        lastUpdateSource:"string",
        lastUpdateBy:"string",
        deviceSection:"string",
        deviceLocation:"string",
        deviceParent:"string",
        deviceControlType:"string",
        inGroup:"bool",
        deviceGroup:"int",
        groupRoom:"string",
    }
}