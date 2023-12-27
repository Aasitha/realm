let Realm2 = require('realm');
import { favoritesSchemaList } from "./schemas/favourites";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: favoritesSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.198:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'scenes';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('IKeusFavorite', {
                sceneId:doc.sceneId,
                sceneName:doc.sceneName,
                sceneType:doc.sceneType,
                sceneScope:doc.sceneScope,
                sceneExecutionType:doc.sceneExecutionType,
                sceneSection:doc.sceneSection,
                sceneRoom:doc.sceneRoom,
                actionList:doc.actionList,
                timeslotList:doc.timeslotList,
                lastUpdateTime:doc.lastUpdateTime,
                lastUpdateBy:doc.lastUpdateBy,
                lastUpdateUser:doc.lastUpdateUser,
                lastUpdateSource:doc.lastUpdateSource,
                sceneSyncInfo:doc.sceneSyncInfo,
                scenePresetType:doc.scenePresetType,
            })
            console.log(realmActivity)
        })
    })
    realm.close();
    client.close();


})();let Realm = require('realm');
