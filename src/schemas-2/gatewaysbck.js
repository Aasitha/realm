"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelsList = exports.Methods = exports.IKeusMiniGatewayInfoSchema = exports.IKeusGatewaySchema = exports.IHomekitBridgeInfoSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusGatewaySchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
// Modified by @realm/babel-plugin
class IKeusMiniGatewayInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IKeusMiniGatewayInfoSchema",
    properties: {
      gatewayId: {
        type: "string",
        optional: true
      },
      floor: {
        type: "string",
        optional: true
      },
      name: {
        type: "string",
        optional: true
      },
      location: {
        type: "string",
        optional: true
      },
      ip: {
        type: "string",
        optional: true
      },
      zigbeeChannel: {
        type: "int",
        optional: true
      }
    },
    embedded: true
  };
}

// export enum HomeKitBridgeStatus{
//     Paired="paired",
//     Unpaired="unpaired",
//     Started="started",
//     failedToStart="failed to start"
// }
exports.IKeusMiniGatewayInfoSchema = IKeusMiniGatewayInfoSchema;
// Modified by @realm/babel-plugin
class IHomekitBridgeInfoSchema extends _realm.default.Object {
  static embedded = true;
  static schema = {
    name: "IHomekitBridgeInfoSchema",
    properties: {
      bridgeId: {
        type: "int",
        optional: true
      },
      username: {
        type: "string",
        optional: true
      },
      port: {
        type: "int",
        optional: true
      },
      displayName: {
        type: "string",
        optional: true
      },
      status: {
        type: "string",
        optional: true
      }
    },
    embedded: true
  };
}
exports.IHomekitBridgeInfoSchema = IHomekitBridgeInfoSchema;
// Modified by @realm/babel-plugin
class IKeusGatewaySchema extends _realm.default.Object {
  static primaryKey = "gatewayId";
  static schema = {
    name: "IKeusGatewaySchema",
    properties: {
      gatewayMode: {
        type: "int",
        optional: true
      },
      gatewayId: {
        type: "string"
      },
      seed: {
        type: "string",
        optional: true
      },
      serviceUser: {
        type: "string",
        optional: true
      },
      serviceUserPassword: {
        type: "string",
        optional: true
      },
      gatewayKey: {
        type: "string",
        optional: true
      },
      isRegisteredToCloud: {
        type: "bool",
        optional: true
      },
      zigbeeChannel: {
        type: "int",
        optional: true
      },
      hubVersion: {
        type: "string",
        optional: true
      },
      wronglyConfigured: {
        type: "bool",
        optional: true
      },
      googleLinked: {
        type: "bool",
        optional: true
      },
      googleLinkedUserList: {
        type: "list",
        objectType: "string"
      },
      alexaLinked: {
        type: "bool",
        optional: true
      },
      alexaLinkedUserList: {
        type: "list",
        objectType: "string"
      },
      siriLinked: {
        type: "bool",
        optional: true
      },
      homeKitPin: {
        type: "string",
        optional: true
      },
      homekitBridges: {
        type: "list",
        objectType: "IHomekitBridgeInfoSchema"
      },
      siriLinkedUserList: {
        type: "list",
        objectType: "string"
      },
      isConfigured: {
        type: "bool",
        optional: true
      },
      miniGateways: {
        type: "list",
        objectType: "IKeusMiniGatewayInfoSchema"
      }
    },
    primaryKey: "gatewayId"
  };
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
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017/keus';
      const dbName = 'brijeshSir';
      const collectionName = 'gateways';
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
          const realmActivity = realm.create(BaseSchemaName, {
            gatewayMode: doc.gatewayMode,
            gatewayId: doc.gatewayId,
            seed: doc.seed,
            serviceUser: doc.serviceUser,
            serviceUserPassword: doc.serviceUserPassword,
            gatewayKey: doc.gatewayKey,
            isRegisteredToCloud: doc.isRegisteredToCloud,
            zigbeeChannel: doc.zigbeeChannel,
            hubVersion: doc.hubVersion,
            wronglyConfigured: doc.wronglyConfigured,
            googleLinked: doc.googleLinked,
            googleLinkedUserList: doc.googleLinkedUserList,
            alexaLinked: doc.alexaLinked,
            alexaLinkedUserList: doc.alexaLinkedUserList,
            siriLinked: doc.siriLinked,
            homeKitPin: doc.homeKitPin,
            homekitBridges: doc.homekitBridges,
            siriLinkedUserList: doc.siriLinkedUserList,
            isConfigured: doc.isConfigured,
            miniGateways: doc.miniGateways
          });
          console.log(realmActivity);
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async createGateway(realm, doc) {
    const gateways = realm.objects(BaseSchemaName);
    if (gateways.length) {
      //throw new HomeError.GatewayAlreadyExists();
    } else {
      realm.write(() => {
        realm.create(BaseSchemaName, {
          gatewayMode: doc.gatewayMode,
          gatewayId: doc.gatewayId,
          seed: doc.seed,
          serviceUser: doc.serviceUser,
          serviceUserPassword: doc.serviceUserPassword,
          gatewayKey: doc.gatewayKey,
          isRegisteredToCloud: doc.isRegisteredToCloud,
          zigbeeChannel: doc.zigbeeChannel,
          hubVersion: doc.hubVersion,
          wronglyConfigured: doc.wronglyConfigured,
          googleLinked: doc.googleLinked,
          googleLinkedUserList: doc.googleLinkedUserList,
          alexaLinked: doc.alexaLinked,
          alexaLinkedUserList: doc.alexaLinkedUserList,
          siriLinked: doc.siriLinked,
          homeKitPin: doc.homeKitPin,
          homekitBridges: doc.homekitBridges,
          siriLinkedUserList: doc.siriLinkedUserList,
          isConfigured: doc.isConfigured,
          miniGateways: doc.miniGateways
        });
      });
    }
  }
  static async deleteGateway(realm, gatewayId) {
    realm.delete(realm.objects(BaseSchemaName).filtered('gatewayId ==  $0', gatewayId));
  }
  static async addMiniGateway(realm, data) {
    realm.write(() => {
      const gateway = realm.objects(BaseSchemaName).filtered('gatewayId == $0', data.mainGatewayId)[0];
      gateway.miniGateways.push(data.miniGatewayInfo);
    });
  }
  static async deleteMiniGateway(realm, data) {
    realm.write(() => {
      const gateway = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId);
      const index = gateway.miniGateways.findIndex(obj => obj.gatewayId === data.miniGatewayId);
      gateway.miniGateways.splice(index, 1);
    });
  }
  static async updateMiniGatewayIp(realm, data) {
    realm.write(() => {
      const gateway = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId);
      if (gateway) {
        const miniGatewayToUpdate = gateway.miniGateways.find(miniGateway => miniGateway.gatewayId === data.miniGatewayId);
        if (miniGatewayToUpdate) {
          miniGatewayToUpdate.ip = data.miniGatewayIp;
        }
      }
    });
  }
  static async updateMiniGatewayInfo(realm, data) {
    realm.write(() => {
      const gateway = realm.objectForPrimaryKey(BaseSchemaName, data.mainGatewayId);
      if (gateway) {
        const miniGatewayToUpdate = gateway.miniGateways.find(miniGateway => miniGateway.gatewayId === data.miniGatewayId);
        if (miniGatewayToUpdate) {
          miniGatewayToUpdate.floor = data.floor;
          miniGatewayToUpdate.name = data.name;
          miniGatewayToUpdate.location = data.location;
        }
      }
    });
  }
  static async getGateway(realmInst) {
    return realmInst.objects(BaseSchemaName);
  }
}

//Edit both interface & schema when making changes to gateway structure
//Gateway interface for server
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusGatewaySchema, IKeusMiniGatewayInfoSchema, IHomekitBridgeInfoSchema];