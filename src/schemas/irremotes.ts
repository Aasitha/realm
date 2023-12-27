import { field } from 'fp-ts';
import Realm from 'realm';
export const BaseSchemaName = "IKeusIRRemoteSchema";
export const BaseSchemaVersion = 1;

// export class IKeusIRACRemotePropertiesSchema extends Realm.Object<IKeusIRACRemotePropertiesSchema>{
//     static embedded?: boolean = true;
//     temperatureRange: Realm.Types.List<Realm.Types.Int>;
//     swingHEnabled?: Realm.Types.Bool;
//     swingHSelectType?: Realm.Types.Int;
//     swingHOptions: Realm.Types.List<string>;
//     swingVEnabled?: Realm.Types.Bool;
//     swingVSelectType?: Realm.Types.Int;
//     swingVOptions: Realm.Types.List<string>;
//     fanEnabled?: Realm.Types.Bool;
//     fanSelectType?: Realm.Types.Int;
//     fanOptions: Realm.Types.List<string>;
//     modeEnabled?: Realm.Types.Bool;
//     modeSelectType?: Realm.Types.Int;
//     modeOptions: Realm.Types.List<string>;
// }
// export const IKeusIRACRemotePropertiesSchema={
//     name:"IKeusIRACRemoteProperties",
//     embedded:true,
//     properties:{
//         temperatureRange:{type:"int[]",optional:true},
//         swingHEnabled:{type:"bool",optional:true},
//         swingHSelectType:{type:"int",optional:true},
//         swingHOptions:{type:"string[]",optional:true},
//         swingVEnabled:{type:"bool",optional:true},
//         swingVSelectType:{type:"int",optional:true},
//         swingVOptions:{type:"string[]",optional:true},
//         fanEnabled:{type:"bool",optional:true},
//         fanSelectType:{type:"int",optional:true},
//         fanOptions:{type:"string[]",optional:true},
//         modeEnabled:{type:"bool",optional:true},
//         modeSelectType:{type:"int",optional:true},
//         modeOptions:{type:"string[]",optional:true},
//     }
// }
// export class IKeusIRACRemoteStateSchema extends Realm.Object<IKeusIRACRemoteStateSchema> {
//     static embedded?: boolean = true;
//     powerOn?: Realm.Types.Bool;
//     temperature?: Realm.Types.Int;
//     swingHLevel?: string;
//     swingVLevel?: string;
//     fanLevel?: string;
//     mode?: string;
//     updateType?: Realm.Types.Int;
// }
// export const IKeusIRACRemoteStateSchema={
//     name:"IKeusIRACRemoteState",
//     embedded:true,
//     properties:{
//         powerOn:{type:"bool",optional:true},
//         temperature:{type:"int",optional:true},
//         swingHLevel:{type:"string",optional:true},
//         swingVLevel:{type:"string",optional:true},
//         fanLevel:{type:"string",optional:true},
//         mode:{type:"string",optional:true},
//         updateType:{type:"int",optional:true},
//     }
// }
// export class IKeusIRTVRemotePropertiesSchema extends Realm.Object<IKeusIRTVRemotePropertiesSchema>{
//     static embedded?: boolean = true;
//     sourceEnabled?: Realm.Types.Bool;
//     sourceSelectType?: Realm.Types.Int;
//     sourceOptions: Realm.Types.List<string>;
//     modeEnabled?: Realm.Types.Bool;
//     modeSelectType?: Realm.Types.Int;
//     modeOptions: Realm.Types.List<string>;
// }
// export const IKeusIRTVRemotePropertiesSchema = {
//     name: "IKeusIRTVRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]"
//     }
// }
// export class IKeusIRTVRemoteStateSchema extends Realm.Object<IKeusIRTVRemoteStateSchema>{
//     static embedded?: boolean = true;

// }
// export const IKeusIRTVRemoteStateSchema = {
//     name: "IKeusIRTVRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
// export class IKeusIRAMPRemotePropertiesSchema extends Realm.Object<IKeusIRAMPRemotePropertiesSchema>{
//     static embedded?: boolean = true;
//     sourceEnabled?: Realm.Types.Bool;
//     sourceSelectType?: Realm.Types.Int;
//     sourceOptions: Realm.Types.List<string>;
//     modeEnabled?: Realm.Types.Bool;
//     modeSelectType?: Realm.Types.Int;
//     modeOptions: Realm.Types.List<string>;
// }
// export const IKeusIRAMPRemotePropertiesSchema = {
//     name: "IKeusIRAMPRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]"
//     }
// }
// export class IKeusIRAMPRemoteStateSchema extends Realm.Object<IKeusIRAMPRemoteStateSchema>{
//     static embedded?: boolean = true;

// }
// export const IKeusIRAMPRemoteStateSchema = {
//     name: "IKeusIRAMPRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
// export class IKeusIRPRRemotePropertiesSchema extends Realm.Object<IKeusIRPRRemotePropertiesSchema>{
//     static embedded?: boolean = true;
//     sourceEnabled?: Realm.Types.Bool;
//     sourceSelectType?: Realm.Types.Int;
//     sourceOptions: Realm.Types.List<string>;
//     modeEnabled?: Realm.Types.Bool;
//     modeSelectType?: Realm.Types.Int;
//     modeOptions: Realm.Types.List<string>;
//     onoffType?: Realm.Types.Int;
// }
// export const IKeusIRPRRemotePropertiesSchema = {
//     name: "IKeusIRPRRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]",
//         onoffType: Realm.Types.Int
//     }
// }
// export class IKeusIRPRRemoteStateSchema extends Realm.Object<IKeusIRPRRemoteStateSchema>{
//     static embedded?: boolean = true;
//     updateType?: Realm.Types.Int;
//     powerOn?: Realm.Types.Bool;
//     source?: string;
//     mode?: string;
// }
// export const IKeusIRPRRemoteStateSchema = {
//     name: "IKeusIRPRRemoteState",
//     embedded: true,
//     properties: {
//         updateType: Realm.Types.Int
//         powerOn: Realm.Types.Bool
//         source: string;
//         mode: { type: "string", optional: true }
//     }
// }
// export class IKeusIRFANRemotePropertiesSchema extends Realm.Object<IKeusIRFANRemotePropertiesSchema>{
//     static embedded?: boolean = true;
//     speedSelectType: Realm.Types.Int;
//     speedOptions: Realm.Types.List<string>;
//     modeEnabled: Realm.Types.Bool;
//     modeSelectType: Realm.Types.Int;
//     modeOptions: Realm.Types.List<string>;
//     ledEnabled: Realm.Types.Bool;
// }
// export const IKeusIRFANRemotePropertiesSchema = {
//     name: "IKeusIRFANRemoteProperties",
//     embedded: true,
//     properties: {
//         speedSelectType: Realm.Types.Int
//         speedOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]",
//         ledEnabled: Realm.Types.Bool
//     }
// }
// export class IKeusIRFANRemoteStateSchema extends Realm.Object<IKeusIRFANRemoteStateSchema> {
//     static embedded?: boolean = true;
//     powerOn?: Realm.Types.Bool;
//     speedLevel?: string;
//     mode?: string;
//     ledState?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;

// }

// export const IKeusIRRemote_remotePropertiesMap = {
//     0: "iKeusIRACRemoteProperties",
//     1: "iKeusIRTVRemoteProperties",
//     2: "iKeusIRAMPRemoteProperties",
//     3: "iKeusIRPRRemoteProperties",
//     4: "iKeusIRFANRemoteProperties"
// }
// export class IKeusIRRemote_remotePropertiesSchema extends Realm.Object<IKeusIRRemote_remotePropertiesSchema> {
//     static embedded?: boolean = true;
//     T0?: IKeusIRACRemotePropertiesSchema;
//     T1?: IKeusIRTVRemotePropertiesSchema;
//     T2?: IKeusIRAMPRemotePropertiesSchema;
//     T3?: IKeusIRPRRemotePropertiesSchema;
//     T4?: IKeusIRFANRemotePropertiesSchema;


// }
enum irremoteTypes {
    IR_AC = 0,
    IR_TV = 1,
    IR_AMP = 2,
    IR_PR = 3,
    IR_FAN = 4,
}

// export const IKeusIRRemote_remoteStateMap = {
//     0: "iKeusIRACRemoteState",
//     1: "iKeusIRTVRemoteState",
//     2: "iKeusIRAMPRemoteState",
//     3: "iKeusIRPRRemoteState",
//     4: "iKeusIRFANRemoteState",
// }
// export class IKeusIRRemote_remoteStateSchema extends Realm.Object<IKeusIRRemote_remoteStateSchema> {
//     static embedded?: boolean = true;

//     T0?: IKeusIRACRemoteStateSchema;
//     T1?: IKeusIRTVRemoteStateSchema;
//     T2?: Realm.Types.Dictionary<Realm.Types.Mixed>;
//     T3?: IKeusIRPRRemoteStateSchema;
//     T4?: IKeusIRFANRemoteStateSchema;

// }
export class IKeusIRRemoteSchema extends Realm.Object<IKeusIRRemoteSchema> {
    static primaryKey = "remoteId";
    remoteId!: string
    irDevice?: string;
    companyId?: string;
    modelId?: string;
    remoteName?: string;
    remoteType?: Realm.Types.Int
    remoteProperties?: string;
    remoteState?: string;
    lastUpdateTime?: Realm.Types.Int
    lastUpdateBy?: string;
    lastUpdateUser?: string;
    lastUpdateSource?: string;

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'irremotes';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    if (doc.remoteState != null) {
                        doc.remoteState = JSON.stringify(doc.remoteState)
                    }
                    if (doc.remoteProperties != null) {
                        doc.remoteProperties = JSON.stringify(doc.remoteProperties)
                    }
                    // let groupTransformOptions = ["remoteProperties", "remoteState"]
                    // console.log(groupTransformOptions);
                    // let transformValues = ["remoteType", "remoteType"]
                    const realmActivity = realm.create(BaseSchemaName, {
                        // transformValues: transformValues,
                        // transformOptions: groupTransformOptions,
                        remoteId: doc.remoteId,
                        irDevice: doc.irDevice,
                        companyId: doc.companyId,
                        modelId: doc.modelId,
                        remoteName: doc.remoteName,
                        remoteType: doc.remoteType,
                        remoteProperties: doc.remoteProperties,
                        remoteState: doc.remoteState,
                        lastUpdateTime: doc.lastUpdateTime,
                        lastUpdateBy: doc.lastUpdateBy,
                        lastUpdateUser: doc.lastUpdateUser,
                        lastUpdateSource: doc.lastUpdateSource,
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async insertIRRemote(realm: Realm, doc: any) {
        // let groupTransformOptions = ["remoteProperties", "remoteState"]
        // console.log(groupTransformOptions);
        // let transformValues = ["remoteType", "remoteType"]
        if (doc.remoteState != null) {
            doc.remoteState = JSON.stringify(doc.remoteState)
        }
        if (doc.remoteProperties != null) {
            doc.remoteProperties = JSON.stringify(doc.remoteProperties)
        }
        realm.write(() => {
            realm.create(BaseSchemaName, {
                // transformValues: transformValues,
                // transformOptions: groupTransformOptions,
                remoteId: doc.remoteId,
                irDevice: doc.irDevice,
                companyId: doc.companyId,
                modelId: doc.modelId,
                remoteName: doc.remoteName,
                remoteType: doc.remoteType,
                remoteProperties: doc.remoteProperties,
                remoteState: doc.remoteState,
                lastUpdateTime: doc.lastUpdateTime,
                lastUpdateBy: doc.lastUpdateBy,
                lastUpdateUser: doc.lastUpdateUser,
                lastUpdateSource: doc.lastUpdateSource,
            })
        })
    }
    static async getAllIRRemotes(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async bulkWrite(realm: Realm, operationList: Array<any>) {
        operationList.forEach((operation) => {
            let irremote = realm.objectForPrimaryKey(BaseSchemaName, operation.updateOne.filter.remoteId);
            realm.write(() => {
                Object.keys(operation.updateOne.update.$set).forEach((field) => {
                    let value = operation.updateOne.update.$set[field];
                    if ((field == "remoteState" || field == "remoteProperties") && value != null) {
                        irremote[field] = JSON.stringify(value);
                    } else {
                        irremote[field] = value;
                    }
                })
            })
        })
    }
    static async setLastUpdatedRemoteState(realm: Realm, data: any) {
        realm.write(() => {
            let remote = realm.objectForPrimaryKey(BaseSchemaName, data.remoteId)
            //remote.lastUpdatedRemoteState = data.lastUpdatedRemoteState;
            for (const field of Object.keys(data.lastUpdatedRemoteState)) {
                if (field == "remoteState" || "remoteProperties") {
                    data.lastUpdatedRemoteState[field] = JSON.stringify(data.lastUpdatedRemoteState[field])
                }
                remote[field] = data.lastUpdatedRemoteState[field]
            }
        })
    }
    static async getIRRemoteById(realm: Realm, remoteId: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, remoteId)
    }
    static async getIRACRemoteByParentDeviceId(realm: Realm, irBlasterID: string) {
        return realm.objects(BaseSchemaName).filtered(`irDevice=="${irBlasterID}" && remoteType==${irremoteTypes.IR_AC}`)
    }
    static async cleanIRRemotes(realm: Realm, IRDeviceId: string) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('irDevice == $0', IRDeviceId));
        })
    }
    static async updateIRRemoteState(realm: Realm, data: any) {
        realm.write(() => {
            let remote = realm.objectForPrimaryKey(BaseSchemaName, data.remoteId)
            remote.remoteState = JSON.stringify(data.remoteState);
        })
    }
    static async updateIRRemoteName(realm: Realm, data: any) {
        realm.write(() => {
            let remote = realm.objectForPrimaryKey(BaseSchemaName, data.remoteId)
            remote.remoteName = data.remoteName;
        })
    }
    static async deleteRemoteById(realm: Realm, remoteId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, remoteId))
        })
    }
    static async replaceIrDeviceId(realm: Realm) {

    }
}
export const ModelsList = [
    IKeusIRRemoteSchema,
    //IKeusIRACRemotePropertiesSchema, IKeusIRACRemoteStateSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRTVRemoteStateSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRAMPRemoteStateSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRPRRemoteStateSchema, IKeusIRFANRemotePropertiesSchema, IKeusIRFANRemoteStateSchema, IKeusIRRemote_remotePropertiesSchema, IKeusIRRemote_remoteStateSchema,
]