"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.IAngularTiltTraitStateSchema = exports.IAngularTiltTraitPropertiesSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class IAngularTiltTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAngularTiltTraitStateSchema",
    properties: {
      tiltAngle: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IAngularTiltTraitStateSchema = IAngularTiltTraitStateSchema;
;
// Modified by @realm/babel-plugin
class IAngularTiltTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IAngularTiltTraitPropertiesSchema",
    properties: {
      tiltType: {
        type: "int",
        optional: true
      },
      fullTiltAngle: {
        type: "int",
        optional: true
      },
      invertTilt: {
        type: "bool",
        optional: true
      },
      defaultTiltState: {
        type: "object",
        optional: true,
        objectType: "IAngularTiltTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.IAngularTiltTraitPropertiesSchema = IAngularTiltTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema];