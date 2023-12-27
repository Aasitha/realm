// let Realm3 = require('realm');
// import Realm from "realm";
// import { data } from "./result2"
// import {deviceSchemasList} from "./schemas/devices"
import { deviceStateList } from "./schemas/deviceStateList";
import getRealmInstance from "./realmInit";
// Import the exported schemas

(async () => {
    const realm: any = await getRealmInstance();
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.199:27017/keus';
    const dbName = 'brijeshSir';
    const collectionName = 'devices';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    let deviceProperties: any = {
        KZES: "iZigbeeEmbeddedSwitchProperties",
        KZSC: "iKeusSmartConsoleProperties",
        KZSW: "iKeusSceneWizardProperties",
        KZIRB: "iZigbeeIRBlasterProperties",
        KZRGBWWA: "iZigbeeRgbwwaDriverProperties",
        KZESS: "iZigbeeEmbeddedSceneSwitchProperties",
        KZACFC: "iZigbeeACFanControllerProperties",
        KZDCFC: "iZigbeeDCFanControllerProperties",
        KZCS: "iZigbeeContactSensorProperties",
        KZID: "iZigbeeInlineDimmerProperties",
        KZRE: "iZigbeeRangeExtenderProperties",
        KZCW: "iZigbeeCurtainWizardProperties",
        KZDD: "iZigbeeDimmableDriverProperties",
        KZND: "iZigbeeNonDimmableDriverProperties",
        KDDD: "iDaliDimmableDriverProperties",
        KDCTD: "iDaliColorTunableDriverProperties",
        KDND: "iDaliNonDimmableDriverProperties",
        KZCC: "iZigbeeCurtainControllerProperties",

    }

    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions = ["deviceState", "deviceProperties"]
            console.log(groupTransformOptions);
            let transformValues = ["deviceCategory", "deviceCategory"]
            const realmActivity = realm.create('IKeusDevice', {
                transformValues: transformValues,
                transformOptions: groupTransformOptions,
                deviceId: doc.deviceId,
                masterId: doc.masterId,
                deviceType: doc.deviceType,
                deviceCategory: doc.deviceCategory,
                deviceName: doc.deviceName,
                deviceSection: doc.deviceSection,
                deviceRoom: doc.deviceRoom,
                deviceLocation: doc.deviceLocation,
                deviceControlType: doc.deviceControlType,
                deviceParent: doc.deviceParent,
                firmwareVersion: doc.firmwareVersion,
                isHidden: doc.isHidden,
                isConfigured: doc.isConfigured,
                manufacturerName: doc.manufacturerName,
                deviceTypeDisplayName: doc.deviceTypeDisplayName,
                deviceTypeName: doc.deviceTypeName,
                inGroup: doc.inGroup,
                deviceGroup: doc.deviceGroup,
                groupRoom: doc.groupRoom,
                deviceState: {
                    [doc.deviceCategory]: doc.deviceState
                },
                deviceProperties: {
                    [doc.deviceCategory]: doc.deviceProperties
                },
                lastUpdateTime: doc.lastUpdateTime,
                lastUpdateBy: doc.lastUpdateBy,
                lastUpdateUser: doc.lastUpdateUser,
                lastUpdateSource: doc.lastUpdateSource,
                deviceSyncInfo: doc.deviceSyncInfo,
                markedForDelete: doc.markedForDelete,
                registeredAt: doc.registeredAt,
                fwInfo: doc.fwInfo,
                fwHealth: doc.fwHealth
            })
            console.log(realmActivity)
        })
    })
    // realm.write(() => {
    //     // Delete all objects of the 'MyObject' schema
    //     const allObjects = realm.objects('IKeusDevice');
    //     realm.delete(allObjects);
    //   });
    // let activities = realm.objects('IKeusDevice')
    // console.log(Array.from(activities).length)
    //realm.close();
    client.close();
    process.exit();


})();