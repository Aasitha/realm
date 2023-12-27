"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusAreaSchema = exports.IAreaSyncInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusAreaSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IAreaSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAreaSyncInfoSchema",
    properties: {
      syncStatus: {
        type: "int"
      },
      syncRequestType: {
        type: "int"
      },
      syncRequestId: {
        type: "string"
      },
      syncRequestTime: {
        type: "int"
      },
      syncRequestParams: {
        type: "dictionary",
        objectType: "mixed"
      }
    },
    embedded: true
  };
}
exports.IAreaSyncInfoSchema = IAreaSyncInfoSchema;
// Modified by @realm/babel-plugin
class IKeusAreaSchema extends _realm.default.Object {
  static primaryKey = "areaId";
  static schema = {
    name: "IKeusAreaSchema",
    properties: {
      areaId: {
        type: "int"
      },
      areaName: {
        type: "string"
      },
      areaSyncInfo: {
        type: "object",
        objectType: "IAreaSyncInfoSchema"
      }
    },
    primaryKey: "areaId"
  };
}
exports.IKeusAreaSchema = IKeusAreaSchema;
class Methods {
  static async getAreaById() {}
  static async addArea() {}
  static async getAllAreas(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getAreasByName() {}
  static async updateAreaName() {}
  static async updateAreaSyncState() {}
  static async deleteAreaById() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusAreaSchema, IAreaSyncInfoSchema];