"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISwitchApplianceStateSchema = exports.ISwitchAppliancePropertiesSchem = exports.IKZSwitchApplianceControlInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ISwitchApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwitchApplianceStateSchema",
    properties: {
      onOffState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.ISwitchApplianceStateSchema = ISwitchApplianceStateSchema;
// Modified by @realm/babel-plugin
class ISwitchAppliancePropertiesSchem extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwitchAppliancePropertiesSchem",
    properties: {
      onOffProperties: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.ISwitchAppliancePropertiesSchem = ISwitchAppliancePropertiesSchem;
// Modified by @realm/babel-plugin
class IKZSwitchApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKZSwitchApplianceControlInfoSchema",
    properties: {
      switchPortId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKZSwitchApplianceControlInfoSchema = IKZSwitchApplianceControlInfoSchema;