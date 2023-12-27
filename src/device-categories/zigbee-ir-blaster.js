"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IZigbeeIRBlasterStateSchema = exports.IZigbeeIRBlasterPropertiesSchema = exports.IZigbeeIRBlasterAction_irBlastActionSchema = exports.IZigbeeIRBlasterActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IZigbeeIRBlasterPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeIRBlasterPropertiesSchema",
    properties: {
      blastSignalDelay: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeIRBlasterPropertiesSchema = IZigbeeIRBlasterPropertiesSchema;
// Modified by @realm/babel-plugin
class IZigbeeIRBlasterStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeIRBlasterStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IZigbeeIRBlasterStateSchema = IZigbeeIRBlasterStateSchema;
// Modified by @realm/babel-plugin
class IZigbeeIRBlasterAction_irBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeIRBlasterAction_irBlastActionSchema",
    properties: {
      powerOn: {
        type: "bool",
        optional: true
      },
      temperature: {
        type: "int",
        optional: true
      },
      swingHLevel: {
        type: "string",
        optional: true
      },
      swingVLevel: {
        type: "string",
        optional: true
      },
      fanLevel: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      },
      updateType: {
        type: "int",
        optional: true
      },
      channelNumber: {
        type: "int",
        optional: true
      },
      source: {
        type: "string",
        optional: true
      },
      speedLevel: {
        type: "string",
        optional: true
      },
      ledState: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IZigbeeIRBlasterAction_irBlastActionSchema = IZigbeeIRBlasterAction_irBlastActionSchema;
// Modified by @realm/babel-plugin
class IZigbeeIRBlasterActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IZigbeeIRBlasterActionSchema",
    properties: {
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
        optional: true,
        objectType: "IZigbeeIRBlasterAction_irBlastActionSchema"
      }
    },
    embedded: true
  };
}
exports.IZigbeeIRBlasterActionSchema = IZigbeeIRBlasterActionSchema;