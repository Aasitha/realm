let Realm2 = require('realm');
import { irremotesSchemaList } from "./schemas/irremotes";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: irremotesSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.108:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'irremotes';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions=["remoteProperties","remoteState"]
            console.log(groupTransformOptions);
            let transformValues=["remoteType","remoteType"]
            const realmActivity = realm.create('IKeusIRRemote', {
                transformValues:transformValues,
                transformOptions:groupTransformOptions,
                remoteId:doc.remoteId,
                irDevice:doc.irDevice,
                companyId:doc.companyId,
                modelId:doc.modelId,
                remoteName:doc.remoteName,
                remoteType:doc.remoteType,
                remoteProperties:{
                    [doc.remoteType]:doc.remoteProperties
                },
                remoteState:{
                    [doc.remoteType]:doc.remoteState
                },
                lastUpdateTime:doc.lastUpdateTime,
                lastUpdateBy:doc.lastUpdateBy,
                lastUpdateUser:doc.lastUpdateUser,
                lastUpdateSource:doc.lastUpdateSource,
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
