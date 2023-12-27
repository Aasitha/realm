"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusDMDeviceDaliSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusDMDeviceDali";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusDMDeviceDaliSchema extends _realm.default.Object {
  static primaryKey = "deviceId";

  //if deviceType is MASK(=255)
  static schema = {
    name: "IKeusDMDeviceDaliSchema",
    properties: {
      deviceId: {
        type: "string"
      },
      minigatewayId: {
        type: "string",
        optional: true
      },
      baseDeviceType: {
        type: "string",
        optional: true
      },
      zigbeeBridgeId: {
        type: "string",
        optional: true
      },
      shortAddr: {
        type: "int",
        optional: true
      },
      longAddr: {
        type: "int",
        optional: true
      },
      minVal: {
        type: "int",
        optional: true
      },
      maxVal: {
        type: "int",
        optional: true
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeRate: {
        type: "int",
        optional: true
      },
      deviceType: {
        type: "int",
        optional: true
      },
      powerOnLevel: {
        type: "int",
        optional: true
      },
      powerFailLevel: {
        type: "int",
        optional: true
      },
      colourType: {
        type: "int",
        optional: true
      },
      deviceTypeArray: {
        type: "list",
        objectType: "int"
      },
      minTemp: {
        type: "int",
        optional: true
      },
      maxTemp: {
        type: "int",
        optional: true
      },
      uniqueId: {
        type: "string",
        optional: true
      },
      deviceStatus: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusDMDeviceDaliSchema = IKeusDMDeviceDaliSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.101:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'keusdmdevices';
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const result = await collection.find({
        baseDeviceType: "DD"
      }).toArray();
      realm.write(() => {
        result.forEach(doc => {
          const realmActivity = realm.create(BaseSchemaName, {
            deviceId: doc.deviceId,
            minigatewayId: doc.minigatewayId,
            baseDeviceType: doc.baseDeviceType,
            zigbeeBridgeId: doc.zigbeeBridgeId,
            shortAddr: doc.shortAddr,
            longAddr: doc.longAddr,
            minVal: doc.minVal,
            maxVal: doc.maxVal,
            fadeTime: doc.fadeTime,
            fadeRate: doc.fadeRate,
            deviceType: doc.deviceType,
            powerOnLevel: doc.powerOnLevel,
            powerFailLevel: doc.powerFailLevel,
            colourType: doc.colourType,
            deviceTypeArray: doc.deviceTypeArray,
            minTemp: doc.minTemp,
            maxTemp: doc.maxTemp,
            uniqueId: doc.uniqueId,
            deviceStatus: doc.deviceStatus
          });
          //console.log(realmActivity)
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertDevice(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        deviceId: doc.deviceId,
        minigatewayId: doc.minigatewayId,
        baseDeviceType: doc.baseDeviceType,
        zigbeeBridgeId: doc.zigbeeBridgeId,
        shortAddr: doc.shortAddr,
        longAddr: doc.longAddr,
        minVal: doc.minVal,
        maxVal: doc.maxVal,
        fadeTime: doc.fadeTime,
        fadeRate: doc.fadeRate,
        deviceType: doc.deviceType,
        powerOnLevel: doc.powerOnLevel,
        powerFailLevel: doc.powerFailLevel,
        colourType: doc.colourType,
        deviceTypeArray: doc.deviceTypeArray,
        minTemp: doc.minTemp,
        maxTemp: doc.maxTemp,
        uniqueId: doc.uniqueId,
        deviceStatus: doc.deviceStatus
      });
      console.log(realmActivity);
    });
  }
  static async removeDevice(realm, deviceId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, deviceId));
    });
  }
  static async removeAllDevices(realm, daliMasterId) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('zigbeeBridgeId == $0', daliMasterId));
    });
  }
  static async updateDeviceInfo(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        deviceId: doc.deviceId,
        minigatewayId: doc.minigatewayId,
        baseDeviceType: doc.baseDeviceType,
        zigbeeBridgeId: doc.zigbeeBridgeId,
        shortAddr: doc.shortAddr,
        longAddr: doc.longAddr,
        minVal: doc.minVal,
        maxVal: doc.maxVal,
        fadeTime: doc.fadeTime,
        fadeRate: doc.fadeRate,
        deviceType: doc.deviceType,
        powerOnLevel: doc.powerOnLevel,
        powerFailLevel: doc.powerFailLevel,
        colourType: doc.colourType,
        deviceTypeArray: doc.deviceTypeArray,
        minTemp: doc.minTemp,
        maxTemp: doc.maxTemp,
        uniqueId: doc.uniqueId,
        deviceStatus: doc.deviceStatus
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getAllChildrenOfBridge(realm, deviceId) {}
  static async getDeviceById(realm, deviceId) {
    return realm.objects(BaseSchemaName).filtered('zigbeeBridgeId == $0', deviceId);
  }
  static async getDevicesByFilterCondition(realm, filterCond) {
    return realm.objects(BaseSchemaName).filtered(filterCond);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDMDeviceDaliSchema];