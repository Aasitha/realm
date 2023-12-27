import Realm from "realm";

import { RealmServer } from "@keus-automation/realm-service-server";

import * as favouritesModel from "./schemas/favourites1" 
(
    async () => {
        const realmServer = new RealmServer({
            host: 'localhost',
            port: 4222,
            token: 'keus-iot-platform',
            serverId: 'Keus-homeId',
            storageFolder: __dirname + '/storage'
        });

        await realmServer.start();
        await realmServer.addLocalRealm(favouritesModel)

        //await realmServer.addLocalRealm(gatewaysModel);
    })();