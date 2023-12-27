let Realm2 = require('realm');
import { floorsSchemaList } from "./schemas/floors";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: floorsSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.108:27017/keus';
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
            const realmActivity = realm.create('IKeusFloor', {
                floorId:doc.floorId,
                floorName:doc.floorName
            })
            console.log(realmActivity)
        })
    })
    realm.close();
    client.close();


})();let Realm = require('realm');
