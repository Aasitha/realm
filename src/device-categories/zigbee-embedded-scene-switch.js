"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeEmbeddedSceneSwitchStateSchema = exports.IZigbeeEmbeddedSceneSwitchPropertiesSchema = exports.ISceneSwitchTypeSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ISceneSwitchTypeSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISceneSwitchTypeSchema",
    properties: {
      switchId: {
        type: "int",
        optional: true
      },
      sceneId: {
        type: "int",
        optional: true
      },
      sceneRoom: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISceneSwitchTypeSchema = ISceneSwitchTypeSchema;
// Modified by @realm/babel-plugin
class IZigbeeEmbeddedSceneSwitchPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeEmbeddedSceneSwitchPropertiesSchema",
    properties: {
      numberOfSwitches: {
        type: "int",
        optional: true
      },
      switches: {
        type: "list",
        objectType: "ISceneSwitchTypeSchema"
      },
      batteryPercentage: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeEmbeddedSceneSwitchPropertiesSchema = IZigbeeEmbeddedSceneSwitchPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeEmbeddedSceneSwitchStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeEmbeddedSceneSwitchStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IZigbeeEmbeddedSceneSwitchStateSchema = IZigbeeEmbeddedSceneSwitchStateSchema;