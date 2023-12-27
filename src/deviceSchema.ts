

// //console.log(IDaliColorTunableDriverPropertiesSchema.name)
// export const devicePropertiesCollectionSchema = {
//     name: "devicePropertiesCollection",
//     embedded: true,
//     properties: {
//         iDaliColorTunableDriverProperties: { type: "object", objectType: "IDaliColorTunableDriverProperties", optional: true },
//         iDaliColorTunableDriverGroupProperties: { type: "IDaliColorTunableDriverGroupProperties", optional: true },
//         iDaliDimmableDriverProperties: { type: "IDaliDimmableDriverProperties", optional: true },
//         iDaliNonDimmableDriverProperties: { type: "IDaliNonDimmableDriverProperties", optional: true },
//         iKeusIRACRemoteProperties: { type: "IKeusIRACRemoteProperties", optional: true },
//         iKeusIRTVRemoteProperties: { type: "IKeusIRTVRemoteProperties", optional: true },
//         iKeusIRAMPRemoteProperties: { type: "IKeusIRAMPRemoteProperties", optional: true },
//         iKeusIRPRRemoteProperties: { type: "IKeusIRPRRemoteProperties", optional: true },
//         iKeusIRFANRemoteProperties: { type: "IKeusIRFANRemoteProperties", optional: true },
//         iKeusSceneWizardProperties: { type: "IKeusSceneWizardProperties", optional: true },
//         iKeusSmartConsoleProperties: { type: "IKeusSmartConsoleProperties", optional: true },
//         iZigbeeEmbeddedSwitchProperties: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         iZigbeeIRBlasterProperties: { type: "IZigbeeIRBlasterProperties", optional: true },
//         iZigbeeRgbwwaDriverProperties: { type: "IZigbeeRgbwwaDriverProperties", optional: true },
//         iZigbeeDCFanControllerProperties: { type: "IZigbeeDCFanControllerProperties", optional: true },
//         iZigbeeDimmableDriverProperties: { type: "IZigbeeDimmableDriverProperties", optional: true },
//         iZigbeeNonDimmableDriverProperties: { type: "IZigbeeNonDimmableDriverProperties", optional: true },
//         iZigbeeEmbeddedSceneSwitchProperties: { type: "IZigbeeEmbeddedSceneSwitchProperties", optional: true },
//         iZigbeeACFanControllerProperties: { type: "IZigbeeACFanControllerProperties", optional: true },
//         iZigbeeContactSensorProperties: { type: "IZigbeeContactSensorProperties", optional: true },
//         iZigbeeInlineDimmerProperties: { type: "IZigbeeInlineDimmerProperties", optional: true },
//         iZigbeeRangeExtenderProperties: { type: "IZigbeeRangeExtenderProperties", optional: true },
//         iZigbeeCurtainWizardProperties:{type:"IZigbeeCurtainWizardProperties",optional:true},

//         //iZigbeeEmbeddedSwitchProperties:{type:"IZigbeeEmbeddedSwitchProperties",optional:true},
//         /////////////////////////////////////////////////////////////////////////////////////////////////
//         // iKZES1P: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZSC7C: { type: "KZSC7C", optional: true },
//         // iKZIRB01: { type: "KZIRB01", optional: true },
//         // iKZIRBM1: { type: "KZIRBM1", optional: true },
//         // iKZSW01: { type: "KZSW01", optional: true },
//         // iKZSWM1: { type: "KZSWM1", optional: true },
//         // iKZDDSATM1: { type: "KZDDSATM1", optional: true },
//         // iKZDD01: { type: "KZDD01", optional: true },
//         // iKZDDERM1: { type: "KZDDERM1", optional: true },
//         // iKZRGBWWA01: { type: "IZigbeeRgbwwaDriverProperties", optional: true },
//         // iKZRGBWWA02: { type: "IZigbeeRgbwwaDriverProperties", optional: true },
//         // iKZRGBWWAM1: { type: "IZigbeeRgbwwaDriverProperties", optional: true },
//         // iKZRGBWWAM2: { type: "IZigbeeRgbwwaDriverProperties", optional: true },
//         // iKZDCFC01: { type: "IZigbeeDCFanControllerProperties", optional: true },
//         // iKZDCFC55: { type: "IZigbeeDCFanControllerProperties", optional: true },
//         // iKZDCFCM1: { type: "IZigbeeDCFanControllerProperties", optional: true },
//         // iKZDCFCM55: { type: "IZigbeeDCFanControllerProperties", optional: true },
//         // iKZES2P: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES4P: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES6PSC: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES6PSCM: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES1PIL: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES1PO: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES2PO: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES4PO: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES2PM: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES4PM: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES1PM: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZES1PILM1: { type: "IZigbeeEmbeddedSwitchProperties", optional: true },
//         // iKZND01: { type: "IZigbeeNonDimmableDriverProperties", optional: true },

//     }
// }
// export const fwInfoSchema = {
//     name: "fwInfo",
//     properties: {
//         timeStamp: "int",
//         hwVersion: "string",
//         swVersion: "string",
//         deviceName: "string",
//         hgmSetting: "int",
//         bleSetting: "int"
//     }
// }
// export const fwhealthObjectSchema = {
//     name: "fwHealthObject",
//     properties: {
//         fwHealth: "fwHealthSubObject",
//         timeStamp: "int"
//     }
// }
// export const fwHealthSubObjectSchema = {
//     name: "fwHealthSubObject",
//     properties: {
//         status: "int",
//         timeFromBoot: "int",
//         lastResetCause: "int",
//         restartCount: "int",
//         props: "fwHealthSubObjectProps[]",
//         restartCountErrorFlag: "int"
//     }
// }
// export const fwHealthSubObjectPropsSchema = {
//     name: "fwHealthSubObjectProps",
//     properties: {
//         hwId: "int",
//         lastErrorCount: "int",
//         currentErrorCount: "int",
//         errorActionId: "int",
//         currErrCountFlag: "int",
//         lastErrCountFlag: "int"
//     }
// }
// export const fwHealthSchema = {
//     name: "fwHealth",
//     properties: {
//         fwHealth: "fwHealthObject[]"
//     }
// }

// export const IKeusDeviceSchema = {
//     name: "IKeusDevice",
//     properties: {
//         deviceId: "string",
//         masterId: "string",
//         deviceType: "string",
//         deviceCategory: "string",
//         deviceName: "string",
//         deviceSection: "string",
//         deviceRoom: "string",
//         deviceLocation: "string",
//         deviceControlType: "string",
//         deviceParent: "string",
//         firmwareVersion: "string",
//         isHidden: "bool",
//         isConfigured: "bool",
//         manufacturerName: "string",
//         deviceTypeDisplayName: "string",
//         deviceTypeName: "string",
//         inGroup: "bool",
//         deviceGroup: "int",
//         groupRoom: "string",
//         deviceState: "deviceState",
//         deviceProperties: "devicePropertiesCollection",
//         lastUpdateTime: "int",
//         lastUpdateBy: "string",
//         lastUpdateUser: { type: "string", optional: true },
//         lastUpdateSource: "string",
//         deviceSyncInfo: { type: "IKeusDeviceSyncInfo", optional: true },
//         markedForDelete: "int",
//         registeredAt: { type: "int", optional: true },
//         fwInfo: { type: "fwInfo", optional: true },
//         fwHealth: "fwHealthObject[]"

//     }
// }
// export const deviceStateSchema = {
//     name: "deviceState",
//     properties: {

//     }
// }

// export const IKeusDeviceSyncInfoSchema = {
//     name: "IKeusDeviceSyncInfo",
//     embedded: true,
//     properties: {
//         syncStatus: "int",
//         syncRequestType: "int",
//         syncRequestId: "string",
//         syncRequestTime: "int",
//         syncRequestParams: "syncRequestParams",
//         jobTypeName: { type: "int", optional: true },
//         jobMessage: { type: "string", optional: true }
//     }
// }
// export const syncRequestParamsSchema = {
//     name: "syncRequestParams",
//     properties: {

//     }
// }