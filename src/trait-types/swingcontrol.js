"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.ISwingControlTraitState_swingControlStateSchema = exports.ISwingControlTraitStateSchema = exports.ISwingControlTraitProperties_swingInfoSchema = exports.ISwingControlTraitPropertiesSchema = exports.ISingleSwingStateSchema = exports.ISingleSwingPropsSchema = exports.IDoubleSwingStateSchema = exports.IDoubleSwingPropsSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
class ISingleSwingStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISingleSwingStateSchema",
    properties: {
      swingState: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISingleSwingStateSchema = ISingleSwingStateSchema;
// Modified by @realm/babel-plugin
class IDoubleSwingStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDoubleSwingStateSchema",
    properties: {
      horizontalSwingState: {
        type: "string",
        optional: true
      },
      verticalSwingState: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IDoubleSwingStateSchema = IDoubleSwingStateSchema;
// Modified by @realm/babel-plugin
class ISwingControlTraitState_swingControlStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwingControlTraitState_swingControlStateSchema",
    properties: {
      swingState: {
        type: "string",
        optional: true
      },
      horizontalSwingState: {
        type: "string",
        optional: true
      },
      verticalSwingState: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.ISwingControlTraitState_swingControlStateSchema = ISwingControlTraitState_swingControlStateSchema;
// Modified by @realm/babel-plugin
class ISwingControlTraitStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwingControlTraitStateSchema",
    properties: {
      swingType: {
        type: "int",
        optional: true
      },
      swingControlState: {
        type: "object",
        optional: true,
        objectType: "ISwingControlTraitState_swingControlStateSchema"
      }
    },
    embedded: true
  };
}
exports.ISwingControlTraitStateSchema = ISwingControlTraitStateSchema;
// Modified by @realm/babel-plugin
class ISingleSwingPropsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISingleSwingPropsSchema",
    properties: {
      swingsList: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.ISingleSwingPropsSchema = ISingleSwingPropsSchema;
// Modified by @realm/babel-plugin
class IDoubleSwingPropsSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IDoubleSwingPropsSchema",
    properties: {
      verticalSwingEnabled: {
        type: "bool",
        optional: true
      },
      verticalSwingsList: {
        type: "list",
        objectType: "string"
      },
      horizontalSwingEnabled: {
        type: "bool",
        optional: true
      },
      horizontalSwingsList: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.IDoubleSwingPropsSchema = IDoubleSwingPropsSchema;
// Modified by @realm/babel-plugin
class ISwingControlTraitProperties_swingInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwingControlTraitProperties_swingInfoSchema",
    properties: {
      swingsList: {
        type: "list",
        objectType: "string"
      },
      verticalSwingEnabled: {
        type: "bool",
        optional: true
      },
      verticalSwingsList: {
        type: "list",
        objectType: "string"
      },
      horizontalSwingEnabled: {
        type: "bool",
        optional: true
      },
      horizontalSwingsList: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.ISwingControlTraitProperties_swingInfoSchema = ISwingControlTraitProperties_swingInfoSchema;
// Modified by @realm/babel-plugin
class ISwingControlTraitPropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "ISwingControlTraitPropertiesSchema",
    properties: {
      swingType: {
        type: "int",
        optional: true
      },
      swingInfo: {
        type: "object",
        optional: true,
        objectType: "ISwingControlTraitProperties_swingInfoSchema"
      },
      defaultSwingState: {
        type: "object",
        optional: true,
        objectType: "ISwingControlTraitStateSchema"
      }
    },
    embedded: true
  };
}
exports.ISwingControlTraitPropertiesSchema = ISwingControlTraitPropertiesSchema;
const ModelsList = exports.ModelsList = [ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema];