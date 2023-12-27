"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IUnifiCameraNotificationDataSchema = exports.IUnifiCameraApplianceStateSchema = exports.IUnifiCameraApplianceScheduleActionSchema = exports.IUnifiCameraAppliancePropertiesSchema = exports.IUnifiCameraApplianceDeviceInfoSchem = exports.IUnifiCameraApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IUnifiCameraApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraApplianceStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IUnifiCameraApplianceStateSchema = IUnifiCameraApplianceStateSchema;
// Modified by @realm/babel-plugin
class IUnifiCameraAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraAppliancePropertiesSchema",
    properties: {},
    embedded: true
  };
}
exports.IUnifiCameraAppliancePropertiesSchema = IUnifiCameraAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IUnifiCameraApplianceDeviceInfoSchem extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraApplianceDeviceInfoSchem",
    properties: {
      cameraId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IUnifiCameraApplianceDeviceInfoSchem = IUnifiCameraApplianceDeviceInfoSchem;
// Modified by @realm/babel-plugin
class IUnifiCameraApplianceScheduleActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraApplianceScheduleActionSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      },
      notificationsEnabled: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IUnifiCameraApplianceScheduleActionSchema = IUnifiCameraApplianceScheduleActionSchema;
// Modified by @realm/babel-plugin
class IUnifiCameraNotificationDataSchema extends _realm.default.Object {
  static schema = {
    name: "IUnifiCameraNotificationDataSchema",
    properties: {
      applianceName: {
        type: "string",
        optional: true
      },
      applianceRoom: {
        type: "string",
        optional: true
      },
      applianceSection: {
        type: "string",
        optional: true
      },
      detectionData: {
        type: "object",
        optional: true,
        objectType: "IUnifiCameraEventInfoSchema"
      }
    }
  };
}
exports.IUnifiCameraNotificationDataSchema = IUnifiCameraNotificationDataSchema;
// Modified by @realm/babel-plugin
class IUnifiCameraApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraApplianceControlInfoSchema",
    properties: {
      cameraId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IUnifiCameraApplianceControlInfoSchema = IUnifiCameraApplianceControlInfoSchema;