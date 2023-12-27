export const KZIRB01Schema= {
    name:"KZIRB01",
    properties:{
        blastSignalDelay: "int",
    }

}

export const KZIRB01StateSchema= {
    name:"KZIRB01State",
    properties:{

    }
}

export const KZIRB01ActionSchema= {
    name:"KZIRB01Action",
    properties:{
        remoteId: "string",
        remoteType: "int",
        irDevice: "string",
        irBlastAction: "object",
    }

}
