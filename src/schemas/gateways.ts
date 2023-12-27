import Realm from 'realm';
export const BaseSchemaName = "IKeusGatewaySchema";
export const BaseSchemaVersion = 1;
export class IKeusMiniGatewayInfoSchema extends Realm.Object<IKeusMiniGatewayInfoSchema>{
    static embedded?: boolean = true;
    gatewayId?: string;
    floor?: string;
    name?: string;
    location?: string;
    ip?: string;
    zigbeeChannel?: Realm.Types.Int;
}


// export enum HomeKitBridgeStatus{
//     Paired="paired",
//     Unpaired="unpaired",
//     Started="started",
//     failedToStart="failed to start"
// }
export class IHomekitBridgeInfoSchema extends Realm.Object<IHomekitBridgeInfoSchema>{
    static embedded?: boolean = true;
    bridgeId?: Realm.Types.Int;
    username?: string;
    port?: Realm.Types.Int;
    displayName?: string;
    status?: string;
}
export class IKeusGatewaySchema extends Realm.Object<IKeusGatewaySchema> {
    static primaryKey = "gatewayId";
    gatewayMode?: Realm.Types.Int;
    gatewayId!: string;
    seed?: string;
    serviceUser?: string;
    serviceUserPassword?: string;
    gatewayKey?: string;
    isRegisteredToCloud?: Realm.Types.Bool;
    zigbeeChannel?: Realm.Types.Int;
    hubVersion?: string;
    wronglyConfigured?: Realm.Types.Bool;
    googleLinked?: Realm.Types.Bool;
    googleLinkedUserList: Realm.Types.List<string>;
    alexaLinked?: Realm.Types.Bool;
    alexaLinkedUserList: Realm.Types.List<string>;
    siriLinked?: Realm.Types.Bool;
    homeKitPin?: string;
    homekitBridges: Realm.Types.List<IHomekitBridgeInfoSchema>
    siriLinkedUserList: Realm.Types.List<string>;
    isConfigured?: Realm.Types.Bool;
    miniGateways: Realm.Types.List<IKeusMiniGatewayInfoSchema>

}

export class Methods {
    // static saveDevice(realmInst: Realm, deviceInfo: DevicesInfo) {
    //     return new Promise((resolve) => {
    //         realmInst.write(() => {
    //             realmInst.create(BaseSchemaName, deviceInfo);
    //             resolve({});
    //         });
    //     });
    // }
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017/keus';
            const dbName = 'brijeshSir';
            const collectionName = 'gateways';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    const realmActivity = realm.create(BaseSchemaName, {
                        gatewayMode: doc.gatewayMode,
                        gatewayId: doc.gatewayId,
                        seed: doc.seed,
                        serviceUser: doc.serviceUser,
                        serviceUserPassword: doc.serviceUserPassword,
                        gatewayKey: doc.gatewayKey,
                        isRegisteredToCloud: doc.isRegisteredToCloud,
                        zigbeeChannel: doc.zigbeeChannel,
                        hubVersion: doc.hubVersion,
                        wronglyConfigured: doc.wronglyConfigured,
                        googleLinked: doc.googleLinked,
                        googleLinkedUserList: doc.googleLinkedUserList,
                        alexaLinked: doc.alexaLinked,
                        alexaLinkedUserList: doc.alexaLinkedUserList,
                        siriLinked: doc.siriLinked,
                        homeKitPin: doc.homeKitPin,
                        homekitBridges: doc.homekitBridges,
                        siriLinkedUserList: doc.siriLinkedUserList,
                        isConfigured: doc.isConfigured,
                        miniGateways: doc.miniGateways
                    })
                    console.log(realmActivity)
                })
            })

        } catch (e) {
            return e;
        }
    }
    static async createGateway(realm: Realm, doc: any) {
        const gateways = realm.objects(BaseSchemaName);
        if (gateways.length) {
            //throw new HomeError.GatewayAlreadyExists();
        } else {
            realm.write(() => {
                realm.create(BaseSchemaName, {
                    gatewayMode: doc.gatewayMode,
                    gatewayId: doc.gatewayId,
                    seed: doc.seed,
                    serviceUser: doc.serviceUser,
                    serviceUserPassword: doc.serviceUserPassword,
                    gatewayKey: doc.gatewayKey,
                    isRegisteredToCloud: doc.isRegisteredToCloud,
                    zigbeeChannel: doc.zigbeeChannel,
                    hubVersion: doc.hubVersion,
                    wronglyConfigured: doc.wronglyConfigured,
                    googleLinked: doc.googleLinked,
                    googleLinkedUserList: doc.googleLinkedUserList,
                    alexaLinked: doc.alexaLinked,
                    alexaLinkedUserList: doc.alexaLinkedUserList,
                    siriLinked: doc.siriLinked,
                    homeKitPin: doc.homeKitPin,
                    homekitBridges: doc.homekitBridges,
                    siriLinkedUserList: doc.siriLinkedUserList,
                    isConfigured: doc.isConfigured,
                    miniGateways: doc.miniGateways
                })
            })
        }
    }
    static async deleteGateway(realm: Realm, gatewayId: string) {
        realm.delete(realm.objects(BaseSchemaName).filtered('gatewayId ==  $0', gatewayId))
    }
    static async addMiniGateway(realm: Realm, data: any) {
        realm.write(() => {
            const gateway: any = realm.objects(BaseSchemaName).filtered('gatewayId == $0', data.mainGatewayId)[0];
            gateway.miniGateways.push(data.miniGatewayInfo);
        })
    }
    static async deleteMiniGateway(realm: Realm, data: any) {
        realm.write(() => {
            const gateway: any = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId)
            const index: number = gateway.miniGateways.findIndex(obj => obj.gatewayId === data.miniGatewayId);
            gateway.miniGateways.splice(index, 1);
        })
    }
    static async updateMiniGatewayIp(realm: Realm, data: any) {
        realm.write(() => {
            const gateway: any = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId)
            if (gateway) {
                const miniGatewayToUpdate = gateway.miniGateways.find(miniGateway => miniGateway.gatewayId === data.miniGatewayId);

                if (miniGatewayToUpdate) {
                    miniGatewayToUpdate.ip = data.miniGatewayIp;
                }
            }
        })
    }
    static async updateMiniGatewayInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gateway: any = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId)
            if (gateway) {
                const miniGatewayToUpdate = gateway.miniGateways.find(miniGateway => miniGateway.gatewayId === data.miniGatewayId);

                if (miniGatewayToUpdate) {
                    miniGatewayToUpdate.floor = data.floor;
                    miniGatewayToUpdate.name = data.name;
                    miniGatewayToUpdate.location = data.location;
                }
            }
        })
    }
    static async getGateway(realmInst: Realm) {
        return realmInst.objects(BaseSchemaName);
    }
}

//Edit both interface & schema when making changes to gateway structure
//Gateway interface for server

export const ModelsList = [IKeusGatewaySchema, IKeusMiniGatewayInfoSchema, IHomekitBridgeInfoSchema]

