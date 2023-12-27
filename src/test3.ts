


const OutputPortSchema = {
    name: 'OutputPort',
    properties: {
        portId: 'int',
        portState: 'int',
        applianceId: 'string',
        isInAppliance: 'bool',
    },
};

const ApplianceSchema = {
    name: 'Appliance',
    properties: {
        applianceId: 'string',
        iconType: 'int',
        inGroup: 'bool',
        groupId: 'int',
        applianceName: 'string',
        applianceType: 'int',
        lastUpdatedTime: 'int',
        lastUpdatedUser: 'string',
        lastUpdatedSource: 'string',
        lastUpdatedBy: 'string',
        applianceProperties: 'string',
        applianceState: 'string',
        defaultState: 'string',
    },
};

const SwitchSchema = {
    name: 'Switch',
    properties: {
        switchId: 'int',
        switchName: 'string',
        switchType: 'int',
        switchProperties: 'string',
    },
};
const fwInfoSchema={
    name: "fwInfoSchema",
    properties:{
        timeStamp:"int",
        hwVersion:"string",
        swVersion:"string",
        deviceName:"string",
        hgmSetting:"int",
        bleSetting:"int"
    }
}
const DeviceSchema = {
    name: 'Device',
    primaryKey: '_id',
    properties: {
        _id: 'string',
        deviceId: 'string',
        masterId: 'string',
        firmwareVersion: 'string',
        deviceType: 'string',
        deviceCategory: 'string',
        deviceTypeName: 'string',
        deviceTypeDisplayName: 'string',
        manufacturerName: 'string',
        isConfigured: 'bool',
        isHidden: 'bool',
        deviceRoom: 'string',
        deviceName: 'string',
        lastUpdateTime: 'int',
        lastUpdateUser: 'string',
        lastUpdateSource: 'string',
        lastUpdateBy: 'string',
        deviceSection: 'string',
        deviceLocation: 'string',
        deviceParent: 'string',
        deviceControlType: 'string',
        inGroup: 'bool',
        deviceGroup: 'int',
        groupRoom: 'string',
        deviceProperties: 'string',
        markedForDelete: 'int',
        __v: 'int',
        fwInfo: 'fwInfoSchema',
        fwHealth: 'FwHealth[]',
    },
};

const FwHealthSchema = {
    name: 'FwHealth',
    properties: {
        fwHealth: 'string',
        timeStamp: 'int',
    },
};



// Use the realm object to perform CRUD operations and interact with the database

(async () => {
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    // const realm = new Realm({
    //     schema: [
    //         OutputPortSchema,
    //         ApplianceSchema,
    //         SwitchSchema,
    //         FwHealthSchema,
    //         DeviceSchema,
    //     ],

    // });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://192.168.0.198:27017/';
    const dbName = 'keus';
    const collectionName = 'devices';

    
    const client = new MongoClient(uri, { useUnifiedTopology: true });  
    await client.connect();  

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).limit(1).toArray();
    console.log(result)
    // realm.write(()=>{
    //     result.forEach(doc=>{
    //         const realmDevice=realm.create('Device',{
    //             _id:doc._id
    //         })
    //     })
    // })
    // let Devices=realm.objects('Device')
    // console.log(Devices)
})();



// Use the realm object to interact with the database
/*const { MongoClient } = require('mongodb');

import KeusDeviceModel from './device';

const connectionString = 'mongodb://127.0.0.1:27017/';
const databaseName = 'keus';

(async () => {
  try {
    // Measure execution time
    console.time('Execution time');

    // Start memory usage
    const startMemoryUsage = process.memoryUsage().heapUsed;

    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db(databaseName);
    const collectionName = 'devices';

    const collection = db.collection(collectionName);
    const result = await collection.find({}).limit(1).toArray();

    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

    // End execution time
    console.timeEnd('Execution time');
    //console.log('Total number of activities:', JSON.parse(result));
    console.log(JSON.stringify(result))
    //console.log(result[51])

    await client.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();


*/