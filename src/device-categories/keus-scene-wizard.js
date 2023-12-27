"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKeusSceneWizardStateSchema = exports.IKeusSceneWizardPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IKeusSceneWizardPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSceneWizardPropertiesSchema",
    properties: {
      buttons: {
        type: "list",
        objectType: "IKeusSmartConsoleButtonSchema"
      },
      sceneStepSize: {
        type: "int",
        optional: true
      },
      batteryPercentage: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusSceneWizardPropertiesSchema = IKeusSceneWizardPropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusSceneWizardStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSceneWizardStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IKeusSceneWizardStateSchema = IKeusSceneWizardStateSchema;