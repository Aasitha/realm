import { field } from 'fp-ts';
import Realm from 'realm';

export const BaseSchemaName = "IKeusDMGroupSchema";
export const BaseSchemaVersion = 1;

// export class IKeusDMGroupsDeviceInfoSchema extends Realm.Object<IKeusDMGroupsDeviceInfoSchema> {
//     mode: Realm.Types.Int;
//     baseDeviceType?: string;
//     applianceIds?: Realm.Types.List<Realm.Types.Int>
// }

// export class IKeusDMDaliGroupInfoSchema extends Realm.Object<IKeusDMDaliGroupInfoSchema> {
//     daliGroupId: Realm.Types.Int;
// }

export class IKeusDMGroupSchema extends Realm.Object<IKeusDMGroupSchema> {
    static primaryKey = "groupId";
    groupId: Realm.Types.Int;
    areaId: Realm.Types.Int;
    areaGroupId: Realm.Types.Int;
    isRelayGroup?: Realm.Types.Bool;
    relayId?: Realm.Types.Int;
    relayParent?: string;
    daliMasterIds?: string
    devices?: string;
}
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'keusdmgroups';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    let devicesObj:any
                    let daliMasterObj:any
                    console.log(doc.areaGroupId)
                    // if (doc.devices)
                    //      devicesObj = JSON.stringify(doc.devices);
                    // if (doc.daliMasterIds)
                    //      daliMasterObj = JSON.stringify(doc.daliMasterIds);

                    const realmActivity = realm.create(BaseSchemaName, {
                        groupId: doc.groupId,
                        areaId: doc.areaId,
                        areaGroupId: doc.areaGroupId,
                        isRelayGroup: doc.isRelayGroup,
                        relayId: doc.relayId,
                        relayParent: doc.relayParent,
                        // daliMasterIds: daliMasterObj,
                        // devices: devicesObj
                    })
                    //console.log(realmActivity)
                })
            })
        } catch (e) {

        }
    }
    static async getAll(realm:Realm){
        console.log("okay")
        return realm.objects(BaseSchemaName)
    }

    static async insertGroup(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                groupId: doc.groupId,
                areaId: doc.areaId,
                areaGroupId: doc.areaGroupId,
                isRelayGroup: doc.isRelayGroup,
                relayId: doc.relayId,
                relayParent: doc.relayParent,
                // daliMasterIds: doc.daliMasterIds,
                // devices: doc.devices
            })
            console.log(realmActivity)
        })
    }
    static async removeGroup(realm: Realm, zigbeeGroupId: number) {
        realm.delete(realm.objectForPrimaryKey(BaseSchemaName, zigbeeGroupId));
    }
    static async updateGroup(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                groupId: doc.groupId,
                areaId: doc.areaId,
                areaGroupId: doc.areaGroupId,
                isRelayGroup: doc.isRelayGroup,
                relayId: doc.relayId,
                relayParent: doc.relayParent,
                daliMasterIds: doc.daliMasterIds,
                devices: doc.devices
            }, Realm.UpdateMode.Modified)
            console.log(realmActivity)
        })
    }
    static async getAllGroupIds(realm: Realm, type: any, areaId?: number) {
        
    }
    static async getAllDaliGroupIdsForMaster(realm: Realm, areaId: number, daliMasterId: string) {

    }
    static async getAllGroupsInfo(realm: Realm, areaId?: number) {
        return realm.objects(BaseSchemaName).filtered('areaId == $0', areaId);
    }
    static async getGroupById(realm: Realm, groupId: number) {
        return realm.objects(BaseSchemaName).filtered('groupId == $0', groupId);
    }
    static async checkGroupExistenceById(realm: Realm, groupId: number) {
        let res = realm.objects(BaseSchemaName).filtered('groupId == $0', groupId)
        if (res.length <= 0) {
            return false;
        }
        return true;
    }
    static async cleanDriverGroups(realm: Realm, driverList: Array<string>) {
        let groups = realm.objects(BaseSchemaName)
        realm.write(() => {
            groups.forEach((group: any) => {
                group.deviceList = group.deviceList.filter((item) => !driverList.includes(item));
            })
        })
    }
    static async getAllGroupsForDevice(realm: Realm, deviceId: string) {

    }
    static async getGroupIdsForDevice(realm: Realm, deviceId: string) {
        let groupIds = [];
        let dmgroups=realm.objects(BaseSchemaName);
        dmgroups.forEach((dmgroup:any)=>{
            let devices=JSON.parse(dmgroup.devices);
            if(devices.has(deviceId)){
                groupIds.push(dmgroup.groupId)
            }
        })
        return groupIds;
    }
    static async getGroupsByFilterCondition( realm:Realm,filterCond?: any,) {
        let query=[]
        let values=[]
        let count=0;
        Object.entries(filterCond).forEach(([field,condition])=>{
            if(typeof condition === "string" || typeof condition === "number"){
                query.push(`${field} == $${count}`)
                count+=1;
                values.push(condition);
            }
            else if(typeof condition === "object"){
                if ('$in' in condition){
                    query.push(`${field} IN $${count}`)
                    count+=1;
                    values.push(condition.$in);
                }
                if('$gte' in condition){
                    query.push(`${field} >= $${count}`)
                    count+=1;
                    values.push(condition.$gte);
                }
                if('$gt' in condition){
                    query.push(`${field} > $${count}`)
                    count+=1;
                    values.push(condition.$gt)
                }
                if('$lt' in condition){
                    query.push(`${field} < $${count}`)
                    count+=1;
                    values.push(condition.$lt)
                }
                if('$lte' in condition){
                    query.push(`${field} <= $${count}`)
                    count+=1;
                    values.push(condition.$lte)
                }
            }
            
        })
        let query1=query.join(' AND ')
        return realm.objects(BaseSchemaName).filtered(query1,...values)
        
    }
}
export const ModelsList = [
    IKeusDMGroupSchema

]
// const conditionsObject = {
//     name: 'John',
//     age: { $gte: 25,$lt:40 },
//     status: { $in: ['active', 'inactive'] },
//     comments: { $elemMatch: { author: 'Alice', content: /great/ } },
//     email: { $exists: true },
//     number: 25
// };
// Methods.getGroupsByFilterCondition(conditionsObject)



