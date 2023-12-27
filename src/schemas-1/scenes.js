"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISceneSyncInfo_syncRequestParamsSchema = exports.ISceneSyncInfoSchema = exports.IKeusSceneTimeslotSchema = exports.IKeusSceneSchema = exports.IKeusSceneAction_actionItem_gmgroupActionSchema = exports.IKeusSceneAction_actionItem_gmapplianceActionSchema = exports.IKeusSceneAction_actionItemSchema = exports.IKeusSceneActionSchema = exports.IKeusGMSceneActionInfoSchema = exports.IKeusExcuteSceneActionSchema = exports.IKeusAreaSceneActionSchema = void 0;
const ISceneSyncInfo_syncRequestParamsSchema = exports.ISceneSyncInfo_syncRequestParamsSchema = {
  name: "ISceneSyncInfo_syncRequestParams",
  embedded: true,
  properties: {
    timeslotId: {
      type: "int",
      optional: true
    },
    timeslotDelay: {
      type: "int",
      optional: true
    }
  }
};
const IKeusGMSceneActionInfoSchema = exports.IKeusGMSceneActionInfoSchema = {
  name: "IKeusGMSceneActionInfo",
  embedded: true,
  properties: {
    protocolType: {
      type: "string",
      optional: true
    },
    protocolSceneActionControlInfo: {
      type: "object",
      optional: true
    }
  }
};
const IKeusAreaSceneActionSchema = exports.IKeusAreaSceneActionSchema = {
  name: "IKeusAreaSceneAction",
  embedded: true,
  properties: {
    sceneId: {
      type: "int",
      optional: true
    },
    roomId: {
      type: "string",
      optional: true
    }
  }
};
const IKeusExcuteSceneActionSchema = exports.IKeusExcuteSceneActionSchema = {
  name: "IKeusExcuteSceneAction",
  embedded: true,
  properties: {
    sceneId: {
      type: "int",
      optional: true
    },
    sceneRoom: {
      type: "string",
      optional: true
    }
  }
};
const ISceneSyncInfoSchema = exports.ISceneSyncInfoSchema = {
  name: "ISceneSyncInfo",
  embedded: true,
  properties: {
    syncStatus: "int",
    syncRequestId: "string",
    syncRequestType: "int",
    syncRequestTime: "int",
    syncRequestParams: {
      type: "ISceneSyncInfo_syncRequestParams",
      optional: true
    },
    jobTypeName: "int",
    jobMessage: "string"
  }
};
const IKeusSceneTimeslotSchema = exports.IKeusSceneTimeslotSchema = {
  name: "IKeusSceneTimeslot",
  embedded: true,
  properties: {
    timeslotId: "int",
    timeslotDelay: "int"
  }
};
const IKeusSceneAction_actionItem_gmapplianceActionSchema = exports.IKeusSceneAction_actionItem_gmapplianceActionSchema = {
  name: "IKeusSceneAction_actionItem_gmapplianceAction",
  embedded: true,
  properties: {
    applianceType: {
      type: "string",
      optional: true
    },
    applianceIdentifier: {
      type: "object",
      objectType: "IKeusGMApplianceIdentifier",
      optional: true
    },
    applianceState: {
      type: "object",
      objectType: "IKeusGMApplianceSavedStateAction_savedState",
      optional: true
    }
  }
};
const IKeusSceneAction_actionItem_gmgroupActionSchema = exports.IKeusSceneAction_actionItem_gmgroupActionSchema = {
  name: "IKeusSceneAction_actionItem_gmgroupAction",
  embedded: true,
  properties: {
    groupType: {
      type: "string",
      optional: true
    },
    groupIdentifier: {
      type: "object",
      objectType: "GMGroupIdentifier",
      optional: true
    },
    groupState: {
      type: "object",
      objectType: "IKeusGMApplianceSavedStateAction_savedState",
      optional: true
    }
  }
};
const IKeusSceneAction_actionItemSchema = exports.IKeusSceneAction_actionItemSchema = {
  name: "IKeusSceneAction_actionItem",
  embedded: true,
  properties: {
    groupId: {
      type: "int",
      optional: true
    },
    roomId: {
      type: "string",
      optional: true
    },
    //driverState:{type:"int",optional:true},
    driverState: "mixed{}",
    deviceId: {
      type: "string",
      optional: true
    },
    curtainState: {
      type: "int",
      optional: true
    },
    applianceId: {
      type: "string",
      optional: true
    },
    onOffState: {
      type: "object",
      objectType: "IEmbeddedOnOffApplianceState",
      optional: true
    },
    singleDimmerState: {
      type: "object",
      objectType: "IEmbeddedSingleDimmerApplianceState",
      optional: true
    },
    //fanState:{type:"object",objectType:"IEmbeddedFanApplianceState",optional:true},
    colorTunableState: {
      type: "object",
      objectType: "IEmbeddedColorTunableApplianceState",
      optional: true
    },
    applianceType: {
      type: "int",
      optional: true
    },
    updateType: {
      type: "int",
      optional: true
    },
    fanState: "mixed{}",
    lightState: "mixed{}",
    swingState: {
      type: "int",
      optional: true
    },
    deviceState: {
      type: "int",
      optional: true
    },
    rgbState: {
      type: "object",
      objectType: "IRBG",
      optional: true
    },
    wwaState: {
      type: "object",
      objectType: "IWWA",
      optional: true
    },
    relayId: {
      type: "int",
      optional: true
    },
    relayState: {
      type: "int",
      optional: true
    },
    remoteId: {
      type: "string",
      optional: true
    },
    remoteType: {
      type: "int",
      optional: true
    },
    irDevice: {
      type: "string",
      optional: true
    },
    irBlastAction: {
      type: "object",
      objectType: "IZigbeeIRBlasterAction_irBlastAction",
      optional: true
    },
    switchState: {
      type: "int",
      optional: true
    },
    warmWhiteState: {
      type: "int",
      optional: true
    },
    coolWhiteState: {
      type: "int",
      optional: true
    },
    sceneId: {
      type: "int",
      optional: true
    },
    gmapplianceAction: {
      type: "object",
      objectName: "IKeusSceneAction_actionItem_gmapplianceAction",
      optional: true
    },
    gmgroupAction: {
      type: "object",
      objectType: "IKeusSceneAction_actionItem_gmgroupAction",
      optional: true
    }
  }
};
const IKeusSceneActionSchema = exports.IKeusSceneActionSchema = {
  name: "IKeusSceneAction",
  embedded: "true",
  properties: {
    actionId: "string",
    zigbeeActionId: "int",
    actionType: "string",
    timeslotId: "int",
    actionItem: "IKeusSceneAction_actionItem",
    syncStatus: "int",
    syncRequestId: "string",
    jobTypeName: "int",
    jobMessage: "string",
    syncRequestTime: "int"
  }
};
const IKeusSceneSchema = exports.IKeusSceneSchema = {
  name: "IKeusScene",
  primaryKey: "sceneId",
  properties: {
    sceneId: "int",
    sceneName: "string",
    sceneType: "int",
    sceneScope: "int",
    sceneExecutionType: "int",
    sceneSection: "string",
    sceneRoom: "string",
    actionList: "IKeusSceneAction[]",
    timeslotList: "IKeusSceneTimeslot[]",
    lastUpdateTime: "int",
    lastUpdateBy: "string",
    lastUpdateUser: "string",
    lastUpdateSource: "string",
    sceneSyncInfo: "ISceneSyncInfo",
    scenePresetType: "int"
  }
};