"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IFanSpeedControlTraitStateSchema = exports.IFanSpeedControlTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IFanSpeedControlTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IFanSpeedControlTraitStateSchema",
    properties: {
      fanSpeed: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IFanSpeedControlTraitStateSchema = IFanSpeedControlTraitStateSchema;
// Modified by @realm/babel-plugin
class IFanSpeedControlTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IFanSpeedControlTraitPropertiesSchema",
    properties: {
      fanSpeedList: {
        type: "list",
        objectType: "string"
      },
      defaultFanSpeed: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IFanSpeedControlTraitPropertiesSchema = IFanSpeedControlTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema];