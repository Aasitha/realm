"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeACFanControllerStateSchema = exports.IZigbeeACFanControllerPropertiesSchema = exports.IZigbeeACFanControllerActionSchema = exports.AC_FAN_CONTROLLER_STATES = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeACFanControllerStateSchema extends _realm.default.Object {
  static embedded = true;
  //modes are assumed to be values of integer
  static schema = {
    name: "IZigbeeACFanControllerStateSchema",
    properties: {
      fanState: {
        type: "int",
        optional: true
      },
      lightState: {
        type: "int",
        optional: true
      },
      swingState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeACFanControllerStateSchema = IZigbeeACFanControllerStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeACFanControllerPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeACFanControllerPropertiesSchema",
    properties: {
      hasLight: {
        type: "bool",
        optional: true
      },
      hasSwing: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeACFanControllerPropertiesSchema = IZigbeeACFanControllerPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeACFanControllerActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeACFanControllerActionSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      deviceId: {
        type: "string",
        optional: true
      },
      fanState: {
        type: "int",
        optional: true
      },
      lightState: {
        type: "int",
        optional: true
      },
      swingState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeACFanControllerActionSchema = IZigbeeACFanControllerActionSchema;
let AC_FAN_CONTROLLER_STATES = exports.AC_FAN_CONTROLLER_STATES = /*#__PURE__*/function (AC_FAN_CONTROLLER_STATES) {
  AC_FAN_CONTROLLER_STATES[AC_FAN_CONTROLLER_STATES["AC_OFF"] = 0] = "AC_OFF";
  AC_FAN_CONTROLLER_STATES[AC_FAN_CONTROLLER_STATES["AC_LOW"] = 1] = "AC_LOW";
  AC_FAN_CONTROLLER_STATES[AC_FAN_CONTROLLER_STATES["AC_MED"] = 2] = "AC_MED";
  AC_FAN_CONTROLLER_STATES[AC_FAN_CONTROLLER_STATES["AC_HIGH"] = 3] = "AC_HIGH";
  AC_FAN_CONTROLLER_STATES[AC_FAN_CONTROLLER_STATES["AC_MAX"] = 4] = "AC_MAX";
  return AC_FAN_CONTROLLER_STATES;
}({});