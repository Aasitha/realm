import Realm from 'realm';
export const BaseSchemaName = "IKeusRoomSchema";
export const BaseSchemaVersion = 1;
export class IKeusSectionSchema extends Realm.Object<IKeusSectionSchema> {
    static embedded?: boolean = true;
    sectionId?: string
    sectionName?: string
    zigbeeSectionId?: Realm.Types.Int

}
export class IKeusRoomSchema extends Realm.Object<IKeusRoomSchema> {
    static primaryKey = "roomId";

    roomId: string;
    roomName?: string
    roomType?: string
    roomImageType?: Realm.Types.Int
    floorId?: string
    areaId?: Realm.Types.Int
    sectionList?: IKeusSectionSchema[]
    gatewayId?: string

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'rooms';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    const realmActivity = realm.create(BaseSchemaName, {
                        roomId: doc.roomId,
                        roomName: doc.roomName,
                        roomType: doc.roomType,
                        roomImageType: doc.roomImageType,
                        floorId: doc.floorId,
                        areaId: doc.areaId,
                        sectionList: doc.sectionList,
                        gatewayId: doc.gatewayId
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async getAllRooms(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getRoomsByFloor(realm: Realm, floorId: string) {
        return realm.objects(BaseSchemaName).filtered(`floorId=="${floorId}"`)
    }
    static async getRoomsByArea(realm: Realm, areaId: number) {
        return realm.objects(BaseSchemaName).filtered(`areaId==${areaId}`)
    }
    static async addRoom(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                roomId: doc.roomId,
                roomName: doc.roomName,
                roomType: doc.roomType,
                roomImageType: doc.roomImageType,
                floorId: doc.floorId,
                areaId: doc.areaId,
                sectionList: doc.sectionList,
                gatewayId: doc.gatewayId
            })
        })
    }
    static async getRoomById(realm: Realm, roomId: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, roomId)
    }
    static async getRoomsInSameArea(realm: Realm, roomId: string) {
        const room = realm.objectForPrimaryKey(BaseSchemaName, roomId);
        return realm.objects(BaseSchemaName).filtered('areaId == $0', room.areaId);
    }
    static async deleteRoomById(realm: Realm, roomId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, roomId))
        })
    }
    static async updateRoom(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                roomId: doc.roomId,
                roomName: doc.roomName,
                roomType: doc.roomType,
                roomImageType: doc.roomImageType,
                floorId: doc.floorId,
                areaId: doc.areaId,
                sectionList: doc.sectionList,
                gatewayId: doc.gatewayId
            }, Realm.UpdateMode.Modified)
        })
    }
    static async updateRoomName(realm: Realm, data: any) {
        realm.write(() => {
            const room = realm.objectForPrimaryKey(BaseSchemaName, data.roomId)
            room.roomName = data.roomName;
        })
    }
    static async getRoomsByName(realm: Realm, roomName: string) {
        return realm.objects(BaseSchemaName).filtered(`roomName=="${roomName}"`)
    }
}
export const ModelsList = [
    IKeusRoomSchema, IKeusSectionSchema,
]