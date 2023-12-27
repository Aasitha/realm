"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusDMGroupSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusDMGroupSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;

// export class IKeusDMGroupsDeviceInfoSchema extends Realm.Object<IKeusDMGroupsDeviceInfoSchema> {
//     mode: Realm.Types.Int;
//     baseDeviceType?: string;
//     applianceIds?: Realm.Types.List<Realm.Types.Int>
// }

// export class IKeusDMDaliGroupInfoSchema extends Realm.Object<IKeusDMDaliGroupInfoSchema> {
//     daliGroupId: Realm.Types.Int;
// }

// Modified by @realm/babel-plugin
class IKeusDMGroupSchema extends _realm.default.Object {
  static primaryKey = "groupId";
  static schema = {
    name: "IKeusDMGroupSchema",
    properties: {
      groupId: {
        type: "int"
      },
      areaId: {
        type: "int"
      },
      areaGroupId: {
        type: "int"
      },
      isRelayGroup: {
        type: "bool",
        optional: true
      },
      relayId: {
        type: "int",
        optional: true
      },
      relayParent: {
        type: "string",
        optional: true
      },
      daliMasterIds: {
        type: "string",
        optional: true
      },
      devices: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "groupId"
  };
}
exports.IKeusDMGroupSchema = IKeusDMGroupSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'keusdmgroups';
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
          let devicesObj;
          let daliMasterObj;
          console.log(doc.areaGroupId);
          // if (doc.devices)
          //      devicesObj = JSON.stringify(doc.devices);
          // if (doc.daliMasterIds)
          //      daliMasterObj = JSON.stringify(doc.daliMasterIds);

          const realmActivity = realm.create(BaseSchemaName, {
            groupId: doc.groupId,
            areaId: doc.areaId,
            areaGroupId: doc.areaGroupId,
            isRelayGroup: doc.isRelayGroup,
            relayId: doc.relayId,
            relayParent: doc.relayParent
            // daliMasterIds: daliMasterObj,
            // devices: devicesObj
          });
          //console.log(realmActivity)
        });
      });
    } catch (e) {}
  }
  static async getAll(realm) {
    console.log("okay");
    return realm.objects(BaseSchemaName);
  }
  static async insertGroup(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        groupId: doc.groupId,
        areaId: doc.areaId,
        areaGroupId: doc.areaGroupId,
        isRelayGroup: doc.isRelayGroup,
        relayId: doc.relayId,
        relayParent: doc.relayParent
        // daliMasterIds: doc.daliMasterIds,
        // devices: doc.devices
      });

      console.log(realmActivity);
    });
  }
  static async removeGroup(realm, zigbeeGroupId) {
    realm.delete(realm.objectForPrimaryKey(BaseSchemaName, zigbeeGroupId));
  }
  static async updateGroup(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        groupId: doc.groupId,
        areaId: doc.areaId,
        areaGroupId: doc.areaGroupId,
        isRelayGroup: doc.isRelayGroup,
        relayId: doc.relayId,
        relayParent: doc.relayParent,
        daliMasterIds: doc.daliMasterIds,
        devices: doc.devices
      }, _realm.default.UpdateMode.Modified);
      console.log(realmActivity);
    });
  }
  static async getAllGroupIds(realm, type, areaId) {}
  static async getAllDaliGroupIdsForMaster(realm, areaId, daliMasterId) {}
  static async getAllGroupsInfo(realm, areaId) {
    return realm.objects(BaseSchemaName).filtered('areaId == $0', areaId);
  }
  static async getGroupById(realm, groupId) {
    return realm.objects(BaseSchemaName).filtered('groupId == $0', groupId);
  }
  static async checkGroupExistenceById(realm, groupId) {
    let res = realm.objects(BaseSchemaName).filtered('groupId == $0', groupId);
    if (res.length <= 0) {
      return false;
    }
    return true;
  }
  static async cleanDriverGroups(realm, driverList) {
    let groups = realm.objects(BaseSchemaName);
    realm.write(() => {
      groups.forEach(group => {
        group.deviceList = group.deviceList.filter(item => !driverList.includes(item));
      });
    });
  }
  static async getAllGroupsForDevice(realm, deviceId) {}
  static async getGroupIdsForDevice(realm, deviceId) {
    let groupIds = [];
    let dmgroups = realm.objects(BaseSchemaName);
    dmgroups.forEach(dmgroup => {
      let devices = JSON.parse(dmgroup.devices);
      if (devices.has(deviceId)) {
        groupIds.push(dmgroup.groupId);
      }
    });
    return groupIds;
  }
  static async getGroupsByFilterCondition(realm, filterCond) {
    let query = [];
    let values = [];
    let count = 0;
    Object.entries(filterCond).forEach(([field, condition]) => {
      if (typeof condition === "string" || typeof condition === "number") {
        query.push(`${field} == $${count}`);
        count += 1;
        values.push(condition);
      } else if (typeof condition === "object") {
        if ('$in' in condition) {
          query.push(`${field} IN $${count}`);
          count += 1;
          values.push(condition.$in);
        }
        if ('$gte' in condition) {
          query.push(`${field} >= $${count}`);
          count += 1;
          values.push(condition.$gte);
        }
        if ('$gt' in condition) {
          query.push(`${field} > $${count}`);
          count += 1;
          values.push(condition.$gt);
        }
        if ('$lt' in condition) {
          query.push(`${field} < $${count}`);
          count += 1;
          values.push(condition.$lt);
        }
        if ('$lte' in condition) {
          query.push(`${field} <= $${count}`);
          count += 1;
          values.push(condition.$lte);
        }
      }
    });
    let query1 = query.join(' AND ');
    return realm.objects(BaseSchemaName).filtered(query1, ...values);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusDMGroupSchema];
// const conditionsObject = {
//     name: 'John',
//     age: { $gte: 25,$lt:40 },
//     status: { $in: ['active', 'inactive'] },
//     comments: { $elemMatch: { author: 'Alice', content: /great/ } },
//     email: { $exists: true },
//     number: 25
// };
// Methods.getGroupsByFilterCondition(conditionsObject)