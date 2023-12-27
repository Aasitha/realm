"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gmGroupPropertiesSchema = exports.ModelsList = exports.Methods = exports.ISmartConsoleGMGroupButtonPropertiesSchema = exports.IKeusGMGroupVoiceInfoSchema = exports.IKeusGMGroupSyncInfo_syncRequestParamsSchema = exports.IKeusGMGroupSyncInfoSchema = exports.IKeusGMGroupStatusInfoSchema = exports.IKeusGMGroupSchema = exports.IKeusGMGroupScheduleActionSchema = exports.IKeusGMGroupSceneActionSchema = exports.IKeusGMGroupSavedStateActionSchema = exports.IKeusGMGroupIdentifierSchema = exports.IKeusGMGroupHomeInfoSchema = exports.IKeusGMGroupControlInfo_groupProtocolControlInfoSchema = exports.IKeusGMGroupControlInfoSchema = exports.IKeusGMGroupApplianceSyncInfoSchema = exports.IKeusGMGroupApplianceInfoSchema = exports.IKeusGMGroupAdditionalInfoSchema = exports.GMGroupIdentifierSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _gmappliances = require("./gmappliances");
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
var _onoff = require("../../trait-types/onoff");
var _modecontrol = require("../../trait-types/modecontrol");
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMGroupSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusGMGroupControlInfo_groupProtocolControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupControlInfo_groupProtocolControlInfoSchema",
    properties: {
      zigbeeGroupId: {
        type: "int",
        optional: true
      },
      zigbeeAreaId: {
        type: "int",
        optional: true
      },
      zigbeeSectionId: {
        type: "int",
        optional: true
      },
      zigbeeGatewayId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupControlInfo_groupProtocolControlInfoSchema = IKeusGMGroupControlInfo_groupProtocolControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupControlInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupControlInfoSchema",
    properties: {
      groupControlType: {
        type: "string",
        optional: true
      },
      groupProtocolControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupControlInfo_groupProtocolControlInfoSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupControlInfoSchema = IKeusGMGroupControlInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupScheduleActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupScheduleActionSchema",
    properties: {
      groupType: {
        type: "string",
        optional: true
      },
      groupIdentifier: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupIdentifierSchema"
      },
      groupState: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSavedStateAction_savedStateSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupScheduleActionSchema = IKeusGMGroupScheduleActionSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleGMGroupButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleGMGroupButtonPropertiesSchema",
    properties: {
      groupId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleGMGroupButtonPropertiesSchema = ISmartConsoleGMGroupButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupSceneActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupSceneActionSchema",
    properties: {
      groupType: {
        type: "string",
        optional: true
      },
      groupIdentifier: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupIdentifierSchema"
      },
      groupState: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceSavedStateAction_savedStateSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupSceneActionSchema = IKeusGMGroupSceneActionSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupHomeInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupHomeInfoSchema",
    properties: {
      groupRoom: {
        type: "string",
        optional: true
      },
      groupSection: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupHomeInfoSchema = IKeusGMGroupHomeInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupSyncInfo_syncRequestParamsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupSyncInfo_syncRequestParamsSchema",
    properties: {
      onOffProperties: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitPropertiesSchema"
      },
      modeProperties: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitPropertiesSchema"
      },
      fanSpeedProperties: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitPropertiesSchema"
      },
      temperatureControlProperties: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitPropertiesSchema"
      },
      louverProperties: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitPropertiesSchema"
      },
      openCloseProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitPropertiesSchema"
      },
      percentOpenProperties: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitPropertiesSchema"
      },
      openCloseRelayProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseRelayTraitPropertiesSchema"
      },
      angularTiltProperties: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitPropertiesSchema"
      },
      tiltRelayProperties: {
        type: "object",
        optional: true,
        objectType: "ITiltRelayTraitPropertiesSchema"
      },
      brightnessProperties: {
        type: "object",
        optional: true,
        objectType: "IBrightnessTraitPropertiesSchema"
      },
      triggerProperties: {
        type: "object",
        optional: true,
        objectType: "IPushTriggerTraitPropertiesSchema"
      },
      rgbColorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      },
      rgbAddressableProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBAddrTraitPropertiesSchema"
      },
      rgbcolorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      },
      rgbwwaProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitPropertiesSchema"
      },
      recordingProperties: {
        type: "object",
        optional: true,
        objectType: "ICameraRecordingTraitPropertiesSchema"
      },
      wwmixerProperties: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitPropertiesSchema"
      },
      forceDelete: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupSyncInfo_syncRequestParamsSchema = IKeusGMGroupSyncInfo_syncRequestParamsSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupSyncInfoSchema",
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
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupSyncInfo_syncRequestParamsSchema"
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
exports.IKeusGMGroupSyncInfoSchema = IKeusGMGroupSyncInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupStatusInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupStatusInfoSchema",
    properties: {
      isConfigured: {
        type: "bool",
        optional: true
      },
      isHidden: {
        type: "bool",
        optional: true
      },
      isHighPower: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupStatusInfoSchema = IKeusGMGroupStatusInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupApplianceSyncInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupApplianceSyncInfoSchema",
    properties: {
      applianceInSync: {
        type: "bool",
        optional: true
      },
      requestTime: {
        type: "int",
        optional: true
      },
      requestType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupApplianceSyncInfoSchema = IKeusGMGroupApplianceSyncInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupApplianceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupApplianceInfoSchema",
    properties: {
      applianceIdentifier: {
        type: "object",
        optional: true,
        objectType: "IKeusGMApplianceIdentifierSchema"
      },
      groupApplianceSyncInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupApplianceSyncInfoSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupApplianceInfoSchema = IKeusGMGroupApplianceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupIdentifierSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupIdentifierSchema",
    properties: {
      groupId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupIdentifierSchema = IKeusGMGroupIdentifierSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupVoiceInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupVoiceInfoSchema",
    properties: {
      discoverGroup: {
        type: "bool",
        optional: true
      },
      groupVoiceName: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupVoiceInfoSchema = IKeusGMGroupVoiceInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupSavedStateActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupSavedStateActionSchema",
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
exports.IKeusGMGroupSavedStateActionSchema = IKeusGMGroupSavedStateActionSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupAdditionalInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusGMGroupAdditionalInfoSchema",
    properties: {
      savedStateList: {
        type: "list",
        objectType: "IKeusGMGroupSavedStateActionSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusGMGroupAdditionalInfoSchema = IKeusGMGroupAdditionalInfoSchema;
// Modified by @realm/babel-plugin
class GMGroupIdentifierSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "GMGroupIdentifierSchema",
    properties: {
      groupId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.GMGroupIdentifierSchema = GMGroupIdentifierSchema;
// Modified by @realm/babel-plugin
class IKeusGMGroupSchema extends _realm.default.Object {
  static primaryKey = "groupId";
  static schema = {
    name: "IKeusGMGroupSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
      groupId: {
        type: "string"
      },
      groupType: {
        type: "string",
        optional: true
      },
      groupCategory: {
        type: "string",
        optional: true
      },
      groupName: {
        type: "string",
        optional: true
      },
      groupIcon: {
        type: "int",
        optional: true
      },
      groupControlInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupControlInfoSchema"
      },
      groupHomeInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupHomeInfoSchema"
      },
      groupSyncInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupSyncInfoSchema"
      },
      groupStatusInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupStatusInfoSchema"
      },
      groupApplianceList: {
        type: "list",
        objectType: "IKeusGMGroupApplianceInfoSchema"
      },
      groupActivityInfo: {
        type: "object",
        optional: true,
        objectType: "IActivitySourceInfoSchema"
      },
      groupVoiceInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupVoiceInfoSchema"
      },
      groupState: {
        type: "object",
        optional: true,
        objectType: "applianceStateCollectionSchema"
      },
      groupProperties: {
        type: "object",
        optional: true,
        objectType: "appliancePropertiesCollectionSchema"
      },
      groupAdditionalInfo: {
        type: "object",
        optional: true,
        objectType: "IKeusGMGroupAdditionalInfoSchema"
      }
    },
    primaryKey: "groupId"
  };
}
exports.IKeusGMGroupSchema = IKeusGMGroupSchema;
// Modified by @realm/babel-plugin
class gmGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "gmGroupPropertiesSchema",
    properties: {
      onOffProperties: {
        type: "object",
        optional: true,
        objectType: "IOnOffTraitPropertiesSchema"
      },
      modeProperties: {
        type: "object",
        optional: true,
        objectType: "IModeControlTraitPropertiesSchema"
      },
      fanSpeedProperties: {
        type: "object",
        optional: true,
        objectType: "IFanSpeedControlTraitPropertiesSchema"
      },
      temperatureControlProperties: {
        type: "object",
        optional: true,
        objectType: "ITemperatureControlTraitPropertiesSchema"
      },
      louverProperties: {
        type: "object",
        optional: true,
        objectType: "ILouverControlTraitPropertiesSchema"
      },
      openCloseProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseTraitPropertiesSchema"
      },
      percentOpenProperties: {
        type: "object",
        optional: true,
        objectType: "IPercentOpenTraitPropertiesSchema"
      },
      openCloseRelayProperties: {
        type: "object",
        optional: true,
        objectType: "IOpenCloseRelayTraitPropertiesSchema"
      },
      angularTiltProperties: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitPropertiesSchema"
      },
      tiltRelayProperties: {
        type: "object",
        optional: true,
        objectType: "ITiltRelayTraitPropertiesSchema"
      },
      brightnessProperties: {
        type: "object",
        optional: true,
        objectType: "IBrightnessTraitPropertiesSchema"
      },
      triggerProperties: {
        type: "object",
        optional: true,
        objectType: "IPushTriggerTraitPropertiesSchema"
      },
      rgbColorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      },
      rgbAddressableProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBAddrTraitPropertiesSchema"
      },
      rgbcolorProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBColorTraitPropertiesSchema"
      },
      rgbwwaProperties: {
        type: "object",
        optional: true,
        objectType: "IRGBWWATraitPropertiesSchema"
      },
      recordingProperties: {
        type: "object",
        optional: true,
        objectType: "ICameraRecordingTraitPropertiesSchema"
      },
      wwmixerProperties: {
        type: "object",
        optional: true,
        objectType: "IWWMixerTraitPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.gmGroupPropertiesSchema = gmGroupPropertiesSchema;
class Methods {
  static async getGMGroupById() {}
  static async deleteGMGroupById() {}
  static async insertGroup() {}
  static async getAllGroups(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getGMGroupsByIds() {}
  static async getGMGroupsByRooms() {}
  static async getGMGroupsByGroupType() {}
  static async updateGroup() {}
  static async updateGroupHomeInfo() {}
  static async updateGroupControlInfo() {}
  static async updateGroupName() {}
  static async updateGroupVoiceInfo() {}
  static async updateGroupApplianceList() {}
  static async updateGroupSyncInfo() {}
  static async updateGroupProperties() {}
  static async updateGroupStateAndActivityInfo() {}
  static async updateGroupAdditionalInfo() {}
  static async cleanGMApplianceGroup() {}
  static async updateGroupIcon() {}
  static async getGMGroupBulkUpdateQuery() {}
  static async bulkWrite() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGMGroupSchema, _gmappliances.IKeusGMApplianceIdentifierSchema, _gmappliances.applianceStateCollectionSchema, _gmappliances.appliancePropertiesCollectionSchema, _activities.IActivitySourceInfoSchema, IKeusGMGroupControlInfo_groupProtocolControlInfoSchema, IKeusGMGroupControlInfoSchema, IKeusGMGroupHomeInfoSchema, IKeusGMGroupSyncInfo_syncRequestParamsSchema, IKeusGMGroupSyncInfoSchema, IKeusGMGroupStatusInfoSchema, IKeusGMGroupApplianceSyncInfoSchema, IKeusGMGroupApplianceInfoSchema, IKeusGMGroupVoiceInfoSchema, IKeusGMGroupAdditionalInfoSchema, IKeusGMGroupSavedStateActionSchema, _gmappliances.IKeusGMApplianceSavedStateAction_savedStateSchema, _airconditioner.IAirConditionerApplianceStateSchema, _airconditioner.IAirConditionerAppliancePropertiesSchema, _blinds.IBlindsApplianceStateSchema, _blinds.IBlindsAppliancePropertiesSchema, _blindspercent.IBlindsPercentApplianceStateSchema, _blindspercent.IBlindsPercentAppliancePropertiesSchema, _blindspercentrelay.IBlindsPercentRelayApplianceStateSchema, _blindspercentrelay.IBlindsPercentRelayAppliancePropertiesSchema, _blindsrelay.IBlindsRelayApplianceStateSchema, _blindsrelay.IBlindsRelayAppliancePropertiesSchema, _blindstilt.IBlindsTiltApplianceStateSchema, _blindstilt.IBlindsTiltAppliancePropertiesSchema, _blindstiltrelay.IBlindsTiltRelayApplianceStateSchema, _blindstiltrelay.IBlindsTiltRelayAppliancePropertiesSchema, _dimmer.IDimmerApplianceStateSchema, _dimmer.IDimmerAppliancePropertiesSchema, _pushTrigger.IPushTriggerApplianceStateSchema, _pushTrigger.IPushTriggerAppliancePropertiesSchema, _rgbaddressable.IRgbAddressableStateSchema, _rgbaddressable.IRgbAddressablePropertiesSchema, _rgbcolor.IRGBColorApplianceStateSchema, _rgbcolor.IRGBColorAppliancePropertiesSchema, _rgbwwa.IRGBWWAApplianceStateSchema, _rgbwwa.IRGBWWAAppliancePropertiesSchema, _switch.ISwitchApplianceStateSchema, _switch.ISwitchAppliancePropertiesSchem, _unificamera.IUnifiCameraApplianceStateSchema, _unificamera.IUnifiCameraAppliancePropertiesSchema, _wwmixer.IWWMixerApplianceStateSchema, _wwmixer.IWWMixerAppliancePropertiesSchema, _angulartilt.IAngularTiltTraitStateSchema, _angulartilt.IAngularTiltTraitPropertiesSchema, _brightness.IBrightnessTraitStateSchema, _brightness.IBrightnessTraitPropertiesSchema, _camerarecording.ICameraRecordingTraitStateSchema, _camerarecording.ICameraRecordingTraitPropertiesSchema, _fanspeedcontrol.IFanSpeedControlTraitStateSchema, _fanspeedcontrol.IFanSpeedControlTraitPropertiesSchema, _louvercontrol.ILouverControlTraitStateSchema, _louvercontrol.ILouverControlTraitPropertiesSchema, _onoff.IOnOffTraitPropertiesSchema, _onoff.IOnOffTraitStateSchema, _modecontrol.IModeControlTraitPropertiesSchema, _modecontrol.IModeControlTraitStateSchema, _openclose.IOpenCloseTraitStateSchema, _openclose.IOpenCloseTraitOpenStyleSchema, _openclose.IOpenCloseTraitPropertiesSchema, _opencloserelay.IOpenCloseRelayTraitStateSchema, _opencloserelay.IOpenCloseRelayTraitPropertiesSchema, _percentopen.IPercentOpenTraitStateSchema, _percentopen.IPercentOpenTraitPropertiesSchema, _pushTrigger2.IPushTriggerTraitStateSchema, _pushTrigger2.IPushTriggerTraitPropertiesSchema, _rgbaddressable2.IRGBAddrTraitStateSchema, _rgbaddressable2.IRGBAddrTraitPropertiesSchema, _rgbcolor2.IRGBColorSchema, _rgbcolor2.IRGBPatternPropertiesSchema, _rgbcolor2.IRGBColorTraitStateSchema, _rgbcolor2.IRGBColorTraitPropertiesSchema, _rgbwwa2.IRGBWWAColorSchema, _rgbwwa2.IWWA2Schema, _rgbwwa2.IRGBWWAPatternPropertySchema, _rgbwwa2.IRGBWWATraitStateSchema, _rgbwwa2.IRGBWWATraitPropertiesSchema, _swingcontrol.ISingleSwingStateSchema, _swingcontrol.IDoubleSwingStateSchema, _swingcontrol.ISwingControlTraitState_swingControlStateSchema, _swingcontrol.ISwingControlTraitStateSchema, _swingcontrol.ISingleSwingPropsSchema, _swingcontrol.IDoubleSwingPropsSchema, _swingcontrol.ISwingControlTraitProperties_swingInfoSchema, _swingcontrol.ISwingControlTraitPropertiesSchema, _temperaturecontrol.ITemperatureControlTraitStateSchema, _temperaturecontrol.ITemperatureControlTraitPropertiesSchema, _tiltrelay.ITiltRelayTraitStateSchema, _tiltrelay.ITiltRelayTraitPropertiesSchema, _wwmixer2.IWWMixerTraitStateSchema, _wwmixer2.IWWMixerTraitPropertiesSchema];