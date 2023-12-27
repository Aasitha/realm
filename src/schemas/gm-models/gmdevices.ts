import Realm from "realm"
import { fwInfoSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema } from "../devices"
export const BaseSchemaName = "IKeusGMDeviceSchema";
export const BaseSchemaVersion = 1;
export class IKeusGMDeviceControlInfo_protocolControlInfoSchema extends Realm.Object<IKeusGMDeviceControlInfo_protocolControlInfoSchema> {
    static embedded?: boolean = false;
    deviceId?: string;
    deviceParent?: string;
    deviceGateway?: string;
    deviceIp?: string;

}
export class IKeusGMDeviceControlInfoSchema extends Realm.Object<IKeusGMDeviceControlInfoSchema> {
    static embedded?: boolean = false;
    deviceControlType?: string;
    protocolControlInfo?: IKeusGMDeviceControlInfo_protocolControlInfoSchema;

}
export class IKeusGMDeviceHomeInfoSchema extends Realm.Object<IKeusGMDeviceHomeInfoSchema> {
    static embedded?: boolean = false;
    deviceRoom?: string;
    deviceSection?: string;

}
export class IKeusGMDeviceSyncInfoSchema extends Realm.Object<IKeusGMDeviceSyncInfoSchema> {
    static embedded?: boolean = true;
    syncStatus?: Realm.Types.Int;
    syncRequestType?: Realm.Types.Int;
    syncRequestId?: string;
    syncRequestTime?: Realm.Types.Int;
    syncRequestParams?: Realm.Types.Dictionary<Realm.Types.Mixed>;
    jobTypeName?: Realm.Types.Mixed;
    jobMessage?: string;


}
export class IKeusGMDeviceStatusInfoSchema extends Realm.Object<IKeusGMDeviceStatusInfoSchema> {
    static embedded?: boolean = true;
    markedForDelete?: Realm.Types.Bool;
    onlineStatus?: Realm.Types.Bool;
    lastSeenOnline?: Realm.Types.Int;

}
export class protocolDeviceInfo_deviceProperties_portListSchema extends Realm.Object<protocolDeviceInfo_deviceProperties_portListSchema> {
    static embedded?: boolean = true;
    portId?: Realm.Types.Int;
    portState?: Realm.Types.Int;
    isAssigned?: Realm.Types.Bool;
    assignedToAppliance?: string;

}
export class IKEHVACIndoorUnitSchema extends Realm.Object<IKEHVACIndoorUnitSchema>{
    static embedded?: boolean = true;
    indoorUnitId?: string;
    indoorUnitName?: string;
    indoorUnitState?: Realm.Types.Int;
    indoorUnitRoom?: string;
    indoorUnitSection?: string;
    isAssigned?: Realm.Types.Bool;
    assignedToAppliance?: string;

}
export class ICameraUnitSchema extends Realm.Object<ICameraUnitSchema>{
    static embedded?: boolean = false;
    cameraId?: string;
    model?: string;
    macAddress?: string;
    framesPerSecond?: Realm.Types.Int;
    version?: string;
    maxRecordingDays?: Realm.Types.Int;
    isAssigned?: Realm.Types.Bool;
    assignedToAppliance?: string
}
export class IKeusGM_protocolDeviceInfo_devicePropertiesSchema extends Realm.Object<IKeusGM_protocolDeviceInfo_devicePropertiesSchema> {
    static embedded?: boolean = false;
    portList: Realm.Types.List<protocolDeviceInfo_deviceProperties_portListSchema>
    port?: protocolDeviceInfo_deviceProperties_portListSchema
    indoorUnits?: IKEHVACIndoorUnitSchema
    cameraUnit?: ICameraUnitSchema;

}
export class IKeusGMDeviceInfo_protocolDeviceInfoSchema extends Realm.Object<IKeusGMDeviceInfo_protocolDeviceInfoSchema> {
    static embedded?: boolean = false;
    deviceType?: string;
    deviceCategory?: string;
    deviceProperties?: IKeusGM_protocolDeviceInfo_devicePropertiesSchema


}
export class IKeusGMDeviceInfoSchema extends Realm.Object<IKeusGMDeviceInfoSchema> {
    static embedded?: boolean = false;
    protocolDeviceInfo?: IKeusGMDeviceInfo_protocolDeviceInfoSchema;

}
export class IKeusGMDeviceMaintenanceInfoSchema extends Realm.Object<IKeusGMDeviceMaintenanceInfoSchema> {
    static embedded?: boolean = true;
    firmwareVersion?: string;
    manufacturerName?: string;
    registeredAt?: Realm.Types.Int;
    serialNumber?: string;
    device_pin?: string;

}
export class IKeusGMDeviceSchema extends Realm.Object<IKeusGMDeviceSchema> {
    static primaryKey = "deviceId";

    deviceId: string;
    deviceName?: string;
    deviceLocation?: string;
    deviceControlInfo?: IKeusGMDeviceControlInfoSchema;
    deviceHomeInfo?: IKeusGMDeviceHomeInfoSchema;
    deviceMaintenanceInfo?: IKeusGMDeviceMaintenanceInfoSchema;
    deviceSyncInfo?: IKeusGMDeviceSyncInfoSchema;
    deviceStatusInfo?: IKeusGMDeviceStatusInfoSchema
    deviceInfo?: IKeusGMDeviceInfoSchema
    fwHealth: Realm.Types.List<fwhealthObjectSchema>;
    fwInfo?: fwInfoSchema;

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        console.log("============");
        //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

        const MongoClient = require('mongodb').MongoClient;

        const uri = 'mongodb://192.168.0.198:27017';
        const dbName = 'brijeshSir';
        const collectionName = 'gmdevices';


        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.find({}).toArray();
        realm.write(() => {
            result.forEach((doc: any) => {
                console.log(doc._id)
                const realmActivity = realm.create(BaseSchemaName, {
                    deviceId: doc.deviceId,
                    deviceName: doc.deviceName,
                    deviceLocation: doc.deviceLocation,
                    deviceControlInfo: doc.deviceControlInfo,
                    deviceHomeInfo: doc.deviceHomeInfo,
                    deviceMaintenanceInfo: doc.deviceMaintenanceInfo,
                    deviceSyncInfo: doc.deviceSyncInfo,
                    deviceStatusInfo: doc.deviceStatusInfo,
                    deviceInfo: doc.deviceInfo,
                    fwHealth: doc.fwHealth,
                    fwInfo: doc.fwInfo
                })
                console.log(realmActivity)
            })
        })

    }
    static async getDeviceById(realm: Realm, deviceId: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, deviceId)
    }
    static async insertDevice(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                deviceId: doc.deviceId,
                deviceName: doc.deviceName,
                deviceLocation: doc.deviceLocation,
                deviceControlInfo: doc.deviceControlInfo,
                deviceHomeInfo: doc.deviceHomeInfo,
                deviceMaintenanceInfo: doc.deviceMaintenanceInfo,
                deviceSyncInfo: doc.deviceSyncInfo,
                deviceStatusInfo: doc.deviceStatusInfo,
                deviceInfo: doc.deviceInfo,
                fwHealth: doc.fwHealth,
                fwInfo: doc.fwInfo
            })
        })
    }
    static async deleteDeviceById(realm: Realm, deviceId: string) {
        realm.delete(realm.objectForPrimaryKey(BaseSchemaName, deviceId))
    }
    static async updateDevice(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                deviceId: doc.deviceId,
                deviceName: doc.deviceName,
                deviceLocation: doc.deviceLocation,
                deviceControlInfo: doc.deviceControlInfo,
                deviceHomeInfo: doc.deviceHomeInfo,
                deviceMaintenanceInfo: doc.deviceMaintenanceInfo,
                deviceSyncInfo: doc.deviceSyncInfo,
                deviceStatusInfo: doc.deviceStatusInfo,
                deviceInfo: doc.deviceInfo,
                fwHealth: doc.fwHealth,
                fwInfo: doc.fwInfo
            }, Realm.UpdateMode.Modified)
        })
    }
    static async getAllDevices(realm: Realm) {
        return realm.objects(BaseSchemaName).toJSON();
    }
    static async updateDeviceInfo(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId)
            device.deviceInfo = data.deviceInfo;
        })
    }
    static async updateDeviceHomeInfo(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
            device.deviceHomeInfo = data.deviceHomeInfo;
        })
    }
    static async updateDeviceName(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId)
            device.deviceName = data.deviceName;
        })
    }
    static async updateDeviceLocation(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId)
            device.deviceLocation = data.deviceLocation
        })
    }
    static async updateDeviceControlInfo(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName,data.deviceId)
            device.deviceControlInfo = data.deviceControlInfo
        })
    }
    static async updateDeviceSyncInfo(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName,data.deviceId)
            device.deviceSyncInfo = data.deviceSyncInfo
        })
    }
    static async getIpDevice(realm: Realm, controlInfo: IKeusGMDeviceControlInfoSchema) {
        let ipControlInfo = controlInfo.protocolControlInfo
        return realm.objects(BaseSchemaName).filtered('deviceControlInfo.protocolControlInfo.deviceIp==$0', ipControlInfo.deviceIp)
    }
    static async getDevicesByControlType(realm: Realm, controlType: string) {
        return realm.objects(BaseSchemaName).filtered('deviceControlInfo.deviceControlType==$0', controlType)
    }
    static async getDevicesByCategory(realm: Realm, deviceCategoryList: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('deviceInfo.protocolDeviceInfo.deviceCategory IN $0', deviceCategoryList)
    }
    static async getDevicesByNotPartOfCategory(realm: Realm, deviceCategoryList: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('NOT deviceInfo.protocolDeviceInfo.deviceCategory IN $0', deviceCategoryList)
    }
    static async getDevicesByRooms(realm: Realm, roomIds: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('deviceHomeInfo.deviceRoom IN $0', roomIds);
    }
    static async getCameraDevice(realm: Realm, cameraId: string) {
        return realm.objects(BaseSchemaName).filtered('deviceInfo.protocolDeviceInfo.deviceProperties.cameraUnit.cameraId==$0', cameraId);
    }
}
export const ModelsList = [
    IKeusGMDeviceSchema,
    IKeusGMDeviceControlInfo_protocolControlInfoSchema, IKeusGMDeviceControlInfoSchema, IKeusGMDeviceHomeInfoSchema, IKeusGMDeviceSyncInfoSchema, IKeusGMDeviceStatusInfoSchema, protocolDeviceInfo_deviceProperties_portListSchema, IKeusGM_protocolDeviceInfo_devicePropertiesSchema, IKeusGMDeviceInfo_protocolDeviceInfoSchema, IKeusGMDeviceInfoSchema, IKeusGMDeviceMaintenanceInfoSchema,
    fwInfoSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema,
    IKEHVACIndoorUnitSchema, ICameraUnitSchema
]