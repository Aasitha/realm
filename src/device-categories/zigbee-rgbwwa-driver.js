"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeRgbwwaGroupStateSchema = exports.IZigbeeRgbwwaGroupPropertiesSchema = exports.IZigbeeRgbwwaDriverStateSchema = exports.IZigbeeRgbwwaDriverPropertiesSchema = exports.IZigbeeRgbwwaDriverGroupActionSchema = exports.IZigbeeRgbwwaDriverActionSchema = exports.IWWASchema = exports.IRBGSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IRBGSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IRBGSchema",
    properties: {
      red: {
        type: "int",
        optional: true
      },
      green: {
        type: "int",
        optional: true
      },
      blue: {
        type: "int",
        optional: true
      },
      pattern: {
        type: "int",
        optional: true
      },
      deviceState: {
        type: "int",
        optional: true
      },
      brightness: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IRBGSchema = IRBGSchema;
// Modified by @realm/babel-plugin
class IWWASchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IWWASchema",
    properties: {
      warmWhite: {
        type: "int",
        optional: true
      },
      coolWhite: {
        type: "int",
        optional: true
      },
      amber: {
        type: "int",
        optional: true
      },
      deviceState: {
        type: "int",
        optional: true
      },
      brightness: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IWWASchema = IWWASchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaGroupStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaGroupStateSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      deviceState: {
        type: "int",
        optional: true
      },
      wwaState: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      },
      rgbState: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaGroupStateSchema = IZigbeeRgbwwaGroupStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaGroupPropertiesSchema",
    properties: {
      outputChannels: {
        type: "int",
        optional: true
      },
      rgbEnabled: {
        type: "bool",
        optional: true
      },
      warmWhiteEnabled: {
        type: "bool",
        optional: true
      },
      coolWhiteEnabled: {
        type: "bool",
        optional: true
      },
      amberEnabled: {
        type: "bool",
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
      defaultUpdateType: {
        type: "int",
        optional: true
      },
      defaultRgbAction: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      },
      defaultWwaAction: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaGroupPropertiesSchema = IZigbeeRgbwwaGroupPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaDriverActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaDriverActionSchema",
    properties: {
      deviceId: {
        type: "string",
        optional: true
      },
      updateType: {
        type: "int",
        optional: true
      },
      deviceState: {
        type: "int",
        optional: true
      },
      wwaState: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      },
      rgbState: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaDriverActionSchema = IZigbeeRgbwwaDriverActionSchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaDriverGroupActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaDriverGroupActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      updateType: {
        type: "int",
        optional: true
      },
      deviceState: {
        type: "int",
        optional: true
      },
      wwaState: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      },
      rgbState: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaDriverGroupActionSchema = IZigbeeRgbwwaDriverGroupActionSchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaDriverStateSchema",
    properties: {
      defaultUpdateType: {
        type: "int",
        optional: true
      },
      lastUpdateType: {
        type: "int",
        optional: true
      },
      defaultRgbAction: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      },
      defaultWwaAction: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      },
      lastUpdatedRGBAction: {
        type: "object",
        optional: true,
        objectType: "IRBGSchema"
      },
      lastUpdatedWWAAction: {
        type: "object",
        optional: true,
        objectType: "IWWASchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaDriverStateSchema = IZigbeeRgbwwaDriverStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeRgbwwaDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeRgbwwaDriverPropertiesSchema",
    properties: {
      outputChannels: {
        type: "int",
        optional: true
      },
      rgbEnabled: {
        type: "bool",
        optional: true
      },
      warmWhiteEnabled: {
        type: "bool",
        optional: true
      },
      coolWhiteEnabled: {
        type: "bool",
        optional: true
      },
      amberEnabled: {
        type: "bool",
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
      iconType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeRgbwwaDriverPropertiesSchema = IZigbeeRgbwwaDriverPropertiesSchema;