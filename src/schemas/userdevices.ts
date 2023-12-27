import Realm from "realm";

export const BaseSchemaName = "IKeusUserDeviceSchema";
export const BaseSchemaVersion = 1;

export class IKeusUserDeviceSchema extends Realm.Object<IKeusUserDeviceSchema> {
    static primaryKey = "deviceKey";
    phone?: string;
    deviceType?: string;
    deviceName?: string;
    deviceId?: string;
    validity?: Realm.Types.Int;
    remember?: Realm.Types.Bool;
    secretKey?: string;
    lastAccessTime?: Realm.Types.Int;
    deviceKey?: string;
    servicePhone?: string;

}

export class authenticateUserDeviceTypeSchema extends Realm.Object<authenticateUserDeviceTypeSchema> {
    static embedded?: boolean = true;
    phone?: string;
    deviceType?: string;
    deviceName?: string;
    deviceId?: string;
    remember?: Realm.Types.Bool;
    servicePhone?: string;
}

export class validateUserDeviceKeyTypeSchema extends Realm.Object<validateUserDeviceKeyTypeSchema> {
    static embedded?: boolean = true;
    deviceKey?: string;
    secretKey?: string;
}
export class Methods{
    static async importGatewayData(realm:Realm){
        try{
            console.log("============");

            const MongoClient = require('mongodb').MongoClient;
        
            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'brijeshSir';
            const collectionName = 'userdevices';
        
        
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
        
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc.deviceKey)
                    const realmActivity = realm.create(BaseSchemaName, {
                        phone:doc.phone,
                        deviceType:doc.deviceType,
                        deviceName:doc.deviceName,
                        deviceId:doc.deviceId,
                        validity:doc.validity,
                        remember:doc.remember,
                        secretKey:doc.secretKey,
                        lastAccessTime:doc.lastAccessTime,
                        deviceKey:doc.deviceKey,
                        servicePhone:doc.servicePhone
                    })
                })
        
            })

        }catch(e){

        }
    }
    static async authenticateUserDevice(realm:Realm){
        
    }
    static async getUserDevice(realm:Realm,deviceKey:string){
        return realm.objectForPrimaryKey(BaseSchemaName,deviceKey)
    }
    static async updateUserDevice(realm:Realm,doc:any){
        realm.write(()=>{
            const realmActivity=realm.create(BaseSchemaName,{
                phone:doc.phone,
                deviceType:doc.deviceType,
                deviceName:doc.deviceName,
                deviceId:doc.deviceId,
                validity:doc.validity,
                remember:doc.remember,
                secretKey:doc.secretKey,
                lastAccessTime:doc.lastAccessTime,
                deviceKey:doc.deviceKey,
                servicePhone:doc.servicePhone,
            },Realm.UpdateMode.Modified)
            console.log(realmActivity)
        })
    }
    static async deleteUserDevices(realm:Realm,phone: string){
        realm.write(()=>{
            realm.delete(realm.objects(BaseSchemaName).filtered('phone == $0',phone));
        })
        
    }
}
export const ModelsList=[
    IKeusUserDeviceSchema,authenticateUserDeviceTypeSchema,validateUserDeviceKeyTypeSchema
]
