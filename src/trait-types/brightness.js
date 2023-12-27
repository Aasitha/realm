"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IBrightnessTraitStateSchema = exports.IBrightnessTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IBrightnessTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IBrightnessTraitStateSchema",
    properties: {
      brightnessPercent: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IBrightnessTraitStateSchema = IBrightnessTraitStateSchema;
;
// Modified by @realm/babel-plugin
class IBrightnessTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;

  //Percent
  // Percent

  //milliseconds
  //milliseconds
  //milliseconds
  //milliseconds
  static schema = {
    name: "IBrightnessTraitPropertiesSchema",
    properties: {
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      brightnessDefaultState: {
        type: "object",
        optional: true,
        objectType: "IBrightnessTraitStateSchema"
      },
      fadeUpTime: {
        type: "int",
        optional: true
      },
      fadeDownTime: {
        type: "int",
        optional: true
      },
      fadeOffTime: {
        type: "int",
        optional: true
      },
      fadeRate: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IBrightnessTraitPropertiesSchema = IBrightnessTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema];