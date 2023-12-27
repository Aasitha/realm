"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IRGBAddrTraitStateSchema = exports.IRGBAddrTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRGBAddrTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBAddrTraitStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IRGBAddrTraitStateSchema = IRGBAddrTraitStateSchema;
// Modified by @realm/babel-plugin
class IRGBAddrTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBAddrTraitPropertiesSchema",
    properties: {
      stripLength: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IRGBAddrTraitPropertiesSchema = IRGBAddrTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema];