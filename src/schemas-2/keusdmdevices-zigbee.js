"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusDMZigbeeDeviceSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusDMZigbeeDeviceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusDMZigbeeDeviceSchema extends _realm.default.Object {
  static primaryKey = "deviceId";
  static schema = {
    name: "IKeusDMZigbeeDeviceSchema",
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
      shortAddr: {
        type: "int",
        optional: true
      },
      deviceType: {
        type: "int",
        optional: true
      },
      deviceCategory: {
        type: "int",
        optional: true
      },
      firmwareVersion: {
        type: "int",
        optional: true
      },
      registeredTimestamp: {
        type: "int",
        optional: true
      },
      lastSentMsg: {
        type: "int",
        optional: true
      },
      lastReceivedMsg: {
        type: "int",
        optional: true
      },
      areaId: {
        type: "int",
        optional: true
      },
      isAreaServer: {
        type: "bool",
        optional: true
      },
      areaMemberAddr: {
        type: "int",
        optional: true
      },
      isDaliMaster: {
        type: "bool",
        optional: true
      },
      isFactoryNew: {
        type: "bool",
        optional: true
      },
      thirdPartyDevice: {
        type: "bool",
        optional: true
      },
      deviceProperties: {
        type: "string",
        optional: true
      },
      fwInfo: {
        type: "string",
        optional: true
      },
      fwHealth: {
        type: "string",
        optional: true
      },
      factoryInfo: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "deviceId"
  };
}
exports.IKeusDMZigbeeDeviceSchema = IKeusDMZigbeeDeviceSchema;
class Methods {
  static async importgatewayData(realm) {
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
        baseDeviceType: "ZD"
      }).toArray();
      realm.write(() => {
        result.forEach(doc => {
          if (doc.deviceProperties != null) doc.deviceProperties = JSON.stringify(doc.deviceProperties);
          if (doc.fwInfo != null) {
            doc.fwInfo = JSON.stringify(doc.fwInfo);
          }
          if (doc.fwHealth != null) doc.fwHealth = JSON.stringify(doc.fwHealth);
          if (doc.factoryInfo != null) {
            doc.factoryInfo = JSON.stringify(doc.factoryInfo);
          }
          const realmActivity = realm.create(BaseSchemaName, {
            deviceId: doc.deviceId,
            minigatewayId: doc.minigatewayId,
            baseDeviceType: doc.baseDeviceType,
            shortAddr: doc.shortAddr,
            deviceType: doc.deviceType,
            deviceCategory: doc.deviceCategory,
            firmwareVersion: doc.firmwareVersion,
            registeredTimestamp: doc.registeredTimestamp,
            lastSentMsg: doc.lastSentMsg,
            lastReceivedMsg: doc.lastReceivedMsg,
            areaId: doc.areaId,
            isAreaServer: doc.isAreaServer,
            areaMemberAddr: doc.areaMemberAddr,
            isDaliMaster: doc.isDaliMaster,
            isFactoryNew: doc.isFactoryNew,
            thirdPartyDevice: doc.thirdPartyDevice,
            deviceProperties: doc.deviceProperties,
            fwInfo: doc.fwInfo,
            fwHealth: doc.fwHealth,
            factoryInfo: doc.factoryInfo
          });
          //console.log(realmActivity)
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertDevice(realm, doc) {
    if (doc.deviceProperties != null) doc.deviceProperties = JSON.stringify(doc.deviceProperties);
    if (doc.fwInfo != null) {
      doc.fwInfo = JSON.stringify(doc.fwInfo);
    }
    if (doc.fwHealth != null) doc.fwHealth = JSON.stringify(doc.fwHealth);
    if (doc.factoryInfo != null) {
      doc.factoryInfo = JSON.stringify(doc.factoryInfo);
    }
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        deviceId: doc.deviceId,
        minigatewayId: doc.minigatewayId,
        baseDeviceType: doc.baseDeviceType,
        shortAddr: doc.shortAddr,
        deviceType: doc.deviceType,
        deviceCategory: doc.deviceCategory,
        firmwareVersion: doc.firmwareVersion,
        registeredTimestamp: doc.registeredTimestamp,
        lastSentMsg: doc.lastSentMsg,
        lastReceivedMsg: doc.lastReceivedMsg,
        areaId: doc.areaId,
        isAreaServer: doc.isAreaServer,
        areaMemberAddr: doc.areaMemberAddr,
        isDaliMaster: doc.isDaliMaster,
        isFactoryNew: doc.isFactoryNew,
        thirdPartyDevice: doc.thirdPartyDevice,
        deviceProperties: doc.deviceProperties,
        fwInfo: doc.fwInfo,
        fwHealth: doc.fwHealth,
        factoryInfo: doc.factoryInfo
      });
      console.log(realmActivity);
    });
  }
  static async removeDevice(realm, deviceId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, deviceId));
    });
  }
  static async updateDeviceInfo(realm, doc) {
    if (doc.deviceProperties != null) doc.deviceProperties = JSON.stringify(doc.deviceProperties);
    if (doc.fwInfo != null) {
      doc.fwInfo = JSON.stringify(doc.fwInfo);
    }
    if (doc.fwHealth != null) doc.fwHealth = JSON.stringify(doc.fwHealth);
    if (doc.factoryInfo != null) {
      doc.factoryInfo = JSON.stringify(doc.factoryInfo);
    }
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        deviceId: doc.deviceId,
        minigatewayId: doc.minigatewayId,
        baseDeviceType: doc.baseDeviceType,
        shortAddr: doc.shortAddr,
        deviceType: doc.deviceType,
        deviceCategory: doc.deviceCategory,
        firmwareVersion: doc.firmwareVersion,
        registeredTimestamp: doc.registeredTimestamp,
        lastSentMsg: doc.lastSentMsg,
        lastReceivedMsg: doc.lastReceivedMsg,
        areaId: doc.areaId,
        isAreaServer: doc.isAreaServer,
        areaMemberAddr: doc.areaMemberAddr,
        isDaliMaster: doc.isDaliMaster,
        isFactoryNew: doc.isFactoryNew,
        thirdPartyDevice: doc.thirdPartyDevice,
        deviceProperties: doc.deviceProperties,
        fwInfo: doc.fwInfo,
        fwHealth: doc.fwHealth,
        factoryInfo: doc.factoryInfo
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async getAllDevices(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getDeviceById(realm, deviceId) {
    return realm.objectForPrimaryKey(BaseSchemaName, deviceId);
  }
  static async checkDeviceExistsById(realm, deviceId) {
    const res = realm.objectForPrimaryKey(BaseSchemaName, deviceId);
    if (res) return true;else throw new Error('Device Not Found');
  }
  static async getDeviceByIds(realm, deviceIds) {
    return realm.objects(BaseSchemaName).filtered('deviceId IN $0', deviceIds);
  }
  static async getAreaMemberIds(realm, areaId) {}
  static async getAreaServerInfo(realm, areaId) {
    const dalizigbeedevices = realm.objects(BaseSchemaName).filtered('areaId == $0 AND isAreaServer == $1', areaId, true);
    if (dalizigbeedevices.length === 0) return null;else return dalizigbeedevices[0];
  }
  static async getDeviceByShortAddr(realm, shortAddr) {
    const dalizigbeedevices = realm.objects(BaseSchemaName).filtered('shortAddr == $0', shortAddr);
    if (!dalizigbeedevices || !dalizigbeedevices.length) {
      throw new Error('Device Not Found');
    }
    return dalizigbeedevices[0];
  }
  static async getDeviceByAreaMemberAddr(realm, data) {
    const dalizigbeedevices = realm.objects(BaseSchemaName).filtered('areaId == $0 AND areaMemberAddr == $1', data.areaId, data.areaMemberAddr);
    if (!dalizigbeedevices || !dalizigbeedevices.length) {
      return null;
    }
    return dalizigbeedevices[0];
  }
  static async getDevicesByFilterCondition(realm, filterCond) {
    return realm.objects(BaseSchemaName).filtered(filterCond);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDMZigbeeDeviceSchema];