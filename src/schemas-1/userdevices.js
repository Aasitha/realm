"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserDeviceKeyTypeSchema = exports.authenticateUserDeviceTypeSchema = exports.IKeusUserDeviceSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusUserDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusUserDeviceSchema extends _realm.default.Object {
  static primaryKey = "deviceId";
  static schema = {
    name: "IKeusUserDeviceSchema",
    properties: {
      _id: {
        type: "string",
        optional: true
      },
      phone: {
        type: "string",
        optional: true
      },
      deviceType: {
        type: "string",
        optional: true
      },
      deviceName: {
        type: "string",
        optional: true
      },
      deviceId: {
        type: "string"
      },
      validity: {
        type: "int",
        optional: true
      },
      remember: {
        type: "bool",
        optional: true
      },
      secretKey: {
        type: "string",
        optional: true
      },
      lastAccessTime: {
        type: "int",
        optional: true
      },
      deviceKey: {
        type: "string",
        optional: true
      },
      servicePhone: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusUserDeviceSchema = IKeusUserDeviceSchema;
// Modified by @realm/babel-plugin
class authenticateUserDeviceTypeSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "authenticateUserDeviceTypeSchema",
    properties: {
      phone: {
        type: "string",
        optional: true
      },
      deviceType: {
        type: "string",
        optional: true
      },
      deviceName: {
        type: "string",
        optional: true
      },
      deviceId: {
        type: "string",
        optional: true
      },
      remember: {
        type: "bool",
        optional: true
      },
      servicePhone: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.authenticateUserDeviceTypeSchema = authenticateUserDeviceTypeSchema;
// Modified by @realm/babel-plugin
class validateUserDeviceKeyTypeSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "validateUserDeviceKeyTypeSchema",
    properties: {
      deviceKey: {
        type: "string",
        optional: true
      },
      secretKey: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.validateUserDeviceKeyTypeSchema = validateUserDeviceKeyTypeSchema;