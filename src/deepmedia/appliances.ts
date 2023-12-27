import Realm from 'realm';
export const BaseSchemaName = "applianceSchema";
export class appliancePropertiesSchema extends Realm.Object<appliancePropertiesSchema>{
    static embedded?: boolean = true;
    powerOn: Realm.Types.Bool;
    sourceList: Realm.Types.List<string>
    inMute: Realm.Types.Bool;
    volume: Realm.Types.Int;
    selectedSource: string;
    selectedApp: string;
    appList: Realm.Types.List<string>
}
export class applianceSchema extends Realm.Object<applianceSchema>{
    static primaryKey = "applianceId";
    applianceId: string;
    applianceName?: string;
    applianceProperties?: appliancePropertiesSchema;
}
export class Methods {
    static async createAppliance(realm: Realm, doc: any) {
        realm.write(() => {
            realm.create(BaseSchemaName, {
                applianceId: doc.applianceId,
                applianceName: doc.applianceName,
                applianceProperties: doc.applianceProperties
            })
        })
    }
    static async deleteAppliance(realm: Realm, applianceId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, applianceId))
        })
    }
    static async updateApplianceProperties(realm: Realm, applianceId: string, properties: any) {
        realm.write(() => {
            const appliance = realm.objectForPrimaryKey(BaseSchemaName, applianceId);
            appliance.applianceProperties=properties;
        })
    }
    static async increaseVolume(realm: Realm, applianceId: string) {
        realm.write(()=>{
            const appliance:any=realm.objectForPrimaryKey(BaseSchemaName,applianceId);
            appliance.volume+=1;
        })
    }
    static async decreaseVolume(realm: Realm, applianceId: string) {
        realm.write(()=>{
            const appliance:any=realm.objectForPrimaryKey(BaseSchemaName,applianceId);
            appliance.volume-=1;
        })
    }
    static async setVolume(realm: Realm, applianceId: string, volume: Number) {
        realm.write(()=>{
            const appliance:any=realm.objectForPrimaryKey(BaseSchemaName,applianceId);
            appliance.volume=volume;
        })
    }

}