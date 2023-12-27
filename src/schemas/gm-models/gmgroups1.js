"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gmgroupsSchemaList = exports.gmGroupPropertiesSchema = exports.Methods = exports.ISmartConsoleGMGroupButtonPropertiesSchema = exports.IKeusGMGroupVoiceInfoSchema = exports.IKeusGMGroupSyncInfo_syncRequestParamsSchema = exports.IKeusGMGroupSyncInfoSchema = exports.IKeusGMGroupStatusInfoSchema = exports.IKeusGMGroupSchema = exports.IKeusGMGroupScheduleActionSchema = exports.IKeusGMGroupSceneActionSchema = exports.IKeusGMGroupSavedStateActionSchema = exports.IKeusGMGroupIdentifierSchema = exports.IKeusGMGroupHomeInfoSchema = exports.IKeusGMGroupControlInfo_groupProtocolControlInfoSchema = exports.IKeusGMGroupControlInfoSchema = exports.IKeusGMGroupApplianceSyncInfoSchema = exports.IKeusGMGroupApplianceInfoSchema = exports.IKeusGMGroupAdditionalInfoSchema = exports.GMGroupIdentifierSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/es.symbol.description.js");
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGMGroupSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusGMGroupControlInfo_groupProtocolControlInfoSchema extends Realm.Object {}
exports.IKeusGMGroupControlInfo_groupProtocolControlInfoSchema = IKeusGMGroupControlInfo_groupProtocolControlInfoSchema;
_defineProperty(IKeusGMGroupControlInfo_groupProtocolControlInfoSchema, "embedded", true);
class IKeusGMGroupControlInfoSchema extends Realm.Object {}
exports.IKeusGMGroupControlInfoSchema = IKeusGMGroupControlInfoSchema;
_defineProperty(IKeusGMGroupControlInfoSchema, "embedded", true);
class IKeusGMGroupScheduleActionSchema extends Realm.Object {}
exports.IKeusGMGroupScheduleActionSchema = IKeusGMGroupScheduleActionSchema;
_defineProperty(IKeusGMGroupScheduleActionSchema, "embedded", true);
class ISmartConsoleGMGroupButtonPropertiesSchema extends Realm.Object {}
exports.ISmartConsoleGMGroupButtonPropertiesSchema = ISmartConsoleGMGroupButtonPropertiesSchema;
_defineProperty(ISmartConsoleGMGroupButtonPropertiesSchema, "embedded", true);
class IKeusGMGroupSceneActionSchema extends Realm.Object {}
exports.IKeusGMGroupSceneActionSchema = IKeusGMGroupSceneActionSchema;
_defineProperty(IKeusGMGroupSceneActionSchema, "embedded", true);
class IKeusGMGroupHomeInfoSchema extends Realm.Object {}
exports.IKeusGMGroupHomeInfoSchema = IKeusGMGroupHomeInfoSchema;
_defineProperty(IKeusGMGroupHomeInfoSchema, "embedded", true);
class IKeusGMGroupSyncInfo_syncRequestParamsSchema extends Realm.Object {}
exports.IKeusGMGroupSyncInfo_syncRequestParamsSchema = IKeusGMGroupSyncInfo_syncRequestParamsSchema;
_defineProperty(IKeusGMGroupSyncInfo_syncRequestParamsSchema, "embedded", true);
class IKeusGMGroupSyncInfoSchema extends Realm.Object {}
exports.IKeusGMGroupSyncInfoSchema = IKeusGMGroupSyncInfoSchema;
_defineProperty(IKeusGMGroupSyncInfoSchema, "embedded", true);
class IKeusGMGroupStatusInfoSchema extends Realm.Object {}
exports.IKeusGMGroupStatusInfoSchema = IKeusGMGroupStatusInfoSchema;
_defineProperty(IKeusGMGroupStatusInfoSchema, "embedded", true);
class IKeusGMGroupApplianceSyncInfoSchema extends Realm.Object {}
exports.IKeusGMGroupApplianceSyncInfoSchema = IKeusGMGroupApplianceSyncInfoSchema;
_defineProperty(IKeusGMGroupApplianceSyncInfoSchema, "embedded", true);
class IKeusGMGroupApplianceInfoSchema extends Realm.Object {}
exports.IKeusGMGroupApplianceInfoSchema = IKeusGMGroupApplianceInfoSchema;
_defineProperty(IKeusGMGroupApplianceInfoSchema, "embedded", true);
class IKeusGMGroupIdentifierSchema extends Realm.Object {}
exports.IKeusGMGroupIdentifierSchema = IKeusGMGroupIdentifierSchema;
_defineProperty(IKeusGMGroupIdentifierSchema, "embedded", true);
class IKeusGMGroupVoiceInfoSchema extends Realm.Object {}
exports.IKeusGMGroupVoiceInfoSchema = IKeusGMGroupVoiceInfoSchema;
_defineProperty(IKeusGMGroupVoiceInfoSchema, "embedded", true);
class IKeusGMGroupSavedStateActionSchema extends Realm.Object {}
exports.IKeusGMGroupSavedStateActionSchema = IKeusGMGroupSavedStateActionSchema;
_defineProperty(IKeusGMGroupSavedStateActionSchema, "embedded", true);
class IKeusGMGroupAdditionalInfoSchema extends Realm.Object {}
exports.IKeusGMGroupAdditionalInfoSchema = IKeusGMGroupAdditionalInfoSchema;
_defineProperty(IKeusGMGroupAdditionalInfoSchema, "embedded", true);
class GMGroupIdentifierSchema extends Realm.Object {}
exports.GMGroupIdentifierSchema = GMGroupIdentifierSchema;
_defineProperty(GMGroupIdentifierSchema, "embedded", true);
class IKeusGMGroupSchema extends Realm.Object {}
exports.IKeusGMGroupSchema = IKeusGMGroupSchema;
_defineProperty(IKeusGMGroupSchema, "primaryKey", "groupId");
class gmGroupPropertiesSchema extends Realm.Object {}
exports.gmGroupPropertiesSchema = gmGroupPropertiesSchema;
_defineProperty(gmGroupPropertiesSchema, "embedded", true);
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
const gmgroupsSchemaList = exports.gmgroupsSchemaList = [IKeusGMGroupSchema, _gmappliances.IKeusGMApplianceIdentifierSchema, _gmappliances.applianceStateCollectionSchema, _gmappliances.appliancePropertiesCollectionSchema, _activities.IActivitySourceInfoSchema, IKeusGMGroupControlInfo_groupProtocolControlInfoSchema, IKeusGMGroupControlInfoSchema, IKeusGMGroupHomeInfoSchema, IKeusGMGroupSyncInfo_syncRequestParamsSchema, IKeusGMGroupSyncInfoSchema, IKeusGMGroupStatusInfoSchema, IKeusGMGroupApplianceSyncInfoSchema, IKeusGMGroupApplianceInfoSchema, IKeusGMGroupVoiceInfoSchema, IKeusGMGroupAdditionalInfoSchema, IKeusGMGroupSavedStateActionSchema, _gmappliances.IKeusGMApplianceSavedStateAction_savedStateSchema, _airconditioner.IAirConditionerApplianceStateSchema, _airconditioner.IAirConditionerAppliancePropertiesSchema, _blinds.IBlindsApplianceStateSchema, _blinds.IBlindsAppliancePropertiesSchema, _blindspercent.IBlindsPercentApplianceStateSchema, _blindspercent.IBlindsPercentAppliancePropertiesSchema, _blindspercentrelay.IBlindsPercentRelayApplianceStateSchema, _blindspercentrelay.IBlindsPercentRelayAppliancePropertiesSchema, _blindsrelay.IBlindsRelayApplianceStateSchema, _blindsrelay.IBlindsRelayAppliancePropertiesSchema, _blindstilt.IBlindsTiltApplianceStateSchema, _blindstilt.IBlindsTiltAppliancePropertiesSchema, _blindstiltrelay.IBlindsTiltRelayApplianceStateSchema, _blindstiltrelay.IBlindsTiltRelayAppliancePropertiesSchema, _dimmer.IDimmerApplianceStateSchema, _dimmer.IDimmerAppliancePropertiesSchema, _pushTrigger.IPushTriggerApplianceStateSchema, _pushTrigger.IPushTriggerAppliancePropertiesSchema, _rgbaddressable.IRgbAddressableStateSchema, _rgbaddressable.IRgbAddressablePropertiesSchema, _rgbcolor.IRGBColorApplianceStateSchema, _rgbcolor.IRGBColorAppliancePropertiesSchema, _rgbwwa.IRGBWWAApplianceStateSchema, _rgbwwa.IRGBWWAAppliancePropertiesSchema, _switch.ISwitchApplianceStateSchema, _switch.ISwitchAppliancePropertiesSchem, _unificamera.IUnifiCameraApplianceStateSchema, _unificamera.IUnifiCameraAppliancePropertiesSchema, _wwmixer.IWWMixerApplianceStateSchema, _wwmixer.IWWMixerAppliancePropertiesSchema, _angulartilt.IAngularTiltTraitStateSchema, _angulartilt.IAngularTiltTraitPropertiesSchema, _brightness.IBrightnessTraitStateSchema, _brightness.IBrightnessTraitPropertiesSchema, _camerarecording.ICameraRecordingTraitStateSchema, _camerarecording.ICameraRecordingTraitPropertiesSchema, _fanspeedcontrol.IFanSpeedControlTraitStateSchema, _fanspeedcontrol.IFanSpeedControlTraitPropertiesSchema, _louvercontrol.ILouverControlTraitStateSchema, _louvercontrol.ILouverControlTraitPropertiesSchema, _onoff.IOnOffTraitPropertiesSchema, _onoff.IOnOffTraitStateSchema, _modecontrol.IModeControlTraitPropertiesSchema, _modecontrol.IModeControlTraitStateSchema, _openclose.IOpenCloseTraitStateSchema, _openclose.IOpenCloseTraitOpenStyleSchema, _openclose.IOpenCloseTraitPropertiesSchema, _opencloserelay.IOpenCloseRelayTraitStateSchema, _opencloserelay.IOpenCloseRelayTraitPropertiesSchema, _percentopen.IPercentOpenTraitStateSchema, _percentopen.IPercentOpenTraitPropertiesSchema, _pushTrigger2.IPushTriggerTraitStateSchema, _pushTrigger2.IPushTriggerTraitPropertiesSchema, _rgbaddressable2.IRGBAddrTraitStateSchema, _rgbaddressable2.IRGBAddrTraitPropertiesSchema, _rgbcolor2.IRGBColorSchema, _rgbcolor2.IRGBPatternPropertiesSchema, _rgbcolor2.IRGBColorTraitStateSchema, _rgbcolor2.IRGBColorTraitPropertiesSchema, _rgbwwa2.IRGBWWAColorSchema, _rgbwwa2.IWWA2Schema, _rgbwwa2.IRGBWWAPatternPropertySchema, _rgbwwa2.IRGBWWATraitStateSchema, _rgbwwa2.IRGBWWATraitPropertiesSchema, _swingcontrol.ISingleSwingStateSchema, _swingcontrol.IDoubleSwingStateSchema, _swingcontrol.ISwingControlTraitState_swingControlStateSchema, _swingcontrol.ISwingControlTraitStateSchema, _swingcontrol.ISingleSwingPropsSchema, _swingcontrol.IDoubleSwingPropsSchema, _swingcontrol.ISwingControlTraitProperties_swingInfoSchema, _swingcontrol.ISwingControlTraitPropertiesSchema, _temperaturecontrol.ITemperatureControlTraitStateSchema, _temperaturecontrol.ITemperatureControlTraitPropertiesSchema, _tiltrelay.ITiltRelayTraitStateSchema, _tiltrelay.ITiltRelayTraitPropertiesSchema, _wwmixer2.IWWMixerTraitStateSchema, _wwmixer2.IWWMixerTraitPropertiesSchema];
