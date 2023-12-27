"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IOnOffTraitStateSchema = exports.IOnOffTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IOnOffTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOnOffTraitStateSchema",
    properties: {
      onState: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IOnOffTraitStateSchema = IOnOffTraitStateSchema;
;
// Modified by @realm/babel-plugin
class IOnOffTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOnOffTraitPropertiesSchema",
    properties: {
      onOffDefaultState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IOnOffTraitPropertiesSchema = IOnOffTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IOnOffTraitStateSchema, IOnOffTraitPropertiesSchema];