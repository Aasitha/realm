"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IWWMixerTraitStateSchema = exports.IWWMixerTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IWWMixerTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWMixerTraitStateSchema",
    properties: {
      warmWhitePercentage: {
        type: "int",
        optional: true
      },
      coolWhitePercentage: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IWWMixerTraitStateSchema = IWWMixerTraitStateSchema;
// Modified by @realm/babel-plugin
class IWWMixerTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWMixerTraitPropertiesSchema",
    properties: {
      wwmixerDefaultState: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IWWMixerTraitPropertiesSchema = IWWMixerTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema];