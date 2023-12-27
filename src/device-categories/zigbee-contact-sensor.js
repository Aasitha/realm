"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeContactSensorStateSchema = exports.IZigbeeContactSensorScheduleActionSchema = exports.IZigbeeContactSensorPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeContactSensorStateSchema extends _realm.default.Object {
  static embedded = true;
  //modes are assumed to be values of integer
  static schema = {
    name: "IZigbeeContactSensorStateSchema",
    properties: {
      deviceState: {
        type: "int",
        optional: true
      },
      batteryState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeContactSensorStateSchema = IZigbeeContactSensorStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeContactSensorPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeContactSensorPropertiesSchema",
    properties: {
      notificationsEnabled: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeContactSensorPropertiesSchema = IZigbeeContactSensorPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeContactSensorScheduleActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeContactSensorScheduleActionSchema",
    properties: {
      deviceId: {
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
exports.IZigbeeContactSensorScheduleActionSchema = IZigbeeContactSensorScheduleActionSchema;