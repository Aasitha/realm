let Realm2 = require('realm');
import { schedulesSchemaList } from "./schemas/schedules";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: schedulesSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.100:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'notifications';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions = ["notificationData"]
            console.log(groupTransformOptions);
            let transformValues = ["notificationType"]
            const realmActivity = realm.create('IKeusSchedule', {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                notificationId: doc.notificationId,
                notificationSource: doc.notificationSource,
                notificationBy: doc.notificationBy,
                notificationUsername: doc.notificationUsername,
                notificationTime: doc.notificationTime,
                notificationType: doc.notificationType,
                notificationStatus: doc.notificationStatus,
                notificationData: {
                    ['T' + doc.notificationType]: doc.notificationData
                }
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
