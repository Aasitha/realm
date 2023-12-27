"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusFloorSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusFloorSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusFloorSchema extends _realm.default.Object {
  static primaryKey = "floorId";
  static schema = {
    name: "IKeusFloorSchema",
    properties: {
      floorId: {
        type: "string"
      },
      floorName: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "floorId"
  };
}
exports.IKeusFloorSchema = IKeusFloorSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017/keus';
      const dbName = 'brijeshSir';
      const collectionName = 'floors';
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
            floorId: doc.floorId,
            floorName: doc.floorName
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async addFloor(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        floorId: doc.floorId,
        floorName: doc.floorName
      });
    });
  }
  static async updateFloor(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        floorId: doc.floorId,
        floorName: doc.floorName
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async getFloorById(realm, floorId) {
    return realm.objectForPrimaryKey(BaseSchemaName, floorId);
  }
  static async getFloorsByName(realm, floorName) {
    return realm.objects(BaseSchemaName).filtered('floorName==$0', floorName);
  }
  static async getAllFloors(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async deleteFloorById(realm, floorId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, floorId));
    });
  }
  static async deleteFloorByName(realm, floorName) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('floorName == $0', floorName));
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusFloorSchema];