"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncRequestParamsSchema = exports.fwhealthObjectSchema = exports.fwInfoSchema = exports.fwHealthSubObjectSchema = exports.fwHealthSubObjectPropsSchema = exports.fwHealthSchema = exports.devicesSchemasList = exports.deviceStateSchema = exports.devicePropertiesCollectionSchema = exports.Methods = exports.IKeusDeviceSyncInfoSchema = exports.IKeusDeviceSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _keusSmartConsole = require("../device-categories/keus-smart-console");
var _daliColorTunableDriver = require("../device-categories/dali-color-tunable-driver");
var _daliDimmableDriver = require("../device-categories/dali-dimmable-driver");
var _daliNondimmableDriver = require("../device-categories/dali-nondimmable-driver");
var _keusIrRemote = require("../device-categories/keus-ir-remote");
var _keusSceneWizard = require("../device-categories/keus-scene-wizard");
var _KZSC7C = require("../device-types/KZSC7C");
var _zigbeeEmbeddedSwitch = require("../device-categories/zigbee-embedded-switch");
var _zigbeeIrBlaster = require("../device-categories/zigbee-ir-blaster");
var _KZSC7CbuttonProperties = require("../device-types-properties.ts/KZSC7CbuttonProperties");
var _zigbeeRgbwwaDriver = require("../device-categories/zigbee-rgbwwa-driver");
var _zigbeeDcFanController = require("../device-categories/zigbee-dc-fan-controller");
var _zigbeeNondimmableDriver = require("../device-categories/zigbee-nondimmable-driver");
var _zigbeeCurtainController = require("../device-categories/zigbee-curtain-controller");
var _zigbeeEmbeddedSceneSwitch = require("../device-categories/zigbee-embedded-scene-switch");
var _zigbeeAcFanController = require("../device-categories/zigbee-ac-fan-controller");
var _zigbeeContactSensor = require("../device-categories/zigbee-contact-sensor");
var _zigbeeInlineDimmer = require("../device-categories/zigbee-inline-dimmer");
var _zigbeeRangeExtender = require("../device-categories/zigbee-range-extender");
var _zigbeeCurtainWizard = require("../device-categories/zigbee-curtain-wizard");
var _zigbeeDimmableDriver = require("../device-categories/zigbee-dimmable-driver");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import { IKeusDeviceSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema, fwInfoSchema, fwHealthSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema } from '../deviceSchema';

const BaseSchemaName = exports.BaseSchemaName = "IKeusDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class devicePropertiesCollectionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "devicePropertiesCollectionSchema",
    properties: {
      KDCTD: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverPropertiesSchema"
      },
      KDDD: {
        type: "object",
        optional: true,
        objectType: "IDaliDimmableDriverPropertiesSchema"
      },
      KDND: {
        type: "object",
        optional: true,
        objectType: "IDaliNonDimmableDriverPropertiesSchema"
      },
      KZSW: {
        type: "object",
        optional: true,
        objectType: "IKeusSceneWizardPropertiesSchema"
      },
      KZSC: {
        type: "object",
        optional: true,
        objectType: "IKeusSmartConsolePropertiesSchema"
      },
      KZES: {
        type: "object",
        optional: true,
        objectType: "IZigbeeEmbeddedSwitchPropertiesSchema"
      },
      KZIRB: {
        type: "object",
        optional: true,
        objectType: "IZigbeeIRBlasterPropertiesSchema"
      },
      KZRGBWWA: {
        type: "object",
        optional: true,
        objectType: "IZigbeeRgbwwaDriverPropertiesSchema"
      },
      KZDCFC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeDCFanControllerPropertiesSchema"
      },
      KZDD: {
        type: "object",
        optional: true,
        objectType: "IZigbeeDimmableDriverPropertiesSchema"
      },
      KZND: {
        type: "object",
        optional: true,
        objectType: "IZigbeeNonDimmableDriverPropertiesSchema"
      },
      KZESS: {
        type: "object",
        optional: true,
        objectType: "IZigbeeEmbeddedSceneSwitchPropertiesSchema"
      },
      KZACFC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeACFanControllerPropertiesSchema"
      },
      KZCS: {
        type: "object",
        optional: true,
        objectType: "IZigbeeContactSensorPropertiesSchema"
      },
      KZID: {
        type: "object",
        optional: true,
        objectType: "IZigbeeInlineDimmerPropertiesSchema"
      },
      KZRE: {
        type: "object",
        optional: true,
        objectType: "IZigbeeRangeExtenderPropertiesSchema"
      },
      KZCW: {
        type: "object",
        optional: true,
        objectType: "IZigbeeCurtainWizardPropertiesSchema"
      },
      KZCC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeCurtainControllerPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.devicePropertiesCollectionSchema = devicePropertiesCollectionSchema;
// Modified by @realm/babel-plugin
class fwInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "fwInfoSchema",
    properties: {
      timeStamp: {
        type: "int",
        optional: true
      },
      hwVersion: {
        type: "string",
        optional: true
      },
      swVersion: {
        type: "string",
        optional: true
      },
      deviceName: {
        type: "string",
        optional: true
      },
      hgmSetting: {
        type: "int",
        optional: true
      },
      bleSetting: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.fwInfoSchema = fwInfoSchema;
// Modified by @realm/babel-plugin
class fwhealthObjectSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "fwhealthObjectSchema",
    properties: {
      fwHealth: {
        type: "object",
        optional: true,
        objectType: "fwHealthSubObjectSchema"
      },
      timeStamp: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.fwhealthObjectSchema = fwhealthObjectSchema;
// Modified by @realm/babel-plugin
class fwHealthSubObjectSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "fwHealthSubObjectSchema",
    properties: {
      status: {
        type: "int",
        optional: true
      },
      timeFromBoot: {
        type: "int",
        optional: true
      },
      lastResetCause: {
        type: "int",
        optional: true
      },
      restartCount: {
        type: "int",
        optional: true
      },
      props: {
        type: "list",
        objectType: "fwHealthSubObjectPropsSchema"
      },
      restartCountErrorFlag: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.fwHealthSubObjectSchema = fwHealthSubObjectSchema;
// Modified by @realm/babel-plugin
class fwHealthSubObjectPropsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "fwHealthSubObjectPropsSchema",
    properties: {
      hwId: {
        type: "int",
        optional: true
      },
      lastErrorCount: {
        type: "int",
        optional: true
      },
      currentErrorCount: {
        type: "int",
        optional: true
      },
      errorActionId: {
        type: "int",
        optional: true
      },
      currErrCountFlag: {
        type: "int",
        optional: true
      },
      lastErrCountFlag: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.fwHealthSubObjectPropsSchema = fwHealthSubObjectPropsSchema;
// Modified by @realm/babel-plugin
class fwHealthSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "fwHealthSchema",
    properties: {
      fwHealth: {
        type: "list",
        objectType: "fwhealthObjectSchema"
      }
    },
    embedded: true
  };
}
exports.fwHealthSchema = fwHealthSchema;
// Modified by @realm/babel-plugin
class IKeusDeviceSchema extends _realm.default.Object {
  static primaryKey = "deviceId";
  static schema = {
    name: "IKeusDeviceSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
      deviceId: {
        type: "string"
      },
      masterId: {
        type: "string",
        optional: true
      },
      deviceType: {
        type: "string",
        optional: true
      },
      deviceCategory: {
        type: "string",
        optional: true
      },
      deviceName: {
        type: "string",
        optional: true
      },
      deviceSection: {
        type: "string",
        optional: true
      },
      deviceRoom: {
        type: "string",
        optional: true
      },
      deviceLocation: {
        type: "string",
        optional: true
      },
      deviceControlType: {
        type: "string",
        optional: true
      },
      deviceParent: {
        type: "string",
        optional: true
      },
      firmwareVersion: {
        type: "string",
        optional: true
      },
      isHidden: {
        type: "bool",
        optional: true
      },
      isConfigured: {
        type: "bool",
        optional: true
      },
      manufacturerName: {
        type: "string",
        optional: true
      },
      deviceTypeDisplayName: {
        type: "string",
        optional: true
      },
      deviceTypeName: {
        type: "string",
        optional: true
      },
      inGroup: {
        type: "bool",
        optional: true
      },
      deviceGroup: {
        type: "int",
        optional: true
      },
      groupRoom: {
        type: "string",
        optional: true
      },
      deviceState: {
        type: "object",
        optional: true,
        objectType: "deviceStateSchema"
      },
      deviceProperties: {
        type: "object",
        optional: true,
        objectType: "devicePropertiesCollectionSchema"
      },
      lastUpdateTime: {
        type: "int",
        optional: true
      },
      lastUpdateBy: {
        type: "string",
        optional: true
      },
      lastUpdateUser: {
        type: "string",
        optional: true
      },
      lastUpdateSource: {
        type: "string",
        optional: true
      },
      deviceSyncInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceSyncInfoSchema"
      },
      markedForDelete: {
        type: "int",
        optional: true
      },
      registeredAt: {
        type: "int",
        optional: true
      },
      fwInfo: {
        type: "object",
        optional: true,
        objectType: "fwInfoSchema"
      },
      fwHealth: {
        type: "list",
        objectType: "fwhealthObjectSchema"
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusDeviceSchema = IKeusDeviceSchema;
// Modified by @realm/babel-plugin
class deviceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "deviceStateSchema",
    properties: {
      KZDD: {
        type: "object",
        optional: true,
        objectType: "IZigbeeDimmableDriverStateSchema"
      },
      KZND: {
        type: "object",
        optional: true,
        objectType: "IZigbeeNonDimmableDriverStateSchema"
      },
      KDDD: {
        type: "object",
        optional: true,
        objectType: "IDaliDimmableDriverStateSchema"
      },
      KDCTD: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      },
      KDND: {
        type: "object",
        optional: true,
        objectType: "IDaliNonDimmableDriverStateSchema"
      },
      KZCC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeCurtainControllerStateSchema"
      },
      KZSC: {
        type: "object",
        optional: true,
        objectType: "IKeusSmartConsoleStateSchema"
      },
      KZSW: {
        type: "object",
        optional: true,
        objectType: "IKeusSceneWizardStateSchema"
      },
      KZRGBWWA: {
        type: "object",
        optional: true,
        objectType: "IZigbeeRgbwwaDriverStateSchema"
      },
      KZES: {
        type: "object",
        optional: true,
        objectType: "IZigbeeEmbeddedSwitchStateSchema"
      },
      KZESS: {
        type: "object",
        optional: true,
        objectType: "IZigbeeEmbeddedSceneSwitchStateSchema"
      },
      KZACFC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeACFanControllerStateSchema"
      },
      KZDCFC: {
        type: "object",
        optional: true,
        objectType: "IZigbeeDCFanControllerStateSchema"
      },
      KZCS: {
        type: "object",
        optional: true,
        objectType: "IZigbeeContactSensorStateSchema"
      },
      KZID: {
        type: "object",
        optional: true,
        objectType: "IZigbeeInlineDimmerStateSchema"
      },
      KZIRB: {
        type: "object",
        optional: true,
        objectType: "IZigbeeIRBlasterStateSchema"
      },
      KZRE: {
        type: "object",
        optional: true,
        objectType: "IZigbeeRangeExtenderStateSchema"
      },
      KZCW: {
        type: "object",
        optional: true,
        objectType: "IZigbeeCurtainWizardStateSchema"
      }
    },
    embedded: true
  };
}
exports.deviceStateSchema = deviceStateSchema;
// Modified by @realm/babel-plugin
class IKeusDeviceSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusDeviceSyncInfoSchema",
    properties: {
      syncStatus: {
        type: "int",
        optional: true
      },
      syncRequestType: {
        type: "int",
        optional: true
      },
      syncRequestId: {
        type: "string",
        optional: true
      },
      syncRequestTime: {
        type: "int",
        optional: true
      },
      syncRequestParams: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      jobTypeName: {
        type: "int",
        optional: true
      },
      jobMessage: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusDeviceSyncInfoSchema = IKeusDeviceSyncInfoSchema;
// Modified by @realm/babel-plugin
class syncRequestParamsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "syncRequestParamsSchema",
    properties: {},
    embedded: true
  };
}
exports.syncRequestParamsSchema = syncRequestParamsSchema;
class Methods {
  static async insertDevice() {}
  static async insertDevices() {}
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getDeviceById() {}
  static async getIndividualDevicesByRooms() {}
  static async getIRBlasterByRooms() {}
  static async getDevicesByGateway() {}
  static async updateDevicesRoomByParent() {}
  static async getDevicesByParent() {}
  static async updateDevicesSection() {}
  static async updateDeviceRoomAndSection() {}
  static async getDevicesByRooms() {}
  static async getDevicesByRoomsAndCategories() {}
  static async getDevicesByCategories() {}
  static async updateDevice() {}
  static async getDevicesByRoom() {}
  static async updateDeviceGroup() {}
  static async updateDriversGroup() {}
  static async getRoomSectionDevicesByKeys() {}
  static async bulkWrite() {}
  static async updateGroupDeviceProperties() {}
  static async updateDeviceProperties() {}
  static async updateDeviceSyncInfo() {}
  static async updateGroupDeviceStates() {}
  static async deleteDeviceById() {}
  static async cleanDrivers() {}
  static async cleanSmartConsoleGroupButtons() {}
  static async cleanSmartConsoleSceneButtons() {}
  static async cleanSmartConsoleDeviceButtons() {}
  static async cleanSceneWizardSceneButtons() {}
  static async cleanSceneWizardDeviceButtons() {}
  static async cleanZigbeeCurtainWizardDeviceButtons() {}
  static async cleanSceneSwitchButtons() {}
  static async updateEmbeddedApplianceGroups() {}
  static async replaceSmartConsoleButtonsOfDevice() {}
  static async replaceSmartConsoleDefaultFan() {}
  static async replaceSceneWizardButtonsOfDevice() {}
  static async replaceZigbeeCurtainWizardButtons() {}
  static async updateDeviceName() {}
  static async getDevicesByRoomsAndSection() {}
  static async updateDeviceParent() {}
}
exports.Methods = Methods;
const devicesSchemasList = exports.devicesSchemasList = [IKeusDeviceSchema, _keusSmartConsole.IKeusSmartConsoleButtonPropertiesSchema, IKeusDeviceSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema, _daliColorTunableDriver.IDaliColorTunableDriverStateSchema, _daliColorTunableDriver.IDaliColorTunableDriverPropertiesSchema, _daliDimmableDriver.IDaliDimmableDriverPropertiesSchema, _daliDimmableDriver.IDaliDimmableDriverStateSchema, _daliNondimmableDriver.IDaliNonDimmableDriverPropertiesSchema, _daliNondimmableDriver.IDaliNonDimmableDriverStateSchema, _keusIrRemote.IKeusIRACRemotePropertiesSchema, _keusIrRemote.IKeusIRTVRemotePropertiesSchema, _keusIrRemote.IKeusIRAMPRemotePropertiesSchema, _keusIrRemote.IKeusIRPRRemotePropertiesSchema, _keusIrRemote.IKeusIRFANRemotePropertiesSchema, _keusSceneWizard.IKeusSceneWizardPropertiesSchema, _keusSceneWizard.IKeusSceneWizardStateSchema, _keusSmartConsole.buttonPropertiesCollectionSchema, _keusSmartConsole.IKeusSmartConsoleRelaySchema, _keusSmartConsole.IKeusSmartConsolePropertiesSchema, _keusSmartConsole.ISmartConsoleGroupButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleSceneButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleCurtainButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleRelayButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleRemoteRelayButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleFanButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleNoPropsButtonPropertiesSchema, _keusSmartConsole.IKeusSmartConsoleButtonSchema, _keusSmartConsole.KZSCdeviceButtonPropertiesSchema, _keusSmartConsole.KZSCbuttonPropertiesSchema, _keusSmartConsole.IKeusSmartConsoleStateSchema, _zigbeeEmbeddedSwitch.KZESApplianceStateSchema, _zigbeeEmbeddedSwitch.KZESAppliancePropertiesSchema, _zigbeeEmbeddedSwitch.KZESSwitchPropertiesSchema, _zigbeeEmbeddedSwitch.IZigbeeEmbeddedSwitchPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedSwitchPortSchema, _zigbeeEmbeddedSwitch.IEmbeddedApplianceSchema, _zigbeeEmbeddedSwitch.IEmbeddedSwitchSchema, _zigbeeEmbeddedSwitch.IZigbeeEmbeddedSwitchStateSchema, _zigbeeIrBlaster.IZigbeeIRBlasterPropertiesSchema, _zigbeeIrBlaster.IZigbeeIRBlasterStateSchema, _KZSC7CbuttonProperties.KZSC7CdeviceButtonPropertiesSchema, _KZSC7CbuttonProperties.KZSC7CbuttonPropertiesSchema, fwInfoSchema, fwHealthSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema, _zigbeeRgbwwaDriver.IRBGSchema, _zigbeeRgbwwaDriver.IWWASchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverStateSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverPropertiesSchema, _zigbeeDcFanController.IZigbeeDCFanControllerStateSchema, _zigbeeDcFanController.IZigbeeDCFanControllerPropertiesSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverPropertiesSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverStateSchema, _zigbeeCurtainController.IZigbeeCurtainControllerStateSchema, _zigbeeCurtainController.IZigbeeCurtainControllerPropertiesSchema, _zigbeeEmbeddedSceneSwitch.ISceneSwitchTypeSchema, _zigbeeEmbeddedSceneSwitch.IZigbeeEmbeddedSceneSwitchPropertiesSchema, _zigbeeEmbeddedSceneSwitch.IZigbeeEmbeddedSceneSwitchStateSchema, _KZSC7C.KZSC7CSchema, _zigbeeAcFanController.IZigbeeACFanControllerStateSchema, _zigbeeAcFanController.IZigbeeACFanControllerPropertiesSchema, _zigbeeContactSensor.IZigbeeContactSensorStateSchema, _zigbeeContactSensor.IZigbeeContactSensorPropertiesSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerStateSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerPropertiesSchema, _zigbeeRangeExtender.IZigbeeRangeExtenderStateSchema, _zigbeeRangeExtender.IZigbeeRangeExtenderPropertiesSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardButtonSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardPropertiesSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardStateSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverPropertiesSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverStateSchema];

//console.log(IDaliColorTunableDriverPropertiesSchema.name)