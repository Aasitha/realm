"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKeusDeviceSchema = exports.FwHealthSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
// export class fwHealthSubObjectSchema extends Realm.Object<fwHealthSubObjectSchema> {
//     static embedded?: boolean = true
//     status?: Realm.Types.Int
//     timeFromBoot?: Realm.Types.Int
//     lastResetCause?: Realm.Types.Int
//     restartCount?: Realm.Types.Int
//     props: Realm.Types.List<fwHealthSubObjectPropsSchema>
//     restartCountErrorFlag?: Realm.Types.Int
// }
class FwHealthSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "FwHealthSchema",
    properties: {
      fwHealth: {
        type: "list"
      }
    },
    embedded: true
  };
}
exports.FwHealthSchema = FwHealthSchema;
// Modified by @realm/babel-plugin
class IKeusDeviceSchema extends _realm.default.Object {
  static primaryKey = "id";
  static schema = {
    name: "IKeusDeviceSchema",
    properties: {
      id: {
        type: "string"
      },
      healthInfo: {
        type: "list",
        objectType: "FwHealthSchema"
      }
    },
    primaryKey: "id"
  };
}
exports.IKeusDeviceSchema = IKeusDeviceSchema;