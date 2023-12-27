"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusGMApplianceSchema = exports.IKeusGMApplianceHomeInfoSchema = exports.IKeusGMApplianceGroupInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { IActivitySourceInfoSchema } from "../activities"
// import { IKeusAirConditionerApplianceControlInfoSchema, IAirConditionerApplianceStateSchema, IAirConditionerAppliancePropertiesSchema } from "../../appliance-types/airconditioner"
// import { IBlindsApplianceStateSchema, IBlindsAppliancePropertiesSchema, IKZBlindsApplianceControlInfoSchema } from "../../appliance-types/blinds"
// import { IBlindsPercentApplianceStateSchema, IBlindsPercentAppliancePropertiesSchema, IKZBlindsPercentApplianceControlInfoSchema } from "../../appliance-types/blindspercent"
// import { IBlindsPercentRelayApplianceStateSchema, IBlindsPercentRelayAppliancePropertiesSchema, IKZBlindsPercentRelayApplianceControlInfoSchema } from "../../appliance-types/blindspercentrelay"
// import { IBlindsRelayApplianceStateSchema, IBlindsRelayAppliancePropertiesSchema, IKZBlindsRelayApplianceControlInfoSchema } from "../../appliance-types/blindsrelay"
// import { IBlindsTiltApplianceStateSchema, IBlindsTiltAppliancePropertiesSchema, IKZBlindsTiltApplianceControlInfoSchema } from "../../appliance-types/blindstilt"
// import { IBlindsTiltRelayApplianceStateSchema, IBlindsTiltRelayAppliancePropertiesSchema, IKZBlindsTiltRelayApplianceControlInfoSchema } from "../../appliance-types/blindstiltrelay"
// import { IDimmerApplianceStateSchema, IDimmerAppliancePropertiesSchema, IKZDimmerApplianceControlInfoSchema } from "../../appliance-types/dimmer"
// import { IPushTriggerApplianceStateSchema, IPushTriggerAppliancePropertiesSchema, IKZPushTriggerApplianceControlInfoSchema } from "../../appliance-types/push-trigger"
// import { IRgbAddressableStateSchema, IRgbAddressablePropertiesSchema, IKZRGBAddressableApplianceControlInfoSchema } from "../../appliance-types/rgbaddressable"
// import { IRGBColorApplianceStateSchema, IRGBColorAppliancePropertiesSchema, IKZRGBColorApplianceControlInfoSchema } from "../../appliance-types/rgbcolor"
// import { IRGBWWAApplianceStateSchema, IRGBWWAAppliancePropertiesSchema, IKZRGBWWAApplianceControlInfoSchema } from "../../appliance-types/rgbwwa"
// import { ISwitchApplianceStateSchema, ISwitchAppliancePropertiesSchem, IKZSwitchApplianceControlInfoSchema } from "../../appliance-types/switch"
// import { IUnifiCameraApplianceStateSchema, IUnifiCameraAppliancePropertiesSchema, IUnifiCameraApplianceControlInfoSchema } from "../../appliance-types/unificamera"
// import { IWWMixerApplianceStateSchema, IWWMixerAppliancePropertiesSchema, IKZWWMixerApplianceControlInfoSchema } from "../../appliance-types/wwmixer"
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema } from "../../trait-types/angulartilt"
// import { IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema } from "../../trait-types/brightness"
// import { ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema } from "../../trait-types/camerarecording"
// import { IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema } from "../../trait-types/fanspeedcontrol"
// import { ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema } from "../../trait-types/louvercontrol"
// import { IModeControlTraitStateSchema, IModeControlTraitPropertiesSchema } from "../../trait-types/modecontrol"
// import { IOnOffTraitStateSchema, IOnOffTraitPropertiesSchema } from "../../trait-types/onoff"
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
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMApplianceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusGMApplianceHomeInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceHomeInfoSchema",
    properties: {
      applianceRoom: {
        type: "string",
        optional: true
      },
      applianceSection: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
// export class IKeusGMApplianceSyncInfo_syncRequestParamsSchema={
//     name:"IKeusGMApplianceSyncInfo_syncRequestParams",
//     embedded:true,
//     properties:{

//     }
// }
// export class IKeusGMApplianceSyncInfoSchema extends Realm.Object<IKeusGMApplianceSyncInfoSchema> {
//     static embedded?: boolean = true;
//     syncStatus?: Realm.Types.Int;
//     syncRequestType?: Realm.Types.Int;
//     syncRequestId?: string;
//     syncRequestTime?: Realm.Types.Int;
//     syncRequestParams?: Realm.Types.Dictionary<Realm.Types.Mixed>;
//     jobTypeName?: string;
//     jobMessage?: string;

// }
// export class IKeusGMApplianceStatusInfoSchema extends Realm.Object<IKeusGMApplianceStatusInfoSchema> {
//     static embedded?: boolean = true;
//     isConfigured?: Realm.Types.Bool;
//     isHidden?: Realm.Types.Bool;

// }
exports.IKeusGMApplianceHomeInfoSchema = IKeusGMApplianceHomeInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceGroupInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceGroupInfoSchema",
    properties: {
      inGroup: {
        type: "bool",
        optional: true
      },
      groupId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
// export class IKeusGMApplianceVoiceInfoSchema extends Realm.Object<IKeusGMApplianceVoiceInfoSchema> {
//     static embedded?: boolean = true;
//     discoverAppliance?: Realm.Types.Bool;
//     applianceVoiceName?: string;

// }
// export class IKeusGMApplianceSceneActionSchema extends Realm.Object<IKeusGMApplianceSceneActionSchema> {
//     static embedded?: boolean = true;
//     applianceType?: string;
//     applianceIdentifier?: IKeusGMApplianceIdentifierSchema;
//     /////////////////////////////////////
//     applianceState?: IKeusGMApplianceSavedStateAction_savedStateSchema;

// }
// export class IKeusGMApplianceScheduleActionSchema extends Realm.Object<IKeusGMApplianceScheduleActionSchema> {
//     static embedded?: boolean = true;
//     applianceType?: string;
//     applianceIdentifier?: IKeusGMApplianceIdentifierSchema;
//     applianceState?: IKeusGMApplianceSavedStateAction_savedStateSchema;

// }

// export class IKeusGMApplianceControlInfo_applianceProtocolControlInfo_applianceTypeControlInfoSchema={
//     name:"IKeusGMApplianceControlInfo_applianceProtocolControlInfo_applianceTypeControlInfo",
//     properties:{
//         // indoorUnitId:{type:"string",optional:true},
//         // cameraId:{type:"string",optional:true},
//         // blindPortId:{type:"int",optional:true},
//         // dimmerPortId:{type:"int",optional:true},
//         // pushTriggerPortId:{type:"int",optional:true},
//         // addressablePortId:{type:"int",optional:true},
//         // redPortId:{type:"int",optional:true},
//         // greenPortId:{type:"int",optional:true},
//         // bluePortId:{type:"int",optional:true},
//         // warmWhitePortId:{type:"int",optional:true},
//         // coolWhitePortId:{type:"int",optional:true},
//         // amberPortId:{type:"int",optional:true},
//         // switchPortId:{type:"int",optional:true},
//         iAirConditionerApplianceDeviceInfo:{type:"object",objectType:"IKeusAirConditionerApplianceControlInfo",optional:true},
//         iKZBlindsApplianceControlInfo:{type:"object",objectType:"IKZBlindsApplianceControlInfo",optional:true},
//         iKZBlindsPercentApplianceControlInfo:{type:"object",objectType:"IKZBlindsPercentApplianceControlInfo",optional:true},
//         iKZBlindsPercentRelayApplianceControlInfo:{type:"object",objectType:"IKZBlindsPercentRelayApplianceControlInfo",optional:true},
//         iKZBlindsRelayApplianceControlInfo:{type:"object",objectType:"IKZBlindsRelayApplianceControlInfo",optional:true},
//         iKZBlindsTiltApplianceControlInfo:{type:"object",objectType:"IKZBlindsTiltApplianceControlInfo",optional:true},
//         iKZBlindsTiltRelayApplianceControlInfo:{type:"object",objectType:"IKZBlindsTiltRelayApplianceControlInfo",optional:true},
//         iKZDimmerApplianceControlInfo:{type:"object",objectType:"IKZDimmerApplianceControlInfo",optional:true},
//         iKZPushTriggerApplianceControlInfo:{type:"object",objectType:"IKZPushTriggerApplianceControlInfo",optional:true},
//         iKZRGBAddressableApplianceControlInfo:{type:"object",objectType:"IKZRGBAddressableApplianceControlInfo",optional:true},
//         iKZRGBColorApplianceControlInfo:{type:"object",objectType:"IKZRGBColorApplianceControlInfo",optional:true},
//         iKZRGBWWAApplianceControlInfo:{type:"object",objectType:"IKZRGBWWAApplianceControlInfo",optional:true},
//         iKZSwitchApplianceControlInfo:{type:"object",objectType:"IKZSwitchApplianceControlInfo",optional:true},
//         iUnifiCameraApplianceControlInfo:{type:"object",objectType:"IUnifiCameraApplianceControlInfo",optional:true},
//         iKZWWMixerApplianceControlInfo:{type:"object",objectType:"IKZWWMixerApplianceControlInfo",optional:true}
//     }
// }
// export class IKeusGM_applianceProtocolControlInfoSchema extends Realm.Object<IKeusGM_applianceProtocolControlInfoSchema> {
//     static embedded?: boolean = true;
//     applianceId?: Realm.Types.Int;
//     applianceTypeControlInfo?: Realm.Types.Dictionary<Realm.Types.Int>;
//     applianceSectionId?: Realm.Types.Int;
//     deviceId?: string;

// }
// export class IKeusGMApplianceControlInfoSchema extends Realm.Object<IKeusGMApplianceControlInfoSchema> {
//     static embedded?: boolean = true;
//     applianceControlType?: string;
//     applianceProtocolControlInfo?: IKeusGM_applianceProtocolControlInfoSchema;

// }
// export class IKeusGMApplianceSavedStateAction_savedStateSchema extends Realm.Object<IKeusGMApplianceSavedStateAction_savedStateSchema> {
//     static embedded?: boolean = true;
//     onOffState?: IOnOffTraitStateSchema;
//     modeState?: IModeControlTraitStateSchema;
//     fanSpeedState?: IFanSpeedControlTraitStateSchema;
//     temperatureControlState?: ITemperatureControlTraitStateSchema;
//     louverState?: ILouverControlTraitStateSchema;
//     openCloseState?: IOpenCloseTraitStateSchema;
//     percentOpenState?: IPercentOpenTraitStateSchema;
//     openCloseRelayState?: IOpenCloseRelayTraitStateSchema;
//     angularTiltState?: IAngularTiltTraitStateSchema;
//     tiltRelayState?: ITiltRelayTraitStateSchema;
//     brightnessState?: IOnOffTraitStateSchema;
//     rgbColorState?: IRGBColorTraitStateSchema;
//     rgbAddressableState?: IRGBAddrTraitStateSchema;
//     rgbcolorState?: IRGBColorTraitStateSchema
//     rgbwwaState?: IRGBWWATraitStateSchema;
//     recordingState?: ICameraRecordingTraitStateSchema;
//     wwmixerState?: IWWMixerTraitStateSchema;

// }
// export class IKeusGMApplianceSavedStateActionSchema extends Realm.Object<IKeusGMApplianceSavedStateActionSchema> {
//     static embedded?: boolean = true;
//     savedStateId?: string;
//     savedStateName?: string;
//     savedState?: IKeusGMApplianceSavedStateAction_savedStateSchema
//     createdBy?: string;

// }
// export class IKeusGMApplianceAdditionalInfoSchema extends Realm.Object<IKeusGMApplianceAdditionalInfoSchema> {
//     static embedded?: boolean = true;
//     savedStateList: Realm.Types.List<IKeusGMApplianceSavedStateActionSchema>;
//     recalibrationTimeList: Realm.Types.List<Realm.Types.Int>;

// }
// export class IKeusGMApplianceIdentifierSchema extends Realm.Object<IKeusGMApplianceIdentifierSchema> {
//     static embedded?: boolean = true;
//     applianceId?: string;

// }

// export const appliancePropertiesCollectionMap: any = {
//     SWITCH: "iSwitchApplianceProperties",
//     DIMMER: "iDimmerApplianceProperties",
//     WWMIXER: "iWWMixerApplianceProperties",
//     RGBCOLOR: "iRGBColorApplianceProperties",
//     RGBWWA: "iRGBWWAApplianceProperties",
//     RGBADDRESSABLE: "iRgbAddressableProperties",
//     PUSHTRIGGER: "iPushTriggerApplianceProperties",
//     AIRCONDITIONER: "iAirConditionerApplianceProperties",
//     BLINDS: "iBlindsApplianceProperties",
//     BLINDSRELAY: "iBlindsRelayApplianceProperties",
//     BLINDSPERCENT: "iBlindsPercentApplianceProperties",
//     BLINDSPERCENTRELAY: "iBlindsPercentRelayApplianceProperties",
//     BLINDSTILT: "iBlindsTiltApplianceProperties",
//     BLINDSTILTRELAY: "iBlindsTiltRelayApplianceProperties",
//     UNIFICAMERA: "iUnifiCameraApplianceProperties",
// }
// export class appliancePropertiesCollectionSchema extends Realm.Object<appliancePropertiesCollectionSchema> {
//     static embedded?: boolean = true;
//     SWITCH?: IEmbeddedSwitchAppliancePropertiesSchema;
//     DIMMER?: IDimmerAppliancePropertiesSchema;
//     WWMIXER?: IWWMixerAppliancePropertiesSchema;
//     RGBCOLOR?: IRGBColorAppliancePropertiesSchema;
//     RGBWWA?: IRGBWWAAppliancePropertiesSchema;
//     RGBADDRESSABLE?: IRgbAddressablePropertiesSchema;
//     PUSHTRIGGER?: IPushTriggerAppliancePropertiesSchema;
//     AIRCONDITIONER?: IAirConditionerAppliancePropertiesSchema;
//     BLINDS?: IBlindsAppliancePropertiesSchema;
//     BLINDSRELAY?: IBlindsRelayAppliancePropertiesSchema;
//     BLINDSPERCENT?: IBlindsPercentAppliancePropertiesSchema;
//     BLINDSPERCENTRELAY?: IBlindsPercentRelayAppliancePropertiesSchema;
//     BLINDSTILT?: IBlindsTiltAppliancePropertiesSchema;
//     BLINDSTILTRELAY?: IBlindsTiltRelayAppliancePropertiesSchema;
//     UNIFICAMERA?: IUnifiCameraAppliancePropertiesSchema;

// }
// export const applianceStateCollectionMap: any = {
//     SWITCH: "iSwitchApplianceState",
//     DIMMER: "iDimmerApplianceState",
//     WWMIXER: "iWWMixerApplianceState",
//     RGBCOLOR: "iRGBColorApplianceState",
//     RGBWWA: "iRGBWWAApplianceState",
//     RGBADDRESSABLE: "iRgbAddressableState",
//     PUSHTRIGGER: "iPushTriggerApplianceState",
//     AIRCONDITIONER: "iAirConditionerApplianceState",
//     BLINDS: "iBlindsApplianceState",
//     BLINDSRELAY: "iBlindsRelayApplianceState",
//     BLINDSPERCENT: "iBlindsPercentApplianceState",
//     BLINDSPERCENTRELAY: "iBlindsPercentRelayApplianceState",
//     BLINDSTILT: "iBlindsTiltApplianceState",
//     BLINDSTILTRELAY: "iBlindsTiltRelayApplianceState",
//     UNIFICAMERA: "iUnifiCameraApplianceState",
// }

// export class applianceStateCollectionSchema extends Realm.Object<applianceStateCollectionSchema> {
//     static embedded?: boolean = true;
//     SWITCH?: ISwitchApplianceStateSchema;
//     DIMMER?: IDimmerApplianceStateSchema;
//     WWMIXER?: IWWMixerApplianceStateSchema;
//     RGBCOLOR?: IRGBColorApplianceStateSchema;
//     RGBWWA?: IRGBWWAApplianceStateSchema;
//     RGBADDRESSABLE?: IRgbAddressableStateSchema;
//     PUSHTRIGGER?: IPushTriggerApplianceStateSchema;
//     AIRCONDITIONER?: IAirConditionerApplianceStateSchema;
//     BLINDS?: IBlindsApplianceStateSchema;
//     BLINDSRELAY?: IBlindsRelayApplianceStateSchema;
//     BLINDSPERCENT?: IBlindsPercentApplianceStateSchema;
//     BLINDSPERCENTRELAY?: IBlindsPercentRelayApplianceStateSchema;
//     BLINDSTILT?: IBlindsTiltApplianceStateSchema;
//     BLINDSTILTRELAY?: IBlindsTiltRelayApplianceStateSchema;
//     UNIFICAMERA?: IUnifiCameraApplianceStateSchema;

// }
exports.IKeusGMApplianceGroupInfoSchema = IKeusGMApplianceGroupInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSchema extends _realm.default.Object {
  static primaryKey = "applianceId";
  static schema = {
    name: "IKeusGMApplianceSchema",
    properties: {
      applianceId: {
        type: "string"
      },
      applianceType: {
        type: "string",
        optional: true
      },
      applianceCategory: {
        type: "string",
        optional: true
      },
      applianceName: {
        type: "string",
        optional: true
      },
      applianceHomeInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceHomeInfoSchema"
      },
      applianceSyncInfo: {
        type: "string",
        optional: true
      },
      applianceStatusInfo: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      applianceGroupInfo: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      applianceActivityInfo: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      applianceVoiceInfo: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      applianceIcon: {
        type: "int",
        optional: true
      },
      applianceState: {
        type: "string",
        optional: true
      },
      applianceProperties: {
        type: "string",
        optional: true
      },
      applianceControlInfo: {
        type: "string",
        optional: true
      },
      applianceAdditionalInfo: {
        type: "string",
        optional: true
      }
    },
    primaryKey: "applianceId"
  };
}
exports.IKeusGMApplianceSchema = IKeusGMApplianceSchema;
class Methods {
  static async importGatewayData(realm) {
    console.log("============");
    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb://192.168.0.198:27017';
    const dbName = 'brijeshSir';
    const collectionName = 'gmappliances';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    realm.write(() => {
      result.forEach(doc => {
        console.log(doc._id);
        // let groupTransformOptions = ["groupState", "groupProperties"]
        // let transformValues = ["groupType", "groupType"]
        if (doc.applianceSyncInfo != null) doc.applianceSyncInfo = JSON.stringify(doc.applianceSyncInfo);
        if (doc.applianceState != null) doc.applianceState = JSON.stringify(doc.applianceState);
        if (doc.applianceProperties != null) doc.applianceProperties = JSON.stringify(doc.applianceProperties);
        if (doc.applianceControlInfo != null) doc.applianceControlInfo = JSON.stringify(doc.applianceControlInfo);
        if (doc.applianceAdditionalInfo != null) doc.applianceAdditionalInfo = JSON.stringify(doc.applianceAdditionalInfo);
        const realmActivity = realm.create(BaseSchemaName, {
          // transformValues: transformValues,
          // transformOptions: groupTransformOptions,
          applianceId: doc.applianceId,
          applianceType: doc.applianceType,
          applianceCategory: doc.applianceCategory,
          applianceName: doc.applianceName,
          applianceHomeInfo: doc.applianceHomeInfo,
          applianceSyncInfo: doc.applianceSyncInfo,
          applianceStatusInfo: doc.applianceStatusInfo,
          applianceGroupInfo: doc.applianceGroupInfo,
          applianceActivityInfo: doc.applianceActivityInfo,
          applianceVoiceInfo: doc.applianceVoiceInfo,
          applianceIcon: doc.applianceIcon,
          applianceState: doc.applianceState,
          applianceProperties: doc.applianceProperties,
          applianceControlInfo: doc.applianceControlInfo,
          applianceAdditionalInfo: doc.applianceAdditionalInfo
        });
        console.log(realmActivity);
      });
    });
  }
  static async getApplianceById(realm, applianceId) {
    return realm.objectForPrimaryKey(BaseSchemaName, applianceId);
  }
  static async insertAppliance(realm, doc) {
    // let groupTransformOptions = ["groupState", "groupProperties"]
    // let transformValues = ["groupType", "groupType"]
    if (doc.applianceSyncInfo != null) doc.applianceSyncInfo = JSON.stringify(doc.applianceSyncInfo);
    if (doc.applianceState != null) doc.applianceState = JSON.stringify(doc.applianceState);
    if (doc.applianceProperties != null) doc.applianceProperties = JSON.stringify(doc.applianceProperties);
    if (doc.applianceControlInfo != null) doc.applianceControlInfo = JSON.stringify(doc.applianceControlInfo);
    if (doc.applianceAdditionalInfo != null) doc.applianceAdditionalInfo = JSON.stringify(doc.applianceAdditionalInfo);
    realm.write(() => {
      realm.create(BaseSchemaName, {
        // transformValues: transformValues,
        // transformOptions: groupTransformOptions,
        applianceId: doc.applianceId,
        applianceType: doc.applianceType,
        applianceCategory: doc.applianceCategory,
        applianceName: doc.applianceName,
        applianceHomeInfo: doc.applianceHomeInfo,
        applianceSyncInfo: doc.applianceSyncInfo,
        applianceStatusInfo: doc.applianceStatusInfo,
        applianceGroupInfo: doc.applianceGroupInfo,
        applianceActivityInfo: doc.applianceActivityInfo,
        applianceVoiceInfo: doc.applianceVoiceInfo,
        applianceIcon: doc.applianceIcon,
        applianceState: doc.applianceState,
        applianceProperties: doc.applianceProperties,
        applianceControlInfo: doc.applianceControlInfo,
        applianceAdditionalInfo: doc.applianceAdditionalInfo
      });
    });
  }
  static async getAllAppliances(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async getAppliancesByIds(realm, applianceIds) {
    // const query = applianceIds.map((applianceId: any) => `applianceId == '${applianceId}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`(${query})`);
    return realm.objects(BaseSchemaName).filtered('applianceId IN $0', applianceIds);
  }
  static async getAppliancesByRooms(realm, roomIds) {
    // const query = roomIds.map((roomId: any) => `applianceHomeInfo.applianceRoom == '${roomId}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`(${query})`);
    return realm.objects(BaseSchemaName).filtered('applianceHomeInfo.applianceRoom IN $0', roomIds);
  }
  static async updateApplianceName(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceName = data.applianceName;
    });
  }
  static async updateApplianceIcon(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceIcon = data.applianceIcon;
    });
  }
  static async updateApplianceAdditionalInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceAdditionalInfo = JSON.stringify(data.applianceAdditionalInfo);
    });
  }
  static async updateApplianceHomeInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceHomeInfo = data.applianceHomeInfo;
    });
  }
  static async updateApplianceProperties(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceProperties = JSON.stringify(data.appliancePropsObj);
    });
  }
  static async updateApplianceControlInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceControlInfo = JSON.stringify(data.applianceControlInfo);
    });
  }
  static async updateAppliance(realm, doc) {
    // let groupTransformOptions = ["groupState", "groupProperties"]
    // let transformValues = ["groupType", "groupType"]
    if (doc.applianceSyncInfo != null) doc.applianceSyncInfo = JSON.stringify(doc.applianceSyncInfo);
    if (doc.applianceState != null) doc.applianceState = JSON.stringify(doc.applianceState);
    if (doc.applianceProperties != null) doc.applianceProperties = JSON.stringify(doc.applianceProperties);
    if (doc.applianceControlInfo != null) doc.applianceControlInfo = JSON.stringify(doc.applianceControlInfo);
    if (doc.applianceAdditionalInfo != null) doc.applianceAdditionalInfo = JSON.stringify(doc.applianceAdditionalInfo);
    realm.write(() => {
      realm.create(BaseSchemaName, {
        // transformValues: transformValues,
        // transformOptions: groupTransformOptions,
        applianceId: doc.applianceId,
        applianceType: doc.applianceType,
        applianceCategory: doc.applianceCategory,
        applianceName: doc.applianceName,
        applianceHomeInfo: doc.applianceHomeInfo,
        applianceSyncInfo: doc.applianceSyncInfo,
        applianceStatusInfo: doc.applianceStatusInfo,
        applianceGroupInfo: doc.applianceGroupInfo,
        applianceActivityInfo: doc.applianceActivityInfo,
        applianceVoiceInfo: doc.applianceVoiceInfo,
        applianceIcon: doc.applianceIcon,
        applianceState: doc.applianceState,
        applianceProperties: doc.applianceProperties,
        applianceControlInfo: doc.applianceControlInfo,
        applianceAdditionalInfo: doc.applianceAdditionalInfo
      }, _realm.default.UpdateMode.Modified);
    });
  }
  static async updateApplianceVoiceInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceVoiceInfo = data.applianceVoiceInfo;
    });
  }
  static async updateApplianceGroupInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceGroupInfo = data.applianceGroupInfo;
    });
  }
  static async updateApplianceStateAndActivityInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceState = JSON.stringify(data.applianceState);
      appliance.applianceActivityInfo = data.applianceActivityInfo;
    });
  }
  static async updateApplianceGroupInfoAndProperties(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceGroupInfo = data.applianceGroupInfo;
      appliance.applianceProperties = JSON.stringify(data.applianceProperties);
    });
  }
  static async deleteApplianceById(realm, applianceId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, applianceId));
    });
  }
  static async updateApplianceSyncInfo(realm, data) {
    realm.write(() => {
      let appliance = realm.objectForPrimaryKey(BaseSchemaName, data.applianceId);
      appliance.applianceSyncInfo = JSON.stringify(data.applianceSyncInfo);
    });
  }
  static async getAppliancesByGMGroup(realm, groupId) {
    return realm.objects(BaseSchemaName).filtered('applianceGroupInfo.inGroup==true AND applianceGroupInfo.groupId==$0', groupId);
  }
  static async getAppliancesByCategory(realm, applCategoryList) {
    // const query = applCategoryList.map((applCategory: any) => `applianceCategory == '${applCategory}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`(${query})`);
    return realm.objects(BaseSchemaName).filtered('applianceCategory IN $0', applCategoryList);
  }
  static async getAppliancesByCategoryAndSecurityAccess(realm, data) {
    // return realm.objects(BaseSchemaName).filtered('applianceId IN $0', securityApplianceIds);
    // return realm.objects(BaseSchemaName).filtered('applianceCategory IN $0', applCategoryList);
    // const query1 = realm.objects(BaseSchemaName).filtered('applianceId IN $0', securityApplianceIds);
    // const query2 = realm.objects(BaseSchemaName).filtered('applianceCategory IN $0', applCategoryList);
    return realm.objects(BaseSchemaName).filtered('applianceId == $0 AND applianceCategory == $1',...Object.values(data));
    // const realmQuery = Object.entries(data)
    // .map(([field, value]) => `${field} IN ${JSON.stringify(value)}`)
    // .join(' AND ');
    // //console.log(realmQuery)
    // return realm.objects(BaseSchemaName).filtered('applianceId IN ["qGolws6E","QOauJoiR"]');

  }
  static async getAppliancesByNotPartOfCategory(realm, applCategoryList) {
    return realm.objects(BaseSchemaName).filtered('NOT applianceCategory IN $0', applCategoryList);
  }
  static async getGMApplianceBulkUpdateQuery(realm) {}
  static async bulkWrite(realm) {}
  static async getApplianceByCategories(realm, applianceCategories) {
    return realm.objects(BaseSchemaName).filtered('applianceCategory IN $0', applianceCategories);
  }
  static async getApplianceByTypes(realm, applianceTypes) {
    // const query = applianceTypes.map((applianceType: any) => `applianceType == '${applianceType}'`).join(' OR ');
    // return realm.objects(BaseSchemaName).filtered(`(${query})`);
    return realm.objects(BaseSchemaName).filtered('applianceType IN $0', applianceTypes);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGMApplianceSchema, IKeusGMApplianceHomeInfoSchema, IKeusGMApplianceGroupInfoSchema
// IActivitySourceInfoSchema,  IKeusGM_applianceProtocolControlInfoSchema, IKeusGMApplianceControlInfoSchema, IKeusGMApplianceSavedStateActionSchema, IKeusGMApplianceAdditionalInfoSchema, IKeusGMApplianceIdentifierSchema, appliancePropertiesCollectionSchema, applianceStateCollectionSchema, IKeusGMApplianceSavedStateAction_savedStateSchema,
// IKeusAirConditionerApplianceControlInfoSchema, IAirConditionerApplianceStateSchema, IAirConditionerAppliancePropertiesSchema,
// IBlindsApplianceStateSchema, IBlindsAppliancePropertiesSchema, IKZBlindsApplianceControlInfoSchema,
// IBlindsPercentApplianceStateSchema, IBlindsPercentAppliancePropertiesSchema, IKZBlindsPercentApplianceControlInfoSchema,
// IBlindsPercentRelayApplianceStateSchema, IBlindsPercentRelayAppliancePropertiesSchema, IKZBlindsPercentRelayApplianceControlInfoSchema,
// IBlindsRelayApplianceStateSchema, IBlindsRelayAppliancePropertiesSchema, IKZBlindsRelayApplianceControlInfoSchema,
// IBlindsTiltApplianceStateSchema, IBlindsTiltAppliancePropertiesSchema, IKZBlindsTiltApplianceControlInfoSchema,
// IBlindsTiltRelayApplianceStateSchema, IBlindsTiltRelayAppliancePropertiesSchema, IKZBlindsTiltRelayApplianceControlInfoSchema,
// IDimmerApplianceStateSchema, IDimmerAppliancePropertiesSchema, IKZDimmerApplianceControlInfoSchema,
// IPushTriggerApplianceStateSchema, IPushTriggerAppliancePropertiesSchema, IKZPushTriggerApplianceControlInfoSchema,
// IRgbAddressableStateSchema, IRgbAddressablePropertiesSchema, IKZRGBAddressableApplianceControlInfoSchema,
// IRGBColorApplianceStateSchema, IRGBColorAppliancePropertiesSchema, IKZRGBColorApplianceControlInfoSchema,
// IRGBWWAApplianceStateSchema, IRGBWWAAppliancePropertiesSchema, IKZRGBWWAApplianceControlInfoSchema,
// ISwitchApplianceStateSchema, ISwitchAppliancePropertiesSchem, IKZSwitchApplianceControlInfoSchema,
// IUnifiCameraApplianceStateSchema, IUnifiCameraAppliancePropertiesSchema, IUnifiCameraApplianceControlInfoSchema,
// IWWMixerApplianceStateSchema, IWWMixerAppliancePropertiesSchema, IKZWWMixerApplianceControlInfoSchema,
// IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema,
// IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema,
// ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema,
// IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema,
// ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema,
// IModeControlTraitStateSchema, IModeControlTraitPropertiesSchema,
// IOnOffTraitStateSchema, IOnOffTraitPropertiesSchema,
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
// IEmbeddedSwitchAppliancePropertiesSchema,
];