"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusIRTVRemoteStateSchema = exports.IKeusIRTVRemotePropertiesSchema = exports.IKeusIRRemote_remoteStateSchema = exports.IKeusIRRemote_remoteStateMap = exports.IKeusIRRemote_remotePropertiesSchema = exports.IKeusIRRemote_remotePropertiesMap = exports.IKeusIRRemoteSchema = exports.IKeusIRPRRemoteStateSchema = exports.IKeusIRPRRemotePropertiesSchema = exports.IKeusIRFANRemoteStateSchema = exports.IKeusIRFANRemotePropertiesSchema = exports.IKeusIRAMPRemoteStateSchema = exports.IKeusIRAMPRemotePropertiesSchema = exports.IKeusIRACRemoteStateSchema = exports.IKeusIRACRemotePropertiesSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
const BaseSchemaName = exports.BaseSchemaName = "IKeusIRRemoteSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusIRACRemotePropertiesSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRACRemoteStateSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRTVRemotePropertiesSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRTVRemoteStateSchema extends Realm.Object {
  static embedded = true;
}
// export const IKeusIRTVRemoteStateSchema = {
//     name: "IKeusIRTVRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
exports.IKeusIRTVRemoteStateSchema = IKeusIRTVRemoteStateSchema;
class IKeusIRAMPRemotePropertiesSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRAMPRemoteStateSchema extends Realm.Object {
  static embedded = true;
}
// export const IKeusIRAMPRemoteStateSchema = {
//     name: "IKeusIRAMPRemoteState",
//     embedded: true,
//     properties: {

//     }
// }
exports.IKeusIRAMPRemoteStateSchema = IKeusIRAMPRemoteStateSchema;
class IKeusIRPRRemotePropertiesSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRPRRemoteStateSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRFANRemotePropertiesSchema extends Realm.Object {
  static embedded = true;
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
class IKeusIRFANRemoteStateSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusIRFANRemoteStateSchema = IKeusIRFANRemoteStateSchema;
const IKeusIRRemote_remotePropertiesMap = exports.IKeusIRRemote_remotePropertiesMap = {
  0: "iKeusIRACRemoteProperties",
  1: "iKeusIRTVRemoteProperties",
  2: "iKeusIRAMPRemoteProperties",
  3: "iKeusIRPRRemoteProperties",
  4: "iKeusIRFANRemoteProperties"
};
class IKeusIRRemote_remotePropertiesSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusIRRemote_remotePropertiesSchema = IKeusIRRemote_remotePropertiesSchema;
const IKeusIRRemote_remoteStateMap = exports.IKeusIRRemote_remoteStateMap = {
  0: "iKeusIRACRemoteState",
  1: "iKeusIRTVRemoteState",
  2: "iKeusIRAMPRemoteState",
  3: "iKeusIRPRRemoteState",
  4: "iKeusIRFANRemoteState"
};
class IKeusIRRemote_remoteStateSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusIRRemote_remoteStateSchema = IKeusIRRemote_remoteStateSchema;
class IKeusIRRemoteSchema extends Realm.Object {
  static primaryKey = "remoteId";
}
exports.IKeusIRRemoteSchema = IKeusIRRemoteSchema;
class Methods {
  static async insertIRRemote() {}
  static async getAllIRRemotes(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async bulkWrite() {}
  static async setLastUpdatedRemoteState() {}
  static async getIRRemoteById() {}
  static async getIRACRemoteByParentDeviceId() {}
  static async cleanIRRemotes() {}
  static async updateIRRemoteState() {}
  static async updateIRRemoteName() {}
  static async deleteRemoteById() {}
  static async replaceIrDeviceId() {}
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusIRRemoteSchema, IKeusIRACRemotePropertiesSchema, IKeusIRACRemoteStateSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRTVRemoteStateSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRAMPRemoteStateSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRPRRemoteStateSchema, IKeusIRFANRemotePropertiesSchema, IKeusIRFANRemoteStateSchema, IKeusIRRemote_remotePropertiesSchema, IKeusIRRemote_remoteStateSchema];