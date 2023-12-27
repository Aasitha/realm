"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsTiltRelayApplianceControlInfoSchema = exports.IBlindsTiltRelayApplianceStateSchema = exports.IBlindsTiltRelayAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsTiltRelayApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsTiltRelayApplianceStateSchema",
    properties: {
      openCloseState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitStateSchema"
      },
      openCloseRelayState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseRelayTraitStateSchema"
      },
      percentOpenState: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitStateSchema"
      },
      angularTiltState: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitStateSchema"
      },
      tiltRelayState: {
        type: "object",
        optional: true,
        objectType: "ITiltRelayTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsTiltRelayApplianceStateSchema = IBlindsTiltRelayApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsTiltRelayAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsTiltRelayAppliancePropertiesSchema",
    properties: {
      openCloseProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitPropertiesSchema"
      },
      openCloseRelayProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseRelayTraitPropertiesSchema"
      },
      percentOpenProperties: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitPropertiesSchema"
      },
      angularTiltProperties: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitPropertiesSchema"
      },
      tiltRelayProperties: {
        type: "object",
        optional: true,
        objectType: "ITiltRelayTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsTiltRelayAppliancePropertiesSchema = IBlindsTiltRelayAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsTiltRelayApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsTiltRelayApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsTiltRelayApplianceControlInfoSchema = IKZBlindsTiltRelayApplianceControlInfoSchema;