let Realm2 = require('realm');
import { IKeusUserDeviceSchema } from "./schemas/userdevices";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: [IKeusUserDeviceSchema]
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.100:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'userdevices';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('IKeusUserDevice', {
                _id:doc._id,
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
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
