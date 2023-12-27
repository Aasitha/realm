"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZDimmerApplianceControlInfoSchema = exports.IDimmerApplianceStateSchema = exports.IDimmerAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IDimmerApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDimmerApplianceStateSchema",
    properties: {
      onOffState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      },
      brightnessState: {
        type: "object",
        optional: true,
        objectType: "IBrightnessTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IDimmerApplianceStateSchema = IDimmerApplianceStateSchema;
// Modified by @realm/babel-plugin
class IDimmerAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDimmerAppliancePropertiesSchema",
    properties: {
      onOffProperties: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitPropertiesSchema"
      },
      brightnessProperties: {
        type: "object",
        optional: true,
        objectType: "IBrightnessTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IDimmerAppliancePropertiesSchema = IDimmerAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZDimmerApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZDimmerApplianceControlInfoSchema",
    properties: {
      dimmerPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZDimmerApplianceControlInfoSchema = IKZDimmerApplianceControlInfoSchema;