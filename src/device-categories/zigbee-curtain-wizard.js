"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeCurtainWizardStateSchema = exports.IZigbeeCurtainWizardPropertiesSchema = exports.IZigbeeCurtainWizardButtonSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeCurtainWizardButtonSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainWizardButtonSchema",
    properties: {
      rowId: {
        type: "int",
        optional: true
      },
      selectAll: {
        type: "bool",
        optional: true
      },
      deviceId: {
        type: "list",
        objectType: "string"
      },
      applianceId: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainWizardButtonSchema = IZigbeeCurtainWizardButtonSchema;
// Modified by @realm/babel-plugin
class IZigbeeCurtainWizardPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainWizardPropertiesSchema",
    properties: {
      button: {
        type: "list",
        objectType: "IZigbeeCurtainWizardButtonSchema"
      },
      batteryPercentage: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeCurtainWizardPropertiesSchema = IZigbeeCurtainWizardPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeCurtainWizardStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeCurtainWizardStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IZigbeeCurtainWizardStateSchema = IZigbeeCurtainWizardStateSchema;