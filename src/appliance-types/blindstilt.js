"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKZBlindsTiltApplianceControlInfoSchema = exports.IBlindsTiltApplianceStateSchema = exports.IBlindsTiltAppliancePropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBlindsTiltApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsTiltApplianceStateSchema",
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
      },
      angularTiltState: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsTiltApplianceStateSchema = IBlindsTiltApplianceStateSchema;
// Modified by @realm/babel-plugin
class IBlindsTiltAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBlindsTiltAppliancePropertiesSchema",
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
      },
      angularTiltProperties: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IBlindsTiltAppliancePropertiesSchema = IBlindsTiltAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IKZBlindsTiltApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZBlindsTiltApplianceControlInfoSchema",
    properties: {
      blindPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZBlindsTiltApplianceControlInfoSchema = IKZBlindsTiltApplianceControlInfoSchema;