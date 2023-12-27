import Realm from 'realm';

export const BaseSchemaName = "IKeusDMZigbeeDeviceSchema";
export const BaseSchemaVersion = 1;

export class IKeusDMZigbeeDeviceSchema extends Realm.Object<IKeusDMZigbeeDeviceSchema>{
    static primaryKey = "deviceId";
    deviceId: string
    minigatewayId?: string;
    baseDeviceType?: string;
    shortAddr?: Realm.Types.Int;
    deviceType?: Realm.Types.Int;
    deviceCategory?: Realm.Types.Int;
    firmwareVersion?: Realm.Types.Int;
    registeredTimestamp?: Realm.Types.Int;
    lastSentMsg?: Realm.Types.Int;
    lastReceivedMsg?: Realm.Types.Int;
    areaId?: Realm.Types.Int;
    isAreaServer?: Realm.Types.Bool;
    areaMemberAddr?: Realm.Types.Int;
    isDaliMaster?: Realm.Types.Bool;
    isFactoryNew?: Realm.Types.Bool;
    thirdPartyDevice?: Realm.Types.Bool;
    deviceProperties?: string
    fwInfo?: string
    fwHealth?: string;
    factoryInfo?: string;
}

export class Methods {
    static async importgatewayData(realm: Realm) {
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
                baseDeviceType: "ZD"
            }).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    if (doc.deviceProperties != null)
                        doc.deviceProperties = JSON.stringify(doc.deviceProperties);
                    if (doc.fwInfo != null) {
                        doc.fwInfo = JSON.stringify(doc.fwInfo);
                    }
                    if (doc.fwHealth != null)
                        doc.fwHealth = JSON.stringify(doc.fwHealth)
                    if (doc.factoryInfo != null) {
                        doc.factoryInfo = JSON.stringify(doc.factoryInfo)
                    }
                    const realmActivity = realm.create(BaseSchemaName, {
                        deviceId: doc.deviceId,
                        minigatewayId: doc.minigatewayId,
                        baseDeviceType: doc.baseDeviceType,
                        shortAddr: doc.shortAddr,
                        deviceType: doc.deviceType,
                        deviceCategory: doc.deviceCategory,
                        firmwareVersion: doc.firmwareVersion,
                        registeredTimestamp: doc.registeredTimestamp,
                        lastSentMsg: doc.lastSentMsg,
                        lastReceivedMsg: doc.lastReceivedMsg,
                        areaId: doc.areaId,
                        isAreaServer: doc.isAreaServer,
                        areaMemberAddr: doc.areaMemberAddr,
                        isDaliMaster: doc.isDaliMaster,
                        isFactoryNew: doc.isFactoryNew,
                        thirdPartyDevice: doc.thirdPartyDevice,
                        deviceProperties: doc.deviceProperties,
                        fwInfo: doc.fwInfo,
                        fwHealth: doc.fwHealth,
                        factoryInfo: doc.factoryInfo,
                    })
                    //console.log(realmActivity)
                })

            })
        } catch (e) {
            return e;
        }
    }
    static async insertDevice(realm: Realm, doc: any) {
        if (doc.deviceProperties != null)
            doc.deviceProperties = JSON.stringify(doc.deviceProperties);
        if (doc.fwInfo != null) {
            doc.fwInfo = JSON.stringify(doc.fwInfo);
        }
        if (doc.fwHealth != null)
            doc.fwHealth = JSON.stringify(doc.fwHealth)
        if (doc.factoryInfo != null) {
            doc.factoryInfo = JSON.stringify(doc.factoryInfo)
        }
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                deviceId: doc.deviceId,
                minigatewayId: doc.minigatewayId,
                baseDeviceType: doc.baseDeviceType,
                shortAddr: doc.shortAddr,
                deviceType: doc.deviceType,
                deviceCategory: doc.deviceCategory,
                firmwareVersion: doc.firmwareVersion,
                registeredTimestamp: doc.registeredTimestamp,
                lastSentMsg: doc.lastSentMsg,
                lastReceivedMsg: doc.lastReceivedMsg,
                areaId: doc.areaId,
                isAreaServer: doc.isAreaServer,
                areaMemberAddr: doc.areaMemberAddr,
                isDaliMaster: doc.isDaliMaster,
                isFactoryNew: doc.isFactoryNew,
                thirdPartyDevice: doc.thirdPartyDevice,
                deviceProperties: doc.deviceProperties,
                fwInfo: doc.fwInfo,
                fwHealth: doc.fwHealth,
                factoryInfo: doc.factoryInfo,
            })
            console.log(realmActivity)
        })
    }
    static async removeDevice(realm: Realm, deviceId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, deviceId))
        })
    }
    static async updateDeviceInfo(realm: Realm, doc: any) {
        if (doc.deviceProperties != null)
            doc.deviceProperties = JSON.stringify(doc.deviceProperties);
        if (doc.fwInfo != null) {
            doc.fwInfo = JSON.stringify(doc.fwInfo);
        }
        if (doc.fwHealth != null)
            doc.fwHealth = JSON.stringify(doc.fwHealth)
        if (doc.factoryInfo != null) {
            doc.factoryInfo = JSON.stringify(doc.factoryInfo)
        }
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                deviceId: doc.deviceId,
                minigatewayId: doc.minigatewayId,
                baseDeviceType: doc.baseDeviceType,
                shortAddr: doc.shortAddr,
                deviceType: doc.deviceType,
                deviceCategory: doc.deviceCategory,
                firmwareVersion: doc.firmwareVersion,
                registeredTimestamp: doc.registeredTimestamp,
                lastSentMsg: doc.lastSentMsg,
                lastReceivedMsg: doc.lastReceivedMsg,
                areaId: doc.areaId,
                isAreaServer: doc.isAreaServer,
                areaMemberAddr: doc.areaMemberAddr,
                isDaliMaster: doc.isDaliMaster,
                isFactoryNew: doc.isFactoryNew,
                thirdPartyDevice: doc.thirdPartyDevice,
                deviceProperties: doc.deviceProperties,
                fwInfo: doc.fwInfo,
                fwHealth: doc.fwHealth,
                factoryInfo: doc.factoryInfo,
            }, Realm.UpdateMode.Modified)
            console.log(realmActivity)
        })
    }
    static async getAllDevices(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getDeviceById(realm: Realm, deviceId: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, deviceId)
    }
    static async checkDeviceExistsById(realm: Realm, deviceId: string) {
        const res = realm.objectForPrimaryKey(BaseSchemaName, deviceId);
        if (res)
            return true
        else
            throw new Error('Device Not Found');
    }
    static async getDeviceByIds(realm: Realm, deviceIds: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIds)
    }
    static async getAreaMemberIds(realm: Realm, areaId: number) {

    }
    static async getAreaServerInfo(realm: Realm, areaId: any) {
        const dalizigbeedevices = realm.objects(BaseSchemaName).filtered('areaId == $0 AND isAreaServer == $1', areaId, true);
        if (dalizigbeedevices.length === 0)
            return null;
        else
            return dalizigbeedevices[0];
    }
    static async getDeviceByShortAddr(realm: Realm, shortAddr: number) {
        const dalizigbeedevices=realm.objects(BaseSchemaName).filtered('shortAddr == $0',shortAddr);
        if(!dalizigbeedevices || !dalizigbeedevices.length){
            throw new Error('Device Not Found');
        }
        return dalizigbeedevices[0];
    }
    static async getDeviceByAreaMemberAddr(realm: Realm, data:any) {
        const dalizigbeedevices=realm.objects(BaseSchemaName).filtered('areaId == $0 AND areaMemberAddr == $1',data.areaId,data.areaMemberAddr);
        if(!dalizigbeedevices || !dalizigbeedevices.length){
            return null;
        }
        return dalizigbeedevices[0];
    }
    static async getDevicesByFilterCondition(realm: Realm, filterCond?: any) {
        return realm.objects(BaseSchemaName).filtered(filterCond)
    }
}
export const ModelsList=[
    IKeusDMZigbeeDeviceSchema
]