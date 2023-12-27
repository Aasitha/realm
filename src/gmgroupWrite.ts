let Realm2 = require('realm');
import { gmgroupsSchemaList } from "./schemas/gm-models/gmgroups";
import { appliancePropertiesCollectionMap, applianceStateCollectionMap } from "./schemas/gm-models/gmappliances";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: gmgroupsSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.100:27017';
    const dbName = 'keus';
    const collectionName = 'gmgroups';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions = ["groupState", "groupProperties"]
            console.log(groupTransformOptions);
            let transformValues = ["groupType", "groupType"]
            const realmActivity = realm.create('IKeusGMGroup', {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                groupId: doc.groupId,
                groupType: doc.groupType,
                groupCategory: doc.groupCategory,
                groupName: doc.groupName,
                groupIcon: doc.groupIcon,
                groupControlInfo: doc.groupControlInfo,
                groupHomeInfo: doc.groupHomeInfo,
                groupSyncInfo: doc.groupSyncInfo,
                groupStatusInfo: doc.groupStatusInfo,
                groupApplianceList: doc.groupApplianceList,
                groupActivityInfo: doc.groupActivityInfo,
                groupVoiceInfo: doc.groupVoiceInfo,
                groupAdditionalInfo: doc.groupAdditionalInfo,
                groupState: {
                    [doc.groupType]: doc.groupState
                },
                groupProperties: {
                    [doc.groupType]: doc.groupProperties
                },
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
