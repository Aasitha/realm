"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeDimmableDriverStateSchema = exports.IZigbeeDimmableDriverPropertiesSchema = exports.IZigbeeDimmableActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeDimmableDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDimmableDriverPropertiesSchema",
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
      defaultState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDimmableDriverPropertiesSchema = IZigbeeDimmableDriverPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeDimmableDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDimmableDriverStateSchema",
    properties: {
      driverState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDimmableDriverStateSchema = IZigbeeDimmableDriverStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeDimmableActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeDimmableActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      driverState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeDimmableActionSchema = IZigbeeDimmableActionSchema;