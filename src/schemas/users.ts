import Realm from "realm";

export const BaseSchemaName = "IKeusUserSchema";
export const BaseSchemaVersion = 1;
export class IKeusUserSchema extends Realm.Object<IKeusUserSchema> {
    static primaryKey = "phone";
    phone!: string;
    email?: string;
    userName?: string;
    location?: string;
    gender?: string;
    dateOfBirth?: Realm.Types.Mixed;
    emailVerified?: Realm.Types.Bool;
    phoneVerified?: Realm.Types.Bool;
    homesList?: string;
    favoriteHome?: string;
    lastUpdatedTime?: Realm.Types.Int;
    roomPreferences?: string;

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'users';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    const realmActivity = realm.create(BaseSchemaName, {
                        phone: doc.phone,
                        email: doc.email,
                        userName: doc.userName,
                        location: doc.location,
                        gender: doc.gender,
                        dateOfBirth: doc.dateOfBirth,
                        emailVerified: doc.emailVerified,
                        phoneVerified: doc.phoneVerified,
                        homesList: doc.homesList,
                        favoriteHome: doc.favoriteHome,
                        lastUpdatedTime: doc.lastUpdatedTime,
                        roomPreferences: doc.roomPreferences
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async insertUser(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                phone: doc.phone,
                email: doc.email,
                userName: doc.userName,
                location: doc.location,
                gender: doc.gender,
                dateOfBirth: doc.dateOfBirth,
                emailVerified: doc.emailVerified,
                phoneVerified: doc.phoneVerified,
                homesList: doc.homesList,
                favoriteHome: doc.favoriteHome,
                lastUpdatedTime: doc.lastUpdatedTime,
                roomPreferences: doc.roomPreferences
            })
            console.log(realmActivity);
        })
    }
    static async getUsers(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async getAllUsers(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async deleteUserById(realm: Realm, phone: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, phone))
        })

    }
    static async getUserByPhone(realm: Realm, phone: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, phone);
    }
    static async updateUser(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                phone: doc.phone,
                email: doc.email,
                userName: doc.userName,
                location: doc.location,
                gender: doc.gender,
                dateOfBirth: doc.dateOfBirth,
                emailVerified: doc.emailVerified,
                phoneVerified: doc.phoneVerified,
                homesList: doc.homesList,
                favoriteHome: doc.favoriteHome,
                lastUpdatedTime: doc.lastUpdatedTime,
                roomPreferences: doc.roomPreferences
            }, Realm.UpdateMode.Modified)
            console.log(realmActivity);
        })
    }
    static async updateUserRoomPreferences(realm: Realm, data: any) {
        realm.write(() => {
            const user = realm.objectForPrimaryKey(BaseSchemaName,data.phone)
            user.roomPreferences = data.preferences
        })
    }
    static async updateProfileImage(realm: Realm, data: any) {
        realm.write(() => {
            const user = realm.objectForPrimaryKey(BaseSchemaName,data.phone)
            user.image = data.text;
        })
    }

}
export const ModelsList = [
    IKeusUserSchema
]
