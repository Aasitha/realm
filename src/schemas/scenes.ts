import Realm from "realm"
// import { IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema } from "./gm-models/gmappliances";
// import { GMGroupIdentifierSchema } from "./gm-models/gmgroups";
// import { IEmbeddedColorTunableApplianceStateSchema, IEmbeddedOnOffApplianceStateSchema, IEmbeddedSingleDimmerApplianceStateSchema } from "../device-categories/zigbee-embedded-switch";
// import { IRBGSchema, IWWASchema } from "../device-categories/zigbee-rgbwwa-driver";
// import { IZigbeeIRBlasterAction_irBlastActionSchema } from "../device-categories/zigbee-ir-blaster";
export const BaseSchemaName = "IKeusSceneSchema";
export const BaseSchemaVersion = 1;
export class ISceneSyncInfo_syncRequestParamsSchema extends Realm.Object<ISceneSyncInfo_syncRequestParamsSchema> {
    static embedded?: boolean = true;
    timeslotId?: Realm.Types.Int;
    timeslotDelay?: Realm.Types.Int;


}
// export class IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo extends Realm.Object<IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo>{
//     static embedded?: boolean = true;
//     applianceSceneInfo: IKeusSceneActionSchema
//     applianceProtocolControlInfo: "mixed{}"
// }
// export class IKeusGMSceneActionInfoSchema extends Realm.Object<IKeusGMSceneActionInfoSchema> {
//     static embedded?: boolean = true;
//     protocolType?: string;
//     protocolSceneActionControlInfo?: IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo


// }
// export class IKeusAreaSceneActionSchema extends Realm.Object<IKeusAreaSceneActionSchema> {
//     static embedded?: boolean = true;
//     sceneId?: Realm.Types.Int;
//     roomId?: string;


// }

export class IKeusExcuteSceneActionSchema extends Realm.Object<IKeusExcuteSceneActionSchema> {
    static embedded?: boolean = true;
    sceneId?: Realm.Types.Int;
    sceneRoom?: string;

}

export class ISceneSyncInfoSchema extends Realm.Object<ISceneSyncInfoSchema> {
    static embedded?: boolean = true;
    syncStatus?: Realm.Types.Int;
    syncRequestId?: string;
    syncRequestType?: Realm.Types.Int;
    syncRequestTime?: Realm.Types.Int;
    syncRequestParams?: ISceneSyncInfo_syncRequestParamsSchema
    jobTypeName?: Realm.Types.Int;
    jobMessage?: string;

}
export class IKeusSceneTimeslotSchema extends Realm.Object<IKeusSceneTimeslotSchema> {
    static embedded?: boolean = true;
    timeslotId?: Realm.Types.Int;
    timeslotDelay?: Realm.Types.Int;

}
// export class IKeusSceneAction_actionItem_gmapplianceActionSchema extends Realm.Object<IKeusSceneAction_actionItem_gmapplianceActionSchema> {
//     static embedded?: boolean = true;
//     applianceType?: string;
//     applianceIdentifier?: IKeusGMApplianceIdentifierSchema
//     applianceState?: IKeusGMApplianceSavedStateAction_savedStateSchema

// }
// export class IKeusSceneAction_actionItem_gmgroupActionSchema extends Realm.Object<IKeusSceneAction_actionItem_gmgroupActionSchema> {
//     static embedded?: boolean = true;
//     groupType?: string;
//     groupIdentifier?: GMGroupIdentifierSchema
//     groupState?: IKeusGMApplianceSavedStateAction_savedStateSchema

// }
// export class IKeusSceneAction_actionItemSchema extends Realm.Object<IKeusSceneAction_actionItemSchema> {
//     static embedded?: boolean = true;
//     groupId?: Realm.Types.Int;
//     roomId?: string;
//     //driverState:{type:"int",optional:true},
//     driverState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceId?: string;
//     curtainState?: Realm.Types.Int;
//     applianceId?: string;
//     onOffState?: IEmbeddedOnOffApplianceStateSchema
//     singleDimmerState?: IEmbeddedSingleDimmerApplianceStateSchema
//     //fanState:{type:"object",objectType:"IEmbeddedFanApplianceState",optional:true},
//     colorTunableState?: IEmbeddedColorTunableApplianceStateSchema;
//     applianceType?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     fanState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     lightState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     swingState?: Realm.Types.Int;
//     deviceState?: Realm.Types.Int;
//     rgbState?: IRBGSchema
//     wwaState?: IWWASchema
//     relayId?: Realm.Types.Int;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteType?: Realm.Types.Int;
//     irDevice?: string;
//     irBlastAction?: IZigbeeIRBlasterAction_irBlastActionSchema
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;
//     sceneId?: Realm.Types.Int;
//     gmapplianceAction?: IKeusSceneAction_actionItem_gmapplianceActionSchema
//     gmgroupAction?: IKeusSceneAction_actionItem_gmgroupActionSchema;


// }
export class IKeusSceneActionSchema extends Realm.Object<IKeusSceneActionSchema> {
    static embedded?: boolean = true;
    actionId?: string;
    zigbeeActionId?: Realm.Types.Int;
    actionType?: string;
    timeslotId?: Realm.Types.Int;
    actionItem?: string;
    syncStatus?: Realm.Types.Int;
    syncRequestId?: string;
    jobTypeName?: Realm.Types.Int;
    jobMessage?: string;
    syncRequestTime?: Realm.Types.Int;


}
export class IKeusSceneSchema extends Realm.Object<IKeusSceneSchema> {
    static primaryKey = "sceneId";
    sceneId: Realm.Types.Int;
    sceneName?: string;
    sceneType?: Realm.Types.Int;
    sceneScope?: Realm.Types.Int;
    sceneExecutionType?: Realm.Types.Int;
    sceneSection?: string;
    sceneRoom?: string;
    actionList: Realm.Types.List<IKeusSceneActionSchema>
    timeslotList: Realm.Types.List<IKeusSceneTimeslotSchema>
    lastUpdateTime?: Realm.Types.Int;
    lastUpdateBy?: string;
    lastUpdateUser?: string;
    lastUpdateSource?: string;
    sceneSyncInfo?: ISceneSyncInfoSchema
    scenePresetType?: Realm.Types.Int;

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        console.log("============");

        const MongoClient = require('mongodb').MongoClient;

        const uri = 'mongodb://192.168.0.198:27017';
        const dbName = 'brijeshSir';
        const collectionName = 'scenes';


        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.find({}).toArray();
        realm.write(() => {
            result.forEach((doc: any) => {
                console.log(doc._id)
                doc.actionList.forEach((action) => {
                    action.actionItem = JSON.stringify(action.actionItem)
                })
                const realmActivity = realm.create(BaseSchemaName, {
                    sceneId: doc.sceneId,
                    sceneName: doc.sceneName,
                    sceneType: doc.sceneType,
                    sceneScope: doc.sceneScope,
                    sceneExecutionType: doc.sceneExecutionType,
                    sceneSection: doc.sceneSection,
                    sceneRoom: doc.sceneRoom,
                    actionList: doc.actionList,
                    timeslotList: doc.timeslotList,
                    lastUpdateTime: doc.lastUpdateTime,
                    lastUpdateBy: doc.lastUpdateBy,
                    lastUpdateUser: doc.lastUpdateUser,
                    lastUpdateSource: doc.lastUpdateSource,
                    sceneSyncInfo: doc.sceneSyncInfo,
                    scenePresetType: doc.scenePresetType,
                })
                console.log(realmActivity)
            })
        })
    }
    static async getSceneId(realm: Realm, data: any) {
        return data.sceneRoom + '-' + data.sceneId;
    }
    static async insertScene(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                sceneId: doc.sceneId,
                sceneName: doc.sceneName,
                sceneType: doc.sceneType,
                sceneScope: doc.sceneScope,
                sceneExecutionType: doc.sceneExecutionType,
                sceneSection: doc.sceneSection,
                sceneRoom: doc.sceneRoom,
                actionList: doc.actionList,
                timeslotList: doc.timeslotList,
                lastUpdateTime: doc.lastUpdateTime,
                lastUpdateBy: doc.lastUpdateBy,
                lastUpdateUser: doc.lastUpdateUser,
                lastUpdateSource: doc.lastUpdateSource,
                sceneSyncInfo: doc.sceneSyncInfo,
                scenePresetType: doc.scenePresetType,
            })
            console.log(realmActivity)
        })
    }
    static async getAllScenes(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getSceneById(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];

    }
    static async getScenesByRooms(realm: Realm, roomIds: Array<String>) {
        return realm.objects(BaseSchemaName).filtered('sceneRoom IN $0', roomIds);
    }
    static async getSceneByRoomAndType(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneType == $1', data.roomId, data.sceneType)
    }
    static async getSceneByRoomSectionAndType(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneType == $1 AND sceneSection == $2', data.roomId, data.sceneType, data.sectionId);
    }
    static async updateSceneName(realm: Realm, data: any) {
        realm.write(() => {
            const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
            scene.sceneName = data.sceneName;
        })
    }
    static async updateSceneTimeslotList(realm: Realm, data: any) {
        // const scene=realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1',data.roomId,data.sceneId)[0];
        // for(const key in data.updateObj){
        //     scene
        // }
        const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
        realm.write(() => {
            scene.timeslotList = data.sceneTimeslotList;
            if (data.sceneSyncInfo) {
                scene.sceneSyncInfo = data.sceneSyncInfo;
            }
        })

    }
    static async deleteSceneById(realm: Realm, data: any) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0])
        })
    }
    static async updateSceneActionList(realm: Realm, data: any) {
        const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
        realm.write(() => {
            scene.actionList = data.actionList;
        })
    }
    static async updateSceneExecution(realm: Realm, data: any) {
        const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
        realm.write(() => {
            scene.lastUpdateTime = data.lastUpdateTime,
                scene.lastUpdateBy = data.lastUpdateBy,
                scene.lastUpdateSource = data.lastUpdateSource,
                scene.lastUpdateUser = data.lastUpdateUser
        })
    }
    static async updateSceneSyncState(realm: Realm, data: any) {
        const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
        realm.write(() => {
            scene.sceneSyncInfo = data.sceneSyncState
        })
    }
    static async cleanGroupActionsFromScene(realm: Realm,data:any) {
        const scenes:any=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.groupId != data.groupId && actionItem.roomId != data.groupRoom
                })
            })
        })
    }
    static async cleanDeviceActionsFromScene(realm: Realm,pullQuery: any) {
        const scenes:any=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.deviceId !=pullQuery.actionItem.deviceId;
                })
            })
        })
    }
    static async cleanIRActionsFromScene(realm: Realm,deviceId:string) {
        const scenes:any=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.irDevice != deviceId;
                })
            })
        })
    }
    static async cleanRelayActionsFromScene(realm: Realm,data:any) {
        const scenes:any=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.deviceId != data.scDeviceId && !(data.relayIds.includes(actionItem.relayId));
                })
            })
        })
    }
    static async cleanRemoteActionsFromScene(realm: Realm,remoteId:string) {
        const scenes=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene:any)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.remoteId != remoteId
                })
            })
        })
    }
    static async cleanGlobalSceneActions(realm: Realm,data:any) {
        const scenes:any=realm.objects(BaseSchemaName);
        realm.write(()=>{
            scenes.forEach((scene)=>{
                scene.actionList=scene.actionList.filter((action)=>{
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.sceneId !== data.sceneId && actionItem.roomId != data.sceneRoom; 
                })
            })
        })
    }
    static async replaceSceneAction(realm: Realm) {
        
    }
    static async getSceneListByQuery(realm: Realm) {

    }
    static async cleanGMApplianceScenes(realm: Realm, applianceIdentifier: any) {
        const scenes: any = realm.objects(BaseSchemaName);
        realm.write(() => {
            scenes.forEach((scene) => {
                scene.actionList = scene.actionList.filter((action) => {
                    let actionItem=JSON.parse(action.actionItem);
                    return actionItem.applianceIdentifier !== applianceIdentifier;
                });
            })
        })

    }
    static async getScenesWithGMAppliance(realm: Realm, applianceIdentifier: any) {
        return realm.objects(BaseSchemaName).filtered('actionList.actionItem.applianceIdentifier == $0', applianceIdentifier);
    }
    static async getScenesWithGMGroup(realm: Realm, groupIdentifier: any) {
        return realm.objects(BaseSchemaName).filtered('actionList.actionItem.groupIdentifier == $0', groupIdentifier)
    }
    static async getScenesWithGroup(realm: Realm, groupId: number) {
        return realm.objects(BaseSchemaName).filtered('actionList.actionItem.groupId == $0', groupId)
    }
    static async getScenesWithDeviceAndRelay(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('actionList.actionItem.deviceId == $0 AND actionList.actionItem.relayId == $1', data.deviceId, data.relayId)
    }
    static async updateScenePresetType(realm: Realm, data: any) {
        const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
        realm.write(() => {
            scene.scenePresetType = data.scenePresetType
        })
    }

}
export const ModelsList = [
    IKeusSceneSchema,
    // IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema,
    // GMGroupIdentifierSchema,
    // IEmbeddedColorTunableApplianceStateSchema, IEmbeddedOnOffApplianceStateSchema, IEmbeddedSingleDimmerApplianceStateSchema,
    // IRBGSchema, IWWASchema,
    // IZigbeeIRBlasterAction_irBlastActionSchema,
    ISceneSyncInfo_syncRequestParamsSchema,
    // IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo,
    // IKeusGMSceneActionInfoSchema,
    // IKeusAreaSceneActionSchema,
    // IKeusExcuteSceneActionSchema,
    ISceneSyncInfoSchema,
    IKeusSceneTimeslotSchema,
    // IKeusSceneAction_actionItem_gmapplianceActionSchema,
    // IKeusSceneAction_actionItem_gmgroupActionSchema,
    // IKeusSceneAction_actionItemSchema,
    IKeusSceneActionSchema,

]