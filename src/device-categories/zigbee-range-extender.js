"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeRangeExtenderStateSchema = exports.IZigbeeRangeExtenderPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeRangeExtenderStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRangeExtenderStateSchema",
    properties: {
      deviceState: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeRangeExtenderStateSchema = IZigbeeRangeExtenderStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeRangeExtenderPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRangeExtenderPropertiesSchema",
    properties: {},
    embedded: true
  };
}
exports.IZigbeeRangeExtenderPropertiesSchema = IZigbeeRangeExtenderPropertiesSchema;