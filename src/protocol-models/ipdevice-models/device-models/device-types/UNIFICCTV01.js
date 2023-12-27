"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IUnifiCameraEventInfoSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IUnifiCameraEventInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IUnifiCameraEventInfoSchema",
    properties: {
      applianceId: {
        type: "string",
        optional: true
      },
      eventId: {
        type: "string",
        optional: true
      },
      eventStartTime: {
        type: "int",
        optional: true
      },
      eventEndTime: {
        type: "int",
        optional: true
      },
      eventThumbnailUrl: {
        type: "string",
        optional: true
      },
      detectionType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IUnifiCameraEventInfoSchema = IUnifiCameraEventInfoSchema;