import Realm from 'realm';
export const BaseSchemaName = "zoneSchema";
export class zoneSchema extends Realm.Object<zoneSchema>{
    static primaryKey = "sceneId";
    zoneId:string;
    zoneName:string;
    remoteList:Realm.Types.List<string>
}
export class Methods{
    static async createZone(realm:Realm,doc:any){
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                zoneId:doc.zoneId,
                zoneName:doc.zoneName,
                remoteList:doc.remoteList,
            })
        })
    }
    static async deleteZone(realm:Realm,zoneId:any){
        realm.write(()=>{
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName,))
        })
    }
    static async addRemote(realm:Realm,zoneId:string,remoteId:string){

    }
    static async deleteRemote(realm:Realm,zoneId:string,remoteId:string){

    }
    static async getRemoteList(realm:Realm,zoneId:string){

    }
    static async getZoneInfo(realm:Realm,zoneId:string){

    }
}