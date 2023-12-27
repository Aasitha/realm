"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusFavorite_favoriteInfo_devicePropsSchema = exports.IKeusFavorite_favoriteInfoSchema = exports.IKeusFavoriteSchema = exports.IKeusFavoriteHomeInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
const BaseSchemaName = exports.BaseSchemaName = "IKeusFavoriteSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusFavorite_favoriteInfo_devicePropsSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusFavorite_favoriteInfo_devicePropsSchema = IKeusFavorite_favoriteInfo_devicePropsSchema;
class IKeusFavorite_favoriteInfoSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusFavorite_favoriteInfoSchema = IKeusFavorite_favoriteInfoSchema;
class IKeusFavoriteHomeInfoSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusFavoriteHomeInfoSchema = IKeusFavoriteHomeInfoSchema;
class IKeusFavoriteSchema extends Realm.Object {
  static primaryKey = "favoriteId";
}
exports.IKeusFavoriteSchema = IKeusFavoriteSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.197:27017/keus';
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
  }
  static async insertFavorite() {}
  static async updateFavorite() {}
  static async deleteFavorite() {}
  static async fetchFavoriteByFavoriteId() {}
  static async getAllFavorites(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getAllFavoritesAsObjects() {}
  static async getFavoritesByUser() {}
  static async cleanSceneFavorites() {}
  static async cleanScRelayFavorites() {}
  static async getFavoritesByDevice() {}
  static async getFavoritesByRelays() {}
  static async getFavoritesByAppliances() {}
  static async getFavoritesByGMAppliances() {}
  static async getFavoritesByGMGroup() {}
  static async getFavoritesByRemotes() {}
  static async getFavoritesByGroup() {}
  static async getFavoritesByScene() {}
  static async cleanGroupFavorites() {}
  static async cleanDeviceFavorites() {}
  static async cleanIrRemoteFavoritesByParentDeviceId() {}
  static async replaceDeviceFavorites() {}
  static async getGroupFavoritesByRoom() {}
  static async getSceneFavoritesByRoom() {}
  static async getFavoritesByRoom() {}
  static async cleanGMApplianceFavorites() {}
  static async cleanGMGroupFavorites() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusFavoriteSchema, IKeusFavorite_favoriteInfo_devicePropsSchema, IKeusFavorite_favoriteInfoSchema, IKeusFavoriteHomeInfoSchema];