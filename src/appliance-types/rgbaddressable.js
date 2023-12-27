"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IRgbAddressableStateSchema = exports.IRgbAddressablePropertiesSchema = exports.IKZRGBAddressableApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRgbAddressableStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRgbAddressableStateSchema",
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
      rgbColorState: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitStateSchema"
      },
      rgbAddressableState: {
        type: "object",
        optional: true,
        objectType: "IRGBAddrTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IRgbAddressableStateSchema = IRgbAddressableStateSchema;
// Modified by @realm/babel-plugin
class IRgbAddressablePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRgbAddressablePropertiesSchema",
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
      rgbColorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      },
      rgbAddressableProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBAddrTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IRgbAddressablePropertiesSchema = IRgbAddressablePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZRGBAddressableApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZRGBAddressableApplianceControlInfoSchema",
    properties: {
      addressablePortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZRGBAddressableApplianceControlInfoSchema = IKZRGBAddressableApplianceControlInfoSchema;