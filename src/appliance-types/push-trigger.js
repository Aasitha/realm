"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IPushTriggerApplianceStateSchema = exports.IPushTriggerAppliancePropertiesSchema = exports.IKZPushTriggerApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IPushTriggerApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPushTriggerApplianceStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IPushTriggerApplianceStateSchema = IPushTriggerApplianceStateSchema;
// Modified by @realm/babel-plugin
class IPushTriggerAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPushTriggerAppliancePropertiesSchema",
    properties: {
      triggerProperties: {
        type: "object",
        optional: true,
        objectType: "IPushTriggerTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IPushTriggerAppliancePropertiesSchema = IPushTriggerAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZPushTriggerApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZPushTriggerApplianceControlInfoSchema",
    properties: {
      pushTriggerPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZPushTriggerApplianceControlInfoSchema = IKZPushTriggerApplianceControlInfoSchema;