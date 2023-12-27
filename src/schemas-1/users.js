"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKeusUserSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusUserSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusUserSchema extends _realm.default.Object {
  static primaryKey = "phone";
  static schema = {
    name: "IKeusUserSchema",
    properties: {
      phone: {
        type: "string"
      },
      email: {
        type: "string",
        optional: true
      },
      userName: {
        type: "string",
        optional: true
      },
      location: {
        type: "string",
        optional: true
      },
      gender: {
        type: "string",
        optional: true
      },
      dateOfBirth: {
        type: "mixed",
        optional: true
      },
      emailVerified: {
        type: "bool",
        optional: true
      },
      phoneVerified: {
        type: "bool",
        optional: true
      },
      homesList: {
        type: "string",
        optional: true
      },
      favoriteHome: {
        type: "string",
        optional: true
      },
      lastUpdatedTime: {
        type: "int",
        optional: true
      },
      roomPreferences: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "phone"
  };
}
exports.IKeusUserSchema = IKeusUserSchema;