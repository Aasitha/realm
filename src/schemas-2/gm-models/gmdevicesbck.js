"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protocolDeviceInfo_deviceProperties_portListSchema = exports.ModelsList = exports.Methods = exports.IKeusGM_protocolDeviceInfo_devicePropertiesSchema = exports.IKeusGMDeviceSyncInfoSchema = exports.IKeusGMDeviceStatusInfoSchema = exports.IKeusGMDeviceSchema = exports.IKeusGMDeviceMaintenanceInfoSchema = exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = exports.IKeusGMDeviceInfoSchema = exports.IKeusGMDeviceHomeInfoSchema = exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = exports.IKeusGMDeviceControlInfoSchema = exports.IKEHVACIndoorUnitSchema = exports.ICameraUnitSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _devices = require("../devices");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusGMDeviceControlInfo_protocolControlInfoSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGMDeviceControlInfo_protocolControlInfoSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      deviceParent: {
        type: "string",
        optional: true
      },
      deviceGateway: {
        type: "string",
        optional: true
      },
      deviceIp: {
        type: "string",
        optional: true
      }
    },
    embedded: false
  };
}
exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = IKeusGMDeviceControlInfo_protocolControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceControlInfoSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGMDeviceControlInfoSchema",
    properties: {
      deviceControlType: {
        type: "string",
        optional: true
      },
      protocolControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceControlInfo_protocolControlInfoSchema"
      }
    },
    embedded: false
  };
}
exports.IKeusGMDeviceControlInfoSchema = IKeusGMDeviceControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceHomeInfoSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGMDeviceHomeInfoSchema",
    properties: {
      deviceRoom: {
        type: "string",
        optional: true
      },
      deviceSection: {
        type: "string",
        optional: true
      }
    },
    embedded: false
  };
}
exports.IKeusGMDeviceHomeInfoSchema = IKeusGMDeviceHomeInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMDeviceSyncInfoSchema",
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
}
exports.IKeusGMDeviceSyncInfoSchema = IKeusGMDeviceSyncInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceStatusInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMDeviceStatusInfoSchema",
    properties: {
      markedForDelete: {
        type: "bool",
        optional: true
      },
      onlineStatus: {
        type: "bool",
        optional: true
      },
      lastSeenOnline: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMDeviceStatusInfoSchema = IKeusGMDeviceStatusInfoSchema;
// Modified by @realm/babel-plugin
class protocolDeviceInfo_deviceProperties_portListSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "protocolDeviceInfo_deviceProperties_portListSchema",
    properties: {
      portId: {
        type: "int",
        optional: true
      },
      portState: {
        type: "int",
        optional: true
      },
      isAssigned: {
        type: "bool",
        optional: true
      },
      assignedToAppliance: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.protocolDeviceInfo_deviceProperties_portListSchema = protocolDeviceInfo_deviceProperties_portListSchema;
// Modified by @realm/babel-plugin
class IKEHVACIndoorUnitSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKEHVACIndoorUnitSchema",
    properties: {
      indoorUnitId: {
        type: "string",
        optional: true
      },
      indoorUnitName: {
        type: "string",
        optional: true
      },
      indoorUnitState: {
        type: "int",
        optional: true
      },
      indoorUnitRoom: {
        type: "string",
        optional: true
      },
      indoorUnitSection: {
        type: "string",
        optional: true
      },
      isAssigned: {
        type: "bool",
        optional: true
      },
      assignedToAppliance: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKEHVACIndoorUnitSchema = IKEHVACIndoorUnitSchema;
// Modified by @realm/babel-plugin
class ICameraUnitSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "ICameraUnitSchema",
    properties: {
      cameraId: {
        type: "string",
        optional: true
      },
      model: {
        type: "string",
        optional: true
      },
      macAddress: {
        type: "string",
        optional: true
      },
      framesPerSecond: {
        type: "int",
        optional: true
      },
      version: {
        type: "string",
        optional: true
      },
      maxRecordingDays: {
        type: "int",
        optional: true
      },
      isAssigned: {
        type: "bool",
        optional: true
      },
      assignedToAppliance: {
        type: "string",
        optional: true
      }
    },
    embedded: false
  };
}
exports.ICameraUnitSchema = ICameraUnitSchema;
// Modified by @realm/babel-plugin
class IKeusGM_protocolDeviceInfo_devicePropertiesSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGM_protocolDeviceInfo_devicePropertiesSchema",
    properties: {
      portList: {
        type: "list",
        objectType: "protocolDeviceInfo_deviceProperties_portListSchema"
      },
      port: {
        type: "object",
        optional: true,
        objectType: "protocolDeviceInfo_deviceProperties_portListSchema"
      },
      indoorUnits: {
        type: "object",
        optional: true,
        objectType: "IKEHVACIndoorUnitSchema"
      },
      cameraUnit: {
        type: "object",
        optional: true,
        objectType: "ICameraUnitSchema"
      }
    },
    embedded: false
  };
}
exports.IKeusGM_protocolDeviceInfo_devicePropertiesSchema = IKeusGM_protocolDeviceInfo_devicePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceInfo_protocolDeviceInfoSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGMDeviceInfo_protocolDeviceInfoSchema",
    properties: {
      deviceType: {
        type: "string",
        optional: true
      },
      deviceCategory: {
        type: "string",
        optional: true
      },
      deviceProperties: {
        type: "object",
        optional: true,
        objectType: "IKeusGM_protocolDeviceInfo_devicePropertiesSchema"
      }
    },
    embedded: false
  };
}
exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = IKeusGMDeviceInfo_protocolDeviceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceInfoSchema extends _realm.default.Object {
  static embedded = false;
  static schema = {
    name: "IKeusGMDeviceInfoSchema",
    properties: {
      protocolDeviceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceInfo_protocolDeviceInfoSchema"
      }
    },
    embedded: false
  };
}
exports.IKeusGMDeviceInfoSchema = IKeusGMDeviceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceMaintenanceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMDeviceMaintenanceInfoSchema",
    properties: {
      firmwareVersion: {
        type: "string",
        optional: true
      },
      manufacturerName: {
        type: "string",
        optional: true
      },
      registeredAt: {
        type: "int",
        optional: true
      },
      serialNumber: {
        type: "string",
        optional: true
      },
      device_pin: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMDeviceMaintenanceInfoSchema = IKeusGMDeviceMaintenanceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceSchema extends _realm.default.Object {
  static primaryKey = "deviceId";
  static schema = {
    name: "IKeusGMDeviceSchema",
    properties: {
      deviceId: {
        type: "string"
      },
      deviceName: {
        type: "string",
        optional: true
      },
      deviceLocation: {
        type: "string",
        optional: true
      },
      deviceControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceControlInfoSchema"
      },
      deviceHomeInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceHomeInfoSchema"
      },
      deviceMaintenanceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceMaintenanceInfoSchema"
      },
      deviceSyncInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceSyncInfoSchema"
      },
      deviceStatusInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceStatusInfoSchema"
      },
      deviceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceInfoSchema"
      },
      fwHealth: {
        type: "list",
        objectType: "fwhealthObjectSchema"
      },
      fwInfo: {
        type: "object",
        optional: true,
        objectType: "fwInfoSchema"
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusGMDeviceSchema = IKeusGMDeviceSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.198:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'gmdevices';
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
        });
        console.log(realmActivity);
      });
    });
  }
  static async getDeviceById(realm, deviceId) {
    return realm.objectForPrimaryKey(BaseSchemaName, deviceId);
  }
  static async insertDevice(realm, doc) {
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
      });
    });
  }
  static async deleteDeviceById(realm, deviceId) {
    realm.delete(realm.objectForPrimaryKey(BaseSchemaName, deviceId));
  }
  static async updateDevice(realm, doc) {
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
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async updateDeviceInfo(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceInfo = data.deviceInfo;
    });
  }
  static async updateDeviceHomeInfo(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceHomeInfo = data.deviceHomeInfo;
    });
  }
  static async updateDeviceName(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceName = data.deviceName;
    });
  }
  static async updateDeviceLocation(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceLocation = data.deviceLocation;
    });
  }
  static async updateDeviceControlInfo(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceControlInfo = data.deviceControlInfo;
    });
  }
  static async updateDeviceSyncInfo(realm, data) {
    realm.write(() => {
      const device = realm.objectForPrimaryKey(BaseSchemaName, data.deviceId);
      device.deviceSyncInfo = data.deviceSyncInfo;
    });
  }
  static async getIpDevice(realm, controlInfo) {
    let ipControlInfo = controlInfo.protocolControlInfo;
    return realm.objects(BaseSchemaName).filtered('deviceControlInfo.protocolControlInfo.deviceIp==$0', ipControlInfo.deviceIp);
  }
  static async getDevicesByControlType(realm, controlType) {
    return realm.objects(BaseSchemaName).filtered('deviceControlInfo.deviceControlType==$0', controlType);
  }
  static async getDevicesByCategory(realm, deviceCategoryList) {
    return realm.objects(BaseSchemaName).filtered('deviceInfo.protocolDeviceInfo.deviceCategory IN $0', deviceCategoryList);
  }
  static async getDevicesByNotPartOfCategory(realm, deviceCategoryList) {
    return realm.objects(BaseSchemaName).filtered('NOT deviceInfo.protocolDeviceInfo.deviceCategory IN $0', deviceCategoryList);
  }
  static async getDevicesByRooms(realm, roomIds) {
    return realm.objects(BaseSchemaName).filtered('deviceHomeInfo.deviceRoom IN $0', roomIds);
  }
  static async getCameraDevice(realm, cameraId) {
    return realm.objects(BaseSchemaName).filtered('deviceInfo.protocolDeviceInfo.deviceProperties.cameraUnit.cameraId==$0', cameraId);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGMDeviceSchema, IKeusGMDeviceControlInfo_protocolControlInfoSchema, IKeusGMDeviceControlInfoSchema, IKeusGMDeviceHomeInfoSchema, IKeusGMDeviceSyncInfoSchema, IKeusGMDeviceStatusInfoSchema, protocolDeviceInfo_deviceProperties_portListSchema, IKeusGM_protocolDeviceInfo_devicePropertiesSchema, IKeusGMDeviceInfo_protocolDeviceInfoSchema, IKeusGMDeviceInfoSchema, IKeusGMDeviceMaintenanceInfoSchema, _devices.fwInfoSchema, _devices.fwhealthObjectSchema, _devices.fwHealthSubObjectSchema, _devices.fwHealthSubObjectPropsSchema, IKEHVACIndoorUnitSchema, ICameraUnitSchema];