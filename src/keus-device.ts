

//Edit both interface & schema when making changes to device structure
//Device interface for server
let Realm=require("realm")
const realm=new Realm();
export interface IKeusDeviceSyncInfo {
    syncStatus: number;
    syncRequestType: number;
    syncRequestId: string;
    syncRequestTime: number;
    syncRequestParams: object;
    jobTypeName?: number;
    jobMessage?: string;
}

export interface IKeusDevice {
    deviceId: string;
    masterId: string;
    deviceType: string;
    deviceCategory: string;
    deviceName: string;
    deviceSection: string;
    deviceRoom: string;
    deviceLocation: string;
    deviceControlType: string;
    deviceParent: string;
    firmwareVersion: string;
    isHidden: boolean;
    isConfigured: boolean;
    manufacturerName: string;
    deviceTypeDisplayName: string;
    deviceTypeName: string;
    inGroup: boolean;
    deviceGroup: number;
    groupRoom: string;
    deviceState: object;
    deviceProperties: object;
    lastUpdateTime: number;
    lastUpdateBy: string;
    lastUpdateUser: string;
    lastUpdateSource: string;
    deviceSyncInfo: IKeusDeviceSyncInfo;
    markedForDelete: number;
    registeredAt: number;
}


//Schema for mongoose
const TableName = 'IKeusDevice';

export default class KeusDeviceModel {
    // static async insertDevice<T extends IKeusDevice>(device: T) {
    //     try {
    //         //await DbDeviceModel.insert(device.deviceId, device);
    //         return;
    //     } catch (e) {
    //         throw e;
    //     }
    // }

    static async insertDevices<T extends IKeusDevice>(devices: Array<IKeusDevice>) {
        try {
            //await DbDeviceModel.insertMany(devices);
            //let res=realm.objects(TableName).filtered("inGroup==false AND ")
            return;
        } catch (e) {
            throw e;
        }
    }

    static async getAllDevices(isLean:boolean=false) {
        try {
            //const res = await DbDeviceModel.scan(isLean);
            // return <Array<IKeusDevice>>res;
        } catch (e) {
            throw e;
        }
    }

    static async getDeviceById(deviceId: string) {
        try {
            // const res = await DbDeviceModel.findById(deviceId);
            // console.log("res----------",res)
            //return <IKeusDevice>res;
        } catch (e) {
            console.log("erroro--------",e)
            throw e;
        }
    }

    //returns all the devices which are not grouped
    static async getIndividualDevicesByRooms(roomIds: any){
        try{
            // const res=await DbDeviceModel.findByProperty({
            //     inGroup: false,
            //     deviceRoom:{$in: roomIds}
            // });
            // return <Array<IKeusDevice>>res;
            const query = roomIds.map((roomId:string) => `deviceRoom == '${roomId}'`).join(' OR ');
            let res=realm.objects(TableName).filtered(`inGroup == false AND (${query})`);
            //console.log(res)
           //console.log(roomIds)
            let result=Array.from(res);
            console.log(result.length)
            //realm.close();
            return result


        }
        catch(e){
            throw e;
        }
    }

    static async getIRBlasterByRooms(roomIds: Array<String>){
        try{
            // const res=await DbDeviceModel.findByProperty({
            //     deviceRoom:{$in: roomIds},
            //     deviceCategory: DeviceCategoryMap.get('KEUS_ZIGBEE_IR_BLASTER').deviceCategoryCode
            // });
            // return <Array<IKeusDevice>>res;
        }
        catch(e){
            throw e;
        }
    }

    static async getDevicesByGateway(gatewayId: string) {
        try {
            // const res = await DbDeviceModel.findByProperty({ masterId: gatewayId });
            // return <Array<IKeusDevice>>res;
        } catch (e) {
            throw e;
        }
    }

    // static async getDevicesByControlType(controlType: string) {
    //     try {
    //         const res = await DbDeviceModel.findByProperty({ 'deviceControlInfo.deviceControlType': controlType });
    //         return <Array<IKeusDevice>>res;
    //     } catch (e) {
    //         throw e;
    //     }
    // }


    static async updateDevicesRoomByParent(roomId: string, sectionId: string, parentId: string) {
        try {
            // const res = await DbDeviceModel.findAndUpdate(
            //     {
            //         deviceParent: parentId
            //     },
            //     {
            //         deviceRoom: roomId,
            //         deviceSection: sectionId
            //     }
            // );
        } catch (e) {
            throw e;
        }
    }

    static async getDevicesByParent(parentId: string) {
        try {
            // const res = await DbDeviceModel.findByProperty({
            //     deviceParent: parentId
            // });
            // return <Array<IKeusDevice>>res;
        } catch (e) {
            throw e;
        }
    }

}
