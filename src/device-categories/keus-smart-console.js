"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonPropertiesCollectionSchema = exports.KZSCdeviceButtonPropertiesSchema = exports.KZSCbuttonPropertiesSchema = exports.ISmartConsoleSceneButtonPropertiesSchema = exports.ISmartConsoleRemoteRelayButtonPropertiesSchema = exports.ISmartConsoleRelayButtonPropertiesSchema = exports.ISmartConsoleRelayActionSchema = exports.ISmartConsoleNoPropsButtonPropertiesSchema = exports.ISmartConsoleGroupButtonPropertiesSchema = exports.ISmartConsoleFanButtonPropertiesSchema = exports.ISmartConsoleCurtainButtonPropertiesSchema = exports.IKeusSmartConsoleStateSchema = exports.IKeusSmartConsoleRelaySchema = exports.IKeusSmartConsolePropertiesSchema = exports.IKeusSmartConsoleButtonSchema = exports.IKeusSmartConsoleButtonPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IKeusSmartConsoleButtonSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSmartConsoleButtonSchema",
    properties: {
      buttonId: {
        type: "int",
        optional: true
      },
      buttonType: {
        type: "int",
        optional: true
      },
      buttonProperties: {
        type: "object",
        optional: true,
        objectType: "IKeusSmartConsoleButtonPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusSmartConsoleButtonSchema = IKeusSmartConsoleButtonSchema;
// Modified by @realm/babel-plugin
class IKeusSmartConsoleButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSmartConsoleButtonPropertiesSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      sceneId: {
        type: "int",
        optional: true
      },
      deviceIds: {
        type: "list",
        objectType: "mixed"
      },
      applianceIds: {
        type: "list",
        objectType: "mixed"
      },
      relayId: {
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
exports.IKeusSmartConsoleButtonPropertiesSchema = IKeusSmartConsoleButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class buttonPropertiesCollectionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "buttonPropertiesCollectionSchema",
    properties: {
      iSmartConsoleGroupButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleGroupButtonPropertiesSchema"
      },
      iSmartConsoleSceneButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleSceneButtonPropertiesSchema"
      },
      iSmartConsoleCurtainButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleCurtainButtonPropertiesSchema"
      },
      iSmartConsoleRelayButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleRelayButtonPropertiesSchema"
      },
      iSmartConsoleRemoteRelayButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleRemoteRelayButtonPropertiesSchema"
      },
      iSmartConsoleFanButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleFanButtonPropertiesSchema"
      },
      iSmartConsoleNoPropsButtonProperties: {
        type: "object",
        optional: true,
        objectType: "ISmartConsoleNoPropsButtonPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.buttonPropertiesCollectionSchema = buttonPropertiesCollectionSchema;
// Modified by @realm/babel-plugin
class IKeusSmartConsoleRelaySchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSmartConsoleRelaySchema",
    properties: {
      relayId: {
        type: "int",
        optional: true
      },
      relayName: {
        type: "string",
        optional: true
      },
      relayState: {
        type: "int",
        optional: true
      },
      applianceType: {
        type: "int",
        optional: true
      },
      isHighPower: {
        type: "bool",
        optional: true
      },
      lastUpdateTime: {
        type: "int",
        optional: true
      },
      lastUpdateBy: {
        type: "string",
        optional: true
      },
      lastUpdateUser: {
        type: "string",
        optional: true
      },
      lastUpdateSource: {
        type: "string",
        optional: true
      },
      isAssigned: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusSmartConsoleRelaySchema = IKeusSmartConsoleRelaySchema;
// Modified by @realm/babel-plugin
class KZSCdeviceButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "KZSCdeviceButtonPropertiesSchema",
    properties: {
      buttonId: {
        type: "int",
        optional: true
      },
      buttonType: {
        type: "int",
        optional: true
      },
      buttonProperties: {
        type: "object",
        optional: true,
        objectType: "KZSCbuttonPropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.KZSCdeviceButtonPropertiesSchema = KZSCdeviceButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class KZSCbuttonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "KZSCbuttonPropertiesSchema",
    properties: {
      sceneId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      relayId: {
        type: "int",
        optional: true
      },
      groupId: {
        type: "int",
        optional: true
      },
      deviceIds: {
        type: "list",
        objectType: "mixed"
      },
      applianceIds: {
        type: "list",
        objectType: "mixed"
      },
      deviceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.KZSCbuttonPropertiesSchema = KZSCbuttonPropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusSmartConsolePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSmartConsolePropertiesSchema",
    properties: {
      buttons: {
        type: "list",
        objectType: "KZSCdeviceButtonPropertiesSchema"
      },
      relays: {
        type: "list",
        objectType: "IKeusSmartConsoleRelaySchema"
      },
      defaultFan: {
        type: "string",
        optional: true
      },
      defaultSceneId: {
        type: "int",
        optional: true
      },
      defaultSceneRoom: {
        type: "string",
        optional: true
      },
      sceneStepSize: {
        type: "int",
        optional: true
      },
      isAreaMaster: {
        type: "bool",
        optional: true
      },
      isDaliMaster: {
        type: "bool",
        optional: true
      },
      identifyStatus: {
        type: "bool",
        optional: true
      },
      interactionMode: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusSmartConsolePropertiesSchema = IKeusSmartConsolePropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleRelayActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleRelayActionSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      relayId: {
        type: "int",
        optional: true
      },
      relayState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleRelayActionSchema = ISmartConsoleRelayActionSchema;
// Modified by @realm/babel-plugin
class IKeusSmartConsoleStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusSmartConsoleStateSchema",
    properties: {},
    embedded: true
  };
}

//Button Types
exports.IKeusSmartConsoleStateSchema = IKeusSmartConsoleStateSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleGroupButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleGroupButtonPropertiesSchema",
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
exports.ISmartConsoleGroupButtonPropertiesSchema = ISmartConsoleGroupButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleSceneButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleSceneButtonPropertiesSchema",
    properties: {
      sceneId: {
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
exports.ISmartConsoleSceneButtonPropertiesSchema = ISmartConsoleSceneButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleCurtainButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleCurtainButtonPropertiesSchema",
    properties: {
      deviceIds: {
        type: "list",
        objectType: "string"
      },
      applianceIds: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleCurtainButtonPropertiesSchema = ISmartConsoleCurtainButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleRelayButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleRelayButtonPropertiesSchema",
    properties: {
      relayId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleRelayButtonPropertiesSchema = ISmartConsoleRelayButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleRemoteRelayButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleRemoteRelayButtonPropertiesSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      relayId: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleRemoteRelayButtonPropertiesSchema = ISmartConsoleRemoteRelayButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleFanButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleFanButtonPropertiesSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISmartConsoleFanButtonPropertiesSchema = ISmartConsoleFanButtonPropertiesSchema;
// Modified by @realm/babel-plugin
class ISmartConsoleNoPropsButtonPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISmartConsoleNoPropsButtonPropertiesSchema",
    properties: {},
    embedded: true
  };
}
exports.ISmartConsoleNoPropsButtonPropertiesSchema = ISmartConsoleNoPropsButtonPropertiesSchema;