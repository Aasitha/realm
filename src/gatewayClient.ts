

import { RealmClient } from '@keus-automation/realm-service-client-js';
import util from 'util';
// import * as zlib from 'zlib';
// import * as AreasInfo from "./schemas-2/areas"
import * as FavoritesInfo from "./schemas-2/favourites";
// import * as FloorsInfo from "./schemas-2/floors"
// import * as RoomsInfo from "./schemas-2/rooms"
// import * as IrremotesInfo from "./schemas-2/irremotes"
// import * as GatewaysInfo from "./schemas-2/gatewaysbck"
import * as DevicesInfo from "./schemas-2/devices"
import * as GmappliancesInfo from "./schemas-2/gm-models/gmappliances"
// import * as GroupsInfo from "./schemas-2/groups"
// import * as GmdevicesInfo from "./schemas-2/gm-models/gmdevicesbck"
// import * as SchedulesInfo from "./schemas-2/schedules"
// import * as ActivitiesInfo from "./schemas-2/activities"
// import * as KeusdmareasInfo from "./schemas-2/keusdmareas"
// import * as NotificationsInfo from "./schemas-2/notifications"
// import * as UserdevicesInfo from "./schemas-2/userdevices"
// import * as UsersInfo from "./schemas-2/users"
// import * as GmgroupsModel from "./schemas-2/gm-models/gmgroups"
// import { BaseSchemaName } from './schemas/favourites';
//import * as KeusdmgroupsInfo from "./schemas-2/keusdmgroups"
import { getDevice, getDevices, getActivities, getGmgroup, getGmgroups, getGroup, getGroups, getIrremote, getIrremotes, getGmappliance, getGmappliances } from './realm-utils';

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
    let favourites = await realmClient.callModelMethod(
        FavoritesInfo.BaseSchemaName,
        FavoritesInfo.Methods.getAllFavorites.name,
        "0x00124b0021b709ae"
        // {
        //     activityId:"test",
        //     activitySourceInfo:{
        //         lastUpdateTime:0,
        //         lastUpdatedBy:"none",
        //         lastUpdateUser:"none"
        //     },
        //     activityGMType:"testGM"
        // }
    );

    console.log(favourites.data[0])
    //let newData = await getDevices(favourites.data);
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

    // End execution time
    console.timeEnd('Execution time');
    //console.log(JSON.stringify(newData[0]));
    // let newData=await getDevices(favourites.data);

    //console.log(newData.length);
    //console.log(favourites.data.length);
    // console.log(newData[0].notificationId);
    // console.log(newData[9].notificationId)
    //console.log("gatewayInfo is: ",JSON.stringify(Object.keys(favourites.data)));
})();