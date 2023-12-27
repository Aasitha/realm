import Realm from 'realm';

export const BaseSchemaName = "IKeusDMSceneSchema";
export const BaseSchemaVersion = 1;

//Edit both interface & schema when making changes to device structure
//Device interface for server

export enum FetchType {
    SCENE_IDS = 1,
    AREA_SCENE_IDS = 2
}

export enum IKeusDMDeviceType {
    ZIGBEE_CURTAIN_CONTROLLER = 1,
    ZIGBEE_FAN_CONTROLLER = 2,
    ZIGBEE_DIMMABLE_LED_DRIVER = 3,
    DALI_DIMMABLE_LED_DRIVER = 4,
    SMARTCONSOLE_RELAY = 5,
    ZIBGEE_IR_BLASTER = 6,
    EMBEDDED = 7,
    RGBWWA = 8
}

export interface IKeusDMScenesDeviceInfo {
    mode: number;
    baseDeviceType?: string;
    type?: IKeusDMDeviceType;
    info?: any;
}

export enum IKeusDMGroupType {
    DALI_DIMMABLE_DRIVER = 1,
    ZIGBEE_DIMMABLE_DRIVER = 2,
    EMBEDDED_GROUP = 3,
    RGBWWA_GROUP = 4
}

export interface IKeusDMScenesGroupInfo {
    groupId: number;
    type: IKeusDMGroupType;
    info?: Array<any>;
}

export interface IKeusDMDaliSceneInfo {
    daliSceneId: number;
}

export class IKeusDMSceneSchema extends Realm.Object<IKeusDMSceneSchema> {
    static primaryKey = "sceneId";
    sceneId: number;
    areaId?: number;
    areaSceneId?: number;
    gSceneIdsList?: Array<number>;
    daliMasterIds?: string;
    devices?: string;
    groups?: string;
}
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'keusdmscenes';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    if (doc.daliMasterIds != null)
                        doc.daliMasterIds = JSON.stringify(doc.daliMasterIds)
                    if (doc.devices != null)
                        doc.devices = JSON.stringify(doc.devices)
                    if (doc.groups != null)
                        doc.groups = JSON.stringify(doc.groups)
                    const realmActivity = realm.create(BaseSchemaName, {
                        sceneId: doc.sceneId,
                        areaId: doc.areaId,
                        areaSceneId: doc.areaSceneId,
                        gSceneIdsList: doc.gSceneIdsList,
                        daliMasterIds: doc.daliMasterIds,
                        devices: doc.devices,
                        groups: doc.groups
                    })
                    //console.log(realmActivity)
                })
            })
        } catch (e) {

        }
    }
    static async insertScene(realm: Realm, doc: any) {
        if (doc.daliMasterIds != null)
            doc.daliMasterIds = JSON.stringify(doc.daliMasterIds)
        if (doc.devices != null)
            doc.devices = JSON.stringify(doc.devices)
        if (doc.groups != null)
            doc.groups = JSON.stringify(doc.groups)
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                sceneId: doc.sceneId,
                areaId: doc.areaId,
                areaSceneId: doc.areaSceneId,
                gSceneIdsList: doc.gSceneIdsList,
                daliMasterIds: doc.daliMasterIds,
                devices: doc.devices,
                groups: doc.groups
            })
            console.log(realmActivity)
        })
    }
    static async removeScene(realm: Realm, sceneId: number) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, sceneId))
        })
    }
    static async updateScene(realm: Realm, doc: any) {
        if (doc.daliMasterIds != null)
            doc.daliMasterIds = JSON.stringify(doc.daliMasterIds)
        if (doc.devices != null)
            doc.devices = JSON.stringify(doc.devices)
        if (doc.groups != null)
            doc.groups = JSON.stringify(doc.groups)
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                sceneId: doc.sceneId,
                areaId: doc.areaId,
                areaSceneId: doc.areaSceneId,
                gSceneIdsList: doc.gSceneIdsList,
                daliMasterIds: doc.daliMasterIds,
                devices: doc.devices,
                groups: doc.groups
            },Realm.UpdateMode.Modified)
            console.log(realmActivity)
        })
    }
    static async getAllSceneIds(realm: Realm,data:any) {
        let sceneIds=[]
        const dmscenes=realm.objects(BaseSchemaName).filtered('areaId == $0',data.areaId);
        if(data.type == 2){
            dmscenes.forEach((dmscene)=>{
                sceneIds.push(dmscene.areaSceneId)
            })
        }else if(data.type == 1){
            dmscenes.forEach((dmscene)=>{
                sceneIds.push(dmscene.sceneId)
            })
        }
        return sceneIds;
    }
    static async getAllDaliSceneIdsForMaster(realm: Realm,data:any) {
        let sceneIds = [];
        const dmscenes=realm.objects(BaseSchemaName).filtered('areaId == $0',data.areaId)
        dmscenes.forEach((dmscene:any)=>{
            let daliMasterIds=JSON.parse(dmscene.daliMasterIds)
            let daliScenesInfo=daliMasterIds.get(data.daliMasterId)
            if(daliScenesInfo){
                sceneIds.push(daliScenesInfo.daliSceneId)
            }
        })
        return sceneIds
    }
    static async getArrayOfSceneIds(realm: Realm,sceneIds: Array<number>) {
        return realm.objects(BaseSchemaName).filtered('sceneId IN $0',sceneIds);
    }
    static async getAllScenesInfo(realm: Realm,areaId?: number) {
        return realm.objects(BaseSchemaName).filtered('areaId == $0',areaId)
    }
    static async getSceneById(realm: Realm,sceneId: number) {
        return realm.objectForPrimaryKey(BaseSchemaName,sceneId)
    }
    static async getSceneIdsForDevice(realm: Realm,deviceId: string) {
        let sceneIds = [];
        let dmscenes=realm.objects(BaseSchemaName);
        dmscenes.forEach((dmscene:any)=>{
            let devices=JSON.parse(dmscene.devices);
            if(devices && devices.has(deviceId)){
                sceneIds.push(dmscene.sceneId)
            }
        })
        return sceneIds;
    }
    static async getSceneIdsForGroup(realm: Realm,groupIdKey : string) {
        let sceneIds = [];
        let dmscenes=realm.objects(BaseSchemaName);
        dmscenes.forEach((dmscene:any)=>{
            let groups=JSON.parse(dmscene.groups);
            if(groups && groups.has(groupIdKey)){
                sceneIds.push(dmscene.sceneId)
            }
        })
        return sceneIds;
    }
}
export const ModelsList = [
    IKeusDMSceneSchema

]
