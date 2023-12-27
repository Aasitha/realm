"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IOpenCloseRelayTraitStateSchema = exports.IOpenCloseRelayTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IOpenCloseRelayTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOpenCloseRelayTraitStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IOpenCloseRelayTraitStateSchema = IOpenCloseRelayTraitStateSchema;
// Modified by @realm/babel-plugin
class IOpenCloseRelayTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOpenCloseRelayTraitPropertiesSchema",
    properties: {
      fullOpenDuration: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IOpenCloseRelayTraitPropertiesSchema = IOpenCloseRelayTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema];