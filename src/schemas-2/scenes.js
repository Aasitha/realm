"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.ISceneSyncInfo_syncRequestParamsSchema = exports.ISceneSyncInfoSchema = exports.IKeusSceneTimeslotSchema = exports.IKeusSceneSchema = exports.IKeusSceneActionSchema = exports.IKeusExcuteSceneActionSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema } from "./gm-models/gmappliances";
// import { GMGroupIdentifierSchema } from "./gm-models/gmgroups";
// import { IEmbeddedColorTunableApplianceStateSchema, IEmbeddedOnOffApplianceStateSchema, IEmbeddedSingleDimmerApplianceStateSchema } from "../device-categories/zigbee-embedded-switch";
// import { IRBGSchema, IWWASchema } from "../device-categories/zigbee-rgbwwa-driver";
// import { IZigbeeIRBlasterAction_irBlastActionSchema } from "../device-categories/zigbee-ir-blaster";
const BaseSchemaName = exports.BaseSchemaName = "IKeusSceneSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// export class IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo extends Realm.Object<IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo>{
//     static embedded?: boolean = true;
//     applianceSceneInfo: IKeusSceneActionSchema
//     applianceProtocolControlInfo: "mixed{}"
// }
// export class IKeusGMSceneActionInfoSchema extends Realm.Object<IKeusGMSceneActionInfoSchema> {
//     static embedded?: boolean = true;
//     protocolType?: string;
//     protocolSceneActionControlInfo?: IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo
// }
// export class IKeusAreaSceneActionSchema extends Realm.Object<IKeusAreaSceneActionSchema> {
//     static embedded?: boolean = true;
//     sceneId?: Realm.Types.Int;
//     roomId?: string;
// }
const ISceneSyncInfo_syncRequestParamsSchema = exports.ISceneSyncInfo_syncRequestParamsSchema = {
  name: "ISceneSyncInfo_syncRequestParamsSchema",
  properties: {
    timeslotId: {
      type: "int",
      optional: true
    },
    timeslotDelay: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
const IKeusExcuteSceneActionSchema = exports.IKeusExcuteSceneActionSchema = {
  name: "IKeusExcuteSceneActionSchema",
  properties: {
    sceneId: {
      type: "int",
      optional: true
    },
    sceneRoom: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
const ISceneSyncInfoSchema = exports.ISceneSyncInfoSchema = {
  name: "ISceneSyncInfoSchema",
  properties: {
    syncStatus: {
      type: "int",
      optional: true
    },
    syncRequestId: {
      type: "string",
      optional: true
    },
    syncRequestType: {
      type: "int",
      optional: true
    },
    syncRequestTime: {
      type: "int",
      optional: true
    },
    syncRequestParams: {
      type: "object",
      optional: true,
      objectType: "ISceneSyncInfo_syncRequestParamsSchema"
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
// export class IKeusSceneAction_actionItem_gmapplianceActionSchema extends Realm.Object<IKeusSceneAction_actionItem_gmapplianceActionSchema> {
//     static embedded?: boolean = true;
//     applianceType?: string;
//     applianceIdentifier?: IKeusGMApplianceIdentifierSchema
//     applianceState?: IKeusGMApplianceSavedStateAction_savedStateSchema
// }
// export class IKeusSceneAction_actionItem_gmgroupActionSchema extends Realm.Object<IKeusSceneAction_actionItem_gmgroupActionSchema> {
//     static embedded?: boolean = true;
//     groupType?: string;
//     groupIdentifier?: GMGroupIdentifierSchema
//     groupState?: IKeusGMApplianceSavedStateAction_savedStateSchema
// }
// export class IKeusSceneAction_actionItemSchema extends Realm.Object<IKeusSceneAction_actionItemSchema> {
//     static embedded?: boolean = true;
//     groupId?: Realm.Types.Int;
//     roomId?: string;
//     //driverState:{type:"int",optional:true},
//     driverState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceId?: string;
//     curtainState?: Realm.Types.Int;
//     applianceId?: string;
//     onOffState?: IEmbeddedOnOffApplianceStateSchema
//     singleDimmerState?: IEmbeddedSingleDimmerApplianceStateSchema
//     //fanState:{type:"object",objectType:"IEmbeddedFanApplianceState",optional:true},
//     colorTunableState?: IEmbeddedColorTunableApplianceStateSchema;
//     applianceType?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     fanState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     lightState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     swingState?: Realm.Types.Int;
//     deviceState?: Realm.Types.Int;
//     rgbState?: IRBGSchema
//     wwaState?: IWWASchema
//     relayId?: Realm.Types.Int;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteType?: Realm.Types.Int;
//     irDevice?: string;
//     irBlastAction?: IZigbeeIRBlasterAction_irBlastActionSchema
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;
//     sceneId?: Realm.Types.Int;
//     gmapplianceAction?: IKeusSceneAction_actionItem_gmapplianceActionSchema
//     gmgroupAction?: IKeusSceneAction_actionItem_gmgroupActionSchema;
// }
const IKeusSceneTimeslotSchema = exports.IKeusSceneTimeslotSchema = {
  name: "IKeusSceneTimeslotSchema",
  properties: {
    timeslotId: {
      type: "int",
      optional: true
    },
    timeslotDelay: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
const IKeusSceneActionSchema = exports.IKeusSceneActionSchema = {
  name: "IKeusSceneActionSchema",
  properties: {
    actionId: {
      type: "string",
      optional: true
    },
    zigbeeActionId: {
      type: "int",
      optional: true
    },
    actionType: {
      type: "string",
      optional: true
    },
    timeslotId: {
      type: "int",
      optional: true
    },
    actionItem: {
      type: "string",
      optional: true
    },
    syncStatus: {
      type: "int",
      optional: true
    },
    syncRequestId: {
      type: "string",
      optional: true
    },
    jobTypeName: {
      type: "int",
      optional: true
    },
    jobMessage: {
      type: "string",
      optional: true
    },
    syncRequestTime: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusSceneSchema extends _realm.default.Object {
  static primaryKey = "sceneId";
  static schema = {
    name: "IKeusSceneSchema",
    properties: {
      sceneId: {
        type: "int"
      },
      sceneName: {
        type: "string",
        optional: true
      },
      sceneType: {
        type: "int",
        optional: true
      },
      sceneScope: {
        type: "int",
        optional: true
      },
      sceneExecutionType: {
        type: "int",
        optional: true
      },
      sceneSection: {
        type: "string",
        optional: true
      },
      sceneRoom: {
        type: "string",
        optional: true
      },
      actionList: {
        type: "list",
        objectType: "IKeusSceneActionSchema"
      },
      timeslotList: {
        type: "list",
        objectType: "IKeusSceneTimeslotSchema"
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
      },
      sceneSyncInfo: {
        type: "object",
        optional: true,
        objectType: "ISceneSyncInfoSchema"
      },
      scenePresetType: {
        type: "int",
        optional: true
      }
    },
    primaryKey: "sceneId"
  };
}
exports.IKeusSceneSchema = IKeusSceneSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.198:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'scenes';
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
        doc.actionList.forEach(action => {
          action.actionItem = JSON.stringify(action.actionItem);
        });
        const realmActivity = realm.create(BaseSchemaName, {
          sceneId: doc.sceneId,
          sceneName: doc.sceneName,
          sceneType: doc.sceneType,
          sceneScope: doc.sceneScope,
          sceneExecutionType: doc.sceneExecutionType,
          sceneSection: doc.sceneSection,
          sceneRoom: doc.sceneRoom,
          actionList: doc.actionList,
          timeslotList: doc.timeslotList,
          lastUpdateTime: doc.lastUpdateTime,
          lastUpdateBy: doc.lastUpdateBy,
          lastUpdateUser: doc.lastUpdateUser,
          lastUpdateSource: doc.lastUpdateSource,
          sceneSyncInfo: doc.sceneSyncInfo,
          scenePresetType: doc.scenePresetType
        });
        console.log(realmActivity);
      });
    });
  }
  static async getSceneId(realm, data) {
    return data.sceneRoom + '-' + data.sceneId;
  }
  static async insertScene(realm, doc) {
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        sceneId: doc.sceneId,
        sceneName: doc.sceneName,
        sceneType: doc.sceneType,
        sceneScope: doc.sceneScope,
        sceneExecutionType: doc.sceneExecutionType,
        sceneSection: doc.sceneSection,
        sceneRoom: doc.sceneRoom,
        actionList: doc.actionList,
        timeslotList: doc.timeslotList,
        lastUpdateTime: doc.lastUpdateTime,
        lastUpdateBy: doc.lastUpdateBy,
        lastUpdateUser: doc.lastUpdateUser,
        lastUpdateSource: doc.lastUpdateSource,
        sceneSyncInfo: doc.sceneSyncInfo,
        scenePresetType: doc.scenePresetType
      });
      console.log(realmActivity);
    });
  }
  static async getAllScenes(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getSceneById(realm, data) {
    return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
  }
  static async getScenesByRooms(realm, roomIds) {
    return realm.objects(BaseSchemaName).filtered('sceneRoom IN $0', roomIds);
  }
  static async getSceneByRoomAndType(realm, data) {
    return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneType == $1', data.roomId, data.sceneType);
  }
  static async getSceneByRoomSectionAndType(realm, data) {
    return realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneType == $1 AND sceneSection == $2', data.roomId, data.sceneType, data.sectionId);
  }
  static async updateSceneName(realm, data) {
    realm.write(() => {
      const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
      scene.sceneName = data.sceneName;
    });
  }
  static async updateSceneTimeslotList(realm, data) {
    // const scene=realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1',data.roomId,data.sceneId)[0];
    // for(const key in data.updateObj){
    //     scene
    // }
    const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
    realm.write(() => {
      scene.timeslotList = data.sceneTimeslotList;
      if (data.sceneSyncInfo) {
        scene.sceneSyncInfo = data.sceneSyncInfo;
      }
    });
  }
  static async deleteSceneById(realm, data) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0]);
    });
  }
  static async updateSceneActionList(realm, data) {
    const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
    realm.write(() => {
      scene.actionList = data.actionList;
    });
  }
  static async updateSceneExecution(realm, data) {
    const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
    realm.write(() => {
      scene.lastUpdateTime = data.lastUpdateTime, scene.lastUpdateBy = data.lastUpdateBy, scene.lastUpdateSource = data.lastUpdateSource, scene.lastUpdateUser = data.lastUpdateUser;
    });
  }
  static async updateSceneSyncState(realm, data) {
    const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
    realm.write(() => {
      scene.sceneSyncInfo = data.sceneSyncState;
    });
  }
  static async cleanGroupActionsFromScene(realm, data) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.groupId != data.groupId && actionItem.roomId != data.groupRoom;
        });
      });
    });
  }
  static async cleanDeviceActionsFromScene(realm, pullQuery) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.deviceId != pullQuery.actionItem.deviceId;
        });
      });
    });
  }
  static async cleanIRActionsFromScene(realm, deviceId) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.irDevice != deviceId;
        });
      });
    });
  }
  static async cleanRelayActionsFromScene(realm, data) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.deviceId != data.scDeviceId && !data.relayIds.includes(actionItem.relayId);
        });
      });
    });
  }
  static async cleanRemoteActionsFromScene(realm, remoteId) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.remoteId != remoteId;
        });
      });
    });
  }
  static async cleanGlobalSceneActions(realm, data) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.sceneId !== data.sceneId && actionItem.roomId != data.sceneRoom;
        });
      });
    });
  }
  static async replaceSceneAction(realm) {}
  static async getSceneListByQuery(realm) {}
  static async cleanGMApplianceScenes(realm, applianceIdentifier) {
    const scenes = realm.objects(BaseSchemaName);
    realm.write(() => {
      scenes.forEach(scene => {
        scene.actionList = scene.actionList.filter(action => {
          let actionItem = JSON.parse(action.actionItem);
          return actionItem.applianceIdentifier !== applianceIdentifier;
        });
      });
    });
  }
  static async getScenesWithGMAppliance(realm, applianceIdentifier) {
    return realm.objects(BaseSchemaName).filtered('actionList.actionItem.applianceIdentifier == $0', applianceIdentifier);
  }
  static async getScenesWithGMGroup(realm, groupIdentifier) {
    return realm.objects(BaseSchemaName).filtered('actionList.actionItem.groupIdentifier == $0', groupIdentifier);
  }
  static async getScenesWithGroup(realm, groupId) {
    return realm.objects(BaseSchemaName).filtered('actionList.actionItem.groupId == $0', groupId);
  }
  static async getScenesWithDeviceAndRelay(realm, data) {
    return realm.objects(BaseSchemaName).filtered('actionList.actionItem.deviceId == $0 AND actionList.actionItem.relayId == $1', data.deviceId, data.relayId);
  }
  static async updateScenePresetType(realm, data) {
    const scene = realm.objects(BaseSchemaName).filtered('sceneRoom == $0 AND sceneId== $1', data.roomId, data.sceneId)[0];
    realm.write(() => {
      scene.scenePresetType = data.scenePresetType;
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusSceneSchema,
// IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema,
// GMGroupIdentifierSchema,
// IEmbeddedColorTunableApplianceStateSchema, IEmbeddedOnOffApplianceStateSchema, IEmbeddedSingleDimmerApplianceStateSchema,
// IRBGSchema, IWWASchema,
// IZigbeeIRBlasterAction_irBlastActionSchema,
ISceneSyncInfo_syncRequestParamsSchema,
// IKeusGMSceneActionInfoSchema_protocolSceneActionControlInfo,
// IKeusGMSceneActionInfoSchema,
// IKeusAreaSceneActionSchema,
// IKeusExcuteSceneActionSchema,
ISceneSyncInfoSchema, IKeusSceneTimeslotSchema,
// IKeusSceneAction_actionItem_gmapplianceActionSchema,
// IKeusSceneAction_actionItem_gmgroupActionSchema,
// IKeusSceneAction_actionItemSchema,
IKeusSceneActionSchema];