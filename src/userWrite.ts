let Realm2 = require('realm');
import { IKeusUserSchema } from "./schemas/users";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: [IKeusUserSchema]
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.108:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'users';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('IKeusUser', {
                phone:doc.phone,
                email:doc.email,
                userName:doc.userName,
                location:doc.location,
                gender:doc.gender,
                dateOfBirth:doc.dateOfBirth,
                emailVerified:doc.emailVerified,
                phoneVerified:doc.phoneVerified,
                homesList:doc.homesList,
                favoriteHome:doc.favoriteHome,
                lastUpdatedTime:doc.lastUpdatedTime,
                roomPreferences:doc.roomPreferences
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
