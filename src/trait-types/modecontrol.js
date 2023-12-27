"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IModeControlTraitStateSchema = exports.IModeControlTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IModeControlTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IModeControlTraitStateSchema",
    properties: {
      mode: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IModeControlTraitStateSchema = IModeControlTraitStateSchema;
// Modified by @realm/babel-plugin
class IModeControlTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IModeControlTraitPropertiesSchema",
    properties: {
      modesList: {
        type: "list",
        objectType: "string"
      },
      defaultMode: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IModeControlTraitPropertiesSchema = IModeControlTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IModeControlTraitStateSchema, IModeControlTraitPropertiesSchema];