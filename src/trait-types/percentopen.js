"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IPercentOpenTraitStateSchema = exports.IPercentOpenTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IPercentOpenTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPercentOpenTraitStateSchema",
    properties: {
      percentOpen: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IPercentOpenTraitStateSchema = IPercentOpenTraitStateSchema;
// Modified by @realm/babel-plugin
class IPercentOpenTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IPercentOpenTraitPropertiesSchema",
    properties: {
      maxPercentValue: {
        type: "int",
        optional: true
      },
      minPercentValue: {
        type: "int",
        optional: true
      },
      defaultPercentopenState: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IPercentOpenTraitPropertiesSchema = IPercentOpenTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema];