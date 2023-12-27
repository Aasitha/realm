import Realm from 'realm';
import * as zlib from 'zlib';
import { IZigbeeContactSensorStateSchema } from '../device-categories/zigbee-contact-sensor';
import { IUnifiCameraNotificationDataSchema } from '../appliance-types/unificamera';
import { IUnifiCameraEventInfoSchema } from '../protocol-models/ipdevice-models/device-models/device-types/UNIFICCTV01';
import { getDevice, getDevices } from '../realm-utils';
export const BaseSchemaName = "IKeusNotificationSchema";
export const BaseSchemaVersion = 1;
export class notificationDataCollection extends Realm.Object<notificationDataCollection>{
    static embedded?: boolean = true;
    T0?: IKeusContactSensorNotificationData;
    T1?: IKeusScheduleNotificationData;
    T2?: IKeusGeyserNotificationData;
    T3?: IKeusGeyserGroupNotificationData;
    T4?: IUnifiCameraNotificationDataSchema;
}
export class IKeusNotificationSchema extends Realm.Object<IKeusNotificationSchema> {
    static primaryKey = "notificationId";
    transformOptions?: Realm.Types.List<Realm.Types.Mixed>
    transformValues?: Realm.Types.List<Realm.Types.Mixed>
    processing?: Realm.Types.List<Realm.Types.Bool>
    notificationId: string;
    notificationSource?: string;
    notificationBy?: string;
    notificationUsername?: string;
    notificationTime?: Realm.Types.Int;
    notificationType?: Realm.Types.Int;
    notificationStatus?: Realm.Types.Int;
    notificationData?: notificationDataCollection;
}

export class IKeusContactSensorNotificationData extends Realm.Object<IKeusContactSensorNotificationData> {
    static embedded?: boolean = true;
    deviceId?: string;
    deviceName?: string;
    deviceType?: string;
    deviceSection?: string;
    deviceRoom?: string;
    deviceLocation?: string;
    deviceCategory?: string;
    deviceState?: IZigbeeContactSensorStateSchema;
}

export class IKeusScheduleNotificationData extends Realm.Object<IKeusScheduleNotificationData> {
    static embedded?: boolean = true;
    scheduleId?: string;
    scheduleName?: string;
    scheduleType?: Realm.Types.Int;
    scheduleActionType?: Realm.Types.Int;
    scheduleSection?: string;
    scheduleRoom?: string;
}

export class IKeusGeyserNotificationData extends Realm.Object<IKeusGeyserNotificationData> {
    static embedded?: boolean = true;
    deviceId?: string;
    geyserName?: string;
    deviceRoom?: string;
    geyserId?: string;
    deviceCategory?: string;
    timeToSend?: Realm.Types.Int;
}

export class IKeusGeyserGroupNotificationData extends Realm.Object<IKeusGeyserGroupNotificationData> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    groupName?: string;
    groupSection?: string;
    groupRoom?: string;
    timeToSend?: Realm.Types.Int;
}

export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'notifications';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    let groupTransformOptions = ["notificationData"]
                    //console.log(groupTransformOptions);
                    let transformValues = ["notificationType"]
                    const realmActivity = realm.create(BaseSchemaName, {
                        transformValues: transformValues,
                        transformOptions: groupTransformOptions,
                        notificationId: doc.notificationId,
                        processing: [true],
                        notificationSource: doc.notificationSource,
                        notificationBy: doc.notificationBy,
                        notificationUsername: doc.notificationUsername,
                        notificationTime: doc.notificationTime,
                        notificationType: doc.notificationType,
                        notificationStatus: doc.notificationStatus,
                        notificationData: {
                            ['T' + doc.notificationType]: doc.notificationData
                        }
                    })
                    //console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async insertNotification(realm: Realm, doc: any) {
        let groupTransformOptions = ["notificationData"];
        let transformValues = ["notificationType"];
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                notificationId: doc.notificationId,
                processing: [true],
                notificationSource: doc.notificationSource,
                notificationBy: doc.notificationBy,
                notificationUsername: doc.notificationUsername,
                notificationTime: doc.notificationTime,
                notificationType: doc.notificationType,
                notificationStatus: doc.notificationStatus,
                notificationData: {
                    ['T' + doc.notificationType]: doc.notificationData
                }
            })
            console.log(realmActivity)
        })
    }
    static async updateNotificationStatus(realm: Realm, data: any) {
        realm.write(() => {
            const notification = realm.objectForPrimaryKey(BaseSchemaName, data.notificationId)
            notification.notificationStatus = data.status;
        })
    }
    static async getAllNotification(realm: Realm) {

        try {
            console.time('Execution time');
            const startMemoryUsage = process.memoryUsage().heapUsed;
            let res:any = realm.objects(BaseSchemaName);
            //res=res.toJSON()
            const endMemoryUsage = process.memoryUsage().heapUsed;
            const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

            console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

            // End execution time
            console.timeEnd('Execution time');
            
            return realm.objects(BaseSchemaName);

        } catch (e) {
            throw e;
        }

    }
    static async getNotificationByType(realm: Realm, notificationType: number) {
        return realm.objects(BaseSchemaName).filtered('notificationType == $0', notificationType);
    }
    static async getTopNNotification(realm: Realm, n: number) {
        return realm.objects(BaseSchemaName).sorted('notificationTime', true).slice(0, n);
    }
    static async deleteAllNotification(realm: Realm) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName))
        })
    }
    static async deleteNotificationById(realm: Realm, notificationId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, notificationId))
        })
    }
    static async getTopNNotificationInTimeRange(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('notificationTime >= $0 AND notificationTime < $1', data.startTime, data.endTime).sorted("notificationTime", true).slice(0, data.numberOfEntries);
    }
    static async getTopNNotificationByNotificationType(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('notificationType == $0', data.notificationType).sorted("notificationTime", true).slice(0, data.numberOfEntries);
    }
    static async getTopNNotificationByDeviceId(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered(`notificationData.T0.deviceId == $0 OR notificationData.T2.deviceId == $0`, data.deviceId).sorted("notificationTime", true).slice(0, data.numberOfEntries)
    }


}
export const ModelsList = [
    IKeusNotificationSchema,
    IKeusGeyserGroupNotificationData,
    IKeusGeyserNotificationData,
    IKeusScheduleNotificationData,
    IKeusContactSensorNotificationData,
    notificationDataCollection,
    IZigbeeContactSensorStateSchema,
    IUnifiCameraNotificationDataSchema,
    IUnifiCameraEventInfoSchema

]




