"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsRelayApplianceControlInfoSchema = exports.IBlindsRelayApplianceStateSchema = exports.IBlindsRelayAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsRelayApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsRelayApplianceStateSchema",
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
      }
    },
    embedded: true
  };
}
exports.IBlindsRelayApplianceStateSchema = IBlindsRelayApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsRelayAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsRelayAppliancePropertiesSchema",
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
      }
    },
    embedded: true
  };
}
exports.IBlindsRelayAppliancePropertiesSchema = IBlindsRelayAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsRelayApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsRelayApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsRelayApplianceControlInfoSchema = IKZBlindsRelayApplianceControlInfoSchema;