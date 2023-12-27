"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeCurtainControllerStateSchema = exports.IZigbeeCurtainControllerPropertiesSchema = exports.IZigbeeCurtainControllerActivityActionSchema = exports.IZigbeeCurtainControllerActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeCurtainControllerStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainControllerStateSchema",
    properties: {
      curtainState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainControllerStateSchema = IZigbeeCurtainControllerStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeCurtainControllerPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainControllerPropertiesSchema",
    properties: {
      invertSignal: {
        type: "bool",
        optional: true
      },
      actionTriggerTime: {
        type: "int",
        optional: true
      },
      motorCalibrationTime: {
        type: "int",
        optional: true
      },
      rfremoteEnabled: {
        type: "bool",
        optional: true
      },
      curtainType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainControllerPropertiesSchema = IZigbeeCurtainControllerPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeCurtainControllerActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainControllerActionSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      curtainState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainControllerActionSchema = IZigbeeCurtainControllerActionSchema;
// Modified by @realm/babel-plugin
class IZigbeeCurtainControllerActivityActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainControllerActivityActionSchema",
    properties: {
      curtainState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainControllerActivityActionSchema = IZigbeeCurtainControllerActivityActionSchema;