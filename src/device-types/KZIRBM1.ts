export const KZIRBM1Schema= {
    name:"KZIRBM1",
    properties:{
        blastSignalDelay: "int",
    }

}

export const KZIRBM1StateSchema= {
    name:"KZIRBM1State",
    properties:{

    }
}

export const KZIRBM1ActionSchema= {
    name:"KZIRBM1Action",
    properties:{
        remoteId: "string",
        remoteType: "int",
        irDevice: "string",
        irBlastAction: "object",
    }

}
