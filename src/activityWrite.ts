let Realm3 = require('realm');
import {activitySchema} from './activitySchema'; // Import the exported schemas

(async () => {
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm3({
        schema: [
            activitySchema
        ],

    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://172.23.96.1:27017/keus';
    const dbName = 'keus';
    const collectionName = 'activities';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();

    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('Activity', {
                _id:doc._id,
                activityId:doc.activityId,
                activityBy:doc.activityBy,
                activityAction:JSON.stringify(doc.activityAction),
                activitySource:doc.activitySource,
                activityTime:doc.activityTime,
                activityUsername:doc.activityUsername,
                activityType:doc.activityType,
                __v:doc.__v
            })
            console.log(realmActivity)
        })
    })
    // realm.write(() => {
    //     // Delete all objects of the 'MyObject' schema
    //     const allObjects = realm.objects('Activity');
    //     realm.delete(allObjects);
    //   });
    // let activities = realm.objects('Activity')
    // console.log(Array.from(activities).length)
    realm.close();
    client.close();


})();