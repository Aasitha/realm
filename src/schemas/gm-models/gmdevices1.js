"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protocolDeviceInfo_deviceProperties_portListSchema = exports.gmdevicesSchemaList = exports.Methods = exports.IKeusGMDeviceSyncInfoSchema = exports.IKeusGMDeviceStatusInfoSchema = exports.IKeusGMDeviceSchema = exports.IKeusGMDeviceMaintenanceInfoSchema = exports.IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema = exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = exports.IKeusGMDeviceInfoSchema = exports.IKeusGMDeviceHomeInfoSchema = exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = exports.IKeusGMDeviceControlInfoSchema = exports.IKEHVACIndoorUnitSchema = exports.ICameraUnitSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/es.symbol.description.js");
var _devices = require("../devices");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMDevice";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusGMDeviceControlInfo_protocolControlInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceControlInfo_protocolControlInfoSchema = IKeusGMDeviceControlInfo_protocolControlInfoSchema;
_defineProperty(IKeusGMDeviceControlInfo_protocolControlInfoSchema, "embedded", true);
class IKeusGMDeviceControlInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceControlInfoSchema = IKeusGMDeviceControlInfoSchema;
_defineProperty(IKeusGMDeviceControlInfoSchema, "embedded", true);
class IKeusGMDeviceHomeInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceHomeInfoSchema = IKeusGMDeviceHomeInfoSchema;
_defineProperty(IKeusGMDeviceHomeInfoSchema, "embedded", true);
class IKeusGMDeviceSyncInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceSyncInfoSchema = IKeusGMDeviceSyncInfoSchema;
_defineProperty(IKeusGMDeviceSyncInfoSchema, "embedded", true);
class IKeusGMDeviceStatusInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceStatusInfoSchema = IKeusGMDeviceStatusInfoSchema;
_defineProperty(IKeusGMDeviceStatusInfoSchema, "embedded", true);
class protocolDeviceInfo_deviceProperties_portListSchema extends Realm.Object {}
exports.protocolDeviceInfo_deviceProperties_portListSchema = protocolDeviceInfo_deviceProperties_portListSchema;
_defineProperty(protocolDeviceInfo_deviceProperties_portListSchema, "embedded", true);
class IKEHVACIndoorUnitSchema extends Realm.Object {}
exports.IKEHVACIndoorUnitSchema = IKEHVACIndoorUnitSchema;
_defineProperty(IKEHVACIndoorUnitSchema, "embedded", true);
class ICameraUnitSchema extends Realm.Object {}
exports.ICameraUnitSchema = ICameraUnitSchema;
_defineProperty(ICameraUnitSchema, "embedded", true);
class IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema extends Realm.Object {}
exports.IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema = IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema;
_defineProperty(IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema, "embedded", true);
class IKeusGMDeviceInfo_protocolDeviceInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceInfo_protocolDeviceInfoSchema = IKeusGMDeviceInfo_protocolDeviceInfoSchema;
_defineProperty(IKeusGMDeviceInfo_protocolDeviceInfoSchema, "embedded", true);
class IKeusGMDeviceInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceInfoSchema = IKeusGMDeviceInfoSchema;
_defineProperty(IKeusGMDeviceInfoSchema, "embedded", true);
class IKeusGMDeviceMaintenanceInfoSchema extends Realm.Object {}
exports.IKeusGMDeviceMaintenanceInfoSchema = IKeusGMDeviceMaintenanceInfoSchema;
_defineProperty(IKeusGMDeviceMaintenanceInfoSchema, "embedded", true);
class IKeusGMDeviceSchema extends Realm.Object {}
exports.IKeusGMDeviceSchema = IKeusGMDeviceSchema;
_defineProperty(IKeusGMDeviceSchema, "primaryKey", "deviceId");
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
const gmdevicesSchemaList = exports.gmdevicesSchemaList = [IKeusGMDeviceSchema, IKeusGMDeviceControlInfo_protocolControlInfoSchema, IKeusGMDeviceControlInfoSchema, IKeusGMDeviceHomeInfoSchema, IKeusGMDeviceSyncInfoSchema, IKeusGMDeviceStatusInfoSchema, protocolDeviceInfo_deviceProperties_portListSchema, IKeusGMDeviceInfo_protocolDeviceInfo_devicePropertiesSchema, IKeusGMDeviceInfo_protocolDeviceInfoSchema, IKeusGMDeviceInfoSchema, IKeusGMDeviceMaintenanceInfoSchema, _devices.fwInfoSchema, _devices.fwhealthObjectSchema, _devices.fwHealthSubObjectSchema, _devices.fwHealthSubObjectPropsSchema];
