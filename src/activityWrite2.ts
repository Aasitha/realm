let Realm3 = require('realm');
import {
    activitySchema2, ActivityActionSchema, activitySourceInfoSchema, activityPropertiesSchema, EmbeddedActivityActionSchema, EmbeddedOnOffApplianceStateSchema, EmbeddedSingleDimmerApplianceStateSchema, EmbeddedFanApplianceStateSchema, EmbeddedColorTunableApplianceStateSchema, SmartConsoleActivityActionSchema, IRRemoteActivityActionSchema, KeusIRACBlastActionSchema, KeusIRAMPBlastActionSchema, KeusIRFANBlastActionSchema, KeusIRPRBlastActionSchema, KeusIRTVBlastActionSchema, RgbwwaActivityActionSchema, DriverActivityActionSchema, CurtainActivityActionSchema, ContactSensorActivityActionSchema, AcFancontrollerActivityActionSchema, DcFancontrollerActivityActionSchema, GMApplianceActivityIdentifierSchema, GMGroupActivityIdentifierSchema, GMSceneActivityIdentifierSchema, KeusDeviceActivityActionSchema, DaliColorTunableActivityActionSchema, DaliDimmableDriverActivityActionSchema, DaliNonDimmableDriverActivityActionSchema,
    ZigbeeDimmableDriverActivityActionSchema,
    ZigbeeNonDimmableDriverActivitySchema,
    InlineDimmerActivityActionSchema,
    OnOffApplianceActivityActionSchema,
    SingleDimmerApplianceActivityActionSchema,
    FanApplianceActivityActionSchema,
    ColorTunableApplianceActivityActionSchema,
    KeusSceneActivityActionSchema,
    KeusGroupActivityActionSchema,
    KeusActivityGroupStateObjectSchema

} from './activitySchema2'; // Import the exported schemas

(async () => {
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm3({
        schema: [
            activitySchema2, ActivityActionSchema, activitySourceInfoSchema, activityPropertiesSchema, EmbeddedActivityActionSchema, EmbeddedOnOffApplianceStateSchema, EmbeddedSingleDimmerApplianceStateSchema, EmbeddedFanApplianceStateSchema, EmbeddedColorTunableApplianceStateSchema, SmartConsoleActivityActionSchema, IRRemoteActivityActionSchema, KeusIRACBlastActionSchema, KeusIRAMPBlastActionSchema, KeusIRFANBlastActionSchema, KeusIRPRBlastActionSchema, KeusIRTVBlastActionSchema, RgbwwaActivityActionSchema, DriverActivityActionSchema, CurtainActivityActionSchema, ContactSensorActivityActionSchema, AcFancontrollerActivityActionSchema, DcFancontrollerActivityActionSchema, GMApplianceActivityIdentifierSchema, GMGroupActivityIdentifierSchema, GMSceneActivityIdentifierSchema, KeusDeviceActivityActionSchema, DaliColorTunableActivityActionSchema, DaliDimmableDriverActivityActionSchema, DaliNonDimmableDriverActivityActionSchema,
            ZigbeeDimmableDriverActivityActionSchema,
            ZigbeeNonDimmableDriverActivitySchema,
            InlineDimmerActivityActionSchema,
            OnOffApplianceActivityActionSchema,
            SingleDimmerApplianceActivityActionSchema,
            FanApplianceActivityActionSchema,
            ColorTunableApplianceActivityActionSchema,
            KeusSceneActivityActionSchema,
            KeusGroupActivityActionSchema,
            KeusActivityGroupStateObjectSchema],

    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://172.20.176.1:27017/keus';
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
            const realmActivity = realm.create('Activity2', {
                _id: doc._id,
                activityId: doc.activityId,
                activitySourceInfo: doc.activitySourceInfo,
                activityState:doc.activityState,
                activityProperties:doc.activityProperties,
                activityGMType:doc.activityGMType,
                activityIdentifier:doc.activityIdentifier,
                activityBy: doc.activityBy,
                activityAction: doc.activityAction,
                activitySource: doc.activitySource,
                activityTime: doc.activityTime,
                activityUsername: doc.activityUsername,
                activityType: doc.activityType,
                __v: doc.__v
            })
            console.log(realmActivity)
        })
    })
    // realm.write(() => {
    //     // Delete all objects of the 'MyObject' schema
    //     const allObjects = realm.objects('Activity2');
    //     realm.delete(allObjects);
    //   });
    // let activities = realm.objects('Activity2')
    // console.log(Array.from(activities).length)
    realm.close();
    client.close();


})();