"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeDCFanControllerStateSchema = exports.IZigbeeDCFanControllerPropertiesSchema = exports.IZigbeeDCFanControllerActionSchema = exports.IZigbeeDCFanControllerActionLightStateSchema = exports.DC_FAN_CONTROLLER_STATES = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeDCFanControllerStateSchema extends _realm.default.Object {
  static embedded = true;

  //modes are assumed to be values of integer
  static schema = {
    name: "IZigbeeDCFanControllerStateSchema",
    properties: {
      fanState: {
        type: "int",
        optional: true
      },
      lightState: {
        type: "int",
        optional: true
      },
      lightTemperature: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDCFanControllerStateSchema = IZigbeeDCFanControllerStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeDCFanControllerActionLightStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDCFanControllerActionLightStateSchema",
    properties: {
      lightState: {
        type: "int",
        optional: true
      },
      lightTemperature: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDCFanControllerActionLightStateSchema = IZigbeeDCFanControllerActionLightStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeDCFanControllerActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDCFanControllerActionSchema",
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
        type: "object",
        optional: true,
        objectType: "IZigbeeDCFanControllerActionLightStateSchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeDCFanControllerActionSchema = IZigbeeDCFanControllerActionSchema;
// Modified by @realm/babel-plugin
class IZigbeeDCFanControllerPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDCFanControllerPropertiesSchema",
    properties: {
      isReverse: {
        type: "bool",
        optional: true
      },
      isAntiTheft: {
        type: "bool",
        optional: true
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      hasLight: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDCFanControllerPropertiesSchema = IZigbeeDCFanControllerPropertiesSchema;
let DC_FAN_CONTROLLER_STATES = exports.DC_FAN_CONTROLLER_STATES = /*#__PURE__*/function (DC_FAN_CONTROLLER_STATES) {
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_OFF"] = 0] = "DC_OFF";
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_LOW"] = 1] = "DC_LOW";
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_MED"] = 2] = "DC_MED";
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_HIGH"] = 3] = "DC_HIGH";
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_MAX"] = 4] = "DC_MAX";
  DC_FAN_CONTROLLER_STATES[DC_FAN_CONTROLLER_STATES["DC_NW"] = 5] = "DC_NW";
  return DC_FAN_CONTROLLER_STATES;
}({});