"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IWWMixerApplianceStateSchema = exports.IWWMixerAppliancePropertiesSchema = exports.IKZWWMixerApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IWWMixerApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWMixerApplianceStateSchema",
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
      wwmixerState: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IWWMixerApplianceStateSchema = IWWMixerApplianceStateSchema;
// Modified by @realm/babel-plugin
class IWWMixerAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWMixerAppliancePropertiesSchema",
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
      wwmixerProperties: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IWWMixerAppliancePropertiesSchema = IWWMixerAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZWWMixerApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZWWMixerApplianceControlInfoSchema",
    properties: {
      warmWhitePortId: {
        type: "int",
        optional: true
      },
      coolWhitePortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZWWMixerApplianceControlInfoSchema = IKZWWMixerApplianceControlInfoSchema;