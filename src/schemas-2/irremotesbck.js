"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusIRTVRemoteStateSchema = exports.IKeusIRTVRemotePropertiesSchema = exports.IKeusIRRemote_remoteStateSchema = exports.IKeusIRRemote_remoteStateMap = exports.IKeusIRRemote_remotePropertiesSchema = exports.IKeusIRRemote_remotePropertiesMap = exports.IKeusIRRemoteSchema = exports.IKeusIRPRRemoteStateSchema = exports.IKeusIRPRRemotePropertiesSchema = exports.IKeusIRFANRemoteStateSchema = exports.IKeusIRFANRemotePropertiesSchema = exports.IKeusIRAMPRemoteStateSchema = exports.IKeusIRAMPRemotePropertiesSchema = exports.IKeusIRACRemoteStateSchema = exports.IKeusIRACRemotePropertiesSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusIRRemoteSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
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
// export const IKeusIRACRemotePropertiesSchema={
//     name:"IKeusIRACRemoteProperties",
//     embedded:true,
//     properties:{
//         temperatureRange:{type:"int[]",optional:true},
//         swingHEnabled:{type:"bool",optional:true},
//         swingHSelectType:{type:"int",optional:true},
//         swingHOptions:{type:"string[]",optional:true},
//         swingVEnabled:{type:"bool",optional:true},
//         swingVSelectType:{type:"int",optional:true},
//         swingVOptions:{type:"string[]",optional:true},
//         fanEnabled:{type:"bool",optional:true},
//         fanSelectType:{type:"int",optional:true},
//         fanOptions:{type:"string[]",optional:true},
//         modeEnabled:{type:"bool",optional:true},
//         modeSelectType:{type:"int",optional:true},
//         modeOptions:{type:"string[]",optional:true},
//     }
// }
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
      },
      updateType: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}
// export const IKeusIRACRemoteStateSchema={
//     name:"IKeusIRACRemoteState",
//     embedded:true,
//     properties:{
//         powerOn:{type:"bool",optional:true},
//         temperature:{type:"int",optional:true},
//         swingHLevel:{type:"string",optional:true},
//         swingVLevel:{type:"string",optional:true},
//         fanLevel:{type:"string",optional:true},
//         mode:{type:"string",optional:true},
//         updateType:{type:"int",optional:true},
//     }
// }
exports.IKeusIRACRemoteStateSchema = IKeusIRACRemoteStateSchema;
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
// export const IKeusIRTVRemotePropertiesSchema = {
//     name: "IKeusIRTVRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]"
//     }
// }
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
// export const IKeusIRTVRemoteStateSchema = {
//     name: "IKeusIRTVRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
exports.IKeusIRTVRemoteStateSchema = IKeusIRTVRemoteStateSchema;
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
// export const IKeusIRAMPRemotePropertiesSchema = {
//     name: "IKeusIRAMPRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]"
//     }
// }
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
// export const IKeusIRAMPRemoteStateSchema = {
//     name: "IKeusIRAMPRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
exports.IKeusIRAMPRemoteStateSchema = IKeusIRAMPRemoteStateSchema;
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
// export const IKeusIRPRRemotePropertiesSchema = {
//     name: "IKeusIRPRRemoteProperties",
//     embedded: true,
//     properties: {
//         sourceEnabled: Realm.Types.Bool
//         sourceSelectType: Realm.Types.Int
//         sourceOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]",
//         onoffType: Realm.Types.Int
//     }
// }
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
// export const IKeusIRPRRemoteStateSchema = {
//     name: "IKeusIRPRRemoteState",
//     embedded: true,
//     properties: {
//         updateType: Realm.Types.Int
//         powerOn: Realm.Types.Bool
//         source: string;
//         mode: { type: "string", optional: true }
//     }
// }
exports.IKeusIRPRRemoteStateSchema = IKeusIRPRRemoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRFANRemotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRFANRemotePropertiesSchema",
    properties: {
      speedSelectType: {
        type: "int"
      },
      speedOptions: {
        type: "list",
        objectType: "string"
      },
      modeEnabled: {
        type: "bool"
      },
      modeSelectType: {
        type: "int"
      },
      modeOptions: {
        type: "list",
        objectType: "string"
      },
      ledEnabled: {
        type: "bool"
      }
    },
    embedded: true
  };
}
// export const IKeusIRFANRemotePropertiesSchema = {
//     name: "IKeusIRFANRemoteProperties",
//     embedded: true,
//     properties: {
//         speedSelectType: Realm.Types.Int
//         speedOptions: "string[]",
//         modeEnabled: Realm.Types.Bool
//         modeSelectType: Realm.Types.Int
//         modeOptions: "string[]",
//         ledEnabled: Realm.Types.Bool
//     }
// }
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
const IKeusIRRemote_remotePropertiesMap = exports.IKeusIRRemote_remotePropertiesMap = {
  0: "iKeusIRACRemoteProperties",
  1: "iKeusIRTVRemoteProperties",
  2: "iKeusIRAMPRemoteProperties",
  3: "iKeusIRPRRemoteProperties",
  4: "iKeusIRFANRemoteProperties"
};
// Modified by @realm/babel-plugin
class IKeusIRRemote_remotePropertiesSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRRemote_remotePropertiesSchema",
    properties: {
      0:{
        type:"object",
        optional:true,
        objectType:"IKeusIRACRemotePropertiesSchema"
      },
      1:{
        type:"object",
        optional:true,
        objectType:"IKeusIRTVRemotePropertiesSchema"
      },
      2:{
        type:"object",
        optional:true,
        objectType:"IKeusIRAMPRemotePropertiesSchema"
      },
      3:{
        type:"object",
        optional:true,
        objectType:"IKeusIRPRRemotePropertiesSchema"
      },
      4:{
        type:"object",
        optional:true,
        objectType:"IKeusIRFANRemotePropertiesSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusIRRemote_remotePropertiesSchema = IKeusIRRemote_remotePropertiesSchema;
var irremoteTypes = /*#__PURE__*/function (irremoteTypes) {
  irremoteTypes[irremoteTypes["IR_AC"] = 0] = "IR_AC";
  irremoteTypes[irremoteTypes["IR_TV"] = 1] = "IR_TV";
  irremoteTypes[irremoteTypes["IR_AMP"] = 2] = "IR_AMP";
  irremoteTypes[irremoteTypes["IR_PR"] = 3] = "IR_PR";
  irremoteTypes[irremoteTypes["IR_FAN"] = 4] = "IR_FAN";
  return irremoteTypes;
}(irremoteTypes || {});
const IKeusIRRemote_remoteStateMap = exports.IKeusIRRemote_remoteStateMap = {
  0: "iKeusIRACRemoteState",
  1: "iKeusIRTVRemoteState",
  2: "iKeusIRAMPRemoteState",
  3: "iKeusIRPRRemoteState",
  4: "iKeusIRFANRemoteState"
};
// Modified by @realm/babel-plugin
class IKeusIRRemote_remoteStateSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusIRRemote_remoteStateSchema",
    properties: {
      0:{
        type:"object",
        optional:true,
        objectType:"IKeusIRACRemoteStateSchema"
      },
      1:{
        type:"object",
        optional:true,
        objectType:"IKeusIRTVRemoteStateSchema"
      },
      2:{
        type:"dictionary",
        optional:true,
        objectType:"mixed"
      },
      3:{
        type:"object",
        optional:true,
        objectType:"IKeusIRPRRemoteStateSchema"
      },
      4:{
        type:"object",
        optional:true,
        objectType:"IKeusIRFANRemoteStateSchema"
      }
    },
    embedded: true
  };
}
exports.IKeusIRRemote_remoteStateSchema = IKeusIRRemote_remoteStateSchema;
// Modified by @realm/babel-plugin
class IKeusIRRemoteSchema extends _realm.default.Object {
  static primaryKey = "remoteId";
  static schema = {
    name: "IKeusIRRemoteSchema",
    properties: {
      transformOptions: {
        type: "list",
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        objectType: "mixed"
      },
      remoteId: {
        type: "string"
      },
      irDevice: {
        type: "string",
        optional: true
      },
      companyId: {
        type: "string",
        optional: true
      },
      modelId: {
        type: "string",
        optional: true
      },
      remoteName: {
        type: "string",
        optional: true
      },
      remoteType: {
        type: "int",
        optional: true
      },
      remoteProperties: {
        type: "object",
        optional: true,
        objectType: "IKeusIRRemote_remotePropertiesSchema"
      },
      remoteState: {
        type: "object",
        optional: true,
        objectType: "IKeusIRRemote_remoteStateSchema"
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
      }
    },
    primaryKey: "remoteId"
  };
}
exports.IKeusIRRemoteSchema = IKeusIRRemoteSchema;
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.197:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'irremotes';
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const result = await collection.find({}).toArray();
      realm.write(() => {
        result.forEach(doc => {
          console.log(doc._id);
          let groupTransformOptions = ["remoteProperties", "remoteState"];
          console.log(groupTransformOptions);
          let transformValues = ["remoteType", "remoteType"];
          const realmActivity = realm.create(BaseSchemaName, {
            transformValues: transformValues,
            transformOptions: groupTransformOptions,
            remoteId: doc.remoteId,
            irDevice: doc.irDevice,
            companyId: doc.companyId,
            modelId: doc.modelId,
            remoteName: doc.remoteName,
            remoteType: doc.remoteType,
            remoteProperties: {
              [doc.remoteType]: doc.remoteProperties
            },
            remoteState: {
              [doc.remoteType]: doc.remoteState
            },
            lastUpdateTime: doc.lastUpdateTime,
            lastUpdateBy: doc.lastUpdateBy,
            lastUpdateUser: doc.lastUpdateUser,
            lastUpdateSource: doc.lastUpdateSource
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertIRRemote() {}
  static async getAllIRRemotes(realm) {
    return realm.objects(BaseSchemaName);
  }
  static async bulkWrite() {}
  static async setLastUpdatedRemoteState() {}
  static async getIRRemoteById(realm, remoteId) {
    return realm.objects(BaseSchemaName).filtered(`remoteId=="${remoteId}"`);
  }
  static async getIRACRemoteByParentDeviceId(realm, irBlasterID) {
    return realm.objects(BaseSchemaName).filtered(`irDevice=="${irBlasterID}" && remoteType==${irremoteTypes.IR_AC}`);
  }
  static async cleanIRRemotes() {}
  static async updateIRRemoteState() {}
  static async updateIRRemoteName() {}
  static async deleteRemoteById() {}
  static async replaceIrDeviceId() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusIRRemoteSchema, IKeusIRACRemotePropertiesSchema, IKeusIRACRemoteStateSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRTVRemoteStateSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRAMPRemoteStateSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRPRRemoteStateSchema, IKeusIRFANRemotePropertiesSchema, IKeusIRFANRemoteStateSchema, IKeusIRRemote_remotePropertiesSchema, IKeusIRRemote_remoteStateSchema];