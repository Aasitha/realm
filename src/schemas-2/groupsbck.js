"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupTypeMap = exports.ModelsList = exports.Methods = exports.IKeusGroup_groupStateSchema = exports.IKeusGroup_groupStateMap = exports.IKeusGroup_groupPropertiesSchema = exports.IKeusGroup_groupPropertiesMap = exports.IKeusGroupSchema = exports.IGroupSyncStateSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _zigbeeDimmableDriver = require("../device-categories/zigbee-dimmable-driver");
var _daliDimmableDriver = require("../device-categories/dali-dimmable-driver");
var _zigbeeNondimmableDriver = require("../device-categories/zigbee-nondimmable-driver");
var _daliNondimmableDriver = require("../device-categories/dali-nondimmable-driver");
var _zigbeeInlineDimmer = require("../device-categories/zigbee-inline-dimmer");
var _zigbeeRgbwwaDriver = require("../device-categories/zigbee-rgbwwa-driver");
var _zigbeeEmbeddedSwitch = require("../device-categories/zigbee-embedded-switch");
var _daliColorTunableDriver = require("../device-categories/dali-color-tunable-driver");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGroupSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IGroupSyncStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IGroupSyncStateSchema",
    properties: {
      syncState: {
        type: "int",
        optional: true
      },
      lastRequestId: {
        type: "string",
        optional: true
      },
      lastRequestType: {
        type: "int",
        optional: true
      },
      lastRequestParameters: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      lastRequestTime: {
        type: "int",
        optional: true
      },
      syncedDevices: {
        type: "list",
        objectType: "string"
      },
      jobTypeName: {
        type: "int",
        optional: true
      },
      jobMessage: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IGroupSyncStateSchema = IGroupSyncStateSchema;
let groupTypeMap = exports.groupTypeMap = /*#__PURE__*/function (groupTypeMap) {
  groupTypeMap[groupTypeMap["ZIGBEE_DIMMABLE"] = 0] = "ZIGBEE_DIMMABLE";
  groupTypeMap[groupTypeMap["DALI_DIMMABLE"] = 1] = "DALI_DIMMABLE";
  groupTypeMap[groupTypeMap["ZIGBEE_NON_DIMMABLE"] = 2] = "ZIGBEE_NON_DIMMABLE";
  groupTypeMap[groupTypeMap["DALI_NON_DIMMABLE"] = 3] = "DALI_NON_DIMMABLE";
  groupTypeMap[groupTypeMap["ZIGBEE_INLINE"] = 4] = "ZIGBEE_INLINE";
  groupTypeMap[groupTypeMap["RGBWWA"] = 5] = "RGBWWA";
  groupTypeMap[groupTypeMap["APPLIANCE_ON_OFF"] = 6] = "APPLIANCE_ON_OFF";
  groupTypeMap[groupTypeMap["APPLIANCE_SINGLE_DIMMER"] = 7] = "APPLIANCE_SINGLE_DIMMER";
  groupTypeMap[groupTypeMap["APPLIANCE_FAN"] = 8] = "APPLIANCE_FAN";
  groupTypeMap[groupTypeMap["APPLIANCE_COLOR_TUNABLE"] = 9] = "APPLIANCE_COLOR_TUNABLE";
  groupTypeMap[groupTypeMap["DALI_COLOR_TUNABLE"] = 10] = "DALI_COLOR_TUNABLE";
  return groupTypeMap;
}({});
const IKeusGroup_groupStateMap = exports.IKeusGroup_groupStateMap = {
  0: "iZigbeeDimmableDriverState",
  1: "iDaliDimmableDriverState",
  2: "iZigbeeNonDimmableDriverState",
  3: "iDaliNonDimmableDriverState",
  4: "iZigbeeInlineDimmerState",
  5: "iZigbeeRgbwwaGroupState",
  6: "iEmbeddedOnOffApplianceState",
  7: "iEmbeddedSingleDimmerApplianceState",
  8: "iEmbeddedFanApplianceState",
  9: "iEmbeddedColorTunableApplianceState",
  10: "iDaliColorTunableDriverState"
};
// Modified by @realm/babel-plugin
class IKeusGroup_groupStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGroup_groupStateSchema",
    properties: {
      0:{
        type:"object",
        objectType:"IZigbeeDimmableDriverStateSchema",
        optional:true
      },
      1:{
        type:"object",
        objectType:"IDaliDimmableDriverStateSchema",
        optional:true
      },
      2:{
        type:"object",
        objectType:"IZigbeeNonDimmableDriverStateSchema",
        optional:true
      },
      3:{
        type:"object",
        objectType:"IDaliNonDimmableDriverStateSchema",
        optional:true
      },
      4:{
        type:"object",
        objectType:"IZigbeeInlineDimmerStateSchema",
        optional:true
      },
      5:{
        type:"object",
        objectType:"IZigbeeRgbwwaGroupStateSchema",
        optional:true
      },
      6:{
        type:"object",
        objectType:"IEmbeddedOnOffApplianceStateSchema",
        optional:true
      },
      7:{
        type:"object",
        objectType:"IEmbeddedSingleDimmerApplianceStateSchema",
        optional:true
      },
      8:{
        type:"object",
        objectType:"IEmbeddedFanApplianceStateSchema",
        optional:true
      },
      9:{
        type:"object",
        objectType:"IEmbeddedColorTunableApplianceStateSchema",
        optional:true
      },
      10:{
        type:"object",
        objectType:"IDaliColorTunableDriverStateSchema",
        optional:true
      }
    },
    embedded: true
  };
}
// export const IKeusGroup_groupStateSchema = {
//     name: "IKeusGroup_groupState",
//     embedded: true,
//     properties: {
//         0: { type: "IZigbeeDimmableDriverState", optional: true },
//         1: { type: "IDaliDimmableDriverState", optional: true },
//         2: { type: "IZigbeeNonDimmableDriverState", optional: true },
//         3: { type: "IDaliNonDimmableDriverState", optional: true },
//         4: { type: "IZigbeeInlineDimmerState", optional: true },
//         5: { type: "IZigbeeRgbwwaGroupState", optional: true },
//         6: { type: "IEmbeddedOnOffApplianceState", optional: true },
//         7: { type: "IEmbeddedSingleDimmerApplianceState", optional: true },
//         8: { type: "IEmbeddedFanApplianceState", optional: true },
//         9: { type: "IEmbeddedColorTunableApplianceState", optional: true },
//         10: { type: "IDaliColorTunableDriverState", optional: true }
//     }
// }
exports.IKeusGroup_groupStateSchema = IKeusGroup_groupStateSchema;
const IKeusGroup_groupPropertiesMap = exports.IKeusGroup_groupPropertiesMap = {
  0: "iZigbeeDimmableDriverProperties",
  1: "iDaliDimmableDriverProperties",
  2: "iZigbeeNonDimmableDriverProperties",
  3: "iDaliNonDimmableDriverProperties",
  4: "iZigbeeInlineDimmerProperties",
  5: "iZigbeeRgbwwaGroupProperties",
  6: "iOnOffApplianceGroupProperties",
  7: "iSingleDimmerApplianceGroupProperties",
  8: "iFanApplianceGroupProperties",
  9: "iColorTunableApplianceGroupProperties",
  10: "iDaliColorTunableDriverGroupProperties"
};
// Modified by @realm/babel-plugin
class IKeusGroup_groupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGroup_groupPropertiesSchema",
    properties: {
      0:{
        type:"object",
        objectType:"IZigbeeDimmableDriverPropertiesSchema",
        optional:true
      },
      1:{
        type:"object",
        objectType:"IDaliDimmableDriverPropertiesSchema",
        optional:true
      },
      2:{
        type:"object",
        objectType:"IZigbeeNonDimmableDriverPropertiesSchema",
        optional:true
      },
      3:{
        type:"object",
        objectType:"IDaliNonDimmableDriverPropertiesSchema",
        optional:true
      },
      4:{
        type:"object",
        objectType:"IZigbeeInlineDimmerPropertiesSchema",
        optional:true
      },
      5:{
        type:"object",
        objectType:"IZigbeeRgbwwaGroupPropertiesSchema",
        optional:true
      },
      6:{
        type:"object",
        objectType:"IOnOffApplianceGroupPropertiesSchema",
        optional:true
      },
      7:{
        type:"object",
        objectType:"ISingleDimmerApplianceGroupPropertiesSchema",
        optional:true
      },
      8:{
        type:"object",
        objectType:"IFanApplianceGroupPropertiesSchema",
        optional:true
      },
      9:{
        type:"object",
        objectType:"IColorTunableApplianceGroupPropertiesSchema",
        optional:true
      },
      10:{
        type:"object",
        objectType:"IDaliColorTunableDriverGroupPropertiesSchema",
        optional:true
      }
    },
    embedded: true
  };
}
// export const IKeusGroup_groupPropertiesSchema = {
//     name: "IKeusGroup_groupProperties",
//     embedded: true,
//     properties: {
//         0: { type: "IZigbeeDimmableDriverProperties", optional: true },
//         1: { type: "IDaliDimmableDriverProperties", optional: true },
//         2: { type: "IZigbeeNonDimmableDriverProperties", optional: true },
//         3: { type: "IDaliNonDimmableDriverProperties", optional: true },
//         4: { type: "IZigbeeInlineDimmerProperties", optional: true },
//         5: { type: "IZigbeeRgbwwaGroupProperties", optional: true },
//         6: { type: "IOnOffApplianceGroupProperties", optional: true },
//         7: { type: "ISingleDimmerApplianceGroupProperties", optional: true },
//         8: { type: "IFanApplianceGroupProperties", optional: true },
//         9: { type: "IColorTunableApplianceGroupProperties", optional: true },
//         10: { type: "IDaliColorTunableDriverGroupProperties", optional: true }
//     }
// }
exports.IKeusGroup_groupPropertiesSchema = IKeusGroup_groupPropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusGroupSchema extends _realm.default.Object {
  static schema = {
    name: "IKeusGroupSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
      groupId: {
        type: "int"
      },
      groupName: {
        type: "string",
        optional: true
      },
      groupRoom: {
        type: "string",
        optional: true
      },
      groupSection: {
        type: "string",
        optional: true
      },
      groupType: {
        type: "int",
        optional: true
      },
      groupIconType: {
        type: "int",
        optional: true
      },
      isHighPower: {
        type: "bool",
        optional: true
      },
      isConfigured: {
        type: "bool",
        optional: true
      },
      isHidden: {
        type: "bool",
        optional: true
      },
      groupVoiceName: {
        type: "string",
        optional: true
      },
      deviceList: {
        type: "list",
        objectType: "string"
      },
      groupState: {
        type: "object",
        optional: true,
        objectType: "IKeusGroup_groupStateSchema"
      },
      groupProperties: {
        type: "object",
        optional: true,
        objectType: "IKeusGroup_groupPropertiesSchema"
      },
      groupSyncState: {
        type: "object",
        optional: true,
        objectType: "IGroupSyncStateSchema"
      },
      lastUpdateTime: {
        type: "int",
        optional: true
      },
      lastUpdateBy: {
        type: "string",
        optional: true
      },
      lastUpdateUser: {
        type: "string",
        optional: true
      },
      lastUpdateSource: {
        type: "string",
        optional: true
      }
    }
  };
}
// export const IKeusGroupSchema = {
//     name: "IKeusGroup",
//     properties: {
//         transformOptions: "mixed[]",
//         transformValues: "mixed[]",
//         groupId: "int",
//         groupName: { type: "string", optional: true },
//         groupRoom: { type: "string", optional: true },
//         groupSection: { type: "string", optional: true },
//         groupType: { type: "int", optional: true },
//         groupIconType: { type: "int", optional: true },
//         isHighPower: { type: "bool", optional: true },
//         isConfigured: { type: "bool", optional: true },
//         isHidden: { type: "bool", optional: true },
//         groupVoiceName: { type: "string", optional: true },
//         deviceList: "string[]",
//         groupState: { type: "IKeusGroup_groupState", optional: true },
//         groupProperties: { type: "IKeusGroup_groupProperties", optional: true },
//         groupSyncState: { type: "IGroupSyncState", optional: true },
//         lastUpdateTime: { type: "int", optionl: true },
//         lastUpdateBy: { type: "string", optional: true },
//         lastUpdateUser: { type: "string", optional: true },
//         lastUpdateSource: { type: "string", optional: true },
//     }

// }
exports.IKeusGroupSchema = IKeusGroupSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.113:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'groups';
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
        let groupTransformOptions = ["groupState", "groupProperties"];
        console.log(groupTransformOptions);
        let transformValues = ["groupType", "groupType"];
        const realmActivity = realm.create(BaseSchemaName, {
          transformValues: transformValues,
          transformOptions: groupTransformOptions,
          groupId: doc.groupId,
          groupName: doc.groupName,
          groupRoom: doc.groupRoom,
          groupSection: doc.groupSection,
          groupType: doc.groupType,
          groupIconType: doc.groupIconType,
          isHighPower: doc.isHighPower,
          isConfigured: doc.isConfigured,
          isHidden: doc.isHidden,
          groupVoiceName: doc.groupVoiceName,
          deviceList: doc.deviceList,
          groupState: {
            [doc.groupType]: doc.groupState
          },
          groupProperties: {
            [doc.groupType]: doc.groupProperties
          },
          groupSyncState: doc.groupSyncState,
          lastUpdateTime: doc.lastUpdateTime,
          lastUpdateBy: doc.lastUpdateBy,
          lastUpdateUser: doc.lastUpdateUser,
          lastUpdateSource: doc.lastUpdateSource
        });
        console.log(realmActivity);
      });
    });
  }
  static async getGroupId(realm, data) {
    return data.groupRoom + '-' + data.groupId;
  }
  static async addGroup() {}
  static async getAllGroups(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getGroupById(realm, data) {
    return realm.objects(BaseSchemaName).filtered('groupRoom==$0 AND groupId==$1', data.roomId, data.groupId);
  }
  static async getGroupsByRooms(realm, roomIds) {
    // const query = roomIds.map((roomId: any) => `groupRoom == '${roomId}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`${query}`);
    return realm.objects(BaseSchemaName).filtered('groupRoom IN $0', roomIds);
  }
  static async deleteGroupById() {}
  static async updateGroupDeviceList() {}
  static async configureGroupProperties() {}
  static async changeGroupName() {}
  static async updateGroupState() {}
  static async updateGroupStateAndSource() {}
  static async cleanDriverGroups() {}
  static async cleanEmbeddedApplianceGroups() {}
  static async updateGroupSyncState() {}
  static async bulkWrite() {}
  static async replaceGroupDeviceList() {}
  static async updateGroupIcon() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGroupSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverPropertiesSchema, _zigbeeDimmableDriver.IZigbeeDimmableDriverStateSchema, _daliDimmableDriver.IDaliDimmableDriverPropertiesSchema, _daliDimmableDriver.IDaliDimmableDriverStateSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverPropertiesSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableDriverStateSchema, _daliNondimmableDriver.IDaliNonDimmableDriverPropertiesSchema, _daliNondimmableDriver.IDaliNonDimmableDriverStateSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerStateSchema, _zigbeeInlineDimmer.IZigbeeInlineDimmerPropertiesSchema, _zigbeeRgbwwaDriver.IRBGSchema, _zigbeeRgbwwaDriver.IWWASchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaGroupStateSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaGroupPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedOnOffApplianceStateSchema, _zigbeeEmbeddedSwitch.IOnOffApplianceGroupPropertiesSchema, _zigbeeEmbeddedSwitch.IApplianceidDeviceidDetailsSchema, _zigbeeEmbeddedSwitch.IEmbeddedSingleDimmerApplianceStateSchema, _zigbeeEmbeddedSwitch.ISingleDimmerApplianceGroupPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedFanApplianceStateSchema, _zigbeeEmbeddedSwitch.IFanApplianceGroupPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedColorTunableApplianceStateSchema, _zigbeeEmbeddedSwitch.IColorTunableApplianceGroupPropertiesSchema, _daliColorTunableDriver.IDaliColorTunableDriverStateSchema, _daliColorTunableDriver.IDaliColorTunableDriverGroupPropertiesSchema, IGroupSyncStateSchema, IKeusGroup_groupStateSchema, IKeusGroup_groupPropertiesSchema];