"use strict";

require("core-js/modules/es.symbol.description.js");
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Modified by @realm/babel-plugin
class Task extends _realm.default.Object {
  constructor(realm, description) {
    super(realm, {
      description
    });
    _defineProperty(this, "isComplete", false);
  }
}
_defineProperty(Task, "primaryKey", "_id");
_defineProperty(Task, "schema", {
  name: "Task",
  properties: {
    _id: {
      type: "objectId",
      default: () => new _realm.default.BSON.ObjectId()
    },
    description: {
      type: "string"
    },
    isComplete: {
      type: "bool",
      default: false
    }
  },
  primaryKey: "_id"
});
