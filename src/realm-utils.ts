import { orElseFirst } from "fp-ts/lib/EitherT"
// import {FastJson} from "fast-json"
// const fastJson = new FastJson();
export async function getDevices(devices: any) {
    for (const device of devices) {
        if (device.transformOptions) {
            //console.log("transformOptions exists")
            for (let i = 0; i < device.transformOptions.length; i++) {
                //device[device.transformOptions[i]]=device[device.transformOptions[i]][device.transformValues[i]]
                //console.log("it is: ",device[device.transformOptions[i]][device[device.transformValues[i]]])
                console.log(device.processing[i])
                if (device.processing[i]) {

                    //console.log("processing needed")

                    device[device.transformOptions[i]] = device[device.transformOptions[i]]['T' + device[device.transformValues[i]]]
                    delete device.processing

                } else {
                    device[device.transformOptions[i]] = device[device.transformOptions[i]][device[device.transformValues[i]]]
                }



            }
            delete device.transformOptions
            delete device.transformValues
        }
    }

    return devices;
}
export async function getDevice(device: any) {
    if (!device)
        return null;
    if (device.transformOptions) {
        console.log("transformation needed")
        //console.log("transformOptions exists")
        for (let i = 0; i < device.transformOptions.length; i++) {
            //device[device.transformOptions[i]]=device[device.transformOptions[i]][device.transformValues[i]]
            //console.log("it is: ",device[device.transformOptions[i]][device[device.transformValues[i]]])
            if (device.processing) {
                if (device.processing[i]) {
                    //console.log("processing needed")

                    device[device.transformOptions[i]] = device[device.transformOptions[i]]['T' + device[device.transformValues[i]]]
                    delete device.processing

                } else {
                    device[device.transformOptions[i]] = device[device.transformOptions[i]][device[device.transformValues[i]]]
                }
            }




        }
        delete device.transformOptions
        delete device.transformValues
    }
    return device;

}

export async function getActivities(activities: any) {
    for (const activity of activities) {
        if (activity.processing) {

            //console.log("transformOptions exists")
            activity.activityAction = JSON.parse(activity.activityAction)
            delete activity.processing

        }
    }
    //console.log(typeof activities[0].activityAction)

    return activities;
}
export async function getGmgroups(gmgroups: any) {

    for (const gmgroup of gmgroups) {

        gmgroup.groupSyncInfo = JSON.parse(gmgroup.groupSyncInfo)
        gmgroup.groupState = JSON.parse(gmgroup.groupState)
        gmgroup.groupProperties = JSON.parse(gmgroup.groupProperties)
        gmgroup.groupAdditionalInfo = JSON.parse(gmgroup.groupAdditionalInfo)



    }
    return gmgroups;
}
export async function getGmgroup(gmgroup: any) {
    gmgroup.groupSyncInfo = JSON.parse(gmgroup.groupSyncInfo)
    gmgroup.groupState = JSON.parse(gmgroup.groupState)
    gmgroup.groupProperties = JSON.parse(gmgroup.groupProperties)
    gmgroup.groupAdditionalInfo = JSON.parse(gmgroup.groupAdditionalInfo)


    return gmgroup;
}
export async function getGroups(groups:any){
    for(const group of groups){
        group.groupState=JSON.parse(group.groupState);
        group.groupProperties=JSON.parse(group.groupProperties)
        group.groupSyncState=JSON.parse(group.groupSyncState)
    }
    return groups
}

export async function getGroup(group:any){
    group.groupState=JSON.parse(group.groupState);
    group.groupProperties=JSON.parse(group.groupProperties);
    group.groupSyncState=JSON.parse(group.groupSyncState);
    return group;
}

export async function getIrremotes(irremotes:any){
    for( const irremote of irremotes){
        irremote.remoteState=JSON.parse(irremote.remoteState);
        irremote.remoteProperties=JSON.parse(irremote.remoteProperties);
    }
    return irremotes;
}

export async function getIrremote(irremote:any){
    irremote.remoteState=JSON.parse(irremote.remoteState);
    irremote.remoteProperties=JSON.parse(irremote.remoteProperties);
    return irremote;
}
export async function getGmappliances(gmappliances:any){
    for(const gmappliance of gmappliances){
        gmappliance.applianceSyncInfo=JSON.parse(gmappliance.applianceSyncInfo);
        gmappliance.applianceState=JSON.parse(gmappliance.applianceState)
        gmappliance.applianceProperties=JSON.parse(gmappliance.applianceProperties);
        gmappliance.applianceControlInfo=JSON.parse(gmappliance.applianceControlInfo);
        gmappliance.applianceAdditionalInfo=JSON.parse(gmappliance.applianceAdditionalInfo);
    }
    return gmappliances
}
export async function getGmappliance(gmappliance:any){
    gmappliance.applianceSyncInfo=JSON.parse(gmappliance.applianceSyncInfo);
    gmappliance.applianceState=JSON.parse(gmappliance.applianceState)
    gmappliance.applianceProperties=JSON.parse(gmappliance.applianceProperties);
    gmappliance.applianceControlInfo=JSON.parse(gmappliance.applianceControlInfo);
    gmappliance.applianceAdditionalInfo=JSON.parse(gmappliance.applianceAdditionalInfo);
    return gmappliance
}