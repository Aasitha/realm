let Realm2 = require('realm');
import { groupsSchemaList } from "./schemas/groups";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: groupsSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.108:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'groups';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions=["groupState","groupProperties"]
            console.log(groupTransformOptions);
            let transformValues=["groupType","groupType"]
            const realmActivity = realm.create('IKeusGroup', {
                transformValues:transformValues,
                transformOptions:groupTransformOptions,
                _id:doc._id,
                groupId:doc.groupId,
                groupName:doc.groupName,
                groupRoom:doc.groupRoom,
                groupSection:doc.groupSection,
                groupType:doc.groupType,
                groupIconType:doc.groupIconType,
                isHighPower:doc.isHighPower,
                isConfigured:doc.isConfigured,
                isHidden:doc.isHidden,
                groupVoiceName:doc.groupVoiceName,
                deviceList:doc.deviceList,
                groupState:{
                    [doc.groupType]:doc.groupState
                },
                groupProperties:{
                    [doc.groupType]:doc.groupProperties
                },
                groupSyncState:doc.groupSyncState,
                lastUpdateTime:doc.lastUpdateTime,
                lastUpdateBy:doc.lastUpdateBy,
                lastUpdateUser:doc.lastUpdateUser,
                lastUpdateSource:doc.lastUpdateSource
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
