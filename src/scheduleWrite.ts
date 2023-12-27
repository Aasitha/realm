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
    const collectionName = 'schedules';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let groupTransformOptions=["scheduleAction"]
            console.log(groupTransformOptions);
            let transformValues=["scheduleActionType"]
            const realmActivity = realm.create('IKeusSchedule', {
                transformValues:transformValues,
                transformOptions:groupTransformOptions,
                scheduleId:doc.scheduleId,
                scheduleName:doc.scheduleName,
                scheduleType:doc.scheduleType,
                scheduleActionType:doc.scheduleActionType,
                scheduleSection:doc.scheduleSection,
                scheduleRoom:doc.scheduleRoom,
                startTime:doc.startTime,
                endTime:doc.endTime,
                repeat:doc.repeat,
                createdBy:doc.createdBy,
                createdByName:doc.createdByName,
                scheduleAction:{
                    [doc.scheduleActionType]:doc.scheduleAction
                },
                activeStatus:doc.activeStatus,
                scheduleRunning:doc.scheduleRunning,
                forceExecuteStatus:doc.forceExecuteStatus,
                forceExecute:doc.forceExecute,
                lastExecutedTime:doc.lastExecutedTime,
                lastExecutionStatus:doc.lastExecutionStatus,
                lastExecutionStatusMessage:doc.lastExecutionStatusMessage
            })
            console.log(realmActivity)
        })

    })
    realm.close();
    client.close();


})();
