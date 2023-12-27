export const KZDDSATM1Schema= {
    name:"KZDDSATM1",
    properties:{
        fadeTime: "int",
        fadeDown:"int",
        fadeOff:"int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }

}

export const KZDDSATM1StateSchema= {
    name:"KZDDSATM1State",
    properties:{
        driverState: "int"
    }

}

export const KZDDSATM1ActionSchema= {
    name:"KZDDSATM1Action",
    properties:{
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }

}
