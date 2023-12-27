"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.ITiltRelayTraitStateSchema = exports.ITiltRelayTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ITiltRelayTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ITiltRelayTraitStateSchema",
    properties: {},
    embedded: true
  };
}
exports.ITiltRelayTraitStateSchema = ITiltRelayTraitStateSchema;
;
// Modified by @realm/babel-plugin
class ITiltRelayTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ITiltRelayTraitPropertiesSchema",
    properties: {
      fullTiltDuration: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ITiltRelayTraitPropertiesSchema = ITiltRelayTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema];