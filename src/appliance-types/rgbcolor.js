"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IRGBColorApplianceStateSchema = exports.IRGBColorAppliancePropertiesSchema = exports.IKZRGBColorApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRGBColorApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBColorApplianceStateSchema",
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
      rgbcolorState: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IRGBColorApplianceStateSchema = IRGBColorApplianceStateSchema;
// Modified by @realm/babel-plugin
class IRGBColorAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBColorAppliancePropertiesSchema",
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
      rgbcolorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IRGBColorAppliancePropertiesSchema = IRGBColorAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZRGBColorApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZRGBColorApplianceControlInfoSchema",
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
      }
    },
    embedded: true
  };
}
exports.IKZRGBColorApplianceControlInfoSchema = IKZRGBColorApplianceControlInfoSchema;