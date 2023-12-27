import Realm from 'realm';

export const BaseSchemaName = "IKeusDMDeviceDali";
export const BaseSchemaVersion = 1;
export class IKeusDMDeviceDaliSchema extends Realm.Object<IKeusDMDeviceDaliSchema>{
    static primaryKey = "deviceId";
    deviceId: string;
    minigatewayId?: string;
    baseDeviceType?: string;
    zigbeeBridgeId?: string
    shortAddr?: Realm.Types.Int
    longAddr?: Realm.Types.Int
    minVal?: Realm.Types.Int
    maxVal?: Realm.Types.Int
    fadeTime?: Realm.Types.Int
    fadeRate?: Realm.Types.Int
    deviceType?: Realm.Types.Int
    powerOnLevel?: Realm.Types.Int
    powerFailLevel?: Realm.Types.Int
    colourType?: Realm.Types.Int
    deviceTypeArray: Realm.Types.List<Realm.Types.Int> //if deviceType is MASK(=255)
    minTemp?: Realm.Types.Int
    maxTemp?: Realm.Types.Int
    uniqueId?: string
    deviceStatus?: string
}

export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.101:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'keusdmdevices';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({
                baseDeviceType:"DD"
            }).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    const realmActivity = realm.create(BaseSchemaName, {
                        deviceId: doc.deviceId,
                        minigatewayId: doc.minigatewayId,
                        baseDeviceType: doc.baseDeviceType,
                        zigbeeBridgeId: doc.zigbeeBridgeId,
                        shortAddr: doc.shortAddr,
                        longAddr:doc.longAddr,
                        minVal: doc.minVal,
                        maxVal: doc.maxVal,
                        fadeTime: doc.fadeTime,
                        fadeRate: doc.fadeRate,
                        deviceType: doc.deviceType,
                        powerOnLevel: doc.powerOnLevel,
                        powerFailLevel: doc.powerFailLevel,
                        colourType: doc.colourType,
                        deviceTypeArray: doc.deviceTypeArray,
                        minTemp: doc.minTemp,
                        maxTemp: doc.maxTemp,
                        uniqueId: doc.uniqueId,
                        deviceStatus: doc.deviceStatus,
                    })
                    //console.log(realmActivity)
                })

            })
        } catch (e) {
            return e;
        }
    }
    static async insertDevice(realm: Realm, doc: any) {
        realm.write(()=>{
            const realmActivity=realm.create(BaseSchemaName,{
                deviceId: doc.deviceId,
                minigatewayId: doc.minigatewayId,
                baseDeviceType: doc.baseDeviceType,
                zigbeeBridgeId: doc.zigbeeBridgeId,
                shortAddr: doc.shortAddr,
                longAddr:doc.longAddr,
                minVal: doc.minVal,
                maxVal: doc.maxVal,
                fadeTime: doc.fadeTime,
                fadeRate: doc.fadeRate,
                deviceType: doc.deviceType,
                powerOnLevel: doc.powerOnLevel,
                powerFailLevel: doc.powerFailLevel,
                colourType: doc.colourType,
                deviceTypeArray: doc.deviceTypeArray,
                minTemp: doc.minTemp,
                maxTemp: doc.maxTemp,
                uniqueId: doc.uniqueId,
                deviceStatus: doc.deviceStatus,
            })
            console.log(realmActivity)
        })
    }
    static async removeDevice(realm: Realm, deviceId: string) {
        realm.write(()=>{
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName,deviceId))
        })
    }
    static async removeAllDevices(realm: Realm, daliMasterId: string) {
        realm.write(()=>{
            realm.delete(realm.objects(BaseSchemaName).filtered('zigbeeBridgeId == $0',daliMasterId))
        })
    }
    static async updateDeviceInfo(realm: Realm, doc: any) {
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                deviceId: doc.deviceId,
                minigatewayId: doc.minigatewayId,
                baseDeviceType: doc.baseDeviceType,
                zigbeeBridgeId: doc.zigbeeBridgeId,
                shortAddr: doc.shortAddr,
                longAddr:doc.longAddr,
                minVal: doc.minVal,
                maxVal: doc.maxVal,
                fadeTime: doc.fadeTime,
                fadeRate: doc.fadeRate,
                deviceType: doc.deviceType,
                powerOnLevel: doc.powerOnLevel,
                powerFailLevel: doc.powerFailLevel,
                colourType: doc.colourType,
                deviceTypeArray: doc.deviceTypeArray,
                minTemp: doc.minTemp,
                maxTemp: doc.maxTemp,
                uniqueId: doc.uniqueId,
                deviceStatus: doc.deviceStatus,
            },Realm.UpdateMode.Modified)
        })
    }
    static async getAllDevices(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async getAllChildrenOfBridge(realm: Realm, deviceId: string) {

    }
    static async getDeviceById(realm: Realm, deviceId: string) {
        return realm.objects(BaseSchemaName).filtered('zigbeeBridgeId == $0',deviceId)
    }
    static async getDevicesByFilterCondition(realm: Realm, filterCond?: any) {
        return realm.objects(BaseSchemaName).filtered(filterCond,);
    }
}
export const ModelsList=[
    IKeusDMDeviceDaliSchema
]