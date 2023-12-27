"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusAreaSchema = exports.IAreaSyncInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusAreaSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
const IAreaSyncInfoSchema = exports.IAreaSyncInfoSchema = {
  name: "IAreaSyncInfoSchema",
  properties: {
    syncStatus: {
      type: "int",
      optional: true
    },
    syncRequestType: {
      type: "int",
      optional: true
    },
    syncRequestId: {
      type: "string",
      optional: true
    },
    syncRequestTime: {
      type: "int",
      optional: true
    },
    syncRequestParams: {
      type: "dictionary",
      optional: true,
      objectType: "mixed"
    }
  },
  embedded: true
};
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
        type: "string",
        optional: true
      },
      areaSyncInfo: {
        type: "object",
        optional: true,
        objectType: "IAreaSyncInfoSchema"
      }
    },
    primaryKey: "areaId"
  };
}
exports.IKeusAreaSchema = IKeusAreaSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.198:27017/keus';
    const dbName = 'brijeshSir';
    const collectionName = 'areas';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
      result.forEach(doc => {
        console.log(doc._id);
        const realmActivity = realm.create(BaseSchemaName, {
          areaId: doc.areaId,
          areaName: doc.areaName,
          areaSyncInfo: doc.areaSyncInfo
        });
        console.log(realmActivity);
      });
    });
  }
  static async getAreaById(realm, areaId) {
    //return realm.objects(BaseSchemaName).filtered('areaId == $0',areaId);
    return realm.objectForPrimaryKey(BaseSchemaName, areaId);
  }
  static async addArea(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        areaId: doc.areaId,
        areaName: doc.areaName,
        areaSyncInfo: doc.areaSyncInfo
      });
      console.log(realmActivity);
    });
  }
  static async getAllAreas(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getAreasByName(realm, areaName) {
    return realm.objects(BaseSchemaName).filtered('areaName == $0', areaName);
  }
  static async updateAreaName(realm, data) {
    return realm.write(() => {
      let area = realm.objectForPrimaryKey(BaseSchemaName, data.areaId);
      area.areaName = data.areaName;
    });
  }
  static async updateAreaSyncState(realm, data) {
    realm.write(() => {
      let area = realm.objectForPrimaryKey(BaseSchemaName, data.areaId);
      area.areaSyncInfo = data.areaSyncState;
    });
  }
  static async deleteAreaById(realm, areaId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, areaId));
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusAreaSchema, IAreaSyncInfoSchema];