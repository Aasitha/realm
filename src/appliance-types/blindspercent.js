"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsPercentApplianceControlInfoSchema = exports.IBlindsPercentApplianceStateSchema = exports.IBlindsPercentAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsPercentApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsPercentApplianceStateSchema",
    properties: {
      openCloseState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitStateSchema"
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
exports.IBlindsPercentApplianceStateSchema = IBlindsPercentApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsPercentAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsPercentAppliancePropertiesSchema",
    properties: {
      openCloseProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitPropertiesSchema"
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
exports.IBlindsPercentAppliancePropertiesSchema = IBlindsPercentAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsPercentApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsPercentApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsPercentApplianceControlInfoSchema = IKZBlindsPercentApplianceControlInfoSchema;