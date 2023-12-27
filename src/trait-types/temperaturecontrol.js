"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.ITemperatureControlTraitStateSchema = exports.ITemperatureControlTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ITemperatureControlTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ITemperatureControlTraitStateSchema",
    properties: {
      temperatureValue: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ITemperatureControlTraitStateSchema = ITemperatureControlTraitStateSchema;
// Modified by @realm/babel-plugin
class ITemperatureControlTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ITemperatureControlTraitPropertiesSchema",
    properties: {
      minTemperature: {
        type: "int",
        optional: true
      },
      maxTemperature: {
        type: "int",
        optional: true
      },
      defaultTemperatureState: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.ITemperatureControlTraitPropertiesSchema = ITemperatureControlTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema];