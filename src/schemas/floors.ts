import Realm from 'realm';
export const BaseSchemaName = "IKeusFloorSchema";
export const BaseSchemaVersion = 1;


export class IKeusFloorSchema extends Realm.Object<IKeusFloorSchema>{
    static primaryKey = "floorId";
        floorId!:string;
        floorName?:string;
    
}
export class Methods{
    static async importGatewayData(realm:Realm){
        try{
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    
            const MongoClient = require('mongodb').MongoClient;
        
            const uri = 'mongodb://192.168.0.198:27017/keus';
            const dbName = 'brijeshSir';
            const collectionName = 'floors';
        
        
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
        
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    const realmActivity = realm.create(BaseSchemaName, {
                        floorId:doc.floorId,
                        floorName:doc.floorName
                    })
                    console.log(realmActivity)
                })
            })
        }catch(e){
            return e;
        }



    }
    static async addFloor(realm:Realm,doc:any){
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                floorId:doc.floorId,
                floorName:doc.floorName
            })
        })
    }
    static async updateFloor(realm:Realm,doc:any){
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                floorId:doc.floorId,
                floorName:doc.floorName
            },Realm.UpdateMode.Modified)
        })
    }
    static async getFloorById(realm:Realm,floorId:string){
        return realm.objectForPrimaryKey(BaseSchemaName,floorId);
    }
    static async getFloorsByName(realm:Realm,floorName:string){
        return realm.objects(BaseSchemaName).filtered('floorName==$0',floorName);
    }
    static async getAllFloors(realm:Realm){
        return realm.objects(BaseSchemaName);
    }
    static async deleteFloorById(realm:Realm,floorId:string){
        realm.write(()=>{
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName,floorId));
        })
    }
    static async deleteFloorByName(realm:Realm,floorName: string){
        realm.write(()=>{
            realm.delete(realm.objects(BaseSchemaName).filtered('floorName == $0',floorName));
        })
    }
}
export const ModelsList=[IKeusFloorSchema]