"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDaliDimmableDriverStateSchema = exports.IDaliDimmableDriverPropertiesSchema = exports.IDaliDimmableActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IDaliDimmableDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliDimmableDriverPropertiesSchema",
    properties: {
      fadeTime: {
        type: "int",
        optional: true
      },
      instantOff: {
        type: "bool",
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
      },
      isDriverPropertyUpdated: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliDimmableDriverPropertiesSchema = IDaliDimmableDriverPropertiesSchema;
// Modified by @realm/babel-plugin
class IDaliDimmableDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliDimmableDriverStateSchema",
    properties: {
      driverState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliDimmableDriverStateSchema = IDaliDimmableDriverStateSchema;
// Modified by @realm/babel-plugin
class IDaliDimmableActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliDimmableActionSchema",
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
exports.IDaliDimmableActionSchema = IDaliDimmableActionSchema;