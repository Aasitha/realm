"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusFavorite_favoriteInfo_devicePropsSchema = exports.IKeusFavorite_favoriteInfoSchema = exports.IKeusFavoriteSchema = exports.IKeusFavoriteHomeInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusFavoriteSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
const IKeusFavorite_favoriteInfo_devicePropsSchema = exports.IKeusFavorite_favoriteInfo_devicePropsSchema = {
  name: "IKeusFavorite_favoriteInfo_devicePropsSchema",
  properties: {
    relayId: {
      type: "int",
      optional: true
    },
    remoteId: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
const IKeusFavorite_favoriteInfoSchema = exports.IKeusFavorite_favoriteInfoSchema = {
  name: "IKeusFavorite_favoriteInfoSchema",
  properties: {
    favoriteGroupId: {
      type: "int",
      optional: true
    },
    groupId: {
      type: "int",
      optional: true
    },
    sceneId: {
      type: "int",
      optional: true
    },
    favoriteSceneId: {
      type: "int",
      optional: true
    },
    deviceId: {
      type: "string",
      optional: true
    },
    applianceId: {
      type: "string",
      optional: true
    },
    relayId: {
      type: "int",
      optional: true
    },
    remoteId: {
      type: "string",
      optional: true
    },
    deviceType: {
      type: "string",
      optional: true
    },
    deviceProps: {
      type: "object",
      optional: true,
      objectType: "IKeusFavorite_favoriteInfo_devicePropsSchema"
    },
    favoriteGroupRoom: {
      type: "string",
      optional: true
    },
    favoriteSceneRoom: {
      type: "string",
      optional: true
    },
    applianceRoom: {
      type: "string",
      optional: true
    },
    deviceRoom: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
const IKeusFavoriteHomeInfoSchema = exports.IKeusFavoriteHomeInfoSchema = {
  name: "IKeusFavoriteHomeInfoSchema",
  properties: {
    favoriteRoom: {
      type: "string",
      optional: true
    },
    favoriteSection: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusFavoriteSchema extends _realm.default.Object {
  static primaryKey = "favoriteId";
  static schema = {
    name: "IKeusFavoriteSchema",
    properties: {
      favoriteId: {
        type: "string"
      },
      userId: {
        type: "string",
        optional: true
      },
      favoriteCategory: {
        type: "int",
        optional: true
      },
      favoriteType: {
        type: "int",
        optional: true
      },
      favoriteHomeInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusFavoriteHomeInfoSchema"
      },
      favoriteInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusFavorite_favoriteInfoSchema"
      },
      favoriteAddedTime: {
        type: "int",
        optional: true
      }
    },
    primaryKey: "favoriteId"
  };
}
exports.IKeusFavoriteSchema = IKeusFavoriteSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://10.1.4.243:27017/keus';
      const dbName = 'brijeshSir';
      const collectionName = 'favorites';
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
            favoriteId: doc.favoriteId,
            userId: doc.userId,
            favoriteCategory: doc.favoriteCategory,
            favoriteType: doc.favoriteType,
            favoriteHomeInfo: doc.favoriteHomeInfo,
            favoriteInfo: doc.favoriteInfo,
            favoriteAddedTime: doc.favoriteAddedTime
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertFavorite(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        favoriteId: doc.favoriteId,
        userId: doc.userId,
        favoriteCategory: doc.favoriteCategory,
        favoriteType: doc.favoriteType,
        favoriteHomeInfo: doc.favoriteHomeInfo,
        favoriteInfo: doc.favoriteInfo,
        favoriteAddedTime: doc.favoriteAddedTime
      });
    });
  }
  static async updateFavorite(realm, doc) {
    realm.write(() => {
      realm.create(BaseSchemaName, {
        favoriteId: doc.favoriteId,
        userId: doc.userId,
        favoriteCategory: doc.favoriteCategory,
        favoriteType: doc.favoriteType,
        favoriteHomeInfo: doc.favoriteHomeInfo,
        favoriteInfo: doc.favoriteInfo,
        favoriteAddedTime: doc.favoriteAddedTime
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async deleteFavorite(realm, favoriteId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, favoriteId));
    });
  }
  static async fetchFavoriteByFavoriteId(realm, favoriteId) {
    try {
      return realm.objectForPrimaryKey(BaseSchemaName, favoriteId);
    } catch (e) {
      return e;
    }
  }
  static async getAllFavorites(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getAllFavoritesAsObjects(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getFavoritesByUser(realm, userId) {
    return realm.objects(BaseSchemaName).filtered('userId== $0 ', userId);
  }
  static async cleanSceneFavorites(realm, data) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneId == $0 AND favoriteHomeInfo.favoriteRoom == $1', data.sceneId, data.sceneRoom));
    });
  }
  static async cleanScRelayFavorites(realm, scDeviceId) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', scDeviceId));
    });
  }
  static async getFavoritesByDevice(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND userId==$1', data.deviceId, data.userId);
  }
  static async getFavoritesByRelays(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.deviceProps.relayId==$1 AND userId==$2', data.deviceId, data.relayId, data.userId);
  }
  static async getFavoritesByAppliances(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.applianceId== $1 AND userId==$2', data.deviceId, data.applianceId, data.userId);
  }
  static async getFavoritesByGMAppliances(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.applianceId== $0 AND userId== $1', data.applianceId, data.userId);
  }
  static async getFavoritesByGMGroup(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.groupId==$0 AND userId==$1', data.groupId, data.userId);
  }
  static async getFavoritesByRemotes(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.deviceProps.remoteId==$1 AND userId==$2', data.deviceId, data.remoteId, data.userId);
  }
  static async getFavoritesByGroup(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupId==$0 AND favoriteHomeInfo.favoriteRoom==$1 AND userId==$2', data.groupId, data.groupRoom, data.userId);
  }
  static async getFavoritesByScene(realm, data) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneId==$0 AND favoriteHomeInfo.favoriteRoom==$1 AND userId==$2', data.sceneId, data.sceneRoom, data.userId);
  }
  static async cleanGroupFavorites(realm, data) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupId == $0 AND favoriteHomeInfo.favoriteRoom == $1', data.groupId, data.groupRoom));
    });
  }
  static async cleanDeviceFavorites(realm, deviceId) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', deviceId));
    });
  }
  static async cleanIrRemoteFavoritesByParentDeviceId(realm, deviceId) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', deviceId));
    });
  }
  static async replaceDeviceFavorites(realm, data) {
    realm.write(() => {
      const favorites = realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', data.oldDeviceId);
      for (const favorite of favorites) {
        favorite.favoriteInfo["deviceId"] = data.newDeviceId;
      }
    });
  }
  static async getGroupFavoritesByRoom(realm, Room) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupRoom==$0', Room);
  }
  static async getSceneFavoritesByRoom(realm, Room) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneRoom==$0', Room);
  }
  static async getFavoritesByRoom(realm, Room) {
    return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneRoom == $0 OR favoriteInfo.favoriteGroupRoom == $0 OR favoriteInfo.applianceRoom == $0 OR favoriteInfo.deviceRoom == $0', Room);
  }
  static async cleanGMApplianceFavorites(realm, applianceIdentifier) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.applianceId == $0', applianceIdentifier.applianceId));
    });
  }
  static async cleanGMGroupFavorites(realm, groupIdentifier) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.groupId == $0', groupIdentifier.groupId));
    });
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusFavoriteSchema, IKeusFavorite_favoriteInfo_devicePropsSchema, IKeusFavorite_favoriteInfoSchema, IKeusFavoriteHomeInfoSchema];