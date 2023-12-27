"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserDeviceKeyTypeSchema = exports.authenticateUserDeviceTypeSchema = exports.ModelsList = exports.Methods = exports.IKeusUserDeviceSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusUserDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusUserDeviceSchema extends _realm.default.Object {
  static primaryKey = "deviceKey";
  static schema = {
    name: "IKeusUserDeviceSchema",
    properties: {
      phone: {
        type: "string",
        optional: true
      },
      deviceType: {
        type: "string",
        optional: true
      },
      deviceName: {
        type: "string",
        optional: true
      },
      deviceId: {
        type: "string",
        optional: true
      },
      validity: {
        type: "int",
        optional: true
      },
      remember: {
        type: "bool",
        optional: true
      },
      secretKey: {
        type: "string",
        optional: true
      },
      lastAccessTime: {
        type: "int",
        optional: true
      },
      deviceKey: {
        type: "string",
        optional: true
      },
      servicePhone: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "deviceKey"
  };
}
exports.IKeusUserDeviceSchema = IKeusUserDeviceSchema;
const authenticateUserDeviceTypeSchema = exports.authenticateUserDeviceTypeSchema = {
  name: "authenticateUserDeviceTypeSchema",
  properties: {
    phone: {
      type: "string",
      optional: true
    },
    deviceType: {
      type: "string",
      optional: true
    },
    deviceName: {
      type: "string",
      optional: true
    },
    deviceId: {
      type: "string",
      optional: true
    },
    remember: {
      type: "bool",
      optional: true
    },
    servicePhone: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
const validateUserDeviceKeyTypeSchema = exports.validateUserDeviceKeyTypeSchema = {
  name: "validateUserDeviceKeyTypeSchema",
  properties: {
    deviceKey: {
      type: "string",
      optional: true
    },
    secretKey: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'userdevices';
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
          console.log(doc.deviceKey);
          const realmActivity = realm.create(BaseSchemaName, {
            phone: doc.phone,
            deviceType: doc.deviceType,
            deviceName: doc.deviceName,
            deviceId: doc.deviceId,
            validity: doc.validity,
            remember: doc.remember,
            secretKey: doc.secretKey,
            lastAccessTime: doc.lastAccessTime,
            deviceKey: doc.deviceKey,
            servicePhone: doc.servicePhone
          });
        });
      });
    } catch (e) {}
  }
  static async authenticateUserDevice(realm) {}
  static async getUserDevice(realm, deviceKey) {
    return realm.objectForPrimaryKey(BaseSchemaName, deviceKey);
  }
  static async updateUserDevice(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        phone: doc.phone,
        deviceType: doc.deviceType,
        deviceName: doc.deviceName,
        deviceId: doc.deviceId,
        validity: doc.validity,
        remember: doc.remember,
        secretKey: doc.secretKey,
        lastAccessTime: doc.lastAccessTime,
        deviceKey: doc.deviceKey,
        servicePhone: doc.servicePhone
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async deleteUserDevices(realm, phone) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('phone == $0', phone));
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusUserDeviceSchema, authenticateUserDeviceTypeSchema, validateUserDeviceKeyTypeSchema];