"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusDMAreaSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusDMAreaSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;

//Edit both interface & schema when making changes to device structure
//Device interface for server
// Modified by @realm/babel-plugin
class IKeusDMAreaSchema extends _realm.default.Object {
  static primaryKey = "areaId";
  static schema = {
    name: "IKeusDMAreaSchema",
    properties: {
      areaId: {
        type: "int"
      }
    },
    primaryKey: "areaId"
  };
}
exports.IKeusDMAreaSchema = IKeusDMAreaSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'keusdmareas';
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
          const realmActivity = realm.create(BaseSchemaName, {
            areaId: doc.areaId
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {}
  }
  static async insertArea(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        areaId: doc.areaId
      });
      console.log(realmActivity);
    });
  }
  static async removeArea(realm, areaId) {
    realm.delete(realm.objectForPrimaryKey(BaseSchemaName, areaId));
  }
  static async updateAreaInfo(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        areaId: doc.areaId
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async getAllAreaIds(realm) {
    let areaIds = [];
    const areas = realm.objects(BaseSchemaName);
    areas.forEach(areaObj => {
      areaIds.push(areaObj.areaId);
    });
    return areaIds;
  }
  static async getAllAreasInfo(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getAreaById(realm, areaId) {
    return realm.objectForPrimaryKey(BaseSchemaName, areaId);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDMAreaSchema];