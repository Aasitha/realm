
// import Realm from "realm"
// //export class Button extends Realm.Object<Button> {
// export class IKeusMiniGatewayInfoSchema extends Realm.Object<IKeusMiniGatewayInfoSchema> {
//     static embedded?: boolean = true;
//     gatewayId!: string;
//     floor?: string;
//     name?: string;
//     location?:string;
//     ip?: string;
//     zigbeeChannel?: Realm.Types.Int;
// }



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

// export class IHomekitBridgeInfoSchema extends Realm.Object<IHomekitBridgeInfoSchema>{
//     static embedded?: boolean = true;
//     bridgeId?: Realm.Types.Int;
//     username?: string;
//     port?: Realm.Types.Int;
//     displayName?: string;
//     status?: string;
// }

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
// export class IKeusGatewaySchema extends Realm.Object<IKeusGatewaySchema>{
//     static embedded?: boolean = true;
//     gatewayMode?: Realm.Types.Int;
//     gatewayId!: string;
//     seed?: string;
//     serviceUser?: string;
//     serviceUserPassword?: string;
//     gatewayKey?: string;
//     isRegisteredToCloud?: Realm.Types.Bool;
//     zigbeeChannel?: Realm.Types.Int;
//     hubVersion?: string;
//     wronglyConfigured?: Realm.Types.Bool;
//     googleLinked?: Realm.Types.Bool;
//     googleLinkedUserList?:Realm.Types.List<string>;
//     alexaLinked?: Realm.Types.Bool;
//     alexaLinkedUserList?: Realm.Types.List<string>;
//     siriLinked?: Realm.Types.Bool;
//     homeKitPin?: string;
//     homekitBridges?: Realm.Types.List<IHomekitBridgeInfoSchema>
//     siriLinkedUserList?:Realm.Types.List<string>;
//     isConfigured?: Realm.Types.Bool;
//     miniGateways?: Realm.Types.List<IKeusMiniGatewayInfoSchema>;

// }
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
// export const gatewaysSchemaList=[IKeusGatewaySchema]

