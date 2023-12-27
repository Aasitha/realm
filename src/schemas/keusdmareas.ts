import Realm from 'realm';

export const BaseSchemaName = "IKeusDMAreaSchema";
export const BaseSchemaVersion = 1;

//Edit both interface & schema when making changes to device structure
//Device interface for server
export class IKeusDMAreaSchema extends Realm.Object<IKeusDMAreaSchema> {
    static primaryKey = "areaId";
    areaId: Realm.Types.Int;
}

export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'keusdmareas';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    const realmActivity = realm.create(BaseSchemaName, {
                        areaId:doc.areaId
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {

        }
    }
    static async insertArea(realm: Realm, doc: IKeusDMAreaSchema) {
        realm.write(()=>{
            const realmActivity=realm.create(BaseSchemaName,{
                areaId:doc.areaId
            })
            console.log(realmActivity)
        })
    }
    static async removeArea(realm: Realm, areaId: number) {
        realm.delete(realm.objectForPrimaryKey(BaseSchemaName,areaId))
    }
    static async updateAreaInfo(realm: Realm, doc: any) {
        realm.write(()=>{
            const realmActivity=realm.create(BaseSchemaName,{
                areaId:doc.areaId
            },Realm.UpdateMode.Modified)
            console.log(realmActivity)
        })
    }
    static async getAllAreaIds(realm: Realm) {
        let areaIds: Array<number> = [];
        const areas= realm.objects(BaseSchemaName)
        areas.forEach((areaObj: any) => {
            areaIds.push(areaObj.areaId);
        });
        return areaIds;
    }
    static async getAllAreasInfo(realm: Realm) {
        return realm.objects(BaseSchemaName)
    }
    static async getAreaById(realm: Realm, areaId: number) {
        return realm.objectForPrimaryKey(BaseSchemaName,areaId)
    }

}
export const ModelsList = [
    IKeusDMAreaSchema
]



