// import Realm from "realm";
// import { localRealmSchema } from "./localRealm";
import { RealmServer } from "@keus-automation/realm-service-server";
import * as gatewaysModel from "./schemas-2/gatewaysbck"
import * as areasModel from "./schemas-2/areas.js"
import * as floorsModel from "./schemas-2/floors.js"
import * as roomsModel from "./schemas-2/rooms"
import * as irremotesModel from "./schemas-2/irremotes"
import * as favoritesModel from "./schemas-2/favourites"
import * as devicesModel from "./schemas-2/devices"
import * as groupsModel from "./schemas-2/groups"
import * as gmappliancesModel from "./schemas-2/gm-models/gmappliances"
import * as gmdevicesModel from "./schemas-2/gm-models/gmdevicesbck"
import * as gmgroupsModel from "./schemas-2/gm-models/gmgroups"
import * as schedulesModel from "./schemas-2/schedules"
import * as activitiesModel from "./schemas-2/activities"
import * as keusdmareasModel from "./schemas-2/keusdmareas"
import * as notificationsModel from "./schemas-2/notifications"
import * as userdevicesModel from "./schemas-2/userdevices"
import * as usersModel from "./schemas-2/users"
import * as keusdmgroupsModel from "./schemas-2/keusdmgroups"
(
    async () => {

        const realmServer = new RealmServer({
            host: 'localhost',
            port: 4222,
            token: 'keus-iot-platform',
            serverId: 'Keus-homeId',
            storageFolder: __dirname + '/storage-2',
            disableService: false

        });

        // console.log(areasModel.ModelsList, areasModel.BaseSchemaVersion, areasModel.BaseSchemaName, areasModel.Methods);
        // await realmServer.addLocalRealm(areasModel);
        // await realmServer.addLocalRealm(floorsModel);
        // // await realmServer.addLocalRealm(roomsModel);
        // await realmServer.addLocalRealm(irremotesModel);
        // await realmServer.addLocalRealm(gatewaysModel);
        await realmServer.addLocalRealm(favoritesModel)
        await realmServer.addLocalRealm(devicesModel)
        // await realmServer.addLocalRealm(groupsModel);
        // await realmServer.addLocalRealm(gmappliancesModel);
        //await realmServer.addLocalRealm(gmdevicesModel);
        //await realmServer.addLocalRealm(schedulesModel);
        // await realmServer.addLocalRealm(activitiesModel);
        // await realmServer.addLocalRealm(keusdmareasModel);
        // await realmServer.addLocalRealm(notificationsModel);
        // await realmServer.addLocalRealm(roomsModel);
        // await realmServer.addLocalRealm(userdevicesModel);
        // await realmServer.addLocalRealm(usersModel);
        //await realmServer.addLocalRealm(gmgroupsModel);
        //await realmServer.addLocalRealm(keusdmgroupsModel);

        await realmServer.start();
        // const collectionsStatus = localRealm.objects("localRealmSchema");
        // if (collectionsStatus.length > 0) {
        //     console.log("data is there");
        //     //console.log("data is: ",JSON.stringify(collectionsStatus))
        //     let status = collectionsStatus[0];
        //     for (let obj in localMap) {
        //         if (status[obj] == 0) {
        //             realmServer.addLocalRealm(localMap[obj])
        //             console.log(obj, " loaded")
        //         } else {
        //             console.log(obj, " already loaded")
        //         }
        //     }
        //     localRealm.close();
        //     console.log(localRealm.isClosed)
        // } else {
        //     console.log("no collection is loaded")
        //     localRealm.write(()=>{
        //         let data=localRealm.create("localRealmSchema",{
        //         });
        //         //data[obj]=1;
        //     })
        //     for (let obj in localMap) {
        //         console.log(obj)
        //         realmServer.addLocalRealm(localMap[obj])
        //         console.log(obj, " loaded")
        //         localRealm.write(()=>{
        //             let data=localRealm.objects("localRealmSchema")[0];
        //             data[obj]=1;
        //         })
        //         console.log(obj," status updated in local realm")

        //     }


        //     //await realmServer.addLocalRealm(gatewaysModel);

        //     let info = localRealm.objects("localRealmSchema")
        //     console.log(info.toJSON())
        //     console.log(info.length)
        //     localRealm.close();
        //     console.log(localRealm.isClosed)

        // }

        //await realmServer.addLocalRealm(gatewaysModel);
    })();