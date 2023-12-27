"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusSchedule_scheduleActionSchemaMap = exports.IKeusSchedule_scheduleActionSchema = exports.IKeusScheduleSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _zigbeeDimmableDriver = require("../device-categories/zigbee-dimmable-driver");
var _zigbeeNondimmableDriver = require("../device-categories/zigbee-nondimmable-driver");
var _daliDimmableDriver = require("../device-categories/dali-dimmable-driver");
var _daliNondimmableDriver = require("../device-categories/dali-nondimmable-driver");
var _zigbeeCurtainController = require("../device-categories/zigbee-curtain-controller");
var _zigbeeEmbeddedSwitch = require("../device-categories/zigbee-embedded-switch");
var _zigbeeAcFanController = require("../device-categories/zigbee-ac-fan-controller");
var _zigbeeDcFanController = require("../device-categories/zigbee-dc-fan-controller");
var _zigbeeRgbwwaDriver = require("../device-categories/zigbee-rgbwwa-driver");
var _keusSmartConsole = require("../device-categories/keus-smart-console");
var _zigbeeIrBlaster = require("../device-categories/zigbee-ir-blaster");
var _scenes = require("./scenes");
var _daliColorTunableDriver = require("../device-categories/dali-color-tunable-driver");
var _zigbeeContactSensor = require("../device-categories/zigbee-contact-sensor");
var _gmappliances = require("./gm-models/gmappliances");
var _gmgroups = require("./gm-models/gmgroups");
var _unificamera = require("../appliance-types/unificamera");
var _angulartilt = require("../trait-types/angulartilt");
var _brightness = require("../trait-types/brightness");
var _camerarecording = require("../trait-types/camerarecording");
var _fanspeedcontrol = require("../trait-types/fanspeedcontrol");
var _louvercontrol = require("../trait-types/louvercontrol");
var _onoff = require("../trait-types/onoff");
var _modecontrol = require("../trait-types/modecontrol");
var _openclose = require("../trait-types/openclose");
var _opencloserelay = require("../trait-types/opencloserelay");
var _percentopen = require("../trait-types/percentopen");
var _pushTrigger = require("../trait-types/push-trigger");
var _rgbaddressable = require("../trait-types/rgbaddressable");
var _rgbcolor = require("../trait-types/rgbcolor");
var _rgbwwa = require("../trait-types/rgbwwa");
var _swingcontrol = require("../trait-types/swingcontrol");
var _temperaturecontrol = require("../trait-types/temperaturecontrol");
var _tiltrelay = require("../trait-types/tiltrelay");
var _wwmixer = require("../trait-types/wwmixer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusScheduleSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
const IKeusSchedule_scheduleActionSchemaMap = exports.IKeusSchedule_scheduleActionSchemaMap = {
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
};
const IKeusSchedule_scheduleActionSchema = exports.IKeusSchedule_scheduleActionSchema = {
  name: "IKeusSchedule_scheduleActionSchema",
  properties: {
    T0: {
      type: "object",
      optional: true,
      objectType: "IZigbeeDimmableActionSchema"
    },
    T1: {
      type: "object",
      optional: true,
      objectType: "IZigbeeNonDimmableActionSchema"
    },
    T2: {
      type: "object",
      optional: true,
      objectType: "IDaliDimmableActionSchema"
    },
    T3: {
      type: "object",
      optional: true,
      objectType: "IDaliNonDimmableActionSchema"
    },
    T4: {
      type: "object",
      optional: true,
      objectType: "IZigbeeCurtainControllerActionSchema"
    },
    T5: {
      type: "object",
      optional: true,
      objectType: "IEmbeddedApplianceActionSchema"
    },
    T6: {
      type: "object",
      optional: true,
      objectType: "IZigbeeACFanControllerActionSchema"
    },
    T7: {
      type: "object",
      optional: true,
      objectType: "IZigbeeDCFanControllerActionSchema"
    },
    T8: {
      type: "object",
      optional: true,
      objectType: "IZigbeeRgbwwaDriverActionSchema"
    },
    T9: {
      type: "object",
      optional: true,
      objectType: "ISmartConsoleRelayActionSchema"
    },
    T10: {
      type: "object",
      optional: true,
      objectType: "IZigbeeIRBlasterActionSchema"
    },
    T11: {
      type: "object",
      optional: true,
      objectType: "IKeusExcuteSceneActionSchema"
    },
    T12: {
      type: "object",
      optional: true,
      objectType: "IEmbeddedGroupOnOffApplianceActionSchema"
    },
    T13: {
      type: "object",
      optional: true,
      objectType: "IEmbeddedGroupSingleDimmerApplianceActionSchema"
    },
    T14: {
      type: "object",
      optional: true,
      objectType: "IEmbeddedGroupFanApplianceActionSchema"
    },
    T15: {
      type: "object",
      optional: true,
      objectType: "IEmbeddedGroupColorTunableApplianceActionSchema"
    },
    T16: {
      type: "object",
      optional: true,
      objectType: "IZigbeeRgbwwaDriverGroupActionSchema"
    },
    T17: {
      type: "object",
      optional: true,
      objectType: "IDaliColorTunableDriverGroupScheculeActionSchema"
    },
    T18: {
      type: "object",
      optional: true,
      objectType: "IZigbeeContactSensorScheduleActionSchema"
    },
    T19: {
      type: "object",
      optional: true,
      objectType: "IKeusGMApplianceScheduleActionSchema"
    },
    T20: {
      type: "object",
      optional: true,
      objectType: "IKeusGMGroupScheduleActionSchema"
    },
    T21: {
      type: "object",
      optional: true,
      objectType: "IUnifiCameraApplianceScheduleActionSchema"
    }
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusScheduleSchema extends _realm.default.Object {
  static primaryKey = "scheduleId";

  //scheduleAction?: IKeusSchedule_scheduleActionSchema;
  static schema = {
    name: "IKeusScheduleSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
      processing: {
        type: "list",
        objectType: "mixed"
      },
      scheduleId: {
        type: "string"
      },
      scheduleName: {
        type: "string",
        optional: true
      },
      scheduleType: {
        type: "int",
        optional: true
      },
      scheduleActionType: {
        type: "int",
        optional: true
      },
      scheduleSection: {
        type: "string",
        optional: true
      },
      scheduleRoom: {
        type: "string",
        optional: true
      },
      startTime: {
        type: "int",
        optional: true
      },
      endTime: {
        type: "int",
        optional: true
      },
      repeat: {
        type: "list",
        optional: true,
        objectType: "string"
      },
      createdBy: {
        type: "string",
        optional: true
      },
      createdByName: {
        type: "string",
        optional: true
      },
      activeStatus: {
        type: "bool",
        optional: true
      },
      scheduleRunning: {
        type: "bool",
        optional: true
      },
      forceExecuteStatus: {
        type: "string",
        optional: true
      },
      forceExecute: {
        type: "bool",
        optional: true
      },
      lastExecutedTime: {
        type: "int",
        optional: true
      },
      lastExecutionStatus: {
        type: "int",
        optional: true
      },
      lastExecutionStatusMessage: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "scheduleId"
  };
}
exports.IKeusScheduleSchema = IKeusScheduleSchema;
const ModelsList = exports.ModelsList = [IKeusScheduleSchema,
//IKeusSchedule_scheduleActionSchema,
_zigbeeDimmableDriver.IZigbeeDimmableActionSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableActionSchema, _daliDimmableDriver.IDaliDimmableActionSchema, _daliNondimmableDriver.IDaliNonDimmableActionSchema, _zigbeeCurtainController.IZigbeeCurtainControllerActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupOnOffApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupSingleDimmerApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupFanApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupColorTunableApplianceActionSchema, _zigbeeEmbeddedSwitch.KZESApplianceStateSchema, _zigbeeAcFanController.IZigbeeACFanControllerActionSchema, _zigbeeDcFanController.IZigbeeDCFanControllerActionSchema, _zigbeeDcFanController.IZigbeeDCFanControllerActionLightStateSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverActionSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverGroupActionSchema, _zigbeeRgbwwaDriver.IWWASchema, _zigbeeRgbwwaDriver.IRBGSchema, _keusSmartConsole.ISmartConsoleRelayActionSchema, _zigbeeIrBlaster.IZigbeeIRBlasterActionSchema, _zigbeeIrBlaster.IZigbeeIRBlasterAction_irBlastActionSchema, _scenes.IKeusExcuteSceneActionSchema, _daliColorTunableDriver.IDaliColorTunableDriverGroupScheculeActionSchema, _daliColorTunableDriver.IDaliColorTunableDriverStateSchema, _zigbeeContactSensor.IZigbeeContactSensorScheduleActionSchema, _gmappliances.IKeusGMApplianceScheduleActionSchema, _gmappliances.IKeusGMApplianceIdentifierSchema, _gmappliances.IKeusGMApplianceSavedStateAction_savedStateSchema, _gmgroups.IKeusGMGroupScheduleActionSchema, _gmgroups.IKeusGMGroupIdentifierSchema, _unificamera.IUnifiCameraApplianceScheduleActionSchema, _angulartilt.IAngularTiltTraitStateSchema, _angulartilt.IAngularTiltTraitPropertiesSchema, _brightness.IBrightnessTraitStateSchema, _brightness.IBrightnessTraitPropertiesSchema, _camerarecording.ICameraRecordingTraitStateSchema, _camerarecording.ICameraRecordingTraitPropertiesSchema, _fanspeedcontrol.IFanSpeedControlTraitStateSchema, _fanspeedcontrol.IFanSpeedControlTraitPropertiesSchema, _louvercontrol.ILouverControlTraitStateSchema, _louvercontrol.ILouverControlTraitPropertiesSchema, _onoff.IOnOffTraitPropertiesSchema, _onoff.IOnOffTraitStateSchema, _modecontrol.IModeControlTraitPropertiesSchema, _modecontrol.IModeControlTraitStateSchema, _openclose.IOpenCloseTraitStateSchema, _openclose.IOpenCloseTraitOpenStyleSchema, _openclose.IOpenCloseTraitPropertiesSchema, _opencloserelay.IOpenCloseRelayTraitStateSchema, _opencloserelay.IOpenCloseRelayTraitPropertiesSchema, _percentopen.IPercentOpenTraitStateSchema, _percentopen.IPercentOpenTraitPropertiesSchema, _pushTrigger.IPushTriggerTraitStateSchema, _pushTrigger.IPushTriggerTraitPropertiesSchema, _rgbaddressable.IRGBAddrTraitStateSchema, _rgbaddressable.IRGBAddrTraitPropertiesSchema, _rgbcolor.IRGBColorSchema, _rgbcolor.IRGBPatternPropertiesSchema, _rgbcolor.IRGBColorTraitStateSchema, _rgbcolor.IRGBColorTraitPropertiesSchema, _rgbwwa.IRGBWWAColorSchema, _rgbwwa.IWWA2Schema, _rgbwwa.IRGBWWAPatternPropertySchema, _rgbwwa.IRGBWWATraitStateSchema, _rgbwwa.IRGBWWATraitPropertiesSchema, _swingcontrol.ISingleSwingStateSchema, _swingcontrol.IDoubleSwingStateSchema, _swingcontrol.ISwingControlTraitState_swingControlStateSchema, _swingcontrol.ISwingControlTraitStateSchema, _swingcontrol.ISingleSwingPropsSchema, _swingcontrol.IDoubleSwingPropsSchema, _swingcontrol.ISwingControlTraitProperties_swingInfoSchema, _swingcontrol.ISwingControlTraitPropertiesSchema, _temperaturecontrol.ITemperatureControlTraitStateSchema, _temperaturecontrol.ITemperatureControlTraitPropertiesSchema, _tiltrelay.ITiltRelayTraitStateSchema, _tiltrelay.ITiltRelayTraitPropertiesSchema, _wwmixer.IWWMixerTraitStateSchema, _wwmixer.IWWMixerTraitPropertiesSchema];
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.109:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'schedules';
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const result = await collection.find({}).toArray();
      realm.write(() => {
        result.forEach(doc => {
          console.log(doc._id);
          let groupTransformOptions = ["scheduleAction"];
          console.log(groupTransformOptions);
          let transformValues = ["scheduleActionType"];
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
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertSchedule(realm, doc) {
    let groupTransformOptions = ["scheduleAction"];
    console.log(groupTransformOptions);
    let transformValues = ["scheduleActionType"];
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
      });
    });
  }
  static async getAllSchedules(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getScheduleById(realm, scheduleId) {
    return realm.objects(BaseSchemaName).filtered('scheduleId==$0', scheduleId);
  }
  static async getSchedulesByRooms(realm, roomIds) {
    return realm.objects(BaseSchemaName).filtered('scheduleRoom IN $0', roomIds);
  }
  static async getSchedulesByTypeAndAction(realm, data) {
    return realm.objects(BaseSchemaName).filtered('scheduleType == $0 AND scheduleActionType==$1', data.scheduleType, data.scheduleActionType);
  }
  static async getSchedulesByGMAppliance(realm, applianceIdentifier) {
    return realm.objects(BaseSchemaName).filtered('scheduleAction.applianceIdentifier == $0', applianceIdentifier);
  }
  static async getSchedulesByGMGroup(realm, groupIdentifier) {
    return realm.objects(BaseSchemaName).filtered('scheduleAction.groupIdentifie == $0', groupIdentifier);
  }
  static async deleteScheduleById(realm, scheduleId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, scheduleId));
    });
  }
  static async updateScheduleAction(realm, data) {
    const schedule = realm.objects(BaseSchemaName).filtered('scheduleId == $0', data.scheduleId)[0];
    realm.write(() => [schedule.scheduleAction = data.scheduleAction]);
  }
  static async updateScheduleActiveStatus(realm, data) {
    const schedule = realm.objects(BaseSchemaName).filtered('scheduleId == $0', data.scheduleId)[0];
    realm.write(() => {
      schedule.activeStatus = data.status;
    });
  }
  static async updateSchedule(realm, doc) {
    let groupTransformOptions = ["scheduleAction"];
    console.log(groupTransformOptions);
    let transformValues = ["scheduleActionType"];
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
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async cleanGroupSchedules(realm, data) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.roomId == $0 AND scheduleAction.groupId == $1', data.groupRoom, data.groupId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async cleanSceneSchedules(realm, data) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.sceneRoom == $0 AND scheduleAction.sceneId == $1', data.sceneRoom, data.sceneId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async cleanDeviceSchedules(realm, deviceId) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', deviceId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async replaceDeviceSchedules(realm, data) {
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', data.oldDeviceId);
    realm.write(() => {
      for (const schedule of schedules) {
        schedule.scheduleAction["deviceId"] = data.newDeviceId;
      }
    });
  }
  static async cleanIRDeviceSchedules(realm, deviceId) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.irDevice == $0', deviceId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async cleanScRelaySchedules(realm, scDeviceId) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.deviceId == $0', scDeviceId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async cleanIRRemoteSchedules(realm, remoteId) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.remoteId == $0', remoteId);
    let clearingList = [];
    schedules.forEach(schedule => {
      let obj;
      obj.scheduleId = schedule.scheduleId;
      clearingList.push(obj);
    });
    realm.write(() => {
      realm.delete(schedules);
    });
    return clearingList;
  }
  static async replaceIrDeviceSchedules(realm, data) {
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.irDevice == $0', data.oldDeviceId);
    realm.write(() => {
      for (const schedule of schedules) {
        schedule.scheduleAction['irDevice'] = data.newDeviceId;
      }
    });
  }
  static async cleanGMApplianceSchedules(realm, applianceIdentifier) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.applianceIdentifier == $0', applianceIdentifier);
    realm.write(() => {
      realm.delete(schedules);
    });
  }
  static async cleanGMGroupSchedules(realm, groupIdentifier) {
    //doublecheck
    const schedules = realm.objects(BaseSchemaName).filtered('scheduleAction.groupIdentifier == $0', groupIdentifier);
    realm.write(() => {
      realm.delete(schedules);
    });
  }
}
exports.Methods = Methods;