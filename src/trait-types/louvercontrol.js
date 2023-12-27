"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.ILouverControlTraitStateSchema = exports.ILouverControlTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ILouverControlTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ILouverControlTraitStateSchema",
    properties: {
      louverState: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ILouverControlTraitStateSchema = ILouverControlTraitStateSchema;
// Modified by @realm/babel-plugin
class ILouverControlTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ILouverControlTraitPropertiesSchema",
    properties: {
      louverStateList: {
        type: "list",
        objectType: "string"
      },
      defaultLouverState: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.ILouverControlTraitPropertiesSchema = ILouverControlTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema];