"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IRGBPatternPropertiesSchema = exports.IRGBColorTraitStateSchema = exports.IRGBColorTraitPropertiesSchema = exports.IRGBColorSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRGBColorSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBColorSchema",
    properties: {
      redPercent: {
        type: "int",
        optional: true
      },
      greenPercent: {
        type: "int",
        optional: true
      },
      bluePercent: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IRGBColorSchema = IRGBColorSchema;
// Modified by @realm/babel-plugin
class IRGBPatternPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBPatternPropertiesSchema",
    properties: {
      patternPropertyId: {
        type: "int",
        optional: true
      },
      patternPropertyValue: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IRGBPatternPropertiesSchema = IRGBPatternPropertiesSchema;
// Modified by @realm/babel-plugin
class IRGBColorTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBColorTraitStateSchema",
    properties: {
      patternId: {
        type: "int",
        optional: true
      },
      patternProperties: {
        type: "list",
        objectType: "object"
      },
      rgbColor: {
        type: "list",
        objectType: "object"
      }
    },
    embedded: true
  };
}
exports.IRGBColorTraitStateSchema = IRGBColorTraitStateSchema;
// Modified by @realm/babel-plugin
class IRGBColorTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBColorTraitPropertiesSchema",
    properties: {
      defaultState: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitStateSchema"
      },
      rgbColorDefaultState: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      }
    },
    embedded: true
  };
}
exports.IRGBColorTraitPropertiesSchema = IRGBColorTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema];