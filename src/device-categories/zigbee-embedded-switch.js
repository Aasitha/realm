"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchAppliancePropertiesCollectionSchema = exports.KZESSwitchPropertiesSchema = exports.KZESApplianceStateSchema = exports.KZESAppliancePropertiesSchema = exports.IZigbeeEmbeddedSwitchStateSchema = exports.IZigbeeEmbeddedSwitchPropertiesSchema = exports.ISingleDimmerApplianceGroupPropertiesSchema = exports.IOnOffApplianceGroupPropertiesSchema = exports.IFanApplianceGroupPropertiesSchema = exports.IEmbeddedSwitchSchema = exports.IEmbeddedSwitchPortSchema = exports.IEmbeddedSwitchGroupPropertiesSchema = exports.IEmbeddedSwitchDcFanPropertiesSchema = exports.IEmbeddedSwitchAppliancePropertiesSchema = exports.IEmbeddedSwitchAcFanPropertiesSchema = exports.IEmbeddedSingleDimmerApplianceStateSchema = exports.IEmbeddedSingleDimmerAppliancePropertiesSchema = exports.IEmbeddedOnOffApplianceStateSchema = exports.IEmbeddedOnOffAppliancePropertiesSchema = exports.IEmbeddedGroupSingleDimmerApplianceActionSchema = exports.IEmbeddedGroupOnOffApplianceActionSchema = exports.IEmbeddedGroupFanApplianceActionSchema = exports.IEmbeddedGroupColorTunableApplianceActionSchema = exports.IEmbeddedFanApplianceStateSchema = exports.IEmbeddedFanAppliancePropertiesSchema = exports.IEmbeddedColorTunableApplianceStateSchema = exports.IEmbeddedColorTunableAppliancePropertiesSchema = exports.IEmbeddedApplianceSchema = exports.IEmbeddedApplianceActionSchema = exports.IColorTunableApplianceGroupPropertiesSchema = exports.IApplianceidDeviceidDetailsSchema = exports.Collectionschema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IEmbeddedApplianceActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedApplianceActionSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      applianceId: {
        type: "string",
        optional: true
      },
      applianceType: {
        type: "int",
        optional: true
      },
      applianceState: {
        type: "object",
        optional: true,
        objectType: "KZESApplianceStateSchema"
      }
    },
    embedded: true
  };
}
// export class applianceStateCollectionSchema = {
//     name: "applianceStateCollection",
//     embedded: true,
//     properties: {
//         iEmbeddedOnOffApplianceState: { type: "IEmbeddedOnOffApplianceState", optional: true },
//         iEmbeddedSingleDimmerApplianceState: { type: "IEmbeddedSingleDimmerApplianceState", optional: true },
//         iEmbeddedFanApplianceState: { type: "IEmbeddedFanApplianceState", optional: true },
//         iEmbeddedColorTunableApplianceState: { type: "IEmbeddedColorTunableApplianceState", optional: true }
//     }
// }
exports.IEmbeddedApplianceActionSchema = IEmbeddedApplianceActionSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchPortSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchPortSchema",
    properties: {
      portId: {
        type: "int",
        optional: true
      },
      portState: {
        type: "int",
        optional: true
      },
      isInAppliance: {
        type: "bool",
        optional: true
      },
      applianceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchPortSchema = IEmbeddedSwitchPortSchema;
// Modified by @realm/babel-plugin
class IApplianceidDeviceidDetailsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IApplianceidDeviceidDetailsSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      applianceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IApplianceidDeviceidDetailsSchema = IApplianceidDeviceidDetailsSchema;
// Modified by @realm/babel-plugin
class IOnOffApplianceGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IOnOffApplianceGroupPropertiesSchema",
    properties: {
      deviceList: {
        type: "list",
        objectType: "IApplianceidDeviceidDetailsSchema"
      }
    },
    embedded: true
  };
}
exports.IOnOffApplianceGroupPropertiesSchema = IOnOffApplianceGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class IFanApplianceGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IFanApplianceGroupPropertiesSchema",
    properties: {
      deviceList: {
        type: "list",
        objectType: "IApplianceidDeviceidDetailsSchema"
      }
    },
    embedded: true
  };
}
exports.IFanApplianceGroupPropertiesSchema = IFanApplianceGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class ISingleDimmerApplianceGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISingleDimmerApplianceGroupPropertiesSchema",
    properties: {
      deviceList: {
        type: "list",
        objectType: "IApplianceidDeviceidDetailsSchema"
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISingleDimmerApplianceGroupPropertiesSchema = ISingleDimmerApplianceGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class IColorTunableApplianceGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IColorTunableApplianceGroupPropertiesSchema",
    properties: {
      deviceList: {
        type: "list",
        objectType: "IApplianceidDeviceidDetailsSchema"
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IColorTunableApplianceGroupPropertiesSchema = IColorTunableApplianceGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedOnOffApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedOnOffApplianceStateSchema",
    properties: {
      switchState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedOnOffApplianceStateSchema = IEmbeddedOnOffApplianceStateSchema;
// Modified by @realm/babel-plugin
class IEmbeddedOnOffAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedOnOffAppliancePropertiesSchema",
    properties: {
      portId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedOnOffAppliancePropertiesSchema = IEmbeddedOnOffAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSingleDimmerApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSingleDimmerApplianceStateSchema",
    properties: {
      switchState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSingleDimmerApplianceStateSchema = IEmbeddedSingleDimmerApplianceStateSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSingleDimmerAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSingleDimmerAppliancePropertiesSchema",
    properties: {
      portId: {
        type: "int",
        optional: true
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSingleDimmerAppliancePropertiesSchema = IEmbeddedSingleDimmerAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedFanApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedFanApplianceStateSchema",
    properties: {
      fanState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedFanApplianceStateSchema = IEmbeddedFanApplianceStateSchema;
// Modified by @realm/babel-plugin
class IEmbeddedFanAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedFanAppliancePropertiesSchema",
    properties: {
      portId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedFanAppliancePropertiesSchema = IEmbeddedFanAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedColorTunableApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedColorTunableApplianceStateSchema",
    properties: {
      lightState: {
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
      }
    },
    embedded: true
  };
}
exports.IEmbeddedColorTunableApplianceStateSchema = IEmbeddedColorTunableApplianceStateSchema;
// Modified by @realm/babel-plugin
class IEmbeddedColorTunableAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedColorTunableAppliancePropertiesSchema",
    properties: {
      warmWhitePort: {
        type: "int",
        optional: true
      },
      coolWhitePort: {
        type: "int",
        optional: true
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedColorTunableAppliancePropertiesSchema = IEmbeddedColorTunableAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedGroupOnOffApplianceActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedGroupOnOffApplianceActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      switchState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedGroupOnOffApplianceActionSchema = IEmbeddedGroupOnOffApplianceActionSchema;
// Modified by @realm/babel-plugin
class IEmbeddedGroupSingleDimmerApplianceActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedGroupSingleDimmerApplianceActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      switchState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedGroupSingleDimmerApplianceActionSchema = IEmbeddedGroupSingleDimmerApplianceActionSchema;
// Modified by @realm/babel-plugin
class IEmbeddedGroupFanApplianceActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedGroupFanApplianceActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      fanState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedGroupFanApplianceActionSchema = IEmbeddedGroupFanApplianceActionSchema;
// Modified by @realm/babel-plugin
class IEmbeddedGroupColorTunableApplianceActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedGroupColorTunableApplianceActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      lightState: {
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
      }
    },
    embedded: true
  };
}
exports.IEmbeddedGroupColorTunableApplianceActionSchema = IEmbeddedGroupColorTunableApplianceActionSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchAppliancePropertiesSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchAppliancePropertiesSchema = IEmbeddedSwitchAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchGroupPropertiesSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchGroupPropertiesSchema = IEmbeddedSwitchGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchAcFanPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchAcFanPropertiesSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchAcFanPropertiesSchema = IEmbeddedSwitchAcFanPropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchDcFanPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchDcFanPropertiesSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchDcFanPropertiesSchema = IEmbeddedSwitchDcFanPropertiesSchema;
// Modified by @realm/babel-plugin
class Collectionschema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "Collectionschema",
    properties: {
      iEmbeddedColorTunableApplianceProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedColorTunableAppliancePropertiesSchema"
      },
      iEmbeddedFanApplianceProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedFanAppliancePropertiesSchema"
      },
      iEmbeddedSingleDimmerApplianceProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSingleDimmerAppliancePropertiesSchema"
      },
      iEmbeddedOnOffApplianceProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedOnOffAppliancePropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.Collectionschema = Collectionschema;
// Modified by @realm/babel-plugin
class KZESAppliancePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "KZESAppliancePropertiesSchema",
    properties: {
      warmWhitePort: {
        type: "int",
        optional: true
      },
      coolWhitePort: {
        type: "int",
        optional: true
      },
      fadeTime: {
        type: "int",
        optional: true
      },
      fadeDown: {
        type: "int",
        optional: true
      },
      fadeOff: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "int",
        optional: true
      },
      portId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.KZESAppliancePropertiesSchema = KZESAppliancePropertiesSchema;
// Modified by @realm/babel-plugin
class KZESApplianceStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "KZESApplianceStateSchema",
    properties: {
      switchState: {
        type: "int",
        optional: true
      },
      fanState: {
        type: "int",
        optional: true
      },
      lightState: {
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
      }
    },
    embedded: true
  };
}
exports.KZESApplianceStateSchema = KZESApplianceStateSchema;
// Modified by @realm/babel-plugin
class IEmbeddedApplianceSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedApplianceSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      },
      applianceName: {
        type: "string",
        optional: true
      },
      applianceType: {
        type: "int",
        optional: true
      },
      applianceState: {
        type: "object",
        optional: true,
        objectType: "KZESApplianceStateSchema"
      },
      applianceProperties: {
        type: "object",
        optional: true,
        objectType: "KZESAppliancePropertiesSchema"
      },
      iconType: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "object",
        optional: true,
        objectType: "KZESApplianceStateSchema"
      },
      inGroup: {
        type: "bool",
        optional: true
      },
      groupId: {
        type: "int",
        optional: true
      },
      groupRoom: {
        type: "string",
        optional: true
      },
      lastUpdatedTime: {
        type: "int",
        optional: true
      },
      lastUpdatedBy: {
        type: "string",
        optional: true
      },
      lastUpdatedUser: {
        type: "string",
        optional: true
      },
      lastUpdatedSource: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IEmbeddedApplianceSchema = IEmbeddedApplianceSchema;
// Modified by @realm/babel-plugin
class switchAppliancePropertiesCollectionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "switchAppliancePropertiesCollectionSchema",
    properties: {
      iEmbeddedSwitchApplianceProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSwitchAppliancePropertiesSchema"
      },
      iEmbeddedSwitchGroupProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSwitchGroupPropertiesSchema"
      },
      iEmbeddedSwitchAcFanProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSwitchAcFanPropertiesSchema"
      },
      iEmbeddedSwitchDcFanProperties: {
        type: "object",
        optional: true,
        objectType: "IEmbeddedSwitchDcFanPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.switchAppliancePropertiesCollectionSchema = switchAppliancePropertiesCollectionSchema;
// Modified by @realm/babel-plugin
class KZESSwitchPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "KZESSwitchPropertiesSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      },
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
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
exports.KZESSwitchPropertiesSchema = KZESSwitchPropertiesSchema;
// Modified by @realm/babel-plugin
class IEmbeddedSwitchSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IEmbeddedSwitchSchema",
    properties: {
      switchId: {
        type: "int",
        optional: true
      },
      switchType: {
        type: "int",
        optional: true
      },
      switchName: {
        type: "string",
        optional: true
      },
      switchProperties: {
        type: "object",
        optional: true,
        objectType: "KZESSwitchPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IEmbeddedSwitchSchema = IEmbeddedSwitchSchema;
// Modified by @realm/babel-plugin
class IZigbeeEmbeddedSwitchPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeEmbeddedSwitchPropertiesSchema",
    properties: {
      outputPorts: {
        type: "list",
        objectType: "IEmbeddedSwitchPortSchema"
      },
      appliance: {
        type: "list",
        objectType: "IEmbeddedApplianceSchema"
      },
      switch: {
        type: "list",
        objectType: "IEmbeddedSwitchSchema"
      },
      isAreaMaster: {
        type: "mixed",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeEmbeddedSwitchPropertiesSchema = IZigbeeEmbeddedSwitchPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeEmbeddedSwitchStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeEmbeddedSwitchStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IZigbeeEmbeddedSwitchStateSchema = IZigbeeEmbeddedSwitchStateSchema;