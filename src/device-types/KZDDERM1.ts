export const KZDDERM1Schema= {
    name:"KZDDERM1",
    properties:{
        fadeTime: "int",
        fadeDown:"int",
        fadeOff:"int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }

}

export const KZDDERM1StateSchema= {
    name:"KZDDERM1State",
    properties:{
        driverState: "int"
    }

}

export const KZDDERM1ActionSchema ={
    name:"KZDDERM1Action",
    properties:{
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }

}
