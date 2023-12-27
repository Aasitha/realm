// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.gatewaysSchemaList = exports.IKeusMiniGatewayInfoSchema = exports.IKeusGatewaySchema = exports.IHomekitBridgeInfoSchema = void 0;
// require("core-js/modules/es.symbol.description.js");
// var _realm = _interopRequireDefault(require("realm"));
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
// function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// // Modified by @realm/babel-plugin
// //export class Button extends Realm.Object<Button> {
// class IKeusMiniGatewayInfoSchema extends _realm.default.Object {}

// // export const IKeusMiniGatewayInfoSchema= {
// //     name:"IKeusMiniGatewayInfo",
// //     embedded:true,
// //     properties:{
// //         gatewayId: {type:"string",optional:true},
// //         floor: {type:"string",optional:true},
// //         name: {type:"string",optional:true},
// //         location:{type:"string",optional:true},
// //         ip: {type:"string",optional:true},
// //         zigbeeChannel: {type:"int",optional:true},
// //     }

// // }
// exports.IKeusMiniGatewayInfoSchema = IKeusMiniGatewayInfoSchema;
// _defineProperty(IKeusMiniGatewayInfoSchema, "embedded", true);
// _defineProperty(IKeusMiniGatewayInfoSchema, "schema", {
//   name: "IKeusMiniGatewayInfoSchema",
//   properties: {
//     gatewayId: {
//       type: "string"
//     },
//     floor: {
//       type: "string",
//       optional: true
//     },
//     name: {
//       type: "string",
//       optional: true
//     },
//     location: {
//       type: "string",
//       optional: true
//     },
//     ip: {
//       type: "string",
//       optional: true
//     },
//     zigbeeChannel: {
//       type: "int",
//       optional: true
//     }
//   },
//   embedded: true
// });
// // Modified by @realm/babel-plugin
// class IHomekitBridgeInfoSchema extends _realm.default.Object {}

// // export const IHomekitBridgeInfoSchema={
// //     name:"IHomekitBridgeInfo",
// //     embedded:true,
// //     properties:{
// //         bridgeId: {type:"int",optional:true},
// //         username: {type:"string",optional:true},
// //         port: {type:"int",optional:true},
// //         displayName: {type:"string",optional:true},
// //         status: {type:"string",optional:true}
// //     }

// // }

// //Edit both interface & schema when making changes to gateway structure
// //Gateway interface for server
// exports.IHomekitBridgeInfoSchema = IHomekitBridgeInfoSchema;
// _defineProperty(IHomekitBridgeInfoSchema, "embedded", true);
// _defineProperty(IHomekitBridgeInfoSchema, "schema", {
//   name: "IHomekitBridgeInfoSchema",
//   properties: {
//     bridgeId: {
//       type: "int",
//       optional: true
//     },
//     username: {
//       type: "string",
//       optional: true
//     },
//     port: {
//       type: "int",
//       optional: true
//     },
//     displayName: {
//       type: "string",
//       optional: true
//     },
//     status: {
//       type: "string",
//       optional: true
//     }
//   },
//   embedded: true
// });
// // Modified by @realm/babel-plugin
// class IKeusGatewaySchema extends _realm.default.Object {}
// // export const IKeusGatewaySchema= {
// //     name:"IKeusGateway",
// //     primaryKey:"gatewayId",
// //     properties:{
// //         gatewayMode: {type:"int",optional:true},
// //         gatewayId: {type:"string",optional:true},
// //         seed: {type:"string",optional:true},
// //         serviceUser: {type:"string",optional:true},
// //         serviceUserPassword: {type:"string",optional:true},
// //         gatewayKey: {type:"string",optional:true},
// //         isRegisteredToCloud: {type:"bool",optional:true},
// //         zigbeeChannel: {type:"int",optional:true},
// //         hubVersion: {type:"string",optional:true},
// //         wronglyConfigured: {type:"bool",optional:true},
// //         googleLinked: {type:"bool",optional:true},
// //         googleLinkedUserList:"string[]",
// //         alexaLinked: {type:"bool",optional:true},
// //         alexaLinkedUserList: "string[]",
// //         siriLinked: {type:"bool",optional:true},
// //         homeKitPin: {type:"string",optional:true},
// //         homekitBridges: "IHomekitBridgeInfo[]",
// //         siriLinkedUserList: "string[]",
// //         isConfigured: {type:"bool",optional:true},
// //         miniGateways: "IKeusMiniGatewayInfo[]"
// //     }

// // }
// exports.IKeusGatewaySchema = IKeusGatewaySchema;
// _defineProperty(IKeusGatewaySchema, "embedded", true);
// _defineProperty(IKeusGatewaySchema, "schema", {
//   name: "IKeusGatewaySchema",
//   properties: {
//     gatewayMode: {
//       type: "int",
//       optional: true
//     },
//     gatewayId: {
//       type: "string"
//     },
//     seed: {
//       type: "string",
//       optional: true
//     },
//     serviceUser: {
//       type: "string",
//       optional: true
//     },
//     serviceUserPassword: {
//       type: "string",
//       optional: true
//     },
//     gatewayKey: {
//       type: "string",
//       optional: true
//     },
//     isRegisteredToCloud: {
//       type: "bool",
//       optional: true
//     },
//     zigbeeChannel: {
//       type: "int",
//       optional: true
//     },
//     hubVersion: {
//       type: "string",
//       optional: true
//     },
//     wronglyConfigured: {
//       type: "bool",
//       optional: true
//     },
//     googleLinked: {
//       type: "bool",
//       optional: true
//     },
//     googleLinkedUserList: {
//       type: "list",
//       optional: true,
//       objectType: "string"
//     },
//     alexaLinked: {
//       type: "bool",
//       optional: true
//     },
//     alexaLinkedUserList: {
//       type: "list",
//       optional: true,
//       objectType: "string"
//     },
//     siriLinked: {
//       type: "bool",
//       optional: true
//     },
//     homeKitPin: {
//       type: "string",
//       optional: true
//     },
//     homekitBridges: {
//       type: "list",
//       optional: true,
//       objectType: "IHomekitBridgeInfoSchema"
//     },
//     siriLinkedUserList: {
//       type: "list",
//       optional: true,
//       objectType: "string"
//     },
//     isConfigured: {
//       type: "bool",
//       optional: true
//     },
//     miniGateways: {
//       type: "list",
//       optional: true,
//       objectType: "IKeusMiniGatewayInfoSchema"
//     }
//   },
//   embedded: true
// });
// const gatewaysSchemaList = exports.gatewaysSchemaList = [IKeusGatewaySchema];
