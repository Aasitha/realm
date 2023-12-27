import Realm from "realm"
import { IKeusGMApplianceIdentifierSchema, IKeusGMApplianceSavedStateAction_savedStateSchema, } from "./gmappliances"
// import { IActivitySourceInfoSchema } from "../activities"
// import { IAirConditionerApplianceStateSchema, IAirConditionerAppliancePropertiesSchema } from "../../appliance-types/airconditioner"
// import { IBlindsApplianceStateSchema, IBlindsAppliancePropertiesSchema } from "../../appliance-types/blinds"
// import { IBlindsPercentApplianceStateSchema, IBlindsPercentAppliancePropertiesSchema } from "../../appliance-types/blindspercent"
// import { IBlindsPercentRelayApplianceStateSchema, IBlindsPercentRelayAppliancePropertiesSchema } from "../../appliance-types/blindspercentrelay"
// import { IBlindsRelayApplianceStateSchema, IBlindsRelayAppliancePropertiesSchema } from "../../appliance-types/blindsrelay"
// import { IBlindsTiltApplianceStateSchema, IBlindsTiltAppliancePropertiesSchema } from "../../appliance-types/blindstilt"
// import { IBlindsTiltRelayApplianceStateSchema, IBlindsTiltRelayAppliancePropertiesSchema } from "../../appliance-types/blindstiltrelay"
// import { IDimmerApplianceStateSchema, IDimmerAppliancePropertiesSchema } from "../../appliance-types/dimmer"
// import { IPushTriggerApplianceStateSchema, IPushTriggerAppliancePropertiesSchema } from "../../appliance-types/push-trigger"
// import { IRgbAddressableStateSchema, IRgbAddressablePropertiesSchema } from "../../appliance-types/rgbaddressable"
// import { IRGBColorApplianceStateSchema, IRGBColorAppliancePropertiesSchema } from "../../appliance-types/rgbcolor"
// import { IRGBWWAApplianceStateSchema, IRGBWWAAppliancePropertiesSchema } from "../../appliance-types/rgbwwa"
// import { ISwitchApplianceStateSchema, ISwitchAppliancePropertiesSchem } from "../../appliance-types/switch"
// import { IUnifiCameraApplianceStateSchema, IUnifiCameraAppliancePropertiesSchema } from "../../appliance-types/unificamera"
// import { IWWMixerApplianceStateSchema, IWWMixerAppliancePropertiesSchema } from "../../appliance-types/wwmixer"
// import { IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema } from "../../trait-types/angulartilt"
// import { IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema } from "../../trait-types/brightness"
// import { ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema } from "../../trait-types/camerarecording"
// import { IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema } from "../../trait-types/fanspeedcontrol"
// import { ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema } from "../../trait-types/louvercontrol"
// import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../../trait-types/onoff"
// import { IModeControlTraitPropertiesSchema, IModeControlTraitStateSchema } from "../../trait-types/modecontrol"
// import { IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema } from "../../trait-types/openclose"
// import { IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema } from "../../trait-types/opencloserelay"
// import { IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema } from "../../trait-types/percentopen"
// import { IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema } from "../../trait-types/push-trigger"
// import { IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema } from "../../trait-types/rgbaddressable"
// import { IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema } from "../../trait-types/rgbcolor"
// import { IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema } from "../../trait-types/rgbwwa"
// import { ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema } from "../../trait-types/swingcontrol"
// import { ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema } from "../../trait-types/temperaturecontrol"
// import { ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema } from "../../trait-types/tiltrelay"
// import { IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema } from "../../trait-types/wwmixer"
// import { IEmbeddedSwitchAppliancePropertiesSchema } from "../../device-categories/zigbee-embedded-switch"

export const BaseSchemaName = "IKeusGMGroupSchema";
export const BaseSchemaVersion = 1;
// export class IKeusGMGroupControlInfo_groupProtocolControlInfoSchema extends Realm.Object<IKeusGMGroupControlInfo_groupProtocolControlInfoSchema> {
//     static embedded?: boolean = true;
//     zigbeeGroupId?: Realm.Types.Int;
//     zigbeeAreaId?: Realm.Types.Int;
//     zigbeeSectionId?: Realm.Types.Int;
//     zigbeeGatewayId?: string;
// }
export class IKeusGMGroupControlInfoSchema extends Realm.Object<IKeusGMGroupControlInfoSchema> {
    static embedded?: boolean = true;
    groupControlType?: string;
    groupProtocolControlInfo?: Realm.Types.Dictionary<Realm.Types.Mixed>

}

export class IKeusGMGroupScheduleActionSchema extends Realm.Object<IKeusGMGroupScheduleActionSchema> {
    static embedded?: boolean = true;
    groupType?: string;
    groupIdentifier?: IKeusGMGroupIdentifierSchema;
    groupState?: IKeusGMApplianceSavedStateAction_savedStateSchema;

}

export class ISmartConsoleGMGroupButtonPropertiesSchema extends Realm.Object<ISmartConsoleGMGroupButtonPropertiesSchema> {
    static embedded?: boolean = true;
    groupId?: string;


}

// export class IKeusGMGroupSceneActionSchema extends Realm.Object<IKeusGMGroupSceneActionSchema> {
//     static embedded?: boolean = true;
//     groupType?: string;
//     groupIdentifier?: IKeusGMGroupIdentifierSchema
//     groupState?: IKeusGMApplianceSavedStateAction_savedStateSchema;


// }

export class IKeusGMGroupHomeInfoSchema extends Realm.Object<IKeusGMGroupHomeInfoSchema> {
    static embedded?: boolean = true;
    groupRoom?: string;
    groupSection?: string;

}
// export class IKeusGMGroupSyncInfo_syncRequestParamsSchema extends Realm.Object<IKeusGMGroupSyncInfo_syncRequestParamsSchema> {
//     static embedded?: boolean = true;
//     onOffProperties?: IOnOffTraitPropertiesSchema
//     modeProperties?: IModeControlTraitPropertiesSchema
//     fanSpeedProperties?: IFanSpeedControlTraitPropertiesSchema;
//     temperatureControlProperties?: ITemperatureControlTraitPropertiesSchema;
//     louverProperties?: ILouverControlTraitPropertiesSchema;
//     openCloseProperties?: IOpenCloseTraitPropertiesSchema
//     percentOpenProperties?: IPercentOpenTraitPropertiesSchema
//     openCloseRelayProperties?: IOpenCloseRelayTraitPropertiesSchema;
//     angularTiltProperties?: IAngularTiltTraitPropertiesSchema
//     tiltRelayProperties?: ITiltRelayTraitPropertiesSchema;
//     brightnessProperties?: IBrightnessTraitPropertiesSchema;
//     triggerProperties?: IPushTriggerTraitPropertiesSchema;
//     rgbColorProperties?: IRGBColorTraitPropertiesSchema;
//     rgbAddressableProperties?: IRGBAddrTraitPropertiesSchema;
//     rgbcolorProperties?: IRGBColorTraitPropertiesSchema;
//     rgbwwaProperties?: IRGBWWATraitPropertiesSchema;
//     recordingProperties?: ICameraRecordingTraitPropertiesSchema;
//     wwmixerProperties?: IWWMixerTraitPropertiesSchema;
//     forceDelete?: Realm.Types.Bool;

// }
// export class IKeusGMGroupSyncInfoSchema extends Realm.Object<IKeusGMGroupSyncInfoSchema> {
//     static embedded?: boolean = true;
//     syncStatus?: Realm.Types.Int;
//     syncRequestType?: Realm.Types.Int;
//     syncRequestId?: string;
//     syncRequestTime?: Realm.Types.Int;
//     syncRequestParams?: IKeusGMGroupSyncInfo_syncRequestParamsSchema;
//     jobTypeName?: string;
//     jobMessage?: string;

// }
// export class IKeusGMGroupStatusInfoSchema extends Realm.Object<IKeusGMGroupStatusInfoSchema> {
//     static embedded?: boolean = true;
//     isConfigured?: Realm.Types.Bool;
//     isHidden?: Realm.Types.Bool;
//     isHighPower?: Realm.Types.Bool;

// }
// export class IKeusGMGroupApplianceSyncInfoSchema extends Realm.Object<IKeusGMGroupApplianceSyncInfoSchema> {
//     static embedded?: boolean = true;
//     applianceInSync?: Realm.Types.Bool;
//     requestTime?: Realm.Types.Int;
//     requestType?: Realm.Types.Int;

// }
export class IKeusGMGroupApplianceInfoSchema extends Realm.Object<IKeusGMGroupApplianceInfoSchema> {
    static embedded?: boolean = true;
    applianceIdentifier?: Realm.Types.Dictionary<Realm.Types.Mixed>
    groupApplianceSyncInfo?: Realm.Types.Dictionary<Realm.Types.Mixed>

}

export class IKeusGMGroupIdentifierSchema extends Realm.Object<IKeusGMGroupIdentifierSchema> {
    static embedded?: boolean = true;
    groupId?: string;
}

// export class IKeusGMGroupVoiceInfoSchema extends Realm.Object<IKeusGMGroupVoiceInfoSchema> {
//     static embedded?: boolean = true;
//     discoverGroup?: Realm.Types.Bool;
//     groupVoiceName?: string;

// }
// export class IKeusGMGroupSavedStateActionSchema extends Realm.Object<IKeusGMGroupSavedStateActionSchema> {
//     static embedded?: boolean = true;
//     savedStateId?: string;
//     savedStateName?: string;
//     savedState?: IKeusGMApplianceSavedStateAction_savedStateSchema;
//     createdBy?: string;

// }
// export class IKeusGMGroupAdditionalInfoSchema extends Realm.Object<IKeusGMGroupAdditionalInfoSchema> {
//     static embedded?: boolean = true;
//     savedStateList: Realm.Types.List<IKeusGMGroupSavedStateActionSchema>;

// }
export class GMGroupIdentifierSchema extends Realm.Object<GMGroupIdentifierSchema> {
    static embedded?: boolean = true;
    groupId?: string;

}
export class IKeusGMGroupSchema extends Realm.Object<IKeusGMGroupSchema> {
    static primaryKey = "groupId";
    groupId: string;
    groupType?: string;
    groupCategory?: string;
    groupName?: string;
    groupIcon?: Realm.Types.Int;
    groupControlInfo?: IKeusGMGroupControlInfoSchema;
    groupHomeInfo?: IKeusGMGroupHomeInfoSchema
    groupSyncInfo?: string;
    groupStatusInfo?: Realm.Types.Dictionary<Realm.Types.Mixed>
    groupApplianceList: Realm.Types.List<IKeusGMGroupApplianceInfoSchema>
    groupActivityInfo?: Realm.Types.Dictionary<Realm.Types.Mixed>
    groupVoiceInfo?: Realm.Types.Dictionary<Realm.Types.Mixed>
    groupState?: string;
    groupProperties?: string;
    groupAdditionalInfo?: string;

}
// export class gmGroupPropertiesSchema extends Realm.Object<gmGroupPropertiesSchema> {
//     static embedded?: boolean = true;
//     onOffProperties?: IOnOffTraitPropertiesSchema;
//     modeProperties?: IModeControlTraitPropertiesSchema;
//     fanSpeedProperties?: IFanSpeedControlTraitPropertiesSchema;
//     temperatureControlProperties?: ITemperatureControlTraitPropertiesSchema;
//     louverProperties?: ILouverControlTraitPropertiesSchema;
//     openCloseProperties?: IOpenCloseTraitPropertiesSchema;
//     percentOpenProperties?: IPercentOpenTraitPropertiesSchema;
//     openCloseRelayProperties?: IOpenCloseRelayTraitPropertiesSchema;
//     angularTiltProperties?: IAngularTiltTraitPropertiesSchema;
//     tiltRelayProperties?: ITiltRelayTraitPropertiesSchema;
//     brightnessProperties?: IBrightnessTraitPropertiesSchema;
//     triggerProperties?: IPushTriggerTraitPropertiesSchema;
//     rgbColorProperties?: IRGBColorTraitPropertiesSchema;
//     rgbAddressableProperties?: IRGBAddrTraitPropertiesSchema;
//     rgbcolorProperties?: IRGBColorTraitPropertiesSchema;
//     rgbwwaProperties?: IRGBWWATraitPropertiesSchema;
//     recordingProperties?: ICameraRecordingTraitPropertiesSchema;
//     wwmixerProperties?: IWWMixerTraitPropertiesSchema;
// }
export class Methods {
    static async importGatewayData(realm: Realm) {
        try {
            console.log("============");
            //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

            const MongoClient = require('mongodb').MongoClient;

            const uri = 'mongodb://192.168.0.198:27017';
            const dbName = 'keus';
            const collectionName = 'gmgroups';


            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find({}).toArray();
            realm.write(() => {
                result.forEach((doc: any) => {
                    console.log(doc._id)
                    //doc.processing=[]
                    if(doc.groupSyncInfo != null){
                        doc.groupSyncInfo=JSON.stringify(doc.groupSyncInfo)
                        //doc.processing.push("groupSyncInfo");
                    }
                    if(doc.groupState != null){
                        doc.groupState=JSON.stringify(doc.groupState)
                        //doc.processing.push("groupState")
                    }
                    if(doc.groupProperties != null){
                        doc.groupProperties=JSON.stringify(doc.groupProperties);
                        //doc.processing.push("groupProperties");
                    }
                    if(doc.groupAdditionalInfo != null){
                        doc.groupAdditionalInfo=JSON.stringify(doc.groupAdditionalInfo)
                        //doc.processing.push("groupAdditionalInfo")
                    }
                    const realmActivity = realm.create(BaseSchemaName, {

                        groupId: doc.groupId,
                        groupType: doc.groupType,
                        groupCategory: doc.groupCategory,
                        groupName: doc.groupName,
                        groupIcon: doc.groupIcon,
                        processing:doc.processing,
                        groupControlInfo: doc.groupControlInfo,
                        groupHomeInfo: doc.groupHomeInfo,
                        groupSyncInfo: doc.groupSyncInfo,
                        groupStatusInfo: doc.groupStatusInfo,
                        groupApplianceList: doc.groupApplianceList,
                        groupActivityInfo: doc.groupActivityInfo,
                        groupVoiceInfo: doc.groupVoiceInfo,
                        groupAdditionalInfo: doc.groupAdditionalInfo,
                        groupState: doc.groupState,
                        groupProperties: doc.groupProperties
                    })
                    console.log(realmActivity)
                })

            })

        } catch (e) {
            return e;
        }
    }
    static async getGMGroupById(realm: Realm, groupId: string) {
        return realm.objectForPrimaryKey(BaseSchemaName, groupId);
    }
    static async deleteGMGroupById(realm: Realm, groupId: string) {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(BaseSchemaName, groupId))
        })
    }
    static async insertGroup(realm: Realm, doc: any) {
        //
        if(doc.groupSyncInfo != null){
            doc.groupSyncInfo=JSON.stringify(doc.groupSyncInfo)
            //doc.processing.push("groupSyncInfo");
        }
        if(doc.groupState != null){
            doc.groupState=JSON.stringify(doc.groupState)
            //doc.processing.push("groupState")
        }
        if(doc.groupProperties != null){
            doc.groupProperties=JSON.stringify(doc.groupProperties);
            //doc.processing.push("groupProperties");
        }
        if(doc.groupAdditionalInfo != null){
            doc.groupAdditionalInfo=JSON.stringify(doc.groupAdditionalInfo)
            //doc.processing.push("groupAdditionalInfo")
        }
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                
                groupId: doc.groupId,
                groupType: doc.groupType,
                groupCategory: doc.groupCategory,
                groupName: doc.groupName,
                groupIcon: doc.groupIcon,
                groupControlInfo: doc.groupControlInfo,
                groupHomeInfo: doc.groupHomeInfo,
                groupSyncInfo: doc.groupSyncInfo,
                groupStatusInfo: doc.groupStatusInfo,
                groupApplianceList: doc.groupApplianceList,
                groupActivityInfo: doc.groupActivityInfo,
                groupVoiceInfo: doc.groupVoiceInfo,
                groupAdditionalInfo: doc.groupAdditionalInfo,
                groupState: doc.groupState,
                groupProperties: doc.groupProperties,
            })
            console.log(realmActivity);
        })
    }
    static async getAllGroups(realm: Realm) {
        return realm.objects(BaseSchemaName);
    }
    static async getGMGroupsByIds(realm: Realm, applianceIds: Array<String>) {
        return realm.objects(BaseSchemaName).filtered('groupId IN $0', applianceIds);
    }
    static async getGMGroupsByRooms(realm: Realm, roomIds: Array<String>) {
        return realm.objects(BaseSchemaName).filtered('groupHomeInfo.groupRoom IN $0', roomIds);
    }
    static async getGMGroupsByGroupType(realm: Realm, gmgroupTypes: Array<string>) {
        return realm.objects(BaseSchemaName).filtered('groupType IN $0', gmgroupTypes)
    }
    static async updateGroup(realm: Realm, doc: any) {
        
        if(doc.groupSyncInfo != null){
            doc.groupSyncInfo=JSON.stringify(doc.groupSyncInfo)
            //newprocessing.push("groupSyncInfo");
        }
        if(doc.groupState != null){
            doc.groupState=JSON.stringify(doc.groupState)
            //newprocessing.push("groupState")
        }
        if(doc.groupProperties != null){
            doc.groupProperties=JSON.stringify(doc.groupProperties);
            //newprocessing.push("groupProperties");
        }
        if(doc.groupAdditionalInfo != null){
            doc.groupAdditionalInfo=JSON.stringify(doc.groupAdditionalInfo)
            //newprocessing.push("groupAdditionalInfo")
        }
        realm.write(() => {
            const realmActivity = realm.create(BaseSchemaName, {
                
                groupId: doc.groupId,
                groupType: doc.groupType,
                groupCategory: doc.groupCategory,
                groupName: doc.groupName,
                groupIcon: doc.groupIcon,
                groupControlInfo: doc.groupControlInfo,
                groupHomeInfo: doc.groupHomeInfo,
                groupSyncInfo: doc.groupSyncInfo,
                groupStatusInfo: doc.groupStatusInfo,
                groupApplianceList: doc.groupApplianceList,
                groupActivityInfo: doc.groupActivityInfo,
                groupVoiceInfo: doc.groupVoiceInfo,
                groupAdditionalInfo: doc.groupAdditionalInfo,
                groupState: doc.groupState,
                groupProperties: doc.groupProperties,
            }, Realm.UpdateMode.Modified)
            console.log(realmActivity);
            
        })
    }
    static async updateGroupHomeInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupHomeInfo = data.groupHomeInfo;
        })
    }
    static async updateGroupControlInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupControlInfo = data.groupControlInfo;
        })
    }
    static async updateGroupName(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupName = data.groupName;
        })
    }
    static async updateGroupVoiceInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupVoiceInfo = data.groupVoiceInfo;
        })
    }
    static async updateGroupApplianceList(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupApplianceList = data.groupApplianceList;
        })
    }
    static async updateGroupSyncInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupSyncInfo = JSON.stringify(data.groupSyncInfo);
            
        })
    }
    static async updateGroupProperties(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupProperties = JSON.stringify(data.groupProperties);
        })
    }
    static async updateGroupStateAndActivityInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupState = JSON.stringify(data.groupState);
            gmgroup.groupActivityInfo = data.groupActivityInfo;
        })
    }
    static async updateGroupAdditionalInfo(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupAdditionalInfo = JSON.stringify(data.groupAdditionalInfo);
        })
    }
    static async cleanGMApplianceGroup(realm: Realm,data:any) {
        const gmgroups=realm.objects(BaseSchemaName).filtered('groupId == $0',data.applianceGroupInfo.groupId);
        realm.write(()=>{
            gmgroups.forEach((gmgroup:any)=>{
                gmgroup.groupApplianceList=gmgroup.groupApplianceList.filter((groupAppliance:any)=>{
                    return groupAppliance.applianceIdentifier != data.applianceIdentifier
                })
            })
        })
    }
    static async updateGroupIcon(realm: Realm, data: any) {
        realm.write(() => {
            const gmgroup: any = realm.objectForPrimaryKey(BaseSchemaName, data.groupId);
            gmgroup.groupIcon = data.groupIcon;
        })
    }
    static async getGMGroupBulkUpdateQuery(realm: Realm) {

    }
    static async bulkWrite(realm: Realm,operationList: Array<any>) {
        operationList.forEach((operation)=>{
            let gmgroup=realm.objectForPrimaryKey(BaseSchemaName,operation.updateOne.filter.groupId)
            realm.write(()=>{
                Object.keys(operation.updateOne.update.$set).forEach((field)=>{
                    let value=operation.updateOne.update.$set[field];
                    if((field == "groupSyncInfo" || field == "groupState" || field == "groupProperties" || field == "groupAdditionalInfo") && value != null){
                        gmgroup[field]=JSON.stringify(value)
                    }else{
                        gmgroup[field]=value
                    }
                })
            })
        })
    }
}
export const ModelsList = [
    IKeusGMGroupSchema,
    IKeusGMApplianceIdentifierSchema, 
    IKeusGMGroupControlInfoSchema,  IKeusGMGroupApplianceInfoSchema, IKeusGMGroupHomeInfoSchema,
    // IAirConditionerApplianceStateSchema, IAirConditionerAppliancePropertiesSchema,
    // IBlindsApplianceStateSchema, IBlindsAppliancePropertiesSchema,
    // IBlindsPercentApplianceStateSchema, IBlindsPercentAppliancePropertiesSchema,
    // IBlindsPercentRelayApplianceStateSchema, IBlindsPercentRelayAppliancePropertiesSchema,
    // IBlindsRelayApplianceStateSchema, IBlindsRelayAppliancePropertiesSchema,
    // IBlindsTiltApplianceStateSchema, IBlindsTiltAppliancePropertiesSchema,
    // IBlindsTiltRelayApplianceStateSchema, IBlindsTiltRelayAppliancePropertiesSchema,
    // IDimmerApplianceStateSchema, IDimmerAppliancePropertiesSchema,
    // IPushTriggerApplianceStateSchema, IPushTriggerAppliancePropertiesSchema,
    // IRgbAddressableStateSchema, IRgbAddressablePropertiesSchema,
    // IRGBColorApplianceStateSchema, IRGBColorAppliancePropertiesSchema,
    // IRGBWWAApplianceStateSchema, IRGBWWAAppliancePropertiesSchema,
    // ISwitchApplianceStateSchema, ISwitchAppliancePropertiesSchem,
    // IUnifiCameraApplianceStateSchema, IUnifiCameraAppliancePropertiesSchema,
    // IWWMixerApplianceStateSchema, IWWMixerAppliancePropertiesSchema,
    // IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema,
    // IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema,
    // ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema,
    // IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema,
    // ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema,
    // IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema,
    // IModeControlTraitPropertiesSchema, IModeControlTraitStateSchema,
    // IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema,
    // IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema,
    // IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema,
    // IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema,
    // IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema,
    // IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema,
    // IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema,
    // ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema,
    // ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema,
    // ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema,
    // IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema,
    // IEmbeddedSwitchAppliancePropertiesSchema
]