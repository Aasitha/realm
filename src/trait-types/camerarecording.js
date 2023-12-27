"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.ICameraRecordingTraitStateSchema = exports.ICameraRecordingTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ICameraRecordingTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ICameraRecordingTraitStateSchema",
    properties: {},
    embedded: true
  };
}
exports.ICameraRecordingTraitStateSchema = ICameraRecordingTraitStateSchema;
// Modified by @realm/babel-plugin
class ICameraRecordingTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ICameraRecordingTraitPropertiesSchema",
    properties: {
      recordStatus: {
        type: "int"
      },
      detectionType: {
        type: "int"
      },
      recordingQuality: {
        type: "int"
      },
      beforeRecordingTime: {
        type: "int"
      },
      afterRecordingTime: {
        type: "int"
      },
      notificationsEnabled: {
        type: "bool"
      },
      receiveEvents: {
        type: "bool"
      },
      cameraThumbnailURL: {
        type: "string"
      }
    },
    embedded: true
  };
}
exports.ICameraRecordingTraitPropertiesSchema = ICameraRecordingTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema];