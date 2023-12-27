"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusSectionSchema = exports.IKeusRoomSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusRoomSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
const IKeusSectionSchema = exports.IKeusSectionSchema = {
  name: "IKeusSectionSchema",
  properties: {
    sectionId: {
      type: "string",
      optional: true
    },
    sectionName: {
      type: "string",
      optional: true
    },
    zigbeeSectionId: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusRoomSchema extends _realm.default.Object {
  static primaryKey = "roomId";
  static schema = {
    name: "IKeusRoomSchema",
    properties: {
      roomId: {
        type: "string"
      },
      roomName: {
        type: "string",
        optional: true
      },
      roomType: {
        type: "string",
        optional: true
      },
      roomImageType: {
        type: "int",
        optional: true
      },
      floorId: {
        type: "string",
        optional: true
      },
      areaId: {
        type: "int",
        optional: true
      },
      gatewayId: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "roomId"
  };
}
exports.IKeusRoomSchema = IKeusRoomSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'rooms';
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
            roomId: doc.roomId,
            roomName: doc.roomName,
            roomType: doc.roomType,
            roomImageType: doc.roomImageType,
            floorId: doc.floorId,
            areaId: doc.areaId,
            sectionList: doc.sectionList,
            gatewayId: doc.gatewayId
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async getAllRooms(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getRoomsByFloor(realm, floorId) {
    return realm.objects(BaseSchemaName).filtered(`floorId=="${floorId}"`);
  }
  static async getRoomsByArea(realm, areaId) {
    return realm.objects(BaseSchemaName).filtered(`areaId==${areaId}`);
  }
  static async addRoom(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        roomId: doc.roomId,
        roomName: doc.roomName,
        roomType: doc.roomType,
        roomImageType: doc.roomImageType,
        floorId: doc.floorId,
        areaId: doc.areaId,
        sectionList: doc.sectionList,
        gatewayId: doc.gatewayId
      });
    });
  }
  static async getRoomById(realm, roomId) {
    return realm.objectForPrimaryKey(BaseSchemaName, roomId);
  }
  static async getRoomsInSameArea(realm, roomId) {
    const room = realm.objectForPrimaryKey(BaseSchemaName, roomId);
    return realm.objects(BaseSchemaName).filtered('areaId == $0', room.areaId);
  }
  static async deleteRoomById(realm, roomId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, roomId));
    });
  }
  static async updateRoom(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        roomId: doc.roomId,
        roomName: doc.roomName,
        roomType: doc.roomType,
        roomImageType: doc.roomImageType,
        floorId: doc.floorId,
        areaId: doc.areaId,
        sectionList: doc.sectionList,
        gatewayId: doc.gatewayId
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async updateRoomName(realm, data) {
    realm.write(() => {
      const room = realm.objectForPrimaryKey(BaseSchemaName, data.roomId);
      room.roomName = data.roomName;
    });
  }
  static async getRoomsByName(realm, roomName) {
    return realm.objects(BaseSchemaName).filtered(`roomName=="${roomName}"`);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusRoomSchema, IKeusSectionSchema];