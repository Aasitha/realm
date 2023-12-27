import Realm from 'realm';

export const BaseSchemaName = "IKeusActivitySchema";
export const BaseSchemaVersion = 1;
export class IActivitySourceInfoSchema extends Realm.Object<IActivitySourceInfoSchema>{
    lastUpdateTime?: Realm.Types.Int;
    lastUpdatedBy?: string;
    lastUpdateUser?: string;
    lastUpdateSource?: string;

    static embedded?: boolean = true;
}
// export class activityAction_deviceAction extends Realm.Object<activityAction_deviceAction>{
//     applianceId?: string;
//     applianceName?: string;
//     applianceState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     applianceType?: Realm.Types.Int;
//     relayId?: Realm.Types.Int;
//     relayName?: string;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteName?: string;
//     remoteType?: Realm.Types.Int;
//     blast_info?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     driverState?: Realm.Types.Int;
//     curtainState?: Realm.Types.Int;
//     notificationsEnabled?: boolean
//     fanState?: Realm.Types.Int;
//     lightState?: Realm.Types.Int;
//     swingState?: Realm.Types.Int;
//     lightTemperature?: Realm.Types.Int;
//     colorTemperature?: Realm.Types.Int;
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;

//     static embedded?: boolean = true;
// }

// export class IKeusActivitySchema_activityAction extends Realm.Object<IKeusActivitySchema_activityAction>{
//     applianceId?: string;
//     applianceName?: string;
//     applianceState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     applianceType?: Realm.Types.Int;
//     relayId?: Realm.Types.Int;
//     relayName?: string;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteName?: string;
//     remoteType?: Realm.Types.Int;
//     blast_info?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     driverState?: Realm.Types.Int;
//     curtainState?: Realm.Types.Int;
//     notificationsEnabled?: boolean
//     fanState?: Realm.Types.Int;
//     lightState?: Realm.Types.Int;
//     swingState?: Realm.Types.Int;
//     lightTemperature?: Realm.Types.Int;
//     colorTemperature?: Realm.Types.Int;
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;
//     deviceId?: string;
//     deviceCategory?: string;
//     deviceName?: string;
//     deviceSection?: string;
//     deviceRoom?: string;
//     deviceRoomName?: string;
//     deviceSectionName?: string;
//     deviceArea?: Realm.Types.Int;
//     deviceAction?: activityAction_deviceAction;
//     sceneId?: Realm.Types.Int;
//     sceneName?: string;
//     sceneType?: Realm.Types.Int;
//     sceneSection?: string;
//     sceneRoom?: string;
//     sceneRoomName?: string;
//     sceneArea?: Realm.Types.Int;
//     sceneSectionName?: string;
//     scenePresetType?: Realm.Types.Int;
//     groupId?: Realm.Types.Int;
//     groupState?: Realm.Types.Dictionary<Realm.Types.Mixed>;
//     groupName?: string;
//     groupRoom?: string;
//     groupRoomName?: string;
//     groupSectionName?: string;
//     groupSection?: string;
//     groupType?: Realm.Types.Int;
//     groupArea?: Realm.Types.Int;

//     static embedded?: boolean = true;
// }

// export class IKeusActivityGroupStateObjectSchema extends Realm.Object<IKeusActivityGroupStateObjectSchema> {
//     driverState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;

//     static embedded?: boolean = true;
// }


export class IKeusActivitySchema extends Realm.Object<IKeusActivitySchema> {
    activityId: string;
    activitySourceInfo?: IActivitySourceInfoSchema
    // activityState?: object
    // activityProperties?: object
    activityGMType?: string
    activityIdentifier?: Realm.Types.Dictionary<Realm.Types.Mixed>
    activitySource?: string;
    activityBy?: string;
    activityUsername?: string;
    activityTime?: Realm.Types.Int;
    activityType?: Realm.Types.Int;
    activityAction?: string;
    // blast_info_processing?:Realm.Types.Bool;
    // applianceState_processing?:Realm.Types.Bool;
    // deviceAction_processing?:Realm.Types.Bool;
    // groupState_processing?:Realm.Types.Bool;
    processing?:Realm.Types.Bool;
    static primaryKey = "activityId";
}

export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'activities';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    //console.log(doc._id)
                    if(doc.activityAction!=null ){
                        // if(doc.activityAction.blast_info != null){
                            
                        //     doc.activityAction.blast_info=JSON.stringify(doc.activityAction.blast_info)
                        //     // console.log(doc.activityAction.blast_info)
                        //     // console.log(typeof doc.activityAction.blast_info)
                        //     doc.blast_info_processing=true
                        //     doc.processing=true
                            
                            
                        // }
                        // if(doc.activityAction.applianceState !=null){
                        //     doc.activityAction.applianceState=JSON.stringify(doc.activityAction.applianceState)
                        //     // console.log(doc.activityAction.applianceState)
                        //     // console.log(typeof doc.activityAction.applianceState)
                        //     doc.applianceState_processing=true
                        //     doc.processing=true
                        // }
                        // if(doc.activityAction.deviceAction != null){
                        //     doc.activityAction.deviceAction=JSON.stringify(doc.activityAction.deviceAction)
                        //     // console.log(doc.activityAction.deviceAction)
                        //     // console.log(typeof doc.activityAction.deviceAction)
                        //     doc.deviceAction_processing=true
                        //     doc.processing=true
                        // }
                        // if(doc.activityAction.groupState != null){
                        //     doc.activityAction.groupState=JSON.stringify(doc.activityAction.groupState)
                        //     // console.log(doc.activityAction.groupState)
                        //     // console.log(typeof doc.activityAction.groupState)
                        //     doc.groupState_processing=true
                        //     doc.processing=true
                        // }
                        doc.activityAction=JSON.stringify(doc.activityAction)
                        doc.processing=true;
                        //console.log(doc.processing)
                    }
                    
                    const realmActivity = realm.create(BaseSchemaName, {
                        activityId: doc.activityId,
                        activitySourceInfo: doc.activitySourceInfo,
                        activityGMType: doc.activityGMType,
                        activityIdentifier: doc.activityIdentifier,
                        activitySource: doc.activitySource,
                        activityBy: doc.activityBy,
                        activityUsername: doc.activityUsername,
                        activityTime: doc.activityTime,
                        activityType: doc.activityType,
                        activityAction: doc.activityAction,
                        processing:doc.processing
                    })
                
                })
            })

        } catch (e) {
            return e;
        }
    }
    static async insertActivity(realm: Realm, doc: IKeusActivitySchema) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                activityId: doc.activityId,
                activitySourceInfo: doc.activitySourceInfo,
                activityGMType: doc.activityGMType,
                activityIdentifier: doc.activityIdentifier,
                activitySource: doc.activitySource,
                activityBy: doc.activityBy,
                activityUsername: doc.activityUsername,
                activityTime: doc.activityTime,
                activityType: doc.activityType,
                activityAction: doc.activityAction
            })
        })
    }
    static async getAllActivity(realm: Realm) {
        console.time('Execution time');
        const startMemoryUsage = process.memoryUsage().heapUsed;
        const res = realm.objects(BaseSchemaName)
        const endMemoryUsage = process.memoryUsage().heapUsed;
        const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

        console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

        // End execution time
        //console.log(res[0].activityId)
        //let actualResult=[]
        // for(let i=0;i<res.length;i++){
        //     actualResult.push({
        //         activityId: res[i].activityId,
        //         activitySourceInfo: res[i].activitySourceInfo,
        //         activityGMType: res[i].activityGMType,
        //         activityIdentifier: res[i].activityIdentifier,
        //         activitySource: res[i].activitySource,
        //         activityBy: res[i].activityBy,
        //         activityUsername: res[i].activityUsername,
        //         activityTime: res[i].activityTime,
        //         activityType: res[i].activityType,
        //         activityAction: JSON.parse(JSON.stringify(res[i].activityAction))
        //     })
        // }
        console.timeEnd('Execution time');
        // var size=Buffer.from(JSON.stringify(res)).length
        // const messageSizeMB = size / (1024 * 1024);
        // console.log(messageSizeMB)
        //console.log(actualResult[0])
        //let act=actualResult[0]
        return res;
    }
    static async getTopNActivity(realm: Realm, n: number) {
        return realm.objects(BaseSchemaName).sorted('activityTime', true).slice(0,n)
    }
    static async deleteAllActivity(realm: Realm) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName));
        })
    }
    static async updateActivity(realm: Realm, doc: IKeusActivitySchema) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                activityId: doc.activityId,
                activitySourceInfo: doc.activitySourceInfo,
                activityGMType: doc.activityGMType,
                activityIdentifier: doc.activityIdentifier,
                activitySource: doc.activitySource,
                activityBy: doc.activityBy,
                activityUsername: doc.activityUsername,
                activityTime: doc.activityTime,
                activityType: doc.activityType,
                activityAction: doc.activityAction
            }, Realm.UpdateMode.Modified)
        })
    }
    static async getTopNActivityInTimeRange(realm: Realm, startTime: number, endTime: number, numberOfEntries: number) {
        return realm.objects(BaseSchemaName).filtered('activityTime >= $0 AND activityTime < $1').sorted('activityTime', true).slice(0, numberOfEntries);
    }
    static async getTopNActivityForGuests(realm: Realm, n: number, rooms: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('activityAction.deviceRoom IN $0 OR activityAction.groupRoom IN $0 OR activityAction.sceneRoom IN $0', rooms).sorted('activityTime', true).slice(0, n);
    }
    static async getActivityByGMApplinacetype(realm: Realm, gmapplinaceTypes: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('activityGMType IN $0', gmapplinaceTypes)
    }

}
export const ModelsList = [
    IKeusActivitySchema, IActivitySourceInfoSchema,
]



