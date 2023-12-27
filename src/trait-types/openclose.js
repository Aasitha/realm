"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IOpenCloseTraitStateSchema = exports.IOpenCloseTraitPropertiesSchema = exports.IOpenCloseTraitOpenStyleSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IOpenCloseTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOpenCloseTraitStateSchema",
    properties: {
      openCloseState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IOpenCloseTraitStateSchema = IOpenCloseTraitStateSchema;
// Modified by @realm/babel-plugin
class IOpenCloseTraitOpenStyleSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOpenCloseTraitOpenStyleSchema",
    properties: {
      openStyleVertical: {
        type: "int",
        optional: true
      },
      openStyleHorizontal: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IOpenCloseTraitOpenStyleSchema = IOpenCloseTraitOpenStyleSchema;
// Modified by @realm/babel-plugin
class IOpenCloseTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOpenCloseTraitPropertiesSchema",
    properties: {
      invertSignal: {
        type: "bool",
        optional: true
      },
      openDirection: {
        type: "int",
        optional: true
      },
      defaultOpenCloseState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitStateSchema"
      },
      openStyle: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitOpenStyleSchema"
      }
    },
    embedded: true
  };
}
exports.IOpenCloseTraitPropertiesSchema = IOpenCloseTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema];