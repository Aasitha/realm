"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IKeusAirConditionerApplianceControlInfoSchema = exports.IAirConditionerApplianceStateSchema = exports.IAirConditionerAppliancePropertiesSchema = exports.IAirConditionerApplianceDeviceInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IAirConditionerApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAirConditionerApplianceStateSchema",
    properties: {
      onOffState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      },
      modeState: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitStateSchema"
      },
      fanSpeedState: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitStateSchema"
      },
      temperatureControlState: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitStateSchema"
      },
      louverState: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IAirConditionerApplianceStateSchema = IAirConditionerApplianceStateSchema;
// Modified by @realm/babel-plugin
class IAirConditionerAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAirConditionerAppliancePropertiesSchema",
    properties: {
      onOffProperties: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitPropertiesSchema"
      },
      modeProperties: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitPropertiesSchema"
      },
      fanSpeedProperties: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitPropertiesSchema"
      },
      temperatureControlProperties: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitPropertiesSchema"
      },
      louverProperties: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IAirConditionerAppliancePropertiesSchema = IAirConditionerAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IAirConditionerApplianceDeviceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAirConditionerApplianceDeviceInfoSchema",
    properties: {
      indoorUnitId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IAirConditionerApplianceDeviceInfoSchema = IAirConditionerApplianceDeviceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusAirConditionerApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusAirConditionerApplianceControlInfoSchema",
    properties: {
      indoorUnitId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusAirConditionerApplianceControlInfoSchema = IKeusAirConditionerApplianceControlInfoSchema;
const ModelsList = exports.ModelsList = [IAirConditionerApplianceStateSchema, IAirConditionerAppliancePropertiesSchema, IAirConditionerApplianceDeviceInfoSchema, IKeusAirConditionerApplianceControlInfoSchema];