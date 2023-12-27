"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsPercentRelayApplianceControlInfoSchema = exports.IBlindsPercentRelayApplianceStateSchema = exports.IBlindsPercentRelayAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsPercentRelayApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsPercentRelayApplianceStateSchema",
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
      }
    },
    embedded: true
  };
}
exports.IBlindsPercentRelayApplianceStateSchema = IBlindsPercentRelayApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsPercentRelayAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsPercentRelayAppliancePropertiesSchema",
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
      }
    },
    embedded: true
  };
}
exports.IBlindsPercentRelayAppliancePropertiesSchema = IBlindsPercentRelayAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsPercentRelayApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsPercentRelayApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsPercentRelayApplianceControlInfoSchema = IKZBlindsPercentRelayApplianceControlInfoSchema;