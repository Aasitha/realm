"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IPushTriggerTraitStateSchema = exports.IPushTriggerTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IPushTriggerTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPushTriggerTraitStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IPushTriggerTraitStateSchema = IPushTriggerTraitStateSchema;
// Modified by @realm/babel-plugin
class IPushTriggerTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPushTriggerTraitPropertiesSchema",
    properties: {
      defaultTriggerDuration: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IPushTriggerTraitPropertiesSchema = IPushTriggerTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema];