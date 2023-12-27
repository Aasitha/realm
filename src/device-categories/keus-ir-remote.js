"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IKeusIRTVRemoteStateSchema = exports.IKeusIRTVRemotePropertiesSchema = exports.IKeusIRTVBlastActionSchema = exports.IKeusIRPRRemoteStateSchema = exports.IKeusIRPRRemotePropertiesSchema = exports.IKeusIRPRBlastActionSchema = exports.IKeusIRFANRemoteStateSchema = exports.IKeusIRFANRemotePropertiesSchema = exports.IKeusIRFANBlastActionSchema = exports.IKeusIRAMPRemoteStateSchema = exports.IKeusIRAMPRemotePropertiesSchema = exports.IKeusIRAMPBlastActionSchema = exports.IKeusIRACRemoteStateSchema = exports.IKeusIRACRemotePropertiesSchema = exports.IKeusIRACBlastActionSchema = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Modified by @realm/babel-plugin
//AC
class IKeusIRACRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRACRemotePropertiesSchema",
    properties: {
      temperatureRange: {
        type: "list",
        objectType: "int"
      },
      swingHEnabled: {
        type: "bool",
        optional: true
      },
      swingHSelectType: {
        type: "int",
        optional: true
      },
      swingHOptions: {
        type: "list",
        objectType: "string"
      },
      swingVEnabled: {
        type: "bool",
        optional: true
      },
      swingVSelectType: {
        type: "int",
        optional: true
      },
      swingVOptions: {
        type: "list",
        objectType: "string"
      },
      fanEnabled: {
        type: "bool",
        optional: true
      },
      fanSelectType: {
        type: "int",
        optional: true
      },
      fanOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool",
        optional: true
      },
      modeSelectType: {
        type: "int",
        optional: true
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.IKeusIRACRemotePropertiesSchema = IKeusIRACRemotePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusIRACRemoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRACRemoteStateSchema",
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
      }
    },
    embedded: true
  };
}
exports.IKeusIRACRemoteStateSchema = IKeusIRACRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRACBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRACBlastActionSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
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
      }
    },
    embedded: true
  };
}

//TV
exports.IKeusIRACBlastActionSchema = IKeusIRACBlastActionSchema;
// Modified by @realm/babel-plugin
class IKeusIRTVRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRTVRemotePropertiesSchema",
    properties: {
      sourceEnabled: {
        type: "bool",
        optional: true
      },
      sourceSelectType: {
        type: "int",
        optional: true
      },
      sourceOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool",
        optional: true
      },
      modeSelectType: {
        type: "int",
        optional: true
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.IKeusIRTVRemotePropertiesSchema = IKeusIRTVRemotePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusIRTVRemoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRTVRemoteStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IKeusIRTVRemoteStateSchema = IKeusIRTVRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRTVBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRTVBlastActionSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      powerOn: {
        type: "bool",
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
      mode: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}

//Amp
exports.IKeusIRTVBlastActionSchema = IKeusIRTVBlastActionSchema;
// Modified by @realm/babel-plugin
class IKeusIRAMPRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRAMPRemotePropertiesSchema",
    properties: {
      sourceEnabled: {
        type: "bool",
        optional: true
      },
      sourceSelectType: {
        type: "int",
        optional: true
      },
      sourceOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool",
        optional: true
      },
      modeSelectType: {
        type: "int",
        optional: true
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      }
    },
    embedded: true
  };
}
exports.IKeusIRAMPRemotePropertiesSchema = IKeusIRAMPRemotePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusIRAMPRemoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRAMPRemoteStateSchema",
    properties: {},
    embedded: true
  };
}
exports.IKeusIRAMPRemoteStateSchema = IKeusIRAMPRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRAMPBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRAMPBlastActionSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      powerOn: {
        type: "bool",
        optional: true
      },
      source: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}

//Pr
exports.IKeusIRAMPBlastActionSchema = IKeusIRAMPBlastActionSchema;
// Modified by @realm/babel-plugin
class IKeusIRPRRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRPRRemotePropertiesSchema",
    properties: {
      sourceEnabled: {
        type: "bool",
        optional: true
      },
      sourceSelectType: {
        type: "int",
        optional: true
      },
      sourceOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool",
        optional: true
      },
      modeSelectType: {
        type: "int",
        optional: true
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      },
      onoffType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusIRPRRemotePropertiesSchema = IKeusIRPRRemotePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusIRPRRemoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRPRRemoteStateSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      powerOn: {
        type: "bool",
        optional: true
      },
      source: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusIRPRRemoteStateSchema = IKeusIRPRRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRPRBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRPRBlastActionSchema",
    properties: {
      updateType: {
        type: "int",
        optional: true
      },
      powerOn: {
        type: "bool",
        optional: true
      },
      source: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}

//Fan
exports.IKeusIRPRBlastActionSchema = IKeusIRPRBlastActionSchema;
// Modified by @realm/babel-plugin
class IKeusIRFANRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRFANRemotePropertiesSchema",
    properties: {
      speedSelectType: {
        type: "int",
        optional: true
      },
      speedOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool",
        optional: true
      },
      modeSelectType: {
        type: "int",
        optional: true
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      },
      ledEnabled: {
        type: "bool",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusIRFANRemotePropertiesSchema = IKeusIRFANRemotePropertiesSchema;
// Modified by @realm/babel-plugin
class IKeusIRFANRemoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRFANRemoteStateSchema",
    properties: {
      powerOn: {
        type: "bool",
        optional: true
      },
      speedLevel: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      },
      ledState: {
        type: "int",
        optional: true
      },
      updateType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusIRFANRemoteStateSchema = IKeusIRFANRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRFANBlastActionSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRFANBlastActionSchema",
    properties: {
      powerOn: {
        type: "bool",
        optional: true
      },
      speedLevel: {
        type: "string",
        optional: true
      },
      mode: {
        type: "string",
        optional: true
      },
      ledState: {
        type: "int",
        optional: true
      },
      updateType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IKeusIRFANBlastActionSchema = IKeusIRFANBlastActionSchema;