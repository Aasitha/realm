import Realm from 'realm';

export const BaseSchemaName = "IKeusAreaSchema";
export const BaseSchemaVersion = 1;
export class IAreaSyncInfoSchema extends Realm.Object<IAreaSyncInfoSchema> {
    static embedded?: boolean = true;
    syncStatus?: Realm.Types.Int;
    syncRequestType?: Realm.Types.Int;
    syncRequestId?: string;
    syncRequestTime?: Realm.Types.Int;
    syncRequestParams?: Realm.Types.Dictionary<Realm.Types.Mixed>

}
export class IKeusAreaSchema extends Realm.Object<IKeusAreaSchema> {
    static primaryKey = "areaId";
    areaId: Realm.Types.Int;
    areaName?: string;
    areaSyncInfo?: IAreaSyncInfoSchema

}
export class Methods {
    static async importGatewayData(realm: Realm) {
        console.log("============");
        //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

        const MongoClient = require('mongodb').MongoClient;

        const uri = 'mongodb://192.168.0.198:27017/keus';
        const dbName = 'brijeshSir';
        const collectionName = 'areas';


        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.find({}).toArray();
        realm.write(() => {
            result.forEach((doc: any) => {
                console.log(doc._id)
                const realmActivity = realm.create(BaseSchemaName, {
                    areaId: doc.areaId,
                    areaName: doc.areaName,
                    areaSyncInfo: doc.areaSyncInfo,
                })
                console.log(realmActivity)
            })
        })

    }
    static async getAreaById(realm: Realm, areaId: number) {
        //return realm.objects(BaseSchemaName).filtered('areaId == $0',areaId);
        return realm.objectForPrimaryKey(BaseSchemaName, areaId);
    }
    static async addArea(realm: Realm, doc: any) {
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                areaId: doc.areaId,
                areaName: doc.areaName,
                areaSyncInfo: doc.areaSyncInfo,
            })
            console.log(realmActivity)
        })
    }
    static async getAllAreas(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getAreasByName(realm: Realm, areaName: string) {
        return realm.objects(BaseSchemaName).filtered('areaName == $0', areaName);
    }
    static async updateAreaName(realm: Realm, data: any) {
        return (realm.write(() => {
            let area = realm.objectForPrimaryKey(BaseSchemaName, data.areaId);
            area.areaName = data.areaName;
        })
        )
    }
    static async updateAreaSyncState(realm: Realm, data: any) {
        realm.write(()=>{
            let area = realm.objectForPrimaryKey(BaseSchemaName, data.areaId);
            area.areaSyncInfo = data.areaSyncState;
        })
    }
    static async deleteAreaById(realm: Realm, areaId: number) {
        realm.write(()=>{
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, areaId))
        })
    }
}
export const ModelsList = [IKeusAreaSchema, IAreaSyncInfoSchema];