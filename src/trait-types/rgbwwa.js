"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IWWA2Schema = exports.IRGBWWATraitStateSchema = exports.IRGBWWATraitPropertiesSchema = exports.IRGBWWAPatternPropertySchema = exports.IRGBWWAColorSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRGBWWAColorSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWAColorSchema",
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
exports.IRGBWWAColorSchema = IRGBWWAColorSchema;
// Modified by @realm/babel-plugin
class IWWA2Schema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWA2Schema",
    properties: {
      warmWhitePercent: {
        type: "int",
        optional: true
      },
      coolWhitePercent: {
        type: "int",
        optional: true
      },
      amberPercent: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IWWA2Schema = IWWA2Schema;
// Modified by @realm/babel-plugin
class IRGBWWAPatternPropertySchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWAPatternPropertySchema",
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
exports.IRGBWWAPatternPropertySchema = IRGBWWAPatternPropertySchema;
// Modified by @realm/babel-plugin
class IRGBWWATraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWATraitStateSchema",
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
      },
      wwa: {
        type: "list",
        objectType: "object"
      }
    },
    embedded: true
  };
}
exports.IRGBWWATraitStateSchema = IRGBWWATraitStateSchema;
// Modified by @realm/babel-plugin
class IRGBWWATraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRGBWWATraitPropertiesSchema",
    properties: {
      defaultState: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IRGBWWATraitPropertiesSchema = IRGBWWATraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema];