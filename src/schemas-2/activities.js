"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusActivitySchema = exports.IActivitySourceInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusActivitySchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// export class activityAction_deviceAction extends Realm.Object<activityAction_deviceAction>{
//     applianceId?: string;
//     applianceName?: string;
//     applianceState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     applianceType?: Realm.Types.Int;
//     relayId?: Realm.Types.Int;
//     relayName?: string;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteName?: string;
//     remoteType?: Realm.Types.Int;
//     blast_info?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     driverState?: Realm.Types.Int;
//     curtainState?: Realm.Types.Int;
//     notificationsEnabled?: boolean
//     fanState?: Realm.Types.Int;
//     lightState?: Realm.Types.Int;
//     swingState?: Realm.Types.Int;
//     lightTemperature?: Realm.Types.Int;
//     colorTemperature?: Realm.Types.Int;
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;
//     static embedded?: boolean = true;
// }
// export class IKeusActivitySchema_activityAction extends Realm.Object<IKeusActivitySchema_activityAction>{
//     applianceId?: string;
//     applianceName?: string;
//     applianceState?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     applianceType?: Realm.Types.Int;
//     relayId?: Realm.Types.Int;
//     relayName?: string;
//     relayState?: Realm.Types.Int;
//     remoteId?: string;
//     remoteName?: string;
//     remoteType?: Realm.Types.Int;
//     blast_info?: Realm.Types.Dictionary<Realm.Types.Mixed>
//     deviceState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;
//     updateType?: Realm.Types.Int;
//     driverState?: Realm.Types.Int;
//     curtainState?: Realm.Types.Int;
//     notificationsEnabled?: boolean
//     fanState?: Realm.Types.Int;
//     lightState?: Realm.Types.Int;
//     swingState?: Realm.Types.Int;
//     lightTemperature?: Realm.Types.Int;
//     colorTemperature?: Realm.Types.Int;
//     switchState?: Realm.Types.Int;
//     warmWhiteState?: Realm.Types.Int;
//     coolWhiteState?: Realm.Types.Int;
//     deviceId?: string;
//     deviceCategory?: string;
//     deviceName?: string;
//     deviceSection?: string;
//     deviceRoom?: string;
//     deviceRoomName?: string;
//     deviceSectionName?: string;
//     deviceArea?: Realm.Types.Int;
//     deviceAction?: activityAction_deviceAction;
//     sceneId?: Realm.Types.Int;
//     sceneName?: string;
//     sceneType?: Realm.Types.Int;
//     sceneSection?: string;
//     sceneRoom?: string;
//     sceneRoomName?: string;
//     sceneArea?: Realm.Types.Int;
//     sceneSectionName?: string;
//     scenePresetType?: Realm.Types.Int;
//     groupId?: Realm.Types.Int;
//     groupState?: Realm.Types.Dictionary<Realm.Types.Mixed>;
//     groupName?: string;
//     groupRoom?: string;
//     groupRoomName?: string;
//     groupSectionName?: string;
//     groupSection?: string;
//     groupType?: Realm.Types.Int;
//     groupArea?: Realm.Types.Int;
//     static embedded?: boolean = true;
// }
// export class IKeusActivityGroupStateObjectSchema extends Realm.Object<IKeusActivityGroupStateObjectSchema> {
//     driverState?: Realm.Types.Int;
//     red?: Realm.Types.Int;
//     green?: Realm.Types.Int;
//     blue?: Realm.Types.Int;
//     warmWhite?: Realm.Types.Int;
//     coolWhite?: Realm.Types.Int;
//     amber?: Realm.Types.Int;
//     pattern?: Realm.Types.Int;
//     static embedded?: boolean = true;
// }
const IActivitySourceInfoSchema = exports.IActivitySourceInfoSchema = {
  name: "IActivitySourceInfoSchema",
  properties: {
    lastUpdateTime: {
      type: "int",
      optional: true
    },
    lastUpdatedBy: {
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
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusActivitySchema extends _realm.default.Object {
  // activityState?: object
  // activityProperties?: object
  // blast_info_processing?:Realm.Types.Bool;
  // applianceState_processing?:Realm.Types.Bool;
  // deviceAction_processing?:Realm.Types.Bool;
  // groupState_processing?:Realm.Types.Bool;
  static primaryKey = "activityId";
  static schema = {
    name: "IKeusActivitySchema",
    properties: {
      activityId: {
        type: "string"
      },
      activitySourceInfo: {
        type: "object",
        optional: true,
        objectType: "IActivitySourceInfoSchema"
      },
      activityGMType: {
        type: "string",
        optional: true
      },
      activityIdentifier: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      activitySource: {
        type: "string",
        optional: true
      },
      activityBy: {
        type: "string",
        optional: true
      },
      activityUsername: {
        type: "string",
        optional: true
      },
      activityTime: {
        type: "int",
        optional: true
      },
      activityType: {
        type: "int",
        optional: true
      },
      activityAction: {
        type: "string",
        optional: true
      },
      processing: {
        type: "bool",
        optional: true
      }
    },
    primaryKey: "activityId"
  };
}
exports.IKeusActivitySchema = IKeusActivitySchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'activities';
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
          //console.log(doc._id)
          if (doc.activityAction != null) {
            // if(doc.activityAction.blast_info != null){

            //     doc.activityAction.blast_info=JSON.stringify(doc.activityAction.blast_info)
            //     // console.log(doc.activityAction.blast_info)
            //     // console.log(typeof doc.activityAction.blast_info)
            //     doc.blast_info_processing=true
            //     doc.processing=true

            // }
            // if(doc.activityAction.applianceState !=null){
            //     doc.activityAction.applianceState=JSON.stringify(doc.activityAction.applianceState)
            //     // console.log(doc.activityAction.applianceState)
            //     // console.log(typeof doc.activityAction.applianceState)
            //     doc.applianceState_processing=true
            //     doc.processing=true
            // }
            // if(doc.activityAction.deviceAction != null){
            //     doc.activityAction.deviceAction=JSON.stringify(doc.activityAction.deviceAction)
            //     // console.log(doc.activityAction.deviceAction)
            //     // console.log(typeof doc.activityAction.deviceAction)
            //     doc.deviceAction_processing=true
            //     doc.processing=true
            // }
            // if(doc.activityAction.groupState != null){
            //     doc.activityAction.groupState=JSON.stringify(doc.activityAction.groupState)
            //     // console.log(doc.activityAction.groupState)
            //     // console.log(typeof doc.activityAction.groupState)
            //     doc.groupState_processing=true
            //     doc.processing=true
            // }
            doc.activityAction = JSON.stringify(doc.activityAction);
            doc.processing = true;
            //console.log(doc.processing)
          }

          const realmActivity = realm.create(BaseSchemaName, {
            activityId: doc.activityId,
            activitySourceInfo: doc.activitySourceInfo,
            activityGMType: doc.activityGMType,
            activityIdentifier: doc.activityIdentifier,
            activitySource: doc.activitySource,
            activityBy: doc.activityBy,
            activityUsername: doc.activityUsername,
            activityTime: doc.activityTime,
            activityType: doc.activityType,
            activityAction: doc.activityAction,
            processing: doc.processing
          });
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertActivity(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        activityId: doc.activityId,
        activitySourceInfo: doc.activitySourceInfo,
        activityGMType: doc.activityGMType,
        activityIdentifier: doc.activityIdentifier,
        activitySource: doc.activitySource,
        activityBy: doc.activityBy,
        activityUsername: doc.activityUsername,
        activityTime: doc.activityTime,
        activityType: doc.activityType,
        activityAction: doc.activityAction
      });
    });
  }
  static async getAllActivity(realm) {
    console.time('Execution time');
    const startMemoryUsage = process.memoryUsage().heapUsed;
    const res = realm.objects(BaseSchemaName);
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

    // End execution time
    //console.log(res[0].activityId)
    //let actualResult=[]
    // for(let i=0;i<res.length;i++){
    //     actualResult.push({
    //         activityId: res[i].activityId,
    //         activitySourceInfo: res[i].activitySourceInfo,
    //         activityGMType: res[i].activityGMType,
    //         activityIdentifier: res[i].activityIdentifier,
    //         activitySource: res[i].activitySource,
    //         activityBy: res[i].activityBy,
    //         activityUsername: res[i].activityUsername,
    //         activityTime: res[i].activityTime,
    //         activityType: res[i].activityType,
    //         activityAction: JSON.parse(JSON.stringify(res[i].activityAction))
    //     })
    // }
    console.timeEnd('Execution time');
    // var size=Buffer.from(JSON.stringify(res)).length
    // const messageSizeMB = size / (1024 * 1024);
    // console.log(messageSizeMB)
    //console.log(actualResult[0])
    //let act=actualResult[0]
    return res;
  }
  static async getTopNActivity(realm, n) {
    return realm.objects(BaseSchemaName).sorted('activityTime', true).slice(0, n);
  }
  static async deleteAllActivity(realm) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName));
    });
  }
  static async updateActivity(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        activityId: doc.activityId,
        activitySourceInfo: doc.activitySourceInfo,
        activityGMType: doc.activityGMType,
        activityIdentifier: doc.activityIdentifier,
        activitySource: doc.activitySource,
        activityBy: doc.activityBy,
        activityUsername: doc.activityUsername,
        activityTime: doc.activityTime,
        activityType: doc.activityType,
        activityAction: doc.activityAction
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async getTopNActivityInTimeRange(realm, startTime, endTime, numberOfEntries) {
    return realm.objects(BaseSchemaName).filtered('activityTime >= $0 AND activityTime < $1').sorted('activityTime', true).slice(0, numberOfEntries);
  }
  static async getTopNActivityForGuests(realm, n, rooms) {
    return realm.objects(BaseSchemaName).filtered('activityAction.deviceRoom IN $0 OR activityAction.groupRoom IN $0 OR activityAction.sceneRoom IN $0', rooms).sorted('activityTime', true).slice(0, n);
  }
  static async getActivityByGMApplinacetype(realm, gmapplinaceTypes) {
    return realm.objects(BaseSchemaName).filtered('activityGMType IN $0', gmapplinaceTypes);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusActivitySchema, IActivitySourceInfoSchema];