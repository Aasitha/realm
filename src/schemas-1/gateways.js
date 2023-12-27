"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusMiniGatewayInfoSchema = exports.IKeusGatewaySchema = exports.IHomekitBridgeInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
const BaseSchemaName = exports.BaseSchemaName = "IKeusGatewaySchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusMiniGatewayInfoSchema extends Realm.Object {
  static embedded = true;
}

// export enum HomeKitBridgeStatus{
//     Paired="paired",
//     Unpaired="unpaired",
//     Started="started",
//     failedToStart="failed to start"
// }
exports.IKeusMiniGatewayInfoSchema = IKeusMiniGatewayInfoSchema;
class IHomekitBridgeInfoSchema extends Realm.Object {
  static embedded = true;
}
exports.IHomekitBridgeInfoSchema = IHomekitBridgeInfoSchema;
class IKeusGatewaySchema extends Realm.Object {
  static primaryKey = "gatewayId";
}
exports.IKeusGatewaySchema = IKeusGatewaySchema;
class Methods {
  // static saveDevice(realmInst: Realm, deviceInfo: DevicesInfo) {
  //     return new Promise((resolve) => {
  //         realmInst.write(() => {
  //             realmInst.create(BaseSchemaName, deviceInfo);
  //             resolve({});
  //         });
  //     });
  // }
  static async createGateway() {}
  static async deleteGateway() {}
  static async addMiniGateway() {}
  static async deleteMiniGateway() {}
  static async updateMiniGatewayIp() {}
  static async updateMiniGatewayInfo() {}
  static async getGateway(realmInst) {
    realmInst.objects(BaseSchemaName).toJSON();
  }
}

//Edit both interface & schema when making changes to gateway structure
//Gateway interface for server
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGatewaySchema, IKeusMiniGatewayInfoSchema, IHomekitBridgeInfoSchema];