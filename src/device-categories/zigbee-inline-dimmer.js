"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeInlineDimmerStateSchema = exports.IZigbeeInlineDimmerPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeInlineDimmerStateSchema extends _realm.default.Object {
  static embedded = true;

  //modes are assumed to be values of integer
  static schema = {
    name: "IZigbeeInlineDimmerStateSchema",
    properties: {
      deviceState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeInlineDimmerStateSchema = IZigbeeInlineDimmerStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeInlineDimmerPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeInlineDimmerPropertiesSchema",
    properties: {
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      powerOnState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeInlineDimmerPropertiesSchema = IZigbeeInlineDimmerPropertiesSchema;