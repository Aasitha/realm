"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedulesSchemaList = exports.IKeusSchedule_scheduleActionSchema = exports.IKeusScheduleSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _zigbeeDimmableDriver = require("../device-categories/zigbee-dimmable-driver");
var _zigbeeNondimmableDriver = require("../device-categories/zigbee-nondimmable-driver");
var _daliDimmableDriver = require("../device-categories/dali-dimmable-driver");
var _daliNondimmableDriver = require("../device-categories/dali-nondimmable-driver");
var _zigbeeCurtainController = require("../device-categories/zigbee-curtain-controller");
var _zigbeeEmbeddedSwitch = require("../device-categories/zigbee-embedded-switch");
var _zigbeeAcFanController = require("../device-categories/zigbee-ac-fan-controller");
var _zigbeeDcFanController = require("../device-categories/zigbee-dc-fan-controller");
var _zigbeeRgbwwaDriver = require("../device-categories/zigbee-rgbwwa-driver");
var _keusSmartConsole = require("../device-categories/keus-smart-console");
var _zigbeeIrBlaster = require("../device-categories/zigbee-ir-blaster");
var _scenes = require("./scenes");
var _daliColorTunableDriver = require("../device-categories/dali-color-tunable-driver");
var _zigbeeContactSensor = require("../device-categories/zigbee-contact-sensor");
var _gmappliances = require("./gm-models/gmappliances");
var _gmgroups = require("./gm-models/gmgroups");
var _unificamera = require("../appliance-types/unificamera");
var _angulartilt = require("../trait-types/angulartilt");
var _brightness = require("../trait-types/brightness");
var _camerarecording = require("../trait-types/camerarecording");
var _fanspeedcontrol = require("../trait-types/fanspeedcontrol");
var _louvercontrol = require("../trait-types/louvercontrol");
var _onoff = require("../trait-types/onoff");
var _modecontrol = require("../trait-types/modecontrol");
var _openclose = require("../trait-types/openclose");
var _opencloserelay = require("../trait-types/opencloserelay");
var _percentopen = require("../trait-types/percentopen");
var _pushTrigger = require("../trait-types/push-trigger");
var _rgbaddressable = require("../trait-types/rgbaddressable");
var _rgbcolor = require("../trait-types/rgbcolor");
var _rgbwwa = require("../trait-types/rgbwwa");
var _swingcontrol = require("../trait-types/swingcontrol");
var _temperaturecontrol = require("../trait-types/temperaturecontrol");
var _tiltrelay = require("../trait-types/tiltrelay");
var _wwmixer = require("../trait-types/wwmixer");
const BaseSchemaName = exports.BaseSchemaName = "IKeusScheduleSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export enum SCHEDULE_ACTION_TYPE {
//     ZIGBEE_DIMMABLE_DRIVER = 0,
//     ZIGBEE_NON_DIMMABLE_DRIVER = 1,
//     DALI_DIMMABLE_DRIVER = 2,
//     DALI_NON_DIMMABLE_DRIVER = 3,
//     ZIGBEE_CURTAIN_CONTROLLER = 4,
//     ZIGBEE_EMBEDDED_SWITCH = 5,
//     ZIGBEE_AC_FAN_CONTROLLER = 6,
//     ZIGBEE_DC_FAN_CONTROLLER = 7,
//     ZIGBEE_RGBWWA = 8,
//     ZIGBEE_SMART_CONSOLE_RELAY = 9,
//     ZIGBEE_IR_REMOTE = 10,
//     SCENE_EXECUTION = 11,
//     GROUP_APPLIANCE_ON0FF = 12,
//     GROUP_APPLIANCE_SINGLE_DIMMER = 13,
//     GROUP_APPLIANCE_FAN = 14,
//     GROUP_APPLIANCE_COLOR_TUNABLE = 15,
//     GROUP_ZIGBEE_RGBWWA = 16,
//     DALI_COLOR_TUNABLE_DRIVER = 17,
//     ZIGBEE_CONTACT_SENSOR = 18,
//     SCH_GMAPPLIANCE = 19,
//     SCH_GMGROUP = 20,
//     SCH_CAMERA = 21,
// }
class IKeusSchedule_scheduleActionSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusSchedule_scheduleActionSchema = IKeusSchedule_scheduleActionSchema;
class IKeusScheduleSchema extends Realm.Object {
  static primaryKey = "scheduleId";
}
exports.IKeusScheduleSchema = IKeusScheduleSchema;
const schedulesSchemaList = exports.schedulesSchemaList = [IKeusScheduleSchema, IKeusSchedule_scheduleActionSchema, _zigbeeDimmableDriver.IZigbeeDimmableActionSchema, _zigbeeNondimmableDriver.IZigbeeNonDimmableActionSchema, _daliDimmableDriver.IDaliDimmableActionSchema, _daliNondimmableDriver.IDaliNonDimmableActionSchema, _zigbeeCurtainController.IZigbeeCurtainControllerActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupOnOffApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupSingleDimmerApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupFanApplianceActionSchema, _zigbeeEmbeddedSwitch.IEmbeddedGroupColorTunableApplianceActionSchema, _zigbeeEmbeddedSwitch.KZESApplianceStateSchema, _zigbeeAcFanController.IZigbeeACFanControllerActionSchema, _zigbeeDcFanController.IZigbeeDCFanControllerActionSchema, _zigbeeDcFanController.IZigbeeDCFanControllerActionLightStateSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverActionSchema, _zigbeeRgbwwaDriver.IZigbeeRgbwwaDriverGroupActionSchema, _zigbeeRgbwwaDriver.IWWASchema, _zigbeeRgbwwaDriver.IRBGSchema, _keusSmartConsole.ISmartConsoleRelayActionSchema, _zigbeeIrBlaster.IZigbeeIRBlasterActionSchema, _zigbeeIrBlaster.IZigbeeIRBlasterAction_irBlastActionSchema, _scenes.IKeusExcuteSceneActionSchema, _daliColorTunableDriver.IDaliColorTunableDriverGroupScheculeActionSchema, _daliColorTunableDriver.IDaliColorTunableDriverStateSchema, _zigbeeContactSensor.IZigbeeContactSensorScheduleActionSchema, _gmappliances.IKeusGMApplianceScheduleActionSchema, _gmappliances.IKeusGMApplianceIdentifierSchema, _gmappliances.IKeusGMApplianceSavedStateAction_savedStateSchema, _gmgroups.IKeusGMGroupScheduleActionSchema, _gmgroups.IKeusGMGroupIdentifierSchema, _unificamera.IUnifiCameraApplianceScheduleActionSchema, _angulartilt.IAngularTiltTraitStateSchema, _angulartilt.IAngularTiltTraitPropertiesSchema, _brightness.IBrightnessTraitStateSchema, _brightness.IBrightnessTraitPropertiesSchema, _camerarecording.ICameraRecordingTraitStateSchema, _camerarecording.ICameraRecordingTraitPropertiesSchema, _fanspeedcontrol.IFanSpeedControlTraitStateSchema, _fanspeedcontrol.IFanSpeedControlTraitPropertiesSchema, _louvercontrol.ILouverControlTraitStateSchema, _louvercontrol.ILouverControlTraitPropertiesSchema, _onoff.IOnOffTraitPropertiesSchema, _onoff.IOnOffTraitStateSchema, _modecontrol.IModeControlTraitPropertiesSchema, _modecontrol.IModeControlTraitStateSchema, _openclose.IOpenCloseTraitStateSchema, _openclose.IOpenCloseTraitOpenStyleSchema, _openclose.IOpenCloseTraitPropertiesSchema, _opencloserelay.IOpenCloseRelayTraitStateSchema, _opencloserelay.IOpenCloseRelayTraitPropertiesSchema, _percentopen.IPercentOpenTraitStateSchema, _percentopen.IPercentOpenTraitPropertiesSchema, _pushTrigger.IPushTriggerTraitStateSchema, _pushTrigger.IPushTriggerTraitPropertiesSchema, _rgbaddressable.IRGBAddrTraitStateSchema, _rgbaddressable.IRGBAddrTraitPropertiesSchema, _rgbcolor.IRGBColorSchema, _rgbcolor.IRGBPatternPropertiesSchema, _rgbcolor.IRGBColorTraitStateSchema, _rgbcolor.IRGBColorTraitPropertiesSchema, _rgbwwa.IRGBWWAColorSchema, _rgbwwa.IWWA2Schema, _rgbwwa.IRGBWWAPatternPropertySchema, _rgbwwa.IRGBWWATraitStateSchema, _rgbwwa.IRGBWWATraitPropertiesSchema, _swingcontrol.ISingleSwingStateSchema, _swingcontrol.IDoubleSwingStateSchema, _swingcontrol.ISwingControlTraitState_swingControlStateSchema, _swingcontrol.ISwingControlTraitStateSchema, _swingcontrol.ISingleSwingPropsSchema, _swingcontrol.IDoubleSwingPropsSchema, _swingcontrol.ISwingControlTraitProperties_swingInfoSchema, _swingcontrol.ISwingControlTraitPropertiesSchema, _temperaturecontrol.ITemperatureControlTraitStateSchema, _temperaturecontrol.ITemperatureControlTraitPropertiesSchema, _tiltrelay.ITiltRelayTraitStateSchema, _tiltrelay.ITiltRelayTraitPropertiesSchema, _wwmixer.IWWMixerTraitStateSchema, _wwmixer.IWWMixerTraitPropertiesSchema];