import Realm from "realm";
export const BaseSchemaName = "IKeusScheduleSchema";
export const BaseSchemaVersion = 1;
import { IZigbeeDimmableActionSchema } from "../device-categories/zigbee-dimmable-driver"
import { IZigbeeNonDimmableActionSchema } from "../device-categories/zigbee-nondimmable-driver"
import { IDaliDimmableActionSchema } from "../device-categories/dali-dimmable-driver"
import { IDaliNonDimmableActionSchema } from "../device-categories/dali-nondimmable-driver"
import { IZigbeeCurtainControllerActionSchema } from "../device-categories/zigbee-curtain-controller"
import { IEmbeddedApplianceActionSchema, IEmbeddedGroupOnOffApplianceActionSchema, IEmbeddedGroupSingleDimmerApplianceActionSchema, IEmbeddedGroupFanApplianceActionSchema, IEmbeddedGroupColorTunableApplianceActionSchema, KZESApplianceStateSchema } from "../device-categories/zigbee-embedded-switch"
import { IZigbeeACFanControllerActionSchema } from "../device-categories/zigbee-ac-fan-controller"
import { IZigbeeDCFanControllerActionSchema, IZigbeeDCFanControllerActionLightStateSchema } from "../device-categories/zigbee-dc-fan-controller"
import { IZigbeeRgbwwaDriverActionSchema, IZigbeeRgbwwaDriverGroupActionSchema, IWWASchema, IRBGSchema } from "../device-categories/zigbee-rgbwwa-driver"
import { ISmartConsoleRelayActionSchema } from "../device-categories/keus-smart-console"
import { IZigbeeIRBlasterActionSchema, IZigbeeIRBlasterAction_irBlastActionSchema } from "../device-categories/zigbee-ir-blaster"
import { IKeusExcuteSceneActionSchema } from "./scenes"
import { IDaliColorTunableDriverGroupScheculeActionSchema, IDaliColorTunableDriverStateSchema } from "../device-categories/dali-color-tunable-driver"
import { IZigbeeContactSensorScheduleActionSchema } from "../device-categories/zigbee-contact-sensor"
import { IKeusGMApplianceScheduleActionSchema, IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema } from "./gm-models/gmappliances"
import { IKeusGMGroupScheduleActionSchema, IKeusGMGroupIdentifierSchema } from "./gm-models/gmgroups"
import { IUnifiCameraApplianceScheduleActionSchema } from "../appliance-types/unificamera"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema } from "../trait-types/angulartilt"
import { IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema } from "../trait-types/brightness"
import { ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema } from "../trait-types/camerarecording"
import { IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema } from "../trait-types/fanspeedcontrol"
import { ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema } from "../trait-types/louvercontrol"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import { IModeControlTraitPropertiesSchema, IModeControlTraitStateSchema } from "../trait-types/modecontrol"
import { IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema } from "../trait-types/openclose"
import { IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema } from "../trait-types/opencloserelay"
import { IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema } from "../trait-types/percentopen"
import { IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema } from "../trait-types/push-trigger"
import { IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema } from "../trait-types/rgbaddressable"
import { IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema } from "../trait-types/rgbcolor"
import { IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema } from "../trait-types/rgbwwa"
import { ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema } from "../trait-types/swingcontrol"
import { ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema } from "../trait-types/temperaturecontrol"
import { ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema } from "../trait-types/tiltrelay"
import { IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema } from "../trait-types/wwmixer"
import { string } from "fp-ts"
// export enum SCHEDULE_ACTION_TYPE {
//     ZIGBEE_DIMMABLE_DRIVER = 0,
//     ZIGBEE_NON_DIMMABLE_DRIVER = 1,
//     DALI_DIMMABLE_DRIVER = 2,
//     DALI_NON_DIMMABLE_DRIVER = 3,
//     ZIGBEE_CURTAIN_CONTROLLER = 4,
//     ZIGBEE_EMBEDDED_SWITCH = 5,
//     ZIGBEE_AC_FAN_CONTROLLER = 6,
//     ZIGBEE_DC_FAN_CONTROLLER = 7,
//     ZIGBEE_RGBWWA = 8,
//     ZIGBEE_SMART_CONSOLE_RELAY = 9,
//     ZIGBEE_IR_REMOTE = 10,
//     SCENE_EXECUTION = 11,
//     GROUP_APPLIANCE_ON0FF = 12,
//     GROUP_APPLIANCE_SINGLE_DIMMER = 13,
//     GROUP_APPLIANCE_FAN = 14,
//     GROUP_APPLIANCE_COLOR_TUNABLE = 15,
//     GROUP_ZIGBEE_RGBWWA = 16,
//     DALI_COLOR_TUNABLE_DRIVER = 17,
//     ZIGBEE_CONTACT_SENSOR = 18,
//     SCH_GMAPPLIANCE = 19,
//     SCH_GMGROUP = 20,
//     SCH_CAMERA = 21,
// }
export const IKeusSchedule_scheduleActionSchemaMap = {
    0: "iZigbeeDimmableActionSchema",
    1: "iZigbeeNonDimmableActionSchema",
    2: "iDaliDimmableActionSchema",
    3: "iDaliNonDimmableActionSchema",
    4: "iZigbeeCurtainControllerActionSchema",
    5: "iEmbeddedApplianceActionSchema",
    6: "iZigbeeACFanControllerActionSchema",
    7: "iZigbeeDCFanControllerActionSchema",
    8: "iZigbeeRgbwwaDriverActionSchema",
    9: "iSmartConsoleRelayActionSchema",
    10: "iZigbeeIRBlasterActionSchema",
    11: "iKeusExcuteSceneActionSchema",
    12: "iEmbeddedGroupOnOffApplianceActionSchema",
    13: "iEmbeddedGroupSingleDimmerApplianceActionSchema",
    14: "iEmbeddedGroupFanApplianceActionSchema",
    15: "iEmbeddedGroupColorTunableApplianceActionSchema",
    16: "iZigbeeRgbwwaDriverGroupActionSchema",
    17: "iDaliColorTunableDriverGroupScheculeActionSchema",
    18: "iZigbeeContactSensorScheduleActionSchema",
    19: "iKeusGMApplianceScheduleActionSchema",
    20: "iKeusGMGroupScheduleActionSchema",
    21: "iUnifiCameraApplianceScheduleActionSchema"
}
export class IKeusSchedule_scheduleActionSchema extends Realm.Object<IKeusSchedule_scheduleActionSchema> {
    static embedded?: boolean = true;
    T0?: IZigbeeDimmableActionSchema
    T1?: IZigbeeNonDimmableActionSchema;
    T2?: IDaliDimmableActionSchema
    T3?: IDaliNonDimmableActionSchema
    T4?: IZigbeeCurtainControllerActionSchema;
    T5?: IEmbeddedApplianceActionSchema;
    T6?: IZigbeeACFanControllerActionSchema;
    T7?: IZigbeeDCFanControllerActionSchema;
    T8?: IZigbeeRgbwwaDriverActionSchema;
    T9?: ISmartConsoleRelayActionSchema
    T10?: IZigbeeIRBlasterActionSchema;
    T11?: IKeusExcuteSceneActionSchema;
    T12?: IEmbeddedGroupOnOffApplianceActionSchema;
    T13?: IEmbeddedGroupSingleDimmerApplianceActionSchema
    T14?: IEmbeddedGroupFanApplianceActionSchema;
    T15?: IEmbeddedGroupColorTunableApplianceActionSchema;
    T16?: IZigbeeRgbwwaDriverGroupActionSchema;
    T17?: IDaliColorTunableDriverGroupScheculeActionSchema;
    T18?: IZigbeeContactSensorScheduleActionSchema;
    T19?: IKeusGMApplianceScheduleActionSchema;
    T20?: IKeusGMGroupScheduleActionSchema;
    T21?: IUnifiCameraApplianceScheduleActionSchema;

}


export class IKeusScheduleSchema extends Realm.Object<IKeusScheduleSchema> {
    static primaryKey = "scheduleId";
    transformOptions: Realm.Types.List<Realm.Types.Mixed>
    transformValues: Realm.Types.List<Realm.Types.Mixed>
    processing: Realm.Types.List<Realm.Types.Mixed>
    scheduleId: string;
    scheduleName?: string;
    scheduleType?: Realm.Types.Int;
    scheduleActionType?: Realm.Types.Int;
    scheduleSection?: string;
    scheduleRoom?: string;
    startTime?: Realm.Types.Int;
    endTime?: Realm.Types.Int;
    repeat?: Realm.Types.List<string>;
    createdBy?: string;
    createdByName?: string;
    //scheduleAction?: IKeusSchedule_scheduleActionSchema;
    activeStatus?: Realm.Types.Bool;
    scheduleRunning?: Realm.Types.Bool;
    forceExecuteStatus?: string;
    forceExecute?: Realm.Types.Bool;
    lastExecutedTime?: Realm.Types.Int;
    lastExecutionStatus?: Realm.Types.Int;
    lastExecutionStatusMessage?: string;

}

export const ModelsList = [
    IKeusScheduleSchema,
    //IKeusSchedule_scheduleActionSchema,
    IZigbeeDimmableActionSchema,
    IZigbeeNonDimmableActionSchema,
    IDaliDimmableActionSchema,
    IDaliNonDimmableActionSchema,
    IZigbeeCurtainControllerActionSchema,
    IEmbeddedApplianceActionSchema, IEmbeddedGroupOnOffApplianceActionSchema, IEmbeddedGroupSingleDimmerApplianceActionSchema, IEmbeddedGroupFanApplianceActionSchema, IEmbeddedGroupColorTunableApplianceActionSchema, KZESApplianceStateSchema,
    IZigbeeACFanControllerActionSchema,
    IZigbeeDCFanControllerActionSchema, IZigbeeDCFanControllerActionLightStateSchema,
    IZigbeeRgbwwaDriverActionSchema, IZigbeeRgbwwaDriverGroupActionSchema, IWWASchema, IRBGSchema,
    ISmartConsoleRelayActionSchema,
    IZigbeeIRBlasterActionSchema, IZigbeeIRBlasterAction_irBlastActionSchema,
    IKeusExcuteSceneActionSchema,
    IDaliColorTunableDriverGroupScheculeActionSchema, IDaliColorTunableDriverStateSchema,
    IZigbeeContactSensorScheduleActionSchema,
    IKeusGMApplianceScheduleActionSchema, IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema,
    IKeusGMGroupScheduleActionSchema, IKeusGMGroupIdentifierSchema,
    IUnifiCameraApplianceScheduleActionSchema,
    IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema,
    IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema,
    ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema,
    IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema,
    ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema,
    IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema,
    IModeControlTraitPropertiesSchema, IModeControlTraitStateSchema,
    IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema,
    IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema,
    IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema,
    IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema,
    IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema,
    IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema,
    IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema,
    ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema,
    ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema,
    ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema,
    IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema
]
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.109:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'schedules';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    let groupTransformOptions = ["scheduleAction"]
                    console.log(groupTransformOptions);
                    let transformValues = ["scheduleActionType"]
                    const realmActivity = realm.create(BaseSchemaName, {
                        transformValues: transformValues,
                        transformOptions: groupTransformOptions,
                        processing: [true],
                        scheduleId: doc.scheduleId,
                        scheduleName: doc.scheduleName,
                        scheduleType: doc.scheduleType,
                        scheduleActionType: doc.scheduleActionType,
                        scheduleSection: doc.scheduleSection,
                        scheduleRoom: doc.scheduleRoom,
                        startTime: doc.startTime,
                        endTime: doc.endTime,
                        repeat: doc.repeat,
                        createdBy: doc.createdBy,
                        createdByName: doc.createdByName,
                        scheduleAction: {
                            ['T' + doc.scheduleActionType]: doc.scheduleAction
                        },
                        activeStatus: doc.activeStatus,
                        scheduleRunning: doc.scheduleRunning,
                        forceExecuteStatus: doc.forceExecuteStatus,
                        forceExecute: doc.forceExecute,
                        lastExecutedTime: doc.lastExecutedTime,
                        lastExecutionStatus: doc.lastExecutionStatus,
                        lastExecutionStatusMessage: doc.lastExecutionStatusMessage
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async insertSchedule(realm: Realm, doc: IKeusScheduleSchema) {
        let groupTransformOptions = ["scheduleAction"]
        console.log(groupTransformOptions);
        let transformValues = ["scheduleActionType"]
        realm.write(() => {
            realm.create(BaseSchemaName, {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                processing: [true],
                scheduleId: doc.scheduleId,
                scheduleName: doc.scheduleName,
                scheduleType: doc.scheduleType,
                scheduleActionType: doc.scheduleActionType,
                scheduleSection: doc.scheduleSection,
                scheduleRoom: doc.scheduleRoom,
                startTime: doc.startTime,
                endTime: doc.endTime,
                repeat: doc.repeat,
                createdBy: doc.createdBy,
                createdByName: doc.createdByName,
                // scheduleAction: {
                //     ['T' + doc.scheduleActionType]: doc.scheduleAction
                // },
                activeStatus: doc.activeStatus,
                scheduleRunning: doc.scheduleRunning,
                forceExecuteStatus: doc.forceExecuteStatus,
                forceExecute: doc.forceExecute,
                lastExecutedTime: doc.lastExecutedTime,
                lastExecutionStatus: doc.lastExecutionStatus,
                lastExecutionStatusMessage: doc.lastExecutionStatusMessage
            })
        })
    }
    static async getAllSchedules(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async getScheduleById(realm: Realm, scheduleId: string) {
        return realm.objects(BaseSchemaName).filtered('scheduleId==$0', scheduleId);
    }
    static async getSchedulesByRooms(realm: Realm, roomIds: Array<String>) {
        return realm.objects(BaseSchemaName).filtered('scheduleRoom IN $0', roomIds);

    }
    static async getSchedulesByTypeAndAction(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('scheduleType == $0 AND scheduleActionType==$1', data.scheduleType, data.scheduleActionType)
    }
    static async getSchedulesByGMAppliance(realm: Realm, applianceIdentifier: IKeusGMApplianceIdentifierSchema) {
        return realm.objects(BaseSchemaName).filtered('scheduleAction.applianceIdentifier == $0', applianceIdentifier);
    }
    static async getSchedulesByGMGroup(realm: Realm, groupIdentifier: IKeusGMGroupIdentifierSchema) {
        return realm.objects(BaseSchemaName).filtered('scheduleAction.groupIdentifie == $0', groupIdentifier);
    }
    static async deleteScheduleById(realm: Realm, scheduleId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, scheduleId));
        })
    }
    static async updateScheduleAction(realm: Realm, data: any) {
        const schedule = realm.objects(BaseSchemaName).filtered('scheduleId == $0', data.scheduleId)[0];
        realm.write(() => [
            schedule.scheduleAction = data.scheduleAction
        ])
    }
    static async updateScheduleActiveStatus(realm: Realm, data: any) {
        const schedule = realm.objects(BaseSchemaName).filtered('scheduleId == $0', data.scheduleId)[0];
        realm.write(() => {
            schedule.activeStatus = data.status;
        })
    }
    static async updateSchedule(realm: Realm, doc: any) {
        let groupTransformOptions = ["scheduleAction"]
        console.log(groupTransformOptions);
        let transformValues = ["scheduleActionType"]
        realm.write(() => {
            realm.create(BaseSchemaName, {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                processing: [true],
                scheduleId: doc.scheduleId,
                scheduleName: doc.scheduleName,
                scheduleType: doc.scheduleType,
                scheduleActionType: doc.scheduleActionType,
                scheduleSection: doc.scheduleSection,
                scheduleRoom: doc.scheduleRoom,
                startTime: doc.startTime,
                endTime: doc.endTime,
                repeat: doc.repeat,
                createdBy: doc.createdBy,
                createdByName: doc.createdByName,
                scheduleAction: {
                    ['T' + doc.scheduleActionType]: doc.scheduleAction
                },
                activeStatus: doc.activeStatus,
                scheduleRunning: doc.scheduleRunning,
                forceExecuteStatus: doc.forceExecuteStatus,
                forceExecute: doc.forceExecute,
                lastExecutedTime: doc.lastExecutedTime,
                lastExecutionStatus: doc.lastExecutionStatus,
                lastExecutionStatusMessage: doc.lastExecutionStatusMessage
            }, Realm.UpdateMode.Modified)
        })
    }
    static async cleanGroupSchedules(realm: Realm, data: any) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.roomId == $0 AND scheduleAction.groupId == $1', data.groupRoom, data.groupId)
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules);
        })
        return clearingList
    }
    static async cleanSceneSchedules(realm: Realm, data: any) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.sceneRoom == $0 AND scheduleAction.sceneId == $1', data.sceneRoom, data.sceneId)
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules)
        })
        return clearingList;

    }
    static async cleanDeviceSchedules(realm: Realm, deviceId: string) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', deviceId);
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules)
        })
        return clearingList;
    }
    static async replaceDeviceSchedules(realm: Realm, data: any) {
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', data.oldDeviceId);
        realm.write(() => {
            for (const schedule of schedules) {
                schedule.scheduleAction["deviceId"] = data.newDeviceId;
            }
        })
    }
    static async cleanIRDeviceSchedules(realm: Realm, deviceId: string) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.irDevice == $0', deviceId);
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules)
        })
        return clearingList;

    }
    static async cleanScRelaySchedules(realm: Realm, scDeviceId: string) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', scDeviceId)
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules)
        })
        return clearingList;

    }
    static async cleanIRRemoteSchedules(realm: Realm, remoteId: string) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.remoteId == $0', remoteId);
        let clearingList = []
        schedules.forEach((schedule) => {
            let obj: any
            obj.scheduleId = schedule.scheduleId
            clearingList.push(obj)

        })
        realm.write(() => {
            realm.delete(schedules)
        })
        return clearingList;

    }
    static async replaceIrDeviceSchedules(realm: Realm, data: any) {
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.irDevice == $0', data.oldDeviceId);
        realm.write(() => {
            for (const schedule of schedules) {
                schedule.scheduleAction['irDevice'] = data.newDeviceId;
            }
        })

    }
    static async cleanGMApplianceSchedules(realm: Realm, applianceIdentifier: any) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.applianceIdentifier == $0', applianceIdentifier);
        realm.write(() => {
            realm.delete(schedules)
        })
    }
    static async cleanGMGroupSchedules(realm: Realm, groupIdentifier: any) {
        //doublecheck
        const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.groupIdentifier == $0', groupIdentifier);
        realm.write(() => {
            realm.delete(schedules)
        })
    }
}