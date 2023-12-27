"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IActivitySourceInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusActivity";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IActivitySourceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IActivitySourceInfoSchema",
    properties: {
      lastUpdateTime: {
        type: "int"
      },
      lastUpdatedBy: {
        type: "string"
      },
      lastUpdateUser: {
        type: "string"
      },
      lastUpdateSource: {
        type: "string"
      }
    },
    embedded: true
  };
}
exports.IActivitySourceInfoSchema = IActivitySourceInfoSchema;