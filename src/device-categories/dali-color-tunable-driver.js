"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDaliColorTunableDriverStateSchema = exports.IDaliColorTunableDriverPropertiesSchema = exports.IDaliColorTunableDriverGroupScheculeActionSchema = exports.IDaliColorTunableDriverGroupSceneActionSchema = exports.IDaliColorTunableDriverGroupPropertiesSchema = exports.IDaliColorTunableDriverGroupActivitySchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverStateSchema",
    properties: {
      driverState: {
        type: "int",
        optional: true
      },
      colorTemperature: {
        type: "int",
        optional: true
      },
      lastUpdateBy: {
        type: "string",
        optional: true
      },
      lastUpdateTime: {
        type: "int",
        optional: true
      },
      lastUpdateUser: {
        type: "string",
        optional: true
      },
      lastUpdateSource: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverStateSchema = IDaliColorTunableDriverStateSchema;
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverPropertiesSchema",
    properties: {
      fadeTime: {
        type: "int",
        optional: true
      },
      instantOff: {
        type: "bool",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      },
      isDriverPropertyUpdated: {
        type: "bool",
        optional: true
      },
      minTemperature: {
        type: "int",
        optional: true
      },
      maxTemperature: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverPropertiesSchema = IDaliColorTunableDriverPropertiesSchema;
;
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverGroupPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverGroupPropertiesSchema",
    properties: {
      fadeTime: {
        type: "int",
        optional: true
      },
      instantOff: {
        type: "bool",
        optional: true
      },
      maxValue: {
        type: "int",
        optional: true
      },
      minValue: {
        type: "int",
        optional: true
      },
      defaultState: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      },
      deviceVoiceName: {
        type: "string",
        optional: true
      },
      minTemperature: {
        type: "int",
        optional: true
      },
      maxTemperature: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverGroupPropertiesSchema = IDaliColorTunableDriverGroupPropertiesSchema;
;
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverGroupSceneActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverGroupSceneActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      driverState: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverGroupSceneActionSchema = IDaliColorTunableDriverGroupSceneActionSchema;
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverGroupScheculeActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverGroupScheculeActionSchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      driverState: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverGroupScheculeActionSchema = IDaliColorTunableDriverGroupScheculeActionSchema;
// Modified by @realm/babel-plugin
class IDaliColorTunableDriverGroupActivitySchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDaliColorTunableDriverGroupActivitySchema",
    properties: {
      groupId: {
        type: "int",
        optional: true
      },
      groupRoom: {
        type: "string",
        optional: true
      },
      roomId: {
        type: "string",
        optional: true
      },
      roomName: {
        type: "string",
        optional: true
      },
      floorId: {
        type: "string",
        optional: true
      },
      floorName: {
        type: "string",
        optional: true
      },
      sectionId: {
        type: "string",
        optional: true
      },
      sectionName: {
        type: "string",
        optional: true
      },
      driverState: {
        type: "object",
        optional: true,
        objectType: "IDaliColorTunableDriverStateSchema"
      }
    },
    embedded: true
  };
}
exports.IDaliColorTunableDriverGroupActivitySchema = IDaliColorTunableDriverGroupActivitySchema;