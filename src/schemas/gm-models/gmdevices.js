"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protocolDeviceInfo_deviceProperties_portListSchema = exports.ModelsList = exports.Methods = exports.IKeusGMDeviceSyncInfoSchema = exports.IKeusGMDeviceStatusInfoSchema = exports.IKeusGMDeviceSchema = exports.IKeusGMDeviceMaintenanceInfoSchema = exports.IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema = exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = exports.IKeusGMDeviceInfoSchema = exports.IKeusGMDeviceHomeInfoSchema = exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = exports.IKeusGMDeviceControlInfoSchema = exports.IKEHVACIndoorUnitSchema = exports.ICameraUnitSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _devices = require("../devices");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusGMDeviceControlInfo_protocolControlInfoSchema extends _realm.default.Object {
  static embedded = true;
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
    embedded: true
  };
}
exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = IKeusGMDeviceControlInfo_protocolControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
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
    embedded: true
  };
}
exports.IKeusGMDeviceControlInfoSchema = IKeusGMDeviceControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceHomeInfoSchema extends _realm.default.Object {
  static embedded = true;
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
    embedded: true
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
  static embedded = true;
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
    embedded: true
  };
}
exports.ICameraUnitSchema = ICameraUnitSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema",
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
    embedded: true
  };
}
exports.IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema = IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceInfo_protocolDeviceInfoSchema extends _realm.default.Object {
  static embedded = true;
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
        objectType: "IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = IKeusGMDeviceInfo_protocolDeviceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMDeviceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMDeviceInfoSchema",
    properties: {
      protocolDeviceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMDeviceInfo_protocolDeviceInfoSchema"
      }
    },
    embedded: true
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
  // fwHealth: Realm.Types.List<fwhealthObjectSchema>;
  // fwInfo?: fwInfoSchema;
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
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusGMDeviceSchema = IKeusGMDeviceSchema;
class Methods {
  static async getDeviceById() {}
  static async insertDevice() {}
  static async deleteDeviceById() {}
  static async updateDevice() {}
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async updateDeviceInfo() {}
  static async updateDeviceHomeInfo() {}
  static async updateDeviceName() {}
  static async updateDeviceLocation() {}
  static async updateDeviceControlInfo() {}
  static async updateDeviceSyncInfo() {}
  static async getIpDevice() {}
  static async getDevicesByControlType() {}
  static async getDevicesByCategory() {}
  static async getDevicesByNotPartOfCategory() {}
  static async getDevicesByRooms() {}
  static async getCameraDevice() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGMDeviceSchema, IKeusGMDeviceControlInfo_protocolControlInfoSchema, IKeusGMDeviceControlInfoSchema, IKeusGMDeviceHomeInfoSchema, IKeusGMDeviceSyncInfoSchema, IKeusGMDeviceStatusInfoSchema, protocolDeviceInfo_deviceProperties_portListSchema, IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema, IKeusGMDeviceInfo_protocolDeviceInfoSchema, IKeusGMDeviceInfoSchema, IKeusGMDeviceMaintenanceInfoSchema, _devices.fwInfoSchema, _devices.fwhealthObjectSchema, _devices.fwHealthSubObjectSchema, _devices.fwHealthSubObjectPropsSchema];