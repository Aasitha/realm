export const KZDD01Schema= {
    name:"KZDD01",
    properties:{
        fadeTime: "int",
        fadeDown:"int",
        fadeOff:"int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }

}

export const KZDD01StateSchema= {
    name:"KZDD01State",
    properties:{
        driverState: "int"
    }

}

export const KZDD01ActionSchema ={
    name:"KZDD01Action",
    properties:{
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }

}
