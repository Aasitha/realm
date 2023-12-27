
import { RealmClient } from '@keus-automation/realm-service-client-js';

import * as FavouritesInfo from "./schemas/favourites1"

(async () => {
    console.log(__dirname);
    console.time('Execution time');
    const startMemoryUsage = process.memoryUsage().heapUsed;
    const realmClient = new RealmClient({
        host: 'localhost',
        port: 4222,
        token: 'keus-iot-platform',
        serverId: 'Keus-homeId'
    });

    await realmClient.start();
    console.log('Connected');

    // let createRealmResp = await realmClient.createRealm(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.BaseSchemaVersion,
    //     __dirname + '/test-model.js'
    // );
    // console.log(createRealmResp);

    // let updateRealmResp = await realmClient.updateRealm(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.BaseSchemaVersion,
    //     __dirname + '/test-model.js'
    // );
    // console.log(updateRealmResp);

    // let callDeviceInfoRealm = await realmClient.callModelMethod(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.Methods.getDevicesList.name,
    //     {}
    // );
    // console.log(util.inspect(callDeviceInfoRealm, false, 20, true));

    // let addDeviceInfo = await realmClient.callModelMethod(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.Methods.saveDevice.name,
    //     {
    //         deviceId: 'test3',
    //         appliances: [{
    //             applianceId: 'appl1',
    //             buttons: [{
    //                 id: 1,
    //                 type: 'scene',
    //                 action: '123'
    //             }, {
    //                 id: 2,
    //                 type: 'group',
    //                 action: '456'
    //             }]
    //         }]
    //     }
    // );
    // console.log(addDeviceInfo);

    // let deleteDeviceInfo = await realmClient.callModelMethod(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.Methods.deleteDevice.name,
    //     'test1'
    // );
    // console.log(deleteDeviceInfo);

    // let getDevicesInfo = await realmClient.callModelMethod(
    //     DevicesInfo.BaseSchemaName,
    //     DevicesInfo.Methods.getDevicesList.name,
    //     {}
    // );
    // console.log(getDevicesInfo?.data?.data);

    // let addGroupInfo = await realmClient.callModelMethod(
    //     GroupInfo.BaseSchemaName,
    //     GroupInfo.Methods.saveGroup.name,
    //     {
    //         groupId: 'group1',
    //         appliances: [{
    //             applianceId: 'appl1',
    //             applianceType: 'remote'
    //         },{
    //             applianceId: 'appl2',
    //             applianceType: 'onoff'
    //         }]
    //     }
    // );
    // console.log(addGroupInfo);
    console.log(FavouritesInfo.BaseSchemaName)
    console.log(FavouritesInfo.BaseSchemaVersion);
    // console.log(realmClient.getRealmRPC)
    // let realmResp=await realmClient.createRealm(FavouritesInfo.BaseSchemaName,FavouritesInfo.BaseSchemaVersion,__dirname+"/schemas/favourites1.js")
    // console.log(realmResp);
    console.log(FavouritesInfo.Methods.importGatewayData.name)
    let favourites = await realmClient.callModelMethod(
        FavouritesInfo.BaseSchemaName,
        FavouritesInfo.Methods.importGatewayData.name,
        {}
    );
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes
  
    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');
  
    // End execution time
    console.timeEnd('Execution time');
    //console.log("gatewayInfo is: ",favourites);
})();