"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applianceStateCollectionSchema = exports.applianceStateCollectionMap = exports.appliancePropertiesCollectionSchema = exports.appliancePropertiesCollectionMap = exports.ModelsList = exports.Methods = exports.IKeusGM_applianceProtocolControlInfoSchema = exports.IKeusGMApplianceVoiceInfoSchema = exports.IKeusGMApplianceSyncInfoSchema = exports.IKeusGMApplianceStatusInfoSchema = exports.IKeusGMApplianceSchema = exports.IKeusGMApplianceScheduleActionSchema = exports.IKeusGMApplianceSceneActionSchema = exports.IKeusGMApplianceSavedStateAction_savedStateSchema = exports.IKeusGMApplianceSavedStateActionSchema = exports.IKeusGMApplianceIdentifierSchema = exports.IKeusGMApplianceHomeInfoSchema = exports.IKeusGMApplianceGroupInfoSchema = exports.IKeusGMApplianceControlInfoSchema = exports.IKeusGMApplianceAdditionalInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _activities = require("../activities");
var _airconditioner = require("../../appliance-types/airconditioner");
var _blinds = require("../../appliance-types/blinds");
var _blindspercent = require("../../appliance-types/blindspercent");
var _blindspercentrelay = require("../../appliance-types/blindspercentrelay");
var _blindsrelay = require("../../appliance-types/blindsrelay");
var _blindstilt = require("../../appliance-types/blindstilt");
var _blindstiltrelay = require("../../appliance-types/blindstiltrelay");
var _dimmer = require("../../appliance-types/dimmer");
var _pushTrigger = require("../../appliance-types/push-trigger");
var _rgbaddressable = require("../../appliance-types/rgbaddressable");
var _rgbcolor = require("../../appliance-types/rgbcolor");
var _rgbwwa = require("../../appliance-types/rgbwwa");
var _switch = require("../../appliance-types/switch");
var _unificamera = require("../../appliance-types/unificamera");
var _wwmixer = require("../../appliance-types/wwmixer");
var _angulartilt = require("../../trait-types/angulartilt");
var _brightness = require("../../trait-types/brightness");
var _camerarecording = require("../../trait-types/camerarecording");
var _fanspeedcontrol = require("../../trait-types/fanspeedcontrol");
var _louvercontrol = require("../../trait-types/louvercontrol");
var _modecontrol = require("../../trait-types/modecontrol");
var _onoff = require("../../trait-types/onoff");
var _openclose = require("../../trait-types/openclose");
var _opencloserelay = require("../../trait-types/opencloserelay");
var _percentopen = require("../../trait-types/percentopen");
var _pushTrigger2 = require("../../trait-types/push-trigger");
var _rgbaddressable2 = require("../../trait-types/rgbaddressable");
var _rgbcolor2 = require("../../trait-types/rgbcolor");
var _rgbwwa2 = require("../../trait-types/rgbwwa");
var _swingcontrol = require("../../trait-types/swingcontrol");
var _temperaturecontrol = require("../../trait-types/temperaturecontrol");
var _tiltrelay = require("../../trait-types/tiltrelay");
var _wwmixer2 = require("../../trait-types/wwmixer");
var _zigbeeEmbeddedSwitch = require("../../device-categories/zigbee-embedded-switch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const BaseSchemaName = exports.BaseSchemaName = "IKeusGMApplianceSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusGMApplianceHomeInfoSchema extends _realm.default.Object {
  static embedded = false;
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
    embedded: false
  };
}
// export class IKeusGMApplianceSyncInfo_syncRequestParamsSchema={
//     name:"IKeusGMApplianceSyncInfo_syncRequestParams",
//     embedded:true,
//     properties:{

//     }
// }
exports.IKeusGMApplianceHomeInfoSchema = IKeusGMApplianceHomeInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceSyncInfoSchema",
    properties: {
      syncStatus: {
        type: "int",
        optional: true
      },
      syncRequestType: {
        type: "int",
        optional: true
      },
      syncRequestId: {
        type: "string",
        optional: true
      },
      syncRequestTime: {
        type: "int",
        optional: true
      },
      syncRequestParams: {
        type: "dictionary",
        optional: true,
        objectType: "mixed"
      },
      jobTypeName: {
        type: "string",
        optional: true
      },
      jobMessage: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceSyncInfoSchema = IKeusGMApplianceSyncInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceStatusInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceStatusInfoSchema",
    properties: {
      isConfigured: {
        type: "bool",
        optional: true
      },
      isHidden: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceStatusInfoSchema = IKeusGMApplianceStatusInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceGroupInfoSchema extends _realm.default.Object {
  static embedded = false;
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
    embedded: false
  };
}
exports.IKeusGMApplianceGroupInfoSchema = IKeusGMApplianceGroupInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceVoiceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceVoiceInfoSchema",
    properties: {
      discoverAppliance: {
        type: "bool",
        optional: true
      },
      applianceVoiceName: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceVoiceInfoSchema = IKeusGMApplianceVoiceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSceneActionSchema extends _realm.default.Object {
  static embedded = true;

  /////////////////////////////////////
  static schema = {
    name: "IKeusGMApplianceSceneActionSchema",
    properties: {
      applianceType: {
        type: "string",
        optional: true
      },
      applianceIdentifier: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceIdentifierSchema"
      },
      applianceState: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSavedStateAction_savedStateSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceSceneActionSchema = IKeusGMApplianceSceneActionSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceScheduleActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceScheduleActionSchema",
    properties: {
      applianceType: {
        type: "string",
        optional: true
      },
      applianceIdentifier: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceIdentifierSchema"
      },
      applianceState: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSavedStateAction_savedStateSchema"
      }
    },
    embedded: true
  };
}

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
exports.IKeusGMApplianceScheduleActionSchema = IKeusGMApplianceScheduleActionSchema;
// Modified by @realm/babel-plugin
class IKeusGM_applianceProtocolControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGM_applianceProtocolControlInfoSchema",
    properties: {
      applianceId: {
        type: "int",
        optional: true
      },
      applianceTypeControlInfo: {
        type: "dictionary",
        optional: true,
        objectType: "int"
      },
      applianceSectionId: {
        type: "int",
        optional: true
      },
      deviceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGM_applianceProtocolControlInfoSchema = IKeusGM_applianceProtocolControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceControlInfoSchema",
    properties: {
      applianceControlType: {
        type: "string",
        optional: true
      },
      applianceProtocolControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGM_applianceProtocolControlInfoSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceControlInfoSchema = IKeusGMApplianceControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSavedStateAction_savedStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceSavedStateAction_savedStateSchema",
    properties: {
      onOffState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      },
      modeState: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitStateSchema"
      },
      fanSpeedState: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitStateSchema"
      },
      temperatureControlState: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitStateSchema"
      },
      louverState: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitStateSchema"
      },
      openCloseState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitStateSchema"
      },
      percentOpenState: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitStateSchema"
      },
      openCloseRelayState: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseRelayTraitStateSchema"
      },
      angularTiltState: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitStateSchema"
      },
      tiltRelayState: {
        type: "object",
        optional: true,
        objectType: "ITiltRelayTraitStateSchema"
      },
      brightnessState: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitStateSchema"
      },
      rgbColorState: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitStateSchema"
      },
      rgbAddressableState: {
        type: "object",
        optional: true,
        objectType: "IRGBAddrTraitStateSchema"
      },
      rgbcolorState: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitStateSchema"
      },
      rgbwwaState: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitStateSchema"
      },
      recordingState: {
        type: "object",
        optional: true,
        objectType: "ICameraRecordingTraitStateSchema"
      },
      wwmixerState: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceSavedStateAction_savedStateSchema = IKeusGMApplianceSavedStateAction_savedStateSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSavedStateActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceSavedStateActionSchema",
    properties: {
      savedStateId: {
        type: "string",
        optional: true
      },
      savedStateName: {
        type: "string",
        optional: true
      },
      savedState: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSavedStateAction_savedStateSchema"
      },
      createdBy: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceSavedStateActionSchema = IKeusGMApplianceSavedStateActionSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceAdditionalInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceAdditionalInfoSchema",
    properties: {
      savedStateList: {
        type: "list",
        objectType: "IKeusGMApplianceSavedStateActionSchema"
      },
      recalibrationTimeList: {
        type: "list",
        objectType: "int"
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceAdditionalInfoSchema = IKeusGMApplianceAdditionalInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceIdentifierSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMApplianceIdentifierSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMApplianceIdentifierSchema = IKeusGMApplianceIdentifierSchema;
const appliancePropertiesCollectionMap = exports.appliancePropertiesCollectionMap = {
  SWITCH: "iSwitchApplianceProperties",
  DIMMER: "iDimmerApplianceProperties",
  WWMIXER: "iWWMixerApplianceProperties",
  RGBCOLOR: "iRGBColorApplianceProperties",
  RGBWWA: "iRGBWWAApplianceProperties",
  RGBADDRESSABLE: "iRgbAddressableProperties",
  PUSHTRIGGER: "iPushTriggerApplianceProperties",
  AIRCONDITIONER: "iAirConditionerApplianceProperties",
  BLINDS: "iBlindsApplianceProperties",
  BLINDSRELAY: "iBlindsRelayApplianceProperties",
  BLINDSPERCENT: "iBlindsPercentApplianceProperties",
  BLINDSPERCENTRELAY: "iBlindsPercentRelayApplianceProperties",
  BLINDSTILT: "iBlindsTiltApplianceProperties",
  BLINDSTILTRELAY: "iBlindsTiltRelayApplianceProperties",
  UNIFICAMERA: "iUnifiCameraApplianceProperties"
};
// Modified by @realm/babel-plugin
class appliancePropertiesCollectionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "appliancePropertiesCollectionSchema",
    properties: {
      SWITCH: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSwitchAppliancePropertiesSchema"
      },
      DIMMER: {
        type: "object",
        optional: true,
        objectType: "IDimmerAppliancePropertiesSchema"
      },
      WWMIXER: {
        type: "object",
        optional: true,
        objectType: "IWWMixerAppliancePropertiesSchema"
      },
      RGBCOLOR: {
        type: "object",
        optional: true,
        objectType: "IRGBColorAppliancePropertiesSchema"
      },
      RGBWWA: {
        type: "object",
        optional: true,
        objectType: "IRGBWWAAppliancePropertiesSchema"
      },
      RGBADDRESSABLE: {
        type: "object",
        optional: true,
        objectType: "IRgbAddressablePropertiesSchema"
      },
      PUSHTRIGGER: {
        type: "object",
        optional: true,
        objectType: "IPushTriggerAppliancePropertiesSchema"
      },
      AIRCONDITIONER: {
        type: "object",
        optional: true,
        objectType: "IAirConditionerAppliancePropertiesSchema"
      },
      BLINDS: {
        type: "object",
        optional: true,
        objectType: "IBlindsAppliancePropertiesSchema"
      },
      BLINDSRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsRelayAppliancePropertiesSchema"
      },
      BLINDSPERCENT: {
        type: "object",
        optional: true,
        objectType: "IBlindsPercentAppliancePropertiesSchema"
      },
      BLINDSPERCENTRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsPercentRelayAppliancePropertiesSchema"
      },
      BLINDSTILT: {
        type: "object",
        optional: true,
        objectType: "IBlindsTiltAppliancePropertiesSchema"
      },
      BLINDSTILTRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsTiltRelayAppliancePropertiesSchema"
      },
      UNIFICAMERA: {
        type: "object",
        optional: true,
        objectType: "IUnifiCameraAppliancePropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.appliancePropertiesCollectionSchema = appliancePropertiesCollectionSchema;
const applianceStateCollectionMap = exports.applianceStateCollectionMap = {
  SWITCH: "iSwitchApplianceState",
  DIMMER: "iDimmerApplianceState",
  WWMIXER: "iWWMixerApplianceState",
  RGBCOLOR: "iRGBColorApplianceState",
  RGBWWA: "iRGBWWAApplianceState",
  RGBADDRESSABLE: "iRgbAddressableState",
  PUSHTRIGGER: "iPushTriggerApplianceState",
  AIRCONDITIONER: "iAirConditionerApplianceState",
  BLINDS: "iBlindsApplianceState",
  BLINDSRELAY: "iBlindsRelayApplianceState",
  BLINDSPERCENT: "iBlindsPercentApplianceState",
  BLINDSPERCENTRELAY: "iBlindsPercentRelayApplianceState",
  BLINDSTILT: "iBlindsTiltApplianceState",
  BLINDSTILTRELAY: "iBlindsTiltRelayApplianceState",
  UNIFICAMERA: "iUnifiCameraApplianceState"
};
// Modified by @realm/babel-plugin
class applianceStateCollectionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "applianceStateCollectionSchema",
    properties: {
      SWITCH: {
        type: "object",
        optional: true,
        objectType: "ISwitchApplianceStateSchema"
      },
      DIMMER: {
        type: "object",
        optional: true,
        objectType: "IDimmerApplianceStateSchema"
      },
      WWMIXER: {
        type: "object",
        optional: true,
        objectType: "IWWMixerApplianceStateSchema"
      },
      RGBCOLOR: {
        type: "object",
        optional: true,
        objectType: "IRGBColorApplianceStateSchema"
      },
      RGBWWA: {
        type: "object",
        optional: true,
        objectType: "IRGBWWAApplianceStateSchema"
      },
      RGBADDRESSABLE: {
        type: "object",
        optional: true,
        objectType: "IRgbAddressableStateSchema"
      },
      PUSHTRIGGER: {
        type: "object",
        optional: true,
        objectType: "IPushTriggerApplianceStateSchema"
      },
      AIRCONDITIONER: {
        type: "object",
        optional: true,
        objectType: "IAirConditionerApplianceStateSchema"
      },
      BLINDS: {
        type: "object",
        optional: true,
        objectType: "IBlindsApplianceStateSchema"
      },
      BLINDSRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsRelayApplianceStateSchema"
      },
      BLINDSPERCENT: {
        type: "object",
        optional: true,
        objectType: "IBlindsPercentApplianceStateSchema"
      },
      BLINDSPERCENTRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsPercentRelayApplianceStateSchema"
      },
      BLINDSTILT: {
        type: "object",
        optional: true,
        objectType: "IBlindsTiltApplianceStateSchema"
      },
      BLINDSTILTRELAY: {
        type: "object",
        optional: true,
        objectType: "IBlindsTiltRelayApplianceStateSchema"
      },
      UNIFICAMERA: {
        type: "object",
        optional: true,
        objectType: "IUnifiCameraApplianceStateSchema"
      }
    },
    embedded: true
  };
}
exports.applianceStateCollectionSchema = applianceStateCollectionSchema;
// Modified by @realm/babel-plugin
class IKeusGMApplianceSchema extends _realm.default.Object {
  static primaryKey = "applianceId";
  static schema = {
    name: "IKeusGMApplianceSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
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
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSyncInfoSchema"
      },
      applianceStatusInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceStatusInfoSchema"
      },
      applianceGroupInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceGroupInfoSchema"
      },
      applianceActivityInfo: {
        type: "object",
        optional: true,
        objectType: "IActivitySourceInfoSchema"
      },
      applianceVoiceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceVoiceInfoSchema"
      },
      applianceIcon: {
        type: "int",
        optional: true
      },
      applianceState: {
        type: "object",
        optional: true,
        objectType: "applianceStateCollectionSchema"
      },
      applianceProperties: {
        type: "object",
        optional: true,
        objectType: "appliancePropertiesCollectionSchema"
      },
      applianceControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceControlInfoSchema"
      },
      applianceAdditionalInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceAdditionalInfoSchema"
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
    const uri = 'mongodb://192.168.0.197:27017/keus';
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
        let groupTransformOptions = ["groupState", "groupProperties"];
        let transformValues = ["groupType", "groupType"];
        const realmActivity = realm.create(BaseSchemaName, {
          transformValues: transformValues,
          transformOptions: groupTransformOptions,
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
          applianceState: {
            [doc.applianceType]: doc.applianceState
          },
          applianceProperties: {
            [doc.applianceType]: doc.applianceProperties
          },
          applianceControlInfo: doc.applianceControlInfo,
          applianceAdditionalInfo: doc.applianceAdditionalInfo
        });
        console.log(realmActivity);
      });
    });
  }
  static async getApplianceById(realm, applianceId) {
    return realm.objects(BaseSchemaName).filtered('applianceId==$0', applianceId);
  }
  static async insertAppliance() {}
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
  static async updateApplianceName() {}
  static async updateApplianceIcon() {}
  static async updateApplianceAdditionalInfo() {}
  static async updateApplianceHomeInfo() {}
  static async updateApplianceProperties() {}
  static async updateApplianceControlInfo() {}
  static async updateAppliance() {}
  static async updateApplianceVoiceInfo() {}
  static async updateApplianceGroupInfo() {}
  static async updateApplianceStateAndActivityInfo() {}
  static async updateApplianceGroupInfoAndProperties() {}
  static async deleteApplianceById() {}
  static async updateApplianceSyncInfo() {}
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
    return realm.objects(BaseSchemaName).filtered('applianceId IN $0 AND applianceCategory IN $1', data.securityApplianceIds, data.applCategoryList);
  }
  static async getAppliancesByNotPartOfCategory(realm, applCategoryList) {
    return realm.objects(BaseSchemaName).filtered('NOT applianceCategory IN $0', applCategoryList);
  }
  static async getGMApplianceBulkUpdateQuery() {}
  static async bulkWrite() {}
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
const ModelsList = exports.ModelsList = [IKeusGMApplianceSchema, _activities.IActivitySourceInfoSchema, IKeusGMApplianceHomeInfoSchema, IKeusGMApplianceSyncInfoSchema, IKeusGMApplianceStatusInfoSchema, IKeusGMApplianceGroupInfoSchema, IKeusGMApplianceVoiceInfoSchema, IKeusGM_applianceProtocolControlInfoSchema, IKeusGMApplianceControlInfoSchema, IKeusGMApplianceSavedStateActionSchema, IKeusGMApplianceAdditionalInfoSchema, IKeusGMApplianceIdentifierSchema, appliancePropertiesCollectionSchema, applianceStateCollectionSchema, IKeusGMApplianceSavedStateAction_savedStateSchema, _airconditioner.IKeusAirConditionerApplianceControlInfoSchema, _airconditioner.IAirConditionerApplianceStateSchema, _airconditioner.IAirConditionerAppliancePropertiesSchema, _blinds.IBlindsApplianceStateSchema, _blinds.IBlindsAppliancePropertiesSchema, _blinds.IKZBlindsApplianceControlInfoSchema, _blindspercent.IBlindsPercentApplianceStateSchema, _blindspercent.IBlindsPercentAppliancePropertiesSchema, _blindspercent.IKZBlindsPercentApplianceControlInfoSchema, _blindspercentrelay.IBlindsPercentRelayApplianceStateSchema, _blindspercentrelay.IBlindsPercentRelayAppliancePropertiesSchema, _blindspercentrelay.IKZBlindsPercentRelayApplianceControlInfoSchema, _blindsrelay.IBlindsRelayApplianceStateSchema, _blindsrelay.IBlindsRelayAppliancePropertiesSchema, _blindsrelay.IKZBlindsRelayApplianceControlInfoSchema, _blindstilt.IBlindsTiltApplianceStateSchema, _blindstilt.IBlindsTiltAppliancePropertiesSchema, _blindstilt.IKZBlindsTiltApplianceControlInfoSchema, _blindstiltrelay.IBlindsTiltRelayApplianceStateSchema, _blindstiltrelay.IBlindsTiltRelayAppliancePropertiesSchema, _blindstiltrelay.IKZBlindsTiltRelayApplianceControlInfoSchema, _dimmer.IDimmerApplianceStateSchema, _dimmer.IDimmerAppliancePropertiesSchema, _dimmer.IKZDimmerApplianceControlInfoSchema, _pushTrigger.IPushTriggerApplianceStateSchema, _pushTrigger.IPushTriggerAppliancePropertiesSchema, _pushTrigger.IKZPushTriggerApplianceControlInfoSchema, _rgbaddressable.IRgbAddressableStateSchema, _rgbaddressable.IRgbAddressablePropertiesSchema, _rgbaddressable.IKZRGBAddressableApplianceControlInfoSchema, _rgbcolor.IRGBColorApplianceStateSchema, _rgbcolor.IRGBColorAppliancePropertiesSchema, _rgbcolor.IKZRGBColorApplianceControlInfoSchema, _rgbwwa.IRGBWWAApplianceStateSchema, _rgbwwa.IRGBWWAAppliancePropertiesSchema, _rgbwwa.IKZRGBWWAApplianceControlInfoSchema, _switch.ISwitchApplianceStateSchema, _switch.ISwitchAppliancePropertiesSchem, _switch.IKZSwitchApplianceControlInfoSchema, _unificamera.IUnifiCameraApplianceStateSchema, _unificamera.IUnifiCameraAppliancePropertiesSchema, _unificamera.IUnifiCameraApplianceControlInfoSchema, _wwmixer.IWWMixerApplianceStateSchema, _wwmixer.IWWMixerAppliancePropertiesSchema, _wwmixer.IKZWWMixerApplianceControlInfoSchema, _angulartilt.IAngularTiltTraitStateSchema, _angulartilt.IAngularTiltTraitPropertiesSchema, _brightness.IBrightnessTraitStateSchema, _brightness.IBrightnessTraitPropertiesSchema, _camerarecording.ICameraRecordingTraitStateSchema, _camerarecording.ICameraRecordingTraitPropertiesSchema, _fanspeedcontrol.IFanSpeedControlTraitStateSchema, _fanspeedcontrol.IFanSpeedControlTraitPropertiesSchema, _louvercontrol.ILouverControlTraitStateSchema, _louvercontrol.ILouverControlTraitPropertiesSchema, _modecontrol.IModeControlTraitStateSchema, _modecontrol.IModeControlTraitPropertiesSchema, _onoff.IOnOffTraitStateSchema, _onoff.IOnOffTraitPropertiesSchema, _openclose.IOpenCloseTraitStateSchema, _openclose.IOpenCloseTraitOpenStyleSchema, _openclose.IOpenCloseTraitPropertiesSchema, _opencloserelay.IOpenCloseRelayTraitStateSchema, _opencloserelay.IOpenCloseRelayTraitPropertiesSchema, _percentopen.IPercentOpenTraitStateSchema, _percentopen.IPercentOpenTraitPropertiesSchema, _pushTrigger2.IPushTriggerTraitStateSchema, _pushTrigger2.IPushTriggerTraitPropertiesSchema, _rgbaddressable2.IRGBAddrTraitStateSchema, _rgbaddressable2.IRGBAddrTraitPropertiesSchema, _rgbcolor2.IRGBColorSchema, _rgbcolor2.IRGBPatternPropertiesSchema, _rgbcolor2.IRGBColorTraitStateSchema, _rgbcolor2.IRGBColorTraitPropertiesSchema, _rgbwwa2.IRGBWWAColorSchema, _rgbwwa2.IWWA2Schema, _rgbwwa2.IRGBWWAPatternPropertySchema, _rgbwwa2.IRGBWWATraitStateSchema, _rgbwwa2.IRGBWWATraitPropertiesSchema, _swingcontrol.ISingleSwingStateSchema, _swingcontrol.IDoubleSwingStateSchema, _swingcontrol.ISwingControlTraitState_swingControlStateSchema, _swingcontrol.ISwingControlTraitStateSchema, _swingcontrol.ISingleSwingPropsSchema, _swingcontrol.IDoubleSwingPropsSchema, _swingcontrol.ISwingControlTraitProperties_swingInfoSchema, _swingcontrol.ISwingControlTraitPropertiesSchema, _temperaturecontrol.ITemperatureControlTraitStateSchema, _temperaturecontrol.ITemperatureControlTraitPropertiesSchema, _tiltrelay.ITiltRelayTraitStateSchema, _tiltrelay.ITiltRelayTraitPropertiesSchema, _wwmixer2.IWWMixerTraitStateSchema, _wwmixer2.IWWMixerTraitPropertiesSchema, _zigbeeEmbeddedSwitch.IEmbeddedSwitchAppliancePropertiesSchema];