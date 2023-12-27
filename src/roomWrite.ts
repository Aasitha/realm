let Realm2 = require('realm');
import { roomsSchemaList } from "./schemas/rooms";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: roomsSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.108:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'rooms';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            //let groupTransformOptions=["groupState","groupProperties"]
            //console.log(groupTransformOptions);
            //let transformValues=["groupType","groupType"]
            const realmActivity = realm.create('IKeusRoom', {
                roomId:doc.roomId,
                roomName:doc.roomName,
                roomType:doc.roomType,
                roomImageType:doc.roomImageType,
                floorId:doc.floorId,
                areaId:doc.areaId,
                sectionList:doc.sectionList,
                gatewayId:doc.gatewayId
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
