let Realm2 = require('realm');
import { gmappliancesSchemaList } from "./schemas/gm-models/gmappliances";
import { appliancePropertiesCollectionMap,applianceStateCollectionMap } from "./schemas/gm-models/gmappliances";
// Import the exported schemas

(async () => {
    console.log("============");
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm2({
        schema: gmappliancesSchemaList
    });
    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.102:27017/keus';
    const dbName = 'brijeshSir';
    const collectionName = 'gmappliances';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            const realmActivity = realm.create('IKeusGMAppliance', {
                applianceId:doc.applianceId,
                applianceType:doc.applianceType,
                applianceCategory:doc.applianceCategory,
                applianceName:doc.applianceName,
                applianceHomeInfo:doc.applianceHomeInfo,
                applianceSyncInfo:doc.applianceSyncInfo,
                applianceStatusInfo:doc.applianceStatusInfo,
                applianceGroupInfo:doc.applianceGroupInfo,
                applianceActivityInfo:doc.applianceActivityInfo,
                applianceVoiceInfo:doc.applianceVoiceInfo,
                applianceIcon:doc.applianceIcon,
                applianceState:{
                    [applianceStateCollectionMap[doc.applianceType]]:doc.applianceState
                },
                applianceProperties:{
                    [appliancePropertiesCollectionMap[doc.applianceType]]:doc.applianceProperties
                },
                applianceControlInfo:doc.applianceControlInfo,
                applianceAdditionalInfo:doc.applianceAdditionalInfo,
            })
            console.log(realmActivity)
        })
    })
    realm.close();
    client.close();


})();
