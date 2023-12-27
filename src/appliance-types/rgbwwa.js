"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IRGBWWAApplianceStateSchema = exports.IRGBWWAAppliancePropertiesSchema = exports.IKZRGBWWAApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRGBWWAApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWAApplianceStateSchema",
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
      },
      rgbwwaState: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IRGBWWAApplianceStateSchema = IRGBWWAApplianceStateSchema;
// Modified by @realm/babel-plugin
class IRGBWWAAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWAAppliancePropertiesSchema",
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
      },
      rgbwwaProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IRGBWWAAppliancePropertiesSchema = IRGBWWAAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZRGBWWAApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZRGBWWAApplianceControlInfoSchema",
    properties: {
      redPortId: {
        type: "int",
        optional: true
      },
      greenPortId: {
        type: "int",
        optional: true
      },
      bluePortId: {
        type: "int",
        optional: true
      },
      warmWhitePortId: {
        type: "int",
        optional: true
      },
      coolWhitePortId: {
        type: "int",
        optional: true
      },
      amberPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZRGBWWAApplianceControlInfoSchema = IKZRGBWWAApplianceControlInfoSchema;