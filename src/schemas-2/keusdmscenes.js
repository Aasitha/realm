"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusDMSceneSchema = exports.IKeusDMGroupType = exports.IKeusDMDeviceType = exports.FetchType = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusDMSceneSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;

//Edit both interface & schema when making changes to device structure
//Device interface for server
let FetchType = exports.FetchType = /*#__PURE__*/function (FetchType) {
  FetchType[FetchType["SCENE_IDS"] = 1] = "SCENE_IDS";
  FetchType[FetchType["AREA_SCENE_IDS"] = 2] = "AREA_SCENE_IDS";
  return FetchType;
}({});
let IKeusDMDeviceType = exports.IKeusDMDeviceType = /*#__PURE__*/function (IKeusDMDeviceType) {
  IKeusDMDeviceType[IKeusDMDeviceType["ZIGBEE_CURTAIN_CONTROLLER"] = 1] = "ZIGBEE_CURTAIN_CONTROLLER";
  IKeusDMDeviceType[IKeusDMDeviceType["ZIGBEE_FAN_CONTROLLER"] = 2] = "ZIGBEE_FAN_CONTROLLER";
  IKeusDMDeviceType[IKeusDMDeviceType["ZIGBEE_DIMMABLE_LED_DRIVER"] = 3] = "ZIGBEE_DIMMABLE_LED_DRIVER";
  IKeusDMDeviceType[IKeusDMDeviceType["DALI_DIMMABLE_LED_DRIVER"] = 4] = "DALI_DIMMABLE_LED_DRIVER";
  IKeusDMDeviceType[IKeusDMDeviceType["SMARTCONSOLE_RELAY"] = 5] = "SMARTCONSOLE_RELAY";
  IKeusDMDeviceType[IKeusDMDeviceType["ZIBGEE_IR_BLASTER"] = 6] = "ZIBGEE_IR_BLASTER";
  IKeusDMDeviceType[IKeusDMDeviceType["EMBEDDED"] = 7] = "EMBEDDED";
  IKeusDMDeviceType[IKeusDMDeviceType["RGBWWA"] = 8] = "RGBWWA";
  return IKeusDMDeviceType;
}({});
let IKeusDMGroupType = exports.IKeusDMGroupType = /*#__PURE__*/function (IKeusDMGroupType) {
  IKeusDMGroupType[IKeusDMGroupType["DALI_DIMMABLE_DRIVER"] = 1] = "DALI_DIMMABLE_DRIVER";
  IKeusDMGroupType[IKeusDMGroupType["ZIGBEE_DIMMABLE_DRIVER"] = 2] = "ZIGBEE_DIMMABLE_DRIVER";
  IKeusDMGroupType[IKeusDMGroupType["EMBEDDED_GROUP"] = 3] = "EMBEDDED_GROUP";
  IKeusDMGroupType[IKeusDMGroupType["RGBWWA_GROUP"] = 4] = "RGBWWA_GROUP";
  return IKeusDMGroupType;
}({});
// Modified by @realm/babel-plugin
class IKeusDMSceneSchema extends _realm.default.Object {
  static primaryKey = "sceneId";
  static schema = {
    name: "IKeusDMSceneSchema",
    properties: {
      sceneId: {
        type: "double"
      },
      areaId: {
        type: "double",
        optional: true
      },
      areaSceneId: {
        type: "double",
        optional: true
      },
      gSceneIdsList: {
        type: "object",
        optional: true,
        objectType: "Array"
      },
      daliMasterIds: {
        type: "string",
        optional: true
      },
      devices: {
        type: "string",
        optional: true
      },
      groups: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "sceneId"
  };
}
exports.IKeusDMSceneSchema = IKeusDMSceneSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'keusdmscenes';
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
          if (doc.daliMasterIds != null) doc.daliMasterIds = JSON.stringify(doc.daliMasterIds);
          if (doc.devices != null) doc.devices = JSON.stringify(doc.devices);
          if (doc.groups != null) doc.groups = JSON.stringify(doc.groups);
          const realmActivity = realm.create(BaseSchemaName, {
            sceneId: doc.sceneId,
            areaId: doc.areaId,
            areaSceneId: doc.areaSceneId,
            gSceneIdsList: doc.gSceneIdsList,
            daliMasterIds: doc.daliMasterIds,
            devices: doc.devices,
            groups: doc.groups
          });
          //console.log(realmActivity)
        });
      });
    } catch (e) {}
  }
  static async insertScene(realm, doc) {
    if (doc.daliMasterIds != null) doc.daliMasterIds = JSON.stringify(doc.daliMasterIds);
    if (doc.devices != null) doc.devices = JSON.stringify(doc.devices);
    if (doc.groups != null) doc.groups = JSON.stringify(doc.groups);
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        sceneId: doc.sceneId,
        areaId: doc.areaId,
        areaSceneId: doc.areaSceneId,
        gSceneIdsList: doc.gSceneIdsList,
        daliMasterIds: doc.daliMasterIds,
        devices: doc.devices,
        groups: doc.groups
      });
      console.log(realmActivity);
    });
  }
  static async removeScene(realm, sceneId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, sceneId));
    });
  }
  static async updateScene(realm, doc) {
    if (doc.daliMasterIds != null) doc.daliMasterIds = JSON.stringify(doc.daliMasterIds);
    if (doc.devices != null) doc.devices = JSON.stringify(doc.devices);
    if (doc.groups != null) doc.groups = JSON.stringify(doc.groups);
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        sceneId: doc.sceneId,
        areaId: doc.areaId,
        areaSceneId: doc.areaSceneId,
        gSceneIdsList: doc.gSceneIdsList,
        daliMasterIds: doc.daliMasterIds,
        devices: doc.devices,
        groups: doc.groups
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async getAllSceneIds(realm, data) {
    let sceneIds = [];
    const dmscenes = realm.objects(BaseSchemaName).filtered('areaId == $0', data.areaId);
    if (data.type == 2) {
      dmscenes.forEach(dmscene => {
        sceneIds.push(dmscene.areaSceneId);
      });
    } else if (data.type == 1) {
      dmscenes.forEach(dmscene => {
        sceneIds.push(dmscene.sceneId);
      });
    }
    return sceneIds;
  }
  static async getAllDaliSceneIdsForMaster(realm, data) {
    let sceneIds = [];
    const dmscenes = realm.objects(BaseSchemaName).filtered('areaId == $0', data.areaId);
    dmscenes.forEach(dmscene => {
      let daliMasterIds = JSON.parse(dmscene.daliMasterIds);
      let daliScenesInfo = daliMasterIds.get(data.daliMasterId);
      if (daliScenesInfo) {
        sceneIds.push(daliScenesInfo.daliSceneId);
      }
    });
    return sceneIds;
  }
  static async getArrayOfSceneIds(realm, sceneIds) {
    return realm.objects(BaseSchemaName).filtered('sceneId IN $0', sceneIds);
  }
  static async getAllScenesInfo(realm, areaId) {
    return realm.objects(BaseSchemaName).filtered('areaId == $0', areaId);
  }
  static async getSceneById(realm, sceneId) {
    return realm.objectForPrimaryKey(BaseSchemaName, sceneId);
  }
  static async getSceneIdsForDevice(realm, deviceId) {
    let sceneIds = [];
    let dmscenes = realm.objects(BaseSchemaName);
    dmscenes.forEach(dmscene => {
      let devices = JSON.parse(dmscene.devices);
      if (devices && devices.has(deviceId)) {
        sceneIds.push(dmscene.sceneId);
      }
    });
    return sceneIds;
  }
  static async getSceneIdsForGroup(realm, groupIdKey) {
    let sceneIds = [];
    let dmscenes = realm.objects(BaseSchemaName);
    dmscenes.forEach(dmscene => {
      let groups = JSON.parse(dmscene.groups);
      if (groups && groups.has(groupIdKey)) {
        sceneIds.push(dmscene.sceneId);
      }
    });
    return sceneIds;
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDMSceneSchema];