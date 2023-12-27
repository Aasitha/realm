let Realm = require('realm');
import {gatewaysSchemaList} from "./schemas/gateways"
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm({
        schema: gatewaysSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.43.130:27017/keus';
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
            const realmActivity = realm.create('IKeusGateway', {
                gatewayMode:doc.gatewayMode,
                gatewayId:doc.gatewayId,
                seed:doc.seed,
                serviceUser:doc.serviceUser,
                serviceUserPassword:doc.serviceUserPassword,
                gatewayKey:doc.gatewayKey,
                isRegisteredToCloud:doc.isRegisteredToCloud,
                zigbeeChannel:doc.zigbeeChannel,
                hubVersion:doc.hubVersion,
                wronglyConfigured:doc.wronglyConfigured,
                googleLinked:doc.googleLinked,
                googleLinkedUserList:doc.googleLinkedUserList,
                alexaLinked:doc.alexaLinked,
                alexaLinkedUserList:doc.alexaLinkedUserList,
                siriLinked:doc.siriLinked,
                homeKitPin:doc.homeKitPin,
                homekitBridges:doc.homekitBridges,
                siriLinkedUserList:doc.siriLinkedUserList,
                isConfigured:doc.isConfigured,
                miniGateways:doc.miniGateways
            })
            console.log(realmActivity)
        })
    })
    realm.close();
    client.close();


})();