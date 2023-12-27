"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusGroupSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { IZigbeeDimmableDriverPropertiesSchema, IZigbeeDimmableDriverStateSchema } from "../device-categories/zigbee-dimmable-driver"
// import { IDaliDimmableDriverPropertiesSchema, IDaliDimmableDriverStateSchema } from "../device-categories/dali-dimmable-driver"
// import { IZigbeeNonDimmableDriverPropertiesSchema, IZigbeeNonDimmableDriverStateSchema } from "../device-categories/zigbee-nondimmable-driver"
// import { IDaliNonDimmableDriverPropertiesSchema, IDaliNonDimmableDriverStateSchema } from "../device-categories/dali-nondimmable-driver"
// import { IZigbeeInlineDimmerStateSchema, IZigbeeInlineDimmerPropertiesSchema } from "../device-categories/zigbee-inline-dimmer"
// import { IRBGSchema, IWWASchema, IZigbeeRgbwwaGroupStateSchema, IZigbeeRgbwwaGroupPropertiesSchema } from "../device-categories/zigbee-rgbwwa-driver"
// import { IEmbeddedOnOffApplianceStateSchema, IOnOffApplianceGroupPropertiesSchema, IApplianceidDeviceidDetailsSchema } from "../device-categories/zigbee-embedded-switch"
// import { IEmbeddedSingleDimmerApplianceStateSchema, ISingleDimmerApplianceGroupPropertiesSchema } from "../device-categories/zigbee-embedded-switch"
// import { IEmbeddedFanApplianceStateSchema, IFanApplianceGroupPropertiesSchema } from "../device-categories/zigbee-embedded-switch"
// import { IEmbeddedColorTunableApplianceStateSchema, IColorTunableApplianceGroupPropertiesSchema } from "../device-categories/zigbee-embedded-switch"
// import { IDaliColorTunableDriverStateSchema, IDaliColorTunableDriverGroupPropertiesSchema } from "../device-categories/dali-color-tunable-driver"
const BaseSchemaName = exports.BaseSchemaName = "IKeusGroupSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// export class IGroupSyncStateSchema extends Realm.Object<IGroupSyncStateSchema>{
//     static embedded?: boolean = true;
//     syncState?: Realm.Types.Int;
//     lastRequestId?: string;
//     lastRequestType?: Realm.Types.Int;
//     lastRequestParameters?: Realm.Types.Dictionary<Realm.Types.Mixed>;
//     lastRequestTime?: Realm.Types.Int;
//     syncedDevices: Realm.Types.List<string>;
//     jobTypeName?: Realm.Types.Int;
//     jobMessage?: string;
// }

// export enum groupTypeMap {
//     ZIGBEE_DIMMABLE = 0,
//     DALI_DIMMABLE = 1,
//     ZIGBEE_NON_DIMMABLE = 2,
//     DALI_NON_DIMMABLE = 3,
//     ZIGBEE_INLINE = 4,
//     RGBWWA = 5,
//     APPLIANCE_ON_OFF = 6,
//     APPLIANCE_SINGLE_DIMMER = 7,
//     APPLIANCE_FAN = 8,
//     APPLIANCE_COLOR_TUNABLE = 9,
//     DALI_COLOR_TUNABLE = 10,
// }
// export const IKeusGroup_groupStateMap = {
//     0: "iZigbeeDimmableDriverState",
//     1: "iDaliDimmableDriverState",
//     2: "iZigbeeNonDimmableDriverState",
//     3: "iDaliNonDimmableDriverState",
//     4: "iZigbeeInlineDimmerState",
//     5: "iZigbeeRgbwwaGroupState",
//     6: "iEmbeddedOnOffApplianceState",
//     7: "iEmbeddedSingleDimmerApplianceState",
//     8: "iEmbeddedFanApplianceState",
//     9: "iEmbeddedColorTunableApplianceState",
//     10: "iDaliColorTunableDriverState"
// }
// export class IKeusGroup_groupStateSchema extends Realm.Object<IKeusGroup_groupStateSchema>{
//     static embedded?: boolean = true;
//     T0?: IZigbeeDimmableDriverStateSchema;
//     T1?: IDaliDimmableDriverStateSchema
//     T2?: IZigbeeNonDimmableDriverStateSchema
//     T3?: IDaliNonDimmableDriverStateSchema
//     T4?: IZigbeeInlineDimmerStateSchema
//     T5?: IZigbeeRgbwwaGroupStateSchema
//     T6?: IEmbeddedOnOffApplianceStateSchema
//     T7?: IEmbeddedSingleDimmerApplianceStateSchema
//     T8?: IEmbeddedFanApplianceStateSchema
//     T9?: IEmbeddedColorTunableApplianceStateSchema
//     T10: IDaliColorTunableDriverStateSchema
// }
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
// export const IKeusGroup_groupPropertiesMap = {
//     0: "iZigbeeDimmableDriverProperties",
//     1: "iDaliDimmableDriverProperties",
//     2: "iZigbeeNonDimmableDriverProperties",
//     3: "iDaliNonDimmableDriverProperties",
//     4: "iZigbeeInlineDimmerProperties",
//     5: "iZigbeeRgbwwaGroupProperties",
//     6: "iOnOffApplianceGroupProperties",
//     7: "iSingleDimmerApplianceGroupProperties",
//     8: "iFanApplianceGroupProperties",
//     9: "iColorTunableApplianceGroupProperties",
//     10: "iDaliColorTunableDriverGroupProperties"
// }
// export class IKeusGroup_groupPropertiesSchema extends Realm.Object<IKeusGroup_groupPropertiesSchema>{

//     T0?: IZigbeeDimmableDriverPropertiesSchema;
//     T1?: IDaliDimmableDriverPropertiesSchema;
//     T2?: IZigbeeNonDimmableDriverPropertiesSchema;
//     T3?: IDaliNonDimmableDriverPropertiesSchema;
//     T4?: IZigbeeInlineDimmerPropertiesSchema;
//     T5?: IZigbeeRgbwwaGroupPropertiesSchema;
//     T6?: IOnOffApplianceGroupPropertiesSchema;
//     T7?: ISingleDimmerApplianceGroupPropertiesSchema;
//     T8?: IFanApplianceGroupPropertiesSchema
//     T9?: IColorTunableApplianceGroupPropertiesSchema;
//     T10?: IDaliColorTunableDriverGroupPropertiesSchema;
//     static embedded?: boolean = true;
// }
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
// Modified by @realm/babel-plugin
class IKeusGroupSchema extends _realm.default.Object {
  static schema = {
    name: "IKeusGroupSchema",
    properties: {
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
        type: "string",
        optional: true
      },
      groupProperties: {
        type: "string",
        optional: true
      },
      groupSyncState: {
        type: "string",
        optional: true
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
    const uri = 'mongodb://192.168.0.198:27017';
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
        if (doc.groupState != null) {
          doc.groupState = JSON.stringify(doc.groupState);
        }
        if (doc.groupProperties != null) {
          doc.groupProperties = JSON.stringify(doc.groupProperties);
        }
        if (doc.groupSyncState != null) {
          doc.groupSyncState = JSON.stringify(doc.groupSyncState);
        }
        const realmActivity = realm.create(BaseSchemaName, {
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
          groupState: doc.groupState,
          groupProperties: doc.groupProperties,
          groupSyncState: doc.groupSyncState,
          lastUpdateTime: doc.lastUpdateTime,
          lastUpdateBy: doc.lastUpdateBy,
          lastUpdateUser: doc.lastUpdateUser,
          lastUpdateSource: doc.lastUpdateSource
        });
      });
    });
  }
  static async getGroupId(realm, data) {
    return data.groupRoom + '-' + data.groupId;
  }
  static async addGroup(realm, doc) {
    // console.log(doc._id)

    if (doc.groupState != null) {
      doc.groupState = JSON.stringify(doc.groupState);
    }
    if (doc.groupProperties != null) {
      doc.groupProperties = JSON.stringify(doc.groupProperties);
    }
    if (doc.groupSyncState != null) {
      doc.groupSyncState = JSON.stringify(doc.groupSyncState);
    }
    realm.write(() => {
      realm.create(BaseSchemaName, {
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
        groupState: doc.groupState,
        groupProperties: doc.groupProperties,
        groupSyncState: doc.groupSyncState,
        lastUpdateTime: doc.lastUpdateTime,
        lastUpdateBy: doc.lastUpdateBy,
        lastUpdateUser: doc.lastUpdateUser,
        lastUpdateSource: doc.lastUpdateSource
      });
    });
  }
  static async getAllGroups(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getGroupById(realm, data) {
    return realm.objects(BaseSchemaName).filtered('groupRoom==$0 AND groupId==$1', data.roomId, data.groupId)[0];
  }
  static async getGroupsByRooms(realm, roomIds) {
    // const query = roomIds.map((roomId: any) => `groupRoom == '${roomId}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`${query}`);
    return realm.objects(BaseSchemaName).filtered('groupRoom IN $0', roomIds);
  }
  static async deleteGroupById(realm, data) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId));
    });
  }
  static async updateGroupDeviceList(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.deviceList = data.deviceList;
    });
  }
  static async configureGroupProperties(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupProperties = JSON.stringify(data.groupProperties);
      group.isConfigured = true;
      group.isHidden = data.isHidden;
    });
  }
  static async changeGroupName(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupName = data.groupName;
      group.groupVoiceName = data.groupVoiceName;
    });
  }
  static async updateGroupState(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupState = JSON.stringify(data.groupState);
    });
  }
  static async updateGroupStateAndSource(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupState = JSON.stringify(data.groupState);
      group.lastUpdateTime = data.lastUpdateTime;
      group.lastUpdateBy = data.lastUpdateBy;
      group.lastUpdateUser = data.lastUpdateUser;
      group.lastUpdateSource = data.lastUpdateSource;
    });
  }
  static async cleanDriverGroups(realm, driverList) {
    const groups = realm.objects(BaseSchemaName);
    realm.write(() => {
      groups.forEach(group => {
        group.deviceList = group.deviceList.filter(device => {
          return !driverList.includes(device);
        });
      });
    });
  }
  static async cleanEmbeddedApplianceGroups(realm, deviceId) {
    let groups = realm.objects(BaseSchemaName);
    realm.write(() => {
      groups.forEach(group => {
        let groupProperties = JSON.stringify(group.groupProperties);
        group.deviceList = group.deviceList.filter(device => {
          return device.deviceId != deviceId;
        });
      });
    });
  }
  static async updateGroupSyncState(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupSyncState = JSON.stringify(data.groupSyncState);
    });
  }
  static async bulkWrite(realm, operationList) {
    operationList.forEach(operation => {
      let group = realm.objects(BaseSchemaName).filtered('groupId == $0 AND groupRoom == $1', operation.updateOne.filter.groupId, operation.updateOne.filter.groupRoom);
      realm.write(() => {
        Object.keys(operation.updateOne.update.$set).forEach(field => {
          let value = operation.updateOne.update.$set[field];
          if ((field == "groupState" || field == "groupProperties" || field == "groupSyncState") && value != null) {
            group[field] = JSON.stringify(value);
          } else {
            group[field] = value;
          }
        });
      });
    });
  }
  static async replaceGroupDeviceList(realm) {}
  static async updateGroupIcon(realm, data) {
    realm.write(() => {
      let group = realm.objects(BaseSchemaName).filtered('groupRoom == $0 AND groupId== $1', data.roomId, data.groupId)[0];
      group.groupIconType = data.iconType;
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGroupSchema];