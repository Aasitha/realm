export const KZSW01Schema={
    name:"KZSW01",
    properties:{
        buttons: "IKeusSmartConsoleButton[]",
        sceneStepSize: "int",
        batteryPercentage: {type:"int",optional:true}       
    }
}
export const KZSW01StateSchema= {
    name:"KZSW01State",
    properties:{

    }
}