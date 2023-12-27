"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDaliNonDimmableDriverStateSchema = exports.IDaliNonDimmableDriverPropertiesSchema = exports.IDaliNonDimmableActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IDaliNonDimmableDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliNonDimmableDriverPropertiesSchema",
    properties: {
      fadeTime: {
        type: "int",
        optional: true
      },
      instantOff: {
        type: "bool",
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
exports.IDaliNonDimmableDriverPropertiesSchema = IDaliNonDimmableDriverPropertiesSchema;
// Modified by @realm/babel-plugin
class IDaliNonDimmableDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliNonDimmableDriverStateSchema",
    properties: {
      driverState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliNonDimmableDriverStateSchema = IDaliNonDimmableDriverStateSchema;
// Modified by @realm/babel-plugin
class IDaliNonDimmableActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliNonDimmableActionSchema",
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
exports.IDaliNonDimmableActionSchema = IDaliNonDimmableActionSchema;