"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeNonDimmableDriverStateSchema = exports.IZigbeeNonDimmableDriverPropertiesSchema = exports.IZigbeeNonDimmableActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeNonDimmableDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeNonDimmableDriverPropertiesSchema",
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
      }
    },
    embedded: true
  };
}
exports.IZigbeeNonDimmableDriverPropertiesSchema = IZigbeeNonDimmableDriverPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeNonDimmableDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeNonDimmableDriverStateSchema",
    properties: {
      driverState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeNonDimmableDriverStateSchema = IZigbeeNonDimmableDriverStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeNonDimmableActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeNonDimmableActionSchema",
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
exports.IZigbeeNonDimmableActionSchema = IZigbeeNonDimmableActionSchema;