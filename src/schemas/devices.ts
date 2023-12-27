import Realm from 'realm';

import { IKeusSmartConsoleButtonPropertiesSchema, buttonPropertiesCollectionSchema, IKeusSmartConsoleRelaySchema, IKeusSmartConsolePropertiesSchema, ISmartConsoleGroupButtonPropertiesSchema, ISmartConsoleSceneButtonPropertiesSchema, ISmartConsoleCurtainButtonPropertiesSchema, ISmartConsoleRelayButtonPropertiesSchema, ISmartConsoleRemoteRelayButtonPropertiesSchema, ISmartConsoleFanButtonPropertiesSchema, ISmartConsoleNoPropsButtonPropertiesSchema, IKeusSmartConsoleButtonSchema, KZSCdeviceButtonPropertiesSchema, KZSCbuttonPropertiesSchema, IKeusSmartConsoleStateSchema } from "../device-categories/keus-smart-console"
import { IDaliColorTunableDriverStateSchema, IDaliColorTunableDriverPropertiesSchema } from "../device-categories/dali-color-tunable-driver"
import { IDaliDimmableDriverPropertiesSchema, IDaliDimmableDriverStateSchema } from "../device-categories/dali-dimmable-driver"
import { IDaliNonDimmableDriverPropertiesSchema, IDaliNonDimmableDriverStateSchema } from "../device-categories/dali-nondimmable-driver"
import { IKeusIRACRemotePropertiesSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRFANRemotePropertiesSchema } from "../device-categories/keus-ir-remote"
import { IKeusSceneWizardPropertiesSchema, IKeusSceneWizardStateSchema } from "../device-categories/keus-scene-wizard";



import {

    IZigbeeEmbeddedSwitchPropertiesSchema,
    IEmbeddedSwitchPortSchema,
    IEmbeddedApplianceSchema,
    IEmbeddedSwitchSchema,
    KZESApplianceStateSchema,
    KZESAppliancePropertiesSchema,
    KZESSwitchPropertiesSchema,
    IZigbeeEmbeddedSwitchStateSchema

} from "../device-categories/zigbee-embedded-switch"
import { IZigbeeIRBlasterPropertiesSchema, IZigbeeIRBlasterStateSchema } from "../device-categories/zigbee-ir-blaster"
//import { IKeusDeviceSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema, fwInfoSchema, fwHealthSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema } from '../deviceSchema';
import * as props from "../device-types-properties.ts/KZSC7CbuttonProperties"
import { IRBGSchema, IWWASchema, IZigbeeRgbwwaDriverStateSchema, IZigbeeRgbwwaDriverPropertiesSchema } from "../device-categories/zigbee-rgbwwa-driver"
import { IZigbeeDCFanControllerStateSchema, IZigbeeDCFanControllerPropertiesSchema } from "../device-categories/zigbee-dc-fan-controller"
import { IZigbeeNonDimmableDriverPropertiesSchema, IZigbeeNonDimmableDriverStateSchema } from "../device-categories/zigbee-nondimmable-driver"
import { IZigbeeCurtainControllerStateSchema, IZigbeeCurtainControllerPropertiesSchema } from "../device-categories/zigbee-curtain-controller"
import { ISceneSwitchTypeSchema, IZigbeeEmbeddedSceneSwitchPropertiesSchema, IZigbeeEmbeddedSceneSwitchStateSchema } from "../device-categories/zigbee-embedded-scene-switch"
import { IZigbeeACFanControllerStateSchema, IZigbeeACFanControllerPropertiesSchema } from "../device-categories/zigbee-ac-fan-controller"
import { IZigbeeContactSensorStateSchema, IZigbeeContactSensorPropertiesSchema } from "../device-categories/zigbee-contact-sensor"
import { IZigbeeInlineDimmerStateSchema, IZigbeeInlineDimmerPropertiesSchema } from "../device-categories/zigbee-inline-dimmer"
import { IZigbeeRangeExtenderStateSchema, IZigbeeRangeExtenderPropertiesSchema } from "../device-categories/zigbee-range-extender"
import { IZigbeeCurtainWizardButtonSchema, IZigbeeCurtainWizardPropertiesSchema, IZigbeeCurtainWizardStateSchema } from "../device-categories/zigbee-curtain-wizard"
import { IZigbeeDimmableDriverPropertiesSchema, IZigbeeDimmableDriverStateSchema } from "../device-categories/zigbee-dimmable-driver"
import { field } from 'fp-ts';
export const BaseSchemaName = "IKeusDeviceSchema";
export const BaseSchemaVersion = 1;
export class devicePropertiesCollectionSchema extends Realm.Object<devicePropertiesCollectionSchema> {
    static embedded?: boolean = true;
    KDCTD?: IDaliColorTunableDriverPropertiesSchema
    KDDD?: IDaliDimmableDriverPropertiesSchema;
    KDND?: IDaliNonDimmableDriverPropertiesSchema;
    KZSW?: IKeusSceneWizardPropertiesSchema;
    KZSC?: IKeusSmartConsolePropertiesSchema;
    KZES?: IZigbeeEmbeddedSwitchPropertiesSchema;
    KZIRB?: IZigbeeIRBlasterPropertiesSchema;
    KZRGBWWA?: IZigbeeRgbwwaDriverPropertiesSchema;
    KZDCFC?: IZigbeeDCFanControllerPropertiesSchema;
    KZDD?: IZigbeeDimmableDriverPropertiesSchema;
    KZND?: IZigbeeNonDimmableDriverPropertiesSchema;
    KZESS?: IZigbeeEmbeddedSceneSwitchPropertiesSchema;
    KZACFC?: IZigbeeACFanControllerPropertiesSchema;
    KZCS?: IZigbeeContactSensorPropertiesSchema;
    KZID?: IZigbeeInlineDimmerPropertiesSchema;
    KZRE?: IZigbeeRangeExtenderPropertiesSchema;
    KZCW?: IZigbeeCurtainWizardPropertiesSchema;
    KZCC?: IZigbeeCurtainControllerPropertiesSchema;

}

export class fwInfoSchema extends Realm.Object<fwInfoSchema> {
    static embedded?: boolean = true;
    timeStamp?: Realm.Types.Int;
    hwVersion?: string;
    swVersion?: string;
    deviceName?: string;
    hgmSetting?: Realm.Types.Int;
    bleSetting?: Realm.Types.Int;

}
export class fwhealthObjectSchema extends Realm.Object<fwhealthObjectSchema> {
    static embedded?: boolean = true;
    fwHealth?: fwHealthSubObjectSchema;
    timeStamp?: Realm.Types.Int;

}
export class fwHealthSubObjectPropsSchema extends Realm.Object<fwHealthSubObjectPropsSchema> {
    static embedded?: boolean = true;
    hwId?: Realm.Types.Int;
    lastErrorCount?: Realm.Types.Int;
    currentErrorCount?: Realm.Types.Int;
    errorActionId?: Realm.Types.Int;
    currErrCountFlag?: Realm.Types.Int;
    lastErrCountFlag?: Realm.Types.Int;

}
export class fwHealthSubObjectSchema extends Realm.Object<fwHealthSubObjectSchema> {
    static embedded?: boolean = true
    status?: Realm.Types.Int
    timeFromBoot?: Realm.Types.Int
    lastResetCause?: Realm.Types.Int
    restartCount?: Realm.Types.Int
    props: Realm.Types.List<fwHealthSubObjectPropsSchema>
    restartCountErrorFlag?: Realm.Types.Int

}

export class fwHealthSchema extends Realm.Object<fwHealthSchema> {
    static embedded?: boolean = true;
    fwHealth: Realm.Types.List<fwhealthObjectSchema>

}
export class IKeusDeviceSchema_deviceSyncInfoSchema extends Realm.Object<IKeusDeviceSchema_deviceSyncInfoSchema>{
    static embedded?: boolean = true;
    syncStatus?: Realm.Types.Int;
    syncRequestType?: Realm.Types.Int;
    syncRequestId?: string;
    syncRequestTime?: Realm.Types.Int;
    syncRequestParams?: Realm.Types.Dictionary<Realm.Types.Mixed>;
    jobTypeName?: Realm.Types.Mixed;
    jobMessage?: string;
}
export class IKeusDeviceSchema extends Realm.Object<IKeusDeviceSchema> {
    static primaryKey = "deviceId";

    transformOptions: Realm.Types.List<Realm.Types.Mixed>;
    transformValues: Realm.Types.List<Realm.Types.Mixed>;
    deviceId: string;
    masterId?: string;
    deviceType?: string;
    deviceCategory?: string;
    deviceName?: string;
    deviceSection?: string;
    deviceRoom?: string;
    deviceLocation?: string;
    deviceControlType?: string;
    deviceParent?: string;
    firmwareVersion?: string;
    isHidden?: Realm.Types.Bool;
    isConfigured?: Realm.Types.Bool;
    manufacturerName?: string;
    deviceTypeDisplayName?: string;
    deviceTypeName?: string;
    inGroup?: Realm.Types.Bool;
    deviceGroup?: Realm.Types.Int;
    groupRoom?: string;
    deviceState?: deviceStateSchema;
    deviceProperties?: devicePropertiesCollectionSchema;
    lastUpdateTime?: Realm.Types.Int;
    lastUpdateBy?: string;
    lastUpdateUser?: string;
    lastUpdateSource?: string;
    deviceSyncInfo?: IKeusDeviceSchema_deviceSyncInfoSchema;
    markedForDelete?: Realm.Types.Int;
    registeredAt?: Realm.Types.Int;
    fwInfo?: fwInfoSchema;
    fwHealth: Realm.Types.List<fwhealthObjectSchema>;
    samplefield:Realm.Types.List<string>


}
export class deviceStateSchema extends Realm.Object<deviceStateSchema> {
    static embedded?: boolean = true;
    KZDD?: IZigbeeDimmableDriverStateSchema;
    KZND?: IZigbeeNonDimmableDriverStateSchema;
    KDDD?: IDaliDimmableDriverStateSchema;
    KDCTD?: IDaliColorTunableDriverStateSchema;
    KDND?: IDaliNonDimmableDriverStateSchema;
    KZCC?: IZigbeeCurtainControllerStateSchema;
    KZSC?: IKeusSmartConsoleStateSchema;
    KZSW?: IKeusSceneWizardStateSchema;
    KZRGBWWA?: IZigbeeRgbwwaDriverStateSchema;
    KZES?: IZigbeeEmbeddedSwitchStateSchema;
    KZESS?: IZigbeeEmbeddedSceneSwitchStateSchema;
    KZACFC?: IZigbeeACFanControllerStateSchema;
    KZDCFC?: IZigbeeDCFanControllerStateSchema;
    KZCS?: IZigbeeContactSensorStateSchema;
    KZID?: IZigbeeInlineDimmerStateSchema;
    KZIRB?: IZigbeeIRBlasterStateSchema;
    KZRE?: IZigbeeRangeExtenderStateSchema;
    KZCW?: IZigbeeCurtainWizardStateSchema;

}

export class IKeusDeviceSyncInfoSchema extends Realm.Object<IKeusDeviceSyncInfoSchema> {
    static embedded?: boolean = true;
    syncStatus?: Realm.Types.Int;
    syncRequestType?: Realm.Types.Int;
    syncRequestId?: string;
    syncRequestTime?: Realm.Types.Int;
    syncRequestParams?: Realm.Types.Dictionary<Realm.Types.Mixed>;
    jobTypeName?: Realm.Types.Int;
    jobMessage?: string;

}
export class syncRequestParamsSchema extends Realm.Object<syncRequestParamsSchema> {
    static embedded?: boolean = true;
}
export class Methods {
    static async importGatewayData(realm: Realm) {
        const MongoClient = require('mongodb').MongoClient;

        const uri = 'mongodb://10.1.4.243:27017';
        const dbName = 'brijeshSir';
        const collectionName = 'devices';


        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.find({}).toArray();
        let deviceProperties: any = {
            KZES: "iZigbeeEmbeddedSwitchProperties",
            KZSC: "iKeusSmartConsoleProperties",
            KZSW: "iKeusSceneWizardProperties",
            KZIRB: "iZigbeeIRBlasterProperties",
            KZRGBWWA: "iZigbeeRgbwwaDriverProperties",
            KZESS: "iZigbeeEmbeddedSceneSwitchProperties",
            KZACFC: "iZigbeeACFanControllerProperties",
            KZDCFC: "iZigbeeDCFanControllerProperties",
            KZCS: "iZigbeeContactSensorProperties",
            KZID: "iZigbeeInlineDimmerProperties",
            KZRE: "iZigbeeRangeExtenderProperties",
            KZCW: "iZigbeeCurtainWizardProperties",
            KZDD: "iZigbeeDimmableDriverProperties",
            KZND: "iZigbeeNonDimmableDriverProperties",
            KDDD: "iDaliDimmableDriverProperties",
            KDCTD: "iDaliColorTunableDriverProperties",
            KDND: "iDaliNonDimmableDriverProperties",
            KZCC: "iZigbeeCurtainControllerProperties",

        }

        realm.write(() => {
            result.forEach((doc: any) => {
                console.log(doc._id)
                let groupTransformOptions = ["deviceState", "deviceProperties"]
                //console.log(groupTransformOptions);
                let transformValues = ["deviceCategory", "deviceCategory"]
                const realmActivity = realm.create(BaseSchemaName, {
                    transformValues: transformValues,
                    transformOptions: groupTransformOptions,
                    deviceId: doc.deviceId,
                    masterId: doc.masterId,
                    deviceType: doc.deviceType,
                    deviceCategory: doc.deviceCategory,
                    deviceName: doc.deviceName,
                    deviceSection: doc.deviceSection,
                    deviceRoom: doc.deviceRoom,
                    deviceLocation: doc.deviceLocation,
                    deviceControlType: doc.deviceControlType,
                    deviceParent: doc.deviceParent,
                    firmwareVersion: doc.firmwareVersion,
                    isHidden: doc.isHidden,
                    isConfigured: doc.isConfigured,
                    manufacturerName: doc.manufacturerName,
                    deviceTypeDisplayName: doc.deviceTypeDisplayName,
                    deviceTypeName: doc.deviceTypeName,
                    inGroup: doc.inGroup,
                    deviceGroup: doc.deviceGroup,
                    groupRoom: doc.groupRoom,
                    deviceState: {
                        [doc.deviceCategory]: doc.deviceState
                    },
                    deviceProperties: {
                        [doc.deviceCategory]: doc.deviceProperties
                    },
                    lastUpdateTime: doc.lastUpdateTime,
                    lastUpdateBy: doc.lastUpdateBy,
                    lastUpdateUser: doc.lastUpdateUser,
                    lastUpdateSource: doc.lastUpdateSource,
                    deviceSyncInfo: doc.deviceSyncInfo,
                    markedForDelete: doc.markedForDelete,
                    registeredAt: doc.registeredAt,
                    fwInfo: doc.fwInfo,
                    fwHealth: doc.fwHealth
                })
                console.log(realmActivity)
            })
        })
        // realm.write(() => {
        //     // Delete all objects of the 'MyObject' schema
        //     const allObjects = realm.objects('IKeusDevice');
        //     realm.delete(allObjects);
        //   });
        // let activities = realm.objects('IKeusDevice')
        // console.log(Array.from(activities).length)
        //realm.close();

    }
    static async insertDevice(realm: Realm, doc: IKeusDeviceSchema) {
        let deviceProperties: any = {
            KZES: "iZigbeeEmbeddedSwitchProperties",
            KZSC: "iKeusSmartConsoleProperties",
            KZSW: "iKeusSceneWizardProperties",
            KZIRB: "iZigbeeIRBlasterProperties",
            KZRGBWWA: "iZigbeeRgbwwaDriverProperties",
            KZESS: "iZigbeeEmbeddedSceneSwitchProperties",
            KZACFC: "iZigbeeACFanControllerProperties",
            KZDCFC: "iZigbeeDCFanControllerProperties",
            KZCS: "iZigbeeContactSensorProperties",
            KZID: "iZigbeeInlineDimmerProperties",
            KZRE: "iZigbeeRangeExtenderProperties",
            KZCW: "iZigbeeCurtainWizardProperties",
            KZDD: "iZigbeeDimmableDriverProperties",
            KZND: "iZigbeeNonDimmableDriverProperties",
            KDDD: "iDaliDimmableDriverProperties",
            KDCTD: "iDaliColorTunableDriverProperties",
            KDND: "iDaliNonDimmableDriverProperties",
            KZCC: "iZigbeeCurtainControllerProperties",

        }

        realm.write(() => {
            let groupTransformOptions = ["deviceState", "deviceProperties"]
            //console.log(groupTransformOptions);
            let transformValues = ["deviceCategory", "deviceCategory"]
            const realmActivity = realm.create(BaseSchemaName, {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                deviceId: doc.deviceId,
                masterId: doc.masterId,
                deviceType: doc.deviceType,
                deviceCategory: doc.deviceCategory,
                deviceName: doc.deviceName,
                deviceSection: doc.deviceSection,
                deviceRoom: doc.deviceRoom,
                deviceLocation: doc.deviceLocation,
                deviceControlType: doc.deviceControlType,
                deviceParent: doc.deviceParent,
                firmwareVersion: doc.firmwareVersion,
                isHidden: doc.isHidden,
                isConfigured: doc.isConfigured,
                manufacturerName: doc.manufacturerName,
                deviceTypeDisplayName: doc.deviceTypeDisplayName,
                deviceTypeName: doc.deviceTypeName,
                inGroup: doc.inGroup,
                deviceGroup: doc.deviceGroup,
                groupRoom: doc.groupRoom,
                deviceState: {
                    [doc.deviceCategory]: doc.deviceState
                },
                deviceProperties: {
                    [doc.deviceCategory]: doc.deviceProperties
                },
                lastUpdateTime: doc.lastUpdateTime,
                lastUpdateBy: doc.lastUpdateBy,
                lastUpdateUser: doc.lastUpdateUser,
                lastUpdateSource: doc.lastUpdateSource,
                deviceSyncInfo: doc.deviceSyncInfo,
                markedForDelete: doc.markedForDelete,
                registeredAt: doc.registeredAt,
                fwInfo: doc.fwInfo,
                fwHealth: doc.fwHealth
            })
            console.log(realmActivity)

        })
    }
    static async insertDevices(realm: Realm, devices: Array<IKeusDeviceSchema>) {
        let deviceProperties: any = {
            KZES: "iZigbeeEmbeddedSwitchProperties",
            KZSC: "iKeusSmartConsoleProperties",
            KZSW: "iKeusSceneWizardProperties",
            KZIRB: "iZigbeeIRBlasterProperties",
            KZRGBWWA: "iZigbeeRgbwwaDriverProperties",
            KZESS: "iZigbeeEmbeddedSceneSwitchProperties",
            KZACFC: "iZigbeeACFanControllerProperties",
            KZDCFC: "iZigbeeDCFanControllerProperties",
            KZCS: "iZigbeeContactSensorProperties",
            KZID: "iZigbeeInlineDimmerProperties",
            KZRE: "iZigbeeRangeExtenderProperties",
            KZCW: "iZigbeeCurtainWizardProperties",
            KZDD: "iZigbeeDimmableDriverProperties",
            KZND: "iZigbeeNonDimmableDriverProperties",
            KDDD: "iDaliDimmableDriverProperties",
            KDCTD: "iDaliColorTunableDriverProperties",
            KDND: "iDaliNonDimmableDriverProperties",
            KZCC: "iZigbeeCurtainControllerProperties",

        }

        realm.write(() => {
            devices.forEach((doc: any) => {
                let groupTransformOptions = ["deviceState", "deviceProperties"]
                //console.log(groupTransformOptions);
                let transformValues = ["deviceCategory", "deviceCategory"]
                const realmActivity = realm.create(BaseSchemaName, {
                    transformValues: transformValues,
                    transformOptions: groupTransformOptions,
                    deviceId: doc.deviceId,
                    masterId: doc.masterId,
                    deviceType: doc.deviceType,
                    deviceCategory: doc.deviceCategory,
                    deviceName: doc.deviceName,
                    deviceSection: doc.deviceSection,
                    deviceRoom: doc.deviceRoom,
                    deviceLocation: doc.deviceLocation,
                    deviceControlType: doc.deviceControlType,
                    deviceParent: doc.deviceParent,
                    firmwareVersion: doc.firmwareVersion,
                    isHidden: doc.isHidden,
                    isConfigured: doc.isConfigured,
                    manufacturerName: doc.manufacturerName,
                    deviceTypeDisplayName: doc.deviceTypeDisplayName,
                    deviceTypeName: doc.deviceTypeName,
                    inGroup: doc.inGroup,
                    deviceGroup: doc.deviceGroup,
                    groupRoom: doc.groupRoom,
                    deviceState: {
                        [doc.deviceCategory]: doc.deviceState
                    },
                    deviceProperties: {
                        [doc.deviceCategory]: doc.deviceProperties
                    },
                    lastUpdateTime: doc.lastUpdateTime,
                    lastUpdateBy: doc.lastUpdateBy,
                    lastUpdateUser: doc.lastUpdateUser,
                    lastUpdateSource: doc.lastUpdateSource,
                    deviceSyncInfo: doc.deviceSyncInfo,
                    markedForDelete: doc.markedForDelete,
                    registeredAt: doc.registeredAt,
                    fwInfo: doc.fwInfo,
                    fwHealth: doc.fwHealth
                })
                console.log(realmActivity)
            })
        })
    }
    static async getAllDevices(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getDeviceById(realm: Realm, deviceId: string) {
        return realm.objects(BaseSchemaName).filtered('deviceId==$0', deviceId)
    }
    static async getIndividualDevicesByRooms(realm: Realm, roomIds: Array<String>) {
        const query = roomIds.map((roomId: any) => `deviceRoom == '${roomId}'`).join(' OR ');
        return realm.objects(BaseSchemaName).filtered(`inGroup == false AND (${query})`);
    }
    static async getIRBlasterByRooms(realm: Realm, roomIds: Array<String>) {
        const query = roomIds.map((roomId: any) => `deviceRoom == '${roomId}'`).join(' OR ');
        return realm.objects(BaseSchemaName).filtered(`deviceCategory == "KZIRB" AND (${query})`);
    }
    static async getDevicesByGateway(realm: Realm, gatewayId: string) {
        return realm.objects(BaseSchemaName).filtered('masterId==$0', gatewayId)
    }
    static async updateDevicesRoomByParent(realm: Realm, data: any) {
        realm.write(() => {
            const devices = realm.objects(BaseSchemaName).filtered('deviceParent ==$0', data.parentId);
            for (const device of devices) {
                device.deviceRoom = data.roomId,
                    device.deviceSection = data.sectionId
            }
        })

    }
    static async getDevicesByParent(realm: Realm, parentId: string) {
        return realm.objects(BaseSchemaName).filtered('deviceParent==$0', parentId);
    }
    static async updateDevicesSection(realm: Realm, data: any) {
        realm.write(() => {
            const devices = realm.objects(BaseSchemaName).filtered('deviceRoom == $0 AND deviceSection==$1', data.roomId, data.oldSectionId)
            for (const device of devices) {
                device.deviceSection = data.newSectionId
            }
        })
    }
    static async updateDeviceRoomAndSection(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
            device.deviceRoom = data.newRoomId;
            device.deviceSection = data.newSectionId
        })
    }
    static async getDevicesByRooms(realm: Realm, roomIds: Array<string>) {
        const query = roomIds.map((roomId: any) => `deviceRoom == '${roomId}'`).join(' OR ');
        return realm.objects(BaseSchemaName).filtered(`(${query})`);
    }
    static async getDevicesByRoomsAndCategories(realm: Realm, data: any) {
        const query1 = data.roomIds.map((roomId: any) => `deviceRoom == '${roomId}'`).join(' OR ');
        const query2 = data.deviceCategories.map((deviceCategory: any) => `deviceCategory == '${deviceCategory}'`).join(' OR ');
        return realm.objects(BaseSchemaName).filtered(`(${query1}) AND (${query2})`);
    }
    static async getDevicesByCategories(realm: Realm, deviceCategories: Array<string>) {
        const query = deviceCategories.map((deviceCategory: any) => `deviceCategory == '${deviceCategory}'`).join(' OR ');
        return realm.objects(BaseSchemaName).filtered(` (${query})`);
    }
    static async updateDevice(realm: Realm, deviceId: string, updatedObj: any) {
        let groupTransformOptions = ["deviceState", "deviceProperties"]
        //console.log(groupTransformOptions);
        let transformValues = ["deviceCategory", "deviceCategory"]
        realm.write(() => {
            realm.create(BaseSchemaName, {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                deviceId: updatedObj.deviceId,
                masterId: updatedObj.masterId,
                deviceType: updatedObj.deviceType,
                deviceCategory: updatedObj.deviceCategory,
                deviceName: updatedObj.deviceName,
                deviceSection: updatedObj.deviceSection,
                deviceRoom: updatedObj.deviceRoom,
                deviceLocation: updatedObj.deviceLocation,
                deviceControlType: updatedObj.deviceControlType,
                deviceParent: updatedObj.deviceParent,
                firmwareVersion: updatedObj.firmwareVersion,
                isHidden: updatedObj.isHidden,
                isConfigured: updatedObj.isConfigured,
                manufacturerName: updatedObj.manufacturerName,
                deviceTypeDisplayName: updatedObj.deviceTypeDisplayName,
                deviceTypeName: updatedObj.deviceTypeName,
                inGroup: updatedObj.inGroup,
                deviceGroup: updatedObj.deviceGroup,
                groupRoom: updatedObj.groupRoom,
                deviceState: {
                    [updatedObj.deviceCategory]: updatedObj.deviceState
                },
                deviceProperties: {
                    [updatedObj.deviceCategory]: updatedObj.deviceProperties
                },
                lastUpdateTime: updatedObj.lastUpdateTime,
                lastUpdateBy: updatedObj.lastUpdateBy,
                lastUpdateUser: updatedObj.lastUpdateUser,
                lastUpdateSource: updatedObj.lastUpdateSource,
                deviceSyncInfo: updatedObj.deviceSyncInfo,
                markedForDelete: updatedObj.markedForDelete,
                registeredAt: updatedObj.registeredAt,
                fwInfo: updatedObj.fwInfo,
                fwHealth: updatedObj.fwHealth
            }, Realm.UpdateMode.Modified)
        })
    }
    static async getDevicesByRoom(realm: Realm, roomId: string) {
        return realm.objects(BaseSchemaName).filtered('deviceRoom==$0', roomId)
    }
    static async updateDeviceGroup(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
            device.inGroup = data.groupId == -1 ? false : true;
            device.deviceGroup = data.groupId;
            device.groupRoom = data.groupRoom;
        })
    }
    static async updateDriversGroup(realm: Realm, deviceIdList: Array<string>, groupId: number, groupRoom: string) {
        realm.write(() => {
            const devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIdList);
            for (const device of devices) {
                device.inGroup = groupId == -1 ? false : true,
                    device.deviceGroup = groupId,
                    device.groupRoom = groupRoom
            }
        })
    }
    static async bulkWrite(realm: Realm, operationList: Array<any>) {
        operationList.forEach((operation) => {
            let device = realm.objectForPrimaryKey(BaseSchemaName, operation.updateOne.filter.deviceId);
            realm.write(() => {
                Object.keys(operation.updateOne.update.$set).forEach((field) => {
                    let value = operation.updateOne.update.$set[field];
                    if (field == "deviceState" || field == "deviceProperties") {
                        let category: any = device.deviceCategory
                        device[field][category] = value
                    } else {
                        device[field] = value
                    }
                })
            })
        })
    }
    static async updateGroupDeviceProperties(realm: Realm, data: any) {
        realm.write(() => {
            let devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', data.deviceList);
            for (const device of devices) {
                device.deviceProperties = data.deviceProperties;
            }
        })
    }
    static async updateDeviceProperties(realm: Realm, data: any) {
        realm.write(() => {
            let device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
            device.deviceProperties = data.deviceProperties;
            device.isConfigured = data.isConfigured;
        })
    }
    static async updateDeviceSyncInfo(realm: Realm, data: any) {
        realm.write(() => {
            let device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
            device.deviceSyncInfo = data.deviceSyncInfo;
        })
    }
    static async updateGroupDeviceStates(realm: Realm, data: any) {
        realm.write(() => {
            const devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', data.deviceList);
            for (const device of devices) {
                device.deviceState = data.deviceState;
            }
        })
    }
    static async deleteDeviceById(realm: Realm, deviceId: string) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('deviceId == $0', deviceId))
        })
    }
    static async cleanDrivers(realm: Realm, deviceIds: Array<string>) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIds));
        })
    }
    static async cleanSmartConsoleGroupButtons(realm: Realm, data: any) {
        const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1']);
        realm.write(() => {
            devices.forEach((device: any) => {
                device.deviceProperties.buttons.forEach((button: any) => {
                    if (button.buttonType == 2 && button.buttonProperties.groupId == data.groupId && button.buttonProperties.roomId == data.groupRoom) {
                        button.buttonProperties.groupId = -1;
                        button.buttonProperties.roomId = ""
                    }
                })
            })
        })
    }
    static async cleanSmartConsoleSceneButtons(realm: Realm, data: any) {
        //return realm.objects(BaseSchemaName).filtered('deviceType IN $0 AND ANY deviceProperties.buttons.buttonType == $1 AND deviceProperties.buttons.buttonProperties.sceneId == $2 AND deviceProperties.buttons.buttonProperties.roomId == $3',['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1'],3,data.sceneId,data.sceneRoom)
        const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1'])
        realm.write(() => {
            devices.forEach((device: any) => {
                device.deviceProperties.buttons.forEach((button) => {
                    if (button.buttonType == 3 && button.buttonProperties.sceneId == data.sceneId && button.buttonProperties.roomId == data.sceneRoom) {
                        button.buttonProperties.sceneId = -1;
                        button.buttonProperties.roomId = ""
                    }
                })
            })
        })
    }
    static async cleanSmartConsoleDeviceButtons(realm: Realm) {
        
    }
    static async cleanSceneWizardSceneButtons(realm: Realm, data: any) {
        const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ["KZSW01", "KZSWM1"])
        realm.write(() => {
            devices.forEach((device: any) => {
                device.deviceProperties.buttons.forEach((button: any) => {
                    if (button.buttonType == 3 && button.buttonProperties.sceneId == data.sceneId && button.buttonProperties.roomId == data.sceneRoom) {
                        button.buttonProperties.sceneId = -1;
                        button.buttonProperties.roomId = ""
                    }
                })
            })
        })
    }
    static async cleanSceneWizardDeviceButtons(realm: Realm) {

    }
    static async cleanZigbeeCurtainWizardDeviceButtons(realm: Realm) {

    }
    // static async cleanSceneSwitchButtons(realm: Realm,data:any) {
    //     const devices:any=realm.objects(BaseSchemaName).filtered('deviceType IN $0',["KZESS01","KZESS10"]);
    //     realm.write(()=>{
    //         devices.forEach((device:any)=>{
    //             device.deviceProperties.switches.forEach((switch:any)=>{
    //                 if(switch.sceneId==data.sceneId && switch.sceneRoom == data.sceneRoom && ){

    //                 }
    //             })
    //         })
    //     })
    // }
    static async updateEmbeddedApplianceGroups(realm: Realm, data: any) {

    }
    static async replaceSmartConsoleButtonsOfDevice(realm: Realm) {

    }
    static async replaceSmartConsoleDefaultFan(realm: Realm) {

    }
    static async replaceSceneWizardButtonsOfDevice(realm: Realm) {

    }
    static async replaceZigbeeCurtainWizardButtons(realm: Realm) {

    }
    static async updateDeviceName(realm: Realm, data: any) {
        realm.write(() => {
            const device = realm.objectForPrimaryKey(BaseSchemaName, data.DeviceId);
            device.deviceName = data.newName;
        })
    }
    static async getDevicesByRoomsAndSection(realm: Realm, data: any) {
        realm.write(() => {
            return realm.objects(BaseSchemaName).filtered('deviceRoom==$0 AND deviceSection==$1', data.roomId, data.sectionId)
        })
    }

}
export const ModelsList = [
    IKeusDeviceSchema, IKeusSmartConsoleButtonPropertiesSchema,
    deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema,
    IDaliColorTunableDriverStateSchema, IDaliColorTunableDriverPropertiesSchema,
    IDaliDimmableDriverPropertiesSchema, IDaliDimmableDriverStateSchema,
    IDaliNonDimmableDriverPropertiesSchema, IDaliNonDimmableDriverStateSchema,
    IKeusIRACRemotePropertiesSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRFANRemotePropertiesSchema,
    IKeusSceneWizardPropertiesSchema, IKeusSceneWizardStateSchema,
    buttonPropertiesCollectionSchema, IKeusSmartConsoleRelaySchema, IKeusSmartConsolePropertiesSchema, ISmartConsoleGroupButtonPropertiesSchema, ISmartConsoleSceneButtonPropertiesSchema, ISmartConsoleCurtainButtonPropertiesSchema, ISmartConsoleRelayButtonPropertiesSchema, ISmartConsoleRemoteRelayButtonPropertiesSchema, ISmartConsoleFanButtonPropertiesSchema, ISmartConsoleNoPropsButtonPropertiesSchema, IKeusSmartConsoleButtonSchema, KZSCdeviceButtonPropertiesSchema, KZSCbuttonPropertiesSchema, IKeusSmartConsoleStateSchema,
    KZESApplianceStateSchema,
    KZESAppliancePropertiesSchema,
    KZESSwitchPropertiesSchema, IZigbeeEmbeddedSwitchPropertiesSchema, IEmbeddedSwitchPortSchema, IEmbeddedApplianceSchema, IEmbeddedSwitchSchema, IZigbeeEmbeddedSwitchStateSchema,
    IZigbeeIRBlasterPropertiesSchema, IZigbeeIRBlasterStateSchema,
    fwInfoSchema, fwHealthSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema,
    IRBGSchema, IWWASchema, IZigbeeRgbwwaDriverStateSchema, IZigbeeRgbwwaDriverPropertiesSchema,
    IZigbeeDCFanControllerStateSchema, IZigbeeDCFanControllerPropertiesSchema,
    IZigbeeNonDimmableDriverPropertiesSchema, IZigbeeNonDimmableDriverStateSchema,
    IZigbeeCurtainControllerStateSchema, IZigbeeCurtainControllerPropertiesSchema,
    ISceneSwitchTypeSchema, IZigbeeEmbeddedSceneSwitchPropertiesSchema, IZigbeeEmbeddedSceneSwitchStateSchema,
    IZigbeeACFanControllerStateSchema, IZigbeeACFanControllerPropertiesSchema,
    IZigbeeContactSensorStateSchema, IZigbeeContactSensorPropertiesSchema,
    IZigbeeInlineDimmerStateSchema, IZigbeeInlineDimmerPropertiesSchema,
    IZigbeeRangeExtenderStateSchema, IZigbeeRangeExtenderPropertiesSchema,
    IZigbeeCurtainWizardButtonSchema, IZigbeeCurtainWizardPropertiesSchema, IZigbeeCurtainWizardStateSchema,
    IZigbeeDimmableDriverPropertiesSchema, IZigbeeDimmableDriverStateSchema,
    IKeusDeviceSchema_deviceSyncInfoSchema,

]


//console.log(IDaliColorTunableDriverPropertiesSchema.name)

