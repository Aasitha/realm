import Realm from "realm";

export const BaseSchemaName = "IKeusFavoriteSchema";
export const BaseSchemaVersion = 1;
export class IKeusFavorite_favoriteInfo_devicePropsSchema extends Realm.Object<IKeusFavorite_favoriteInfo_devicePropsSchema> {
    static embedded?: boolean = true;
    relayId?: Realm.Types.Int;
    remoteId?: string;

}
export class IKeusFavorite_favoriteInfoSchema extends Realm.Object<IKeusFavorite_favoriteInfoSchema> {
    static embedded?: boolean = true;
    favoriteGroupId?: Realm.Types.Int;
    groupId?: Realm.Types.Int;
    sceneId?: Realm.Types.Int;
    favoriteSceneId?: Realm.Types.Int;
    deviceId?: string;
    applianceId?: string;
    relayId?: Realm.Types.Int;
    remoteId?: string;
    deviceType?: string;
    deviceProps?: IKeusFavorite_favoriteInfo_devicePropsSchema;
    favoriteGroupRoom?: string;
    favoriteSceneRoom?: string;
    applianceRoom?:string;
    deviceRoom?:string
}
export class IKeusFavoriteHomeInfoSchema extends Realm.Object<IKeusFavoriteHomeInfoSchema> {
    static embedded?: boolean = true;
    favoriteRoom?: string;
    favoriteSection?: string;

}
export class IKeusFavoriteSchema extends Realm.Object<IKeusFavoriteSchema> {
    static primaryKey = "favoriteId";
    favoriteId!: string;
    userId?: string;
    favoriteCategory?: Realm.Types.Int;
    favoriteType?: Realm.Types.Int;
    favoriteHomeInfo?: IKeusFavoriteHomeInfoSchema
    favoriteInfo?: IKeusFavorite_favoriteInfoSchema
    favoriteAddedTime?: Realm.Types.Int;


}

export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://10.1.4.243:27017/keus';
            const dbName = 'brijeshSir';
            const collectionName = 'favorites';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    const realmActivity = realm.create(BaseSchemaName, {
                        favoriteId: doc.favoriteId,
                        userId: doc.userId,
                        favoriteCategory: doc.favoriteCategory,
                        favoriteType: doc.favoriteType,
                        favoriteHomeInfo: doc.favoriteHomeInfo,
                        favoriteInfo: doc.favoriteInfo,
                        favoriteAddedTime: doc.favoriteAddedTime
                    })
                    console.log(realmActivity)
                })
            })
        } catch (e) {
            return e;
        }


    }
    static async insertFavorite(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                favoriteId: doc.favoriteId,
                userId: doc.userId,
                favoriteCategory: doc.favoriteCategory,
                favoriteType: doc.favoriteType,
                favoriteHomeInfo: doc.favoriteHomeInfo,
                favoriteInfo: doc.favoriteInfo,
                favoriteAddedTime: doc.favoriteAddedTime
            })
        })
    }
    static async updateFavorite(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                favoriteId: doc.favoriteId,
                userId: doc.userId,
                favoriteCategory: doc.favoriteCategory,
                favoriteType: doc.favoriteType,
                favoriteHomeInfo: doc.favoriteHomeInfo,
                favoriteInfo: doc.favoriteInfo,
                favoriteAddedTime: doc.favoriteAddedTime
            }, Realm.UpdateMode.Modified)
        })
    }
    static async deleteFavorite(realm: Realm, favoriteId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName,favoriteId));
        })
    }
    static async fetchFavoriteByFavoriteId(realm: Realm, favoriteId: string) {
        try {
            return realm.objectForPrimaryKey(BaseSchemaName,favoriteId);
        } catch (e) {
            return e;
        }

    }
    static async getAllFavorites(realm: Realm) {
        return realm.objects(BaseSchemaName).toJSON();
    }
    static async getAllFavoritesAsObjects(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async getFavoritesByUser(realm: Realm, userId: string) {
        return realm.objects(BaseSchemaName).filtered('userId== $0 ',userId);
    }
    static async cleanSceneFavorites(realm: Realm, data: any) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneId == $0 AND favoriteHomeInfo.favoriteRoom == $1', data.sceneId, data.sceneRoom))
        })
    }
    static async cleanScRelayFavorites(realm: Realm, scDeviceId: string) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', scDeviceId))
        })
    }
    static async getFavoritesByDevice(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND userId==$1', data.deviceId, data.userId);
    }
    static async getFavoritesByRelays(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.deviceProps.relayId==$1 AND userId==$2', data.deviceId, data.relayId, data.userId)
    }
    static async getFavoritesByAppliances(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.applianceId== $1 AND userId==$2', data.deviceId, data.applianceId, data.userId);
    }
    static async getFavoritesByGMAppliances(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.applianceId== $0 AND userId== $1', data.applianceId, data.userId);
    }
    static async getFavoritesByGMGroup(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.groupId==$0 AND userId==$1', data.groupId, data.userId)
    }
    static async getFavoritesByRemotes(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId==$0 AND favoriteInfo.deviceProps.remoteId==$1 AND userId==$2', data.deviceId, data.remoteId, data.userId);
    }
    static async getFavoritesByGroup(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupId==$0 AND favoriteHomeInfo.favoriteRoom==$1 AND userId==$2', data.groupId, data.groupRoom, data.userId);
    }
    static async getFavoritesByScene(realm: Realm, data: any) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneId==$0 AND favoriteHomeInfo.favoriteRoom==$1 AND userId==$2', data.sceneId, data.sceneRoom, data.userId);
    }
    static async cleanGroupFavorites(realm: Realm, data: any) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupId == $0 AND favoriteHomeInfo.favoriteRoom == $1', data.groupId, data.groupRoom));
        })
    }
    static async cleanDeviceFavorites(realm: Realm, deviceId: string) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', deviceId))
        })
    }
    static async cleanIrRemoteFavoritesByParentDeviceId(realm: Realm, deviceId: string) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', deviceId));
        })
    }
    static async replaceDeviceFavorites(realm: Realm, data: any) {
        realm.write(() => {
            const favorites = realm.objects(BaseSchemaName).filtered('favoriteInfo.deviceId == $0', data.oldDeviceId);
            for (const favorite of favorites) {
                favorite.favoriteInfo["deviceId"] = data.newDeviceId
            }
        })
    }
    static async getGroupFavoritesByRoom(realm: Realm, Room: string) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteGroupRoom==$0', Room)
    }
    static async getSceneFavoritesByRoom(realm: Realm, Room: string) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneRoom==$0', Room)
    }
    static async getFavoritesByRoom(realm: Realm, Room: string) {
        return realm.objects(BaseSchemaName).filtered('favoriteInfo.favoriteSceneRoom == $0 OR favoriteInfo.favoriteGroupRoom == $0 OR favoriteInfo.applianceRoom == $0 OR favoriteInfo.deviceRoom == $0', Room);
    }
    static async cleanGMApplianceFavorites(realm: Realm, applianceIdentifier: any) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.applianceId == $0', applianceIdentifier.applianceId));
        })
    }
    static async cleanGMGroupFavorites(realm: Realm, groupIdentifier: any) {
        realm.write(() => {
            realm.delete(realm.objects(BaseSchemaName).filtered('favoriteInfo.groupId == $0', groupIdentifier.groupId));
        })
    }
}

export const ModelsList = [IKeusFavoriteSchema, IKeusFavorite_favoriteInfo_devicePropsSchema, IKeusFavorite_favoriteInfoSchema, IKeusFavoriteHomeInfoSchema];
