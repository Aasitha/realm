import Realm from 'realm';
export const BaseSchemaName = "deviceSchema";
export class deviceSchema extends Realm.Object<deviceSchema> {
    static primaryKey = "deviceId";
    deviceId:string;
    deviceName?:string;
    deviceCategory?:string;
    deviceProperties?:Realm.Types.Dictionary<Realm.Types.Mixed>;
    deviceAppliances:Realm.Types.List<string>
}
export class Methods{
    static async addDevice(realm:Realm,doc:any){
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                deviceId:doc.deviceId,
                deviceName:doc.deviceName,
                deviceCategory:doc.deviceCategory,
                deviceProperties:doc.deviceProperties,
                deviceAppliances:doc.deviceAppliances
            })
        })
    }
    static deleteDevice(realm:Realm,deviceId:string){
        realm.write(()=>{
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName,deviceId))
        })
    }
    static updatedeviceProperties(realm:Realm,deviceId:string,deviceProperties:any){
        realm.write(()=>{
            const device=realm.objectForPrimaryKey(BaseSchemaName,deviceId);
            device.deviceProperties=deviceProperties;
        })
    }
    static async addAppliance(realm:Realm,deviceId:string,applianceId:string){
        realm.write(()=>{
            const device:any=realm.objectForPrimaryKey(BaseSchemaName,deviceId);
            device.deviceAppliances.push(applianceId)
        })
    }
    static async removeappliance(realm:Realm,deviceId:string,applianceId:string){
        realm.write(()=>{
            const device:any=realm.objectForPrimaryKey(BaseSchemaName,deviceId);
            const indexToRemove=device.deviceAppliances.indexOf(applianceId);
            device.deviceAppliances.splice(indexToRemove,1)
        })
    }
}