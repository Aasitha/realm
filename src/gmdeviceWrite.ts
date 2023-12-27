let Realm2 = require('realm');
import { gmdevicesSchemaList } from "./schemas/gm-models/gmdevices";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: gmdevicesSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.102:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'gmdevices';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('IKeusGMDevice', {
                deviceId:doc.deviceId,
                deviceName:doc.deviceName,
                deviceLocation:doc.deviceLocation,
                deviceControlInfo:doc.deviceControlInfo,
                deviceHomeInfo:doc.deviceHomeInfo,
                deviceMaintenanceInfo:doc.deviceMaintenanceInfo,
                deviceSyncInfo:doc.deviceSyncInfo,
                deviceStatusInfo:doc.deviceStatusInfo,
                deviceInfo:doc.deviceInfo,
                fwHealth:doc.fwHealth,
                fwInfo:doc.fwInfo
            })
            console.log(realmActivity)
        })
    })
    realm.close();
    client.close();


})();
