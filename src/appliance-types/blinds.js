"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsApplianceControlInfoSchema = exports.IBlindsApplianceStateSchema = exports.IBlindsAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsApplianceStateSchema",
    properties: {
      openCloseState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsApplianceStateSchema = IBlindsApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsAppliancePropertiesSchema",
    properties: {
      openCloseProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsAppliancePropertiesSchema = IBlindsAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsApplianceControlInfoSchema = IKZBlindsApplianceControlInfoSchema;