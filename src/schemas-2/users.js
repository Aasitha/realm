"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusUserSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
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
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'users';
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
            phone: doc.phone,
            email: doc.email,
            userName: doc.userName,
            location: doc.location,
            gender: doc.gender,
            dateOfBirth: doc.dateOfBirth,
            emailVerified: doc.emailVerified,
            phoneVerified: doc.phoneVerified,
            homesList: doc.homesList,
            favoriteHome: doc.favoriteHome,
            lastUpdatedTime: doc.lastUpdatedTime,
            roomPreferences: doc.roomPreferences
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertUser(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        phone: doc.phone,
        email: doc.email,
        userName: doc.userName,
        location: doc.location,
        gender: doc.gender,
        dateOfBirth: doc.dateOfBirth,
        emailVerified: doc.emailVerified,
        phoneVerified: doc.phoneVerified,
        homesList: doc.homesList,
        favoriteHome: doc.favoriteHome,
        lastUpdatedTime: doc.lastUpdatedTime,
        roomPreferences: doc.roomPreferences
      });
      console.log(realmActivity);
    });
  }
  static async getUsers(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getAllUsers(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async deleteUserById(realm, phone) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, phone));
    });
  }
  static async getUserByPhone(realm, phone) {
    return realm.objectForPrimaryKey(BaseSchemaName, phone);
  }
  static async updateUser(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        phone: doc.phone,
        email: doc.email,
        userName: doc.userName,
        location: doc.location,
        gender: doc.gender,
        dateOfBirth: doc.dateOfBirth,
        emailVerified: doc.emailVerified,
        phoneVerified: doc.phoneVerified,
        homesList: doc.homesList,
        favoriteHome: doc.favoriteHome,
        lastUpdatedTime: doc.lastUpdatedTime,
        roomPreferences: doc.roomPreferences
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async updateUserRoomPreferences(realm, data) {
    realm.write(() => {
      const user = realm.objectForPrimaryKey(BaseSchemaName, data.phone);
      user.roomPreferences = data.preferences;
    });
  }
  static async updateProfileImage(realm, data) {
    realm.write(() => {
      const user = realm.objectForPrimaryKey(BaseSchemaName, data.phone);
      user.image = data.text;
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusUserSchema];