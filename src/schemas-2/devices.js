"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncRequestParamsSchema = exports.fwhealthObjectSchema = exports.fwInfoSchema = exports.fwHealthSubObjectSchema = exports.fwHealthSubObjectPropsSchema = exports.fwHealthSchema = exports.deviceStateSchema = exports.devicePropertiesCollectionSchema = exports.ModelsList = exports.Methods = exports.IKeusDeviceSyncInfoSchema = exports.IKeusDeviceSchema_deviceSyncInfoSchema = exports.IKeusDeviceSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _keusSmartConsole = require("../device-categories/keus-smart-console");
var _daliColorTunableDriver = require("../device-categories/dali-color-tunable-driver");
var _daliDimmableDriver = require("../device-categories/dali-dimmable-driver");
var _daliNondimmableDriver = require("../device-categories/dali-nondimmable-driver");
var _keusIrRemote = require("../device-categories/keus-ir-remote");
var _keusSceneWizard = require("../device-categories/keus-scene-wizard");
var _zigbeeEmbeddedSwitch = require("../device-categories/zigbee-embedded-switch");
var _zigbeeIrBlaster = require("../device-categories/zigbee-ir-blaster");
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
const devicePropertiesCollectionSchema = exports.devicePropertiesCollectionSchema = {
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
const fwInfoSchema = exports.fwInfoSchema = {
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
const fwhealthObjectSchema = exports.fwhealthObjectSchema = {
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
const fwHealthSubObjectPropsSchema = exports.fwHealthSubObjectPropsSchema = {
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
const fwHealthSubObjectSchema = exports.fwHealthSubObjectSchema = {
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
const fwHealthSchema = exports.fwHealthSchema = {
  name: "fwHealthSchema",
  properties: {
    fwHealth: {
      type: "list",
      objectType: "fwhealthObjectSchema"
    }
  },
  embedded: true
};
const IKeusDeviceSchema_deviceSyncInfoSchema = exports.IKeusDeviceSchema_deviceSyncInfoSchema = {
  name: "IKeusDeviceSchema_deviceSyncInfoSchema",
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
      type: "mixed",
      optional: true
    },
    jobMessage: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
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
        objectType: "IKeusDeviceSchema_deviceSyncInfoSchema"
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
      },
      samplefield: {
        type: "list",
        objectType: "string"
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusDeviceSchema = IKeusDeviceSchema;
const deviceStateSchema = exports.deviceStateSchema = {
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
const IKeusDeviceSyncInfoSchema = exports.IKeusDeviceSyncInfoSchema = {
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
const syncRequestParamsSchema = exports.syncRequestParamsSchema = {
  name: "syncRequestParamsSchema",
  properties: {},
  embedded: true
};
class Methods {
  static async importGatewayData(realm) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://10.1.4.243:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'devices';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    let deviceProperties = {
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
      KZCC: "iZigbeeCurtainControllerProperties"
    };
    realm.write(() => {
      result.forEach(doc => {
        console.log(doc._id);
        let groupTransformOptions = ["deviceState", "deviceProperties"];
        //console.log(groupTransformOptions);
        let transformValues = ["deviceCategory", "deviceCategory"];
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
        });
        console.log(realmActivity);
      });
    });
    // realm.write(() => {
    //     // Delete all objects of the 'MyObject' schema
    //     const allObjects = realm.objects('IKeusDevice');
    //     realm.delete(allObjects);
    //   });
    // let activities = realm.objects('IKeusDevice')
    // console.log(Array.from(activities).length)
    //realm.close();
  }

  static async insertDevice(realm, doc) {
    let deviceProperties = {
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
      KZCC: "iZigbeeCurtainControllerProperties"
    };
    realm.write(() => {
      let groupTransformOptions = ["deviceState", "deviceProperties"];
      //console.log(groupTransformOptions);
      let transformValues = ["deviceCategory", "deviceCategory"];
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
      });
      console.log(realmActivity);
    });
  }
  static async insertDevices(realm, devices) {
    let deviceProperties = {
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
      KZCC: "iZigbeeCurtainControllerProperties"
    };
    realm.write(() => {
      devices.forEach(doc => {
        let groupTransformOptions = ["deviceState", "deviceProperties"];
        //console.log(groupTransformOptions);
        let transformValues = ["deviceCategory", "deviceCategory"];
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
        });
        console.log(realmActivity);
      });
    });
  }
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getDeviceById(realm, deviceId) {
    return realm.objects(BaseSchemaName).filtered('deviceId==$0', deviceId);
  }
  static async getIndividualDevicesByRooms(realm, roomIds) {
    const query = roomIds.map(roomId => `deviceRoom == '${roomId}'`).join(' OR ');
    return realm.objects(BaseSchemaName).filtered(`inGroup == false AND (${query})`);
  }
  static async getIRBlasterByRooms(realm, roomIds) {
    const query = roomIds.map(roomId => `deviceRoom == '${roomId}'`).join(' OR ');
    return realm.objects(BaseSchemaName).filtered(`deviceCategory == "KZIRB" AND (${query})`);
  }
  static async getDevicesByGateway(realm, gatewayId) {
    return realm.objects(BaseSchemaName).filtered('masterId==$0', gatewayId);
  }
  static async updateDevicesRoomByParent(realm, data) {
    realm.write(() => {
      const devices = realm.objects(BaseSchemaName).filtered('deviceParent ==$0', data.parentId);
      for (const device of devices) {
        device.deviceRoom = data.roomId, device.deviceSection = data.sectionId;
      }
    });
  }
  static async getDevicesByParent(realm, parentId) {
    return realm.objects(BaseSchemaName).filtered('deviceParent==$0', parentId);
  }
  static async updateDevicesSection(realm, data) {
    realm.write(() => {
      const devices = realm.objects(BaseSchemaName).filtered('deviceRoom == $0 AND deviceSection==$1', data.roomId, data.oldSectionId);
      for (const device of devices) {
        device.deviceSection = data.newSectionId;
      }
    });
  }
  static async updateDeviceRoomAndSection(realm, data) {
    realm.write(() => {
      const device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
      device.deviceRoom = data.newRoomId;
      device.deviceSection = data.newSectionId;
    });
  }
  static async getDevicesByRooms(realm, roomIds) {
    const query = roomIds.map(roomId => `deviceRoom == '${roomId}'`).join(' OR ');
    return realm.objects(BaseSchemaName).filtered(`(${query})`);
  }
  static async getDevicesByRoomsAndCategories(realm, data) {
    const query1 = data.roomIds.map(roomId => `deviceRoom == '${roomId}'`).join(' OR ');
    const query2 = data.deviceCategories.map(deviceCategory => `deviceCategory == '${deviceCategory}'`).join(' OR ');
    return realm.objects(BaseSchemaName).filtered(`(${query1}) AND (${query2})`);
  }
  static async getDevicesByCategories(realm, deviceCategories) {
    const query = deviceCategories.map(deviceCategory => `deviceCategory == '${deviceCategory}'`).join(' OR ');
    return realm.objects(BaseSchemaName).filtered(` (${query})`);
  }
  static async updateDevice(realm, deviceId, updatedObj) {
    let groupTransformOptions = ["deviceState", "deviceProperties"];
    //console.log(groupTransformOptions);
    let transformValues = ["deviceCategory", "deviceCategory"];
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
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async getDevicesByRoom(realm, roomId) {
    return realm.objects(BaseSchemaName).filtered('deviceRoom==$0', roomId);
  }
  static async updateDeviceGroup(realm, data) {
    realm.write(() => {
      const device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
      device.inGroup = data.groupId == -1 ? false : true;
      device.deviceGroup = data.groupId;
      device.groupRoom = data.groupRoom;
    });
  }
  static async updateDriversGroup(realm, deviceIdList, groupId, groupRoom) {
    realm.write(() => {
      const devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIdList);
      for (const device of devices) {
        device.inGroup = groupId == -1 ? false : true, device.deviceGroup = groupId, device.groupRoom = groupRoom;
      }
    });
  }
  static async bulkWrite(realm, operationList) {
    operationList.forEach(operation => {
      let device = realm.objectForPrimaryKey(BaseSchemaName, operation.updateOne.filter.deviceId);
      realm.write(() => {
        Object.keys(operation.updateOne.update.$set).forEach(field => {
          let value = operation.updateOne.update.$set[field];
          if (field == "deviceState" || field == "deviceProperties") {
            let category = device.deviceCategory;
            device[field][category] = value;
          } else {
            device[field] = value;
          }
        });
      });
    });
  }
  static async updateGroupDeviceProperties(realm, data) {
    realm.write(() => {
      let devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', data.deviceList);
      for (const device of devices) {
        device.deviceProperties = data.deviceProperties;
      }
    });
  }
  static async updateDeviceProperties(realm, data) {
    realm.write(() => {
      let device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
      device.deviceProperties = data.deviceProperties;
      device.isConfigured = data.isConfigured;
    });
  }
  static async updateDeviceSyncInfo(realm, data) {
    realm.write(() => {
      let device = realm.objects(BaseSchemaName).filtered('deviceId == $0', data.deviceId)[0];
      device.deviceSyncInfo = data.deviceSyncInfo;
    });
  }
  static async updateGroupDeviceStates(realm, data) {
    realm.write(() => {
      const devices = realm.objects(BaseSchemaName).filtered('deviceId IN $0', data.deviceList);
      for (const device of devices) {
        device.deviceState = data.deviceState;
      }
    });
  }
  static async deleteDeviceById(realm, deviceId) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('deviceId == $0', deviceId));
    });
  }
  static async cleanDrivers(realm, deviceIds) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIds));
    });
  }
  static async cleanSmartConsoleGroupButtons(realm, data) {
    const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1']);
    realm.write(() => {
      devices.forEach(device => {
        device.deviceProperties.buttons.forEach(button => {
          if (button.buttonType == 2 && button.buttonProperties.groupId == data.groupId && button.buttonProperties.roomId == data.groupRoom) {
            button.buttonProperties.groupId = -1;
            button.buttonProperties.roomId = "";
          }
        });
      });
    });
  }
  static async cleanSmartConsoleSceneButtons(realm, data) {
    //return realm.objects(BaseSchemaName).filtered('deviceType IN $0 AND ANY deviceProperties.buttons.buttonType == $1 AND deviceProperties.buttons.buttonProperties.sceneId == $2 AND deviceProperties.buttons.buttonProperties.roomId == $3',['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1'],3,data.sceneId,data.sceneRoom)
    const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ['KZSC7C', 'KZSC4C', 'KZSC7M1', 'KZSC4M1']);
    realm.write(() => {
      devices.forEach(device => {
        device.deviceProperties.buttons.forEach(button => {
          if (button.buttonType == 3 && button.buttonProperties.sceneId == data.sceneId && button.buttonProperties.roomId == data.sceneRoom) {
            button.buttonProperties.sceneId = -1;
            button.buttonProperties.roomId = "";
          }
        });
      });
    });
  }
  static async cleanSmartConsoleDeviceButtons(realm) {}
  static async cleanSceneWizardSceneButtons(realm, data) {
    const devices = realm.objects(BaseSchemaName).filtered('deviceType IN $0', ["KZSW01", "KZSWM1"]);
    realm.write(() => {
      devices.forEach(device => {
        device.deviceProperties.buttons.forEach(button => {
          if (button.buttonType == 3 && button.buttonProperties.sceneId == data.sceneId && button.buttonProperties.roomId == data.sceneRoom) {
            button.buttonProperties.sceneId = -1;
            button.buttonProperties.roomId = "";
          }
        });
      });
    });
  }
  static async cleanSceneWizardDeviceButtons(realm) {}
  static async cleanZigbeeCurtainWizardDeviceButtons(realm) {}
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
  static async updateEmbeddedApplianceGroups(realm, data) {}
  static async replaceSmartConsoleButtonsOfDevice(realm) {}
  static async replaceSmartConsoleDefaultFan(realm) {}
  static async replaceSceneWizardButtonsOfDevice(realm) {}
  static async replaceZigbeeCurtainWizardButtons(realm) {}
  static async updateDeviceName(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.DeviceId);
      device.deviceName = data.newName;
    });
  }
  static async getDevicesByRoomsAndSection(realm, data) {
    realm.write(() => {
      return realm.objects(BaseSchemaName).filtered('deviceRoom==$0 AND deviceSection==$1', data.roomId, data.sectionId);
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDeviceSchema, _keusSmartConsole.IKeusSmartConsoleButtonPropertiesSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema, _daliColorTunableDriver.IDaliColorTunableDriverStateSchema, _daliColorTunableDriver.IDaliColorTunableDriverPropertiesSchema, _daliDimmableDriver.IDaliDimmableDriverPropertiesSchema, _daliDimmableDriver.IDaliDimmableDriverStateSchema, _daliNondimmableDriver.IDaliNonDimmableDriverPropertiesSchema, _daliNondimmableDriver.IDaliNonDimmableDriverStateSchema, _keusIrRemote.IKeusIRACRemotePropertiesSchema, _keusIrRemote.IKeusIRTVRemotePropertiesSchema, _keusIrRemote.IKeusIRAMPRemotePropertiesSchema, _keusIrRemote.IKeusIRPRRemotePropertiesSchema, _keusIrRemote.IKeusIRFANRemotePropertiesSchema, _keusSceneWizard.IKeusSceneWizardPropertiesSchema, _keusSceneWizard.IKeusSceneWizardStateSchema, _keusSmartConsole.buttonPropertiesCollectionSchema, _keusSmartConsole.IKeusSmartConsoleRelaySchema, _keusSmartConsole.IKeusSmartConsolePropertiesSchema, _keusSmartConsole.ISmartConsoleGroupButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleSceneButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleCurtainButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleRelayButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleRemoteRelayButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleFanButtonPropertiesSchema, _keusSmartConsole.ISmartConsoleNoPropsButtonPropertiesSchema, _keusSmartConsole.IKeusSmartConsoleButtonSchema, _keusSmartConsole.KZSCdeviceButtonPropertiesSchema, _keusSmartConsole.KZSCbuttonPropertiesSchema, _keusSmartConsole.IKeusSmartConsoleStateSchema, _zigbeeEmbeddedSwitch.KZESApplianceStateSchema, _zigbeeEmbeddedSwitch.KZESAppliancePropertiesSchema, _zigbeeEmbeddedSwitch.KZESSwitchPropertiesSchema, _zigbeeEmbeddedSwitch.IZigbeeEmbeddedSwitchPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedSwitchPortSchema, _zigbeeEmbeddedSwitch.IEmbeddedApplianceSchema, _zigbeeEmbeddedSwitch.IEmbeddedSwitchSchema, _zigbeeEmbeddedSwitch.IZigbeeEmbeddedSwitchStateSchema, _zigbeeIrBlaster.IZigbeeIRBlasterPropertiesSchema, _zigbeeIrBlaster.IZigbeeIRBlasterStateSchema, fwInfoSchema, fwHealthSchema, fwhealthObjectSchema, fwHealthSubObjectSchema, fwHealthSubObjectPropsSchema, _zigbeeRgbwwaDriver.IRBGSchema, _zigbeeRgbwwaDriver.IWWASchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverStateSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverPropertiesSchema, _zigbeeDcFanController.IZigbeeDCFanControllerStateSchema, _zigbeeDcFanController.IZigbeeDCFanControllerPropertiesSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverPropertiesSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverStateSchema, _zigbeeCurtainController.IZigbeeCurtainControllerStateSchema, _zigbeeCurtainController.IZigbeeCurtainControllerPropertiesSchema, _zigbeeEmbeddedSceneSwitch.ISceneSwitchTypeSchema, _zigbeeEmbeddedSceneSwitch.IZigbeeEmbeddedSceneSwitchPropertiesSchema, _zigbeeEmbeddedSceneSwitch.IZigbeeEmbeddedSceneSwitchStateSchema, _zigbeeAcFanController.IZigbeeACFanControllerStateSchema, _zigbeeAcFanController.IZigbeeACFanControllerPropertiesSchema, _zigbeeContactSensor.IZigbeeContactSensorStateSchema, _zigbeeContactSensor.IZigbeeContactSensorPropertiesSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerStateSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerPropertiesSchema, _zigbeeRangeExtender.IZigbeeRangeExtenderStateSchema, _zigbeeRangeExtender.IZigbeeRangeExtenderPropertiesSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardButtonSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardPropertiesSchema, _zigbeeCurtainWizard.IZigbeeCurtainWizardStateSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverPropertiesSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverStateSchema, IKeusDeviceSchema_deviceSyncInfoSchema];

//console.log(IDaliColorTunableDriverPropertiesSchema.name)