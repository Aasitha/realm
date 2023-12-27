"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationDataCollection = exports.ModelsList = exports.Methods = exports.IKeusScheduleNotificationData = exports.IKeusNotificationSchema = exports.IKeusGeyserNotificationData = exports.IKeusGeyserGroupNotificationData = exports.IKeusContactSensorNotificationData = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
var _realm = _interopRequireDefault(require("realm"));
var _zigbeeContactSensor = require("../device-categories/zigbee-contact-sensor");
var _unificamera = require("../appliance-types/unificamera");
var _UNIFICCTV = require("../protocol-models/ipdevice-models/device-models/device-types/UNIFICCTV01");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSchemaName = exports.BaseSchemaName = "IKeusNotificationSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
const notificationDataCollection = exports.notificationDataCollection = {
  name: "notificationDataCollection",
  properties: {
    T0: {
      type: "object",
      optional: true,
      objectType: "IKeusContactSensorNotificationData"
    },
    T1: {
      type: "object",
      optional: true,
      objectType: "IKeusScheduleNotificationData"
    },
    T2: {
      type: "object",
      optional: true,
      objectType: "IKeusGeyserNotificationData"
    },
    T3: {
      type: "object",
      optional: true,
      objectType: "IKeusGeyserGroupNotificationData"
    },
    T4: {
      type: "object",
      optional: true,
      objectType: "IUnifiCameraNotificationDataSchema"
    }
  },
  embedded: true
};
// Modified by @realm/babel-plugin
class IKeusNotificationSchema extends _realm.default.Object {
  static primaryKey = "notificationId";
  static schema = {
    name: "IKeusNotificationSchema",
    properties: {
      transformOptions: {
        type: "list",
        optional: true,
        objectType: "mixed"
      },
      transformValues: {
        type: "list",
        optional: true,
        objectType: "mixed"
      },
      processing: {
        type: "list",
        optional: true,
        objectType: "bool"
      },
      notificationId: {
        type: "string"
      },
      notificationSource: {
        type: "string",
        optional: true
      },
      notificationBy: {
        type: "string",
        optional: true
      },
      notificationUsername: {
        type: "string",
        optional: true
      },
      notificationTime: {
        type: "int",
        optional: true
      },
      notificationType: {
        type: "int",
        optional: true
      },
      notificationStatus: {
        type: "int",
        optional: true
      },
      notificationData: {
        type: "object",
        optional: true,
        objectType: "notificationDataCollection"
      }
    },
    primaryKey: "notificationId"
  };
}
exports.IKeusNotificationSchema = IKeusNotificationSchema;
const IKeusContactSensorNotificationData = exports.IKeusContactSensorNotificationData = {
  name: "IKeusContactSensorNotificationData",
  properties: {
    deviceId: {
      type: "string",
      optional: true
    },
    deviceName: {
      type: "string",
      optional: true
    },
    deviceType: {
      type: "string",
      optional: true
    },
    deviceSection: {
      type: "string",
      optional: true
    },
    deviceRoom: {
      type: "string",
      optional: true
    },
    deviceLocation: {
      type: "string",
      optional: true
    },
    deviceCategory: {
      type: "string",
      optional: true
    },
    deviceState: {
      type: "object",
      optional: true,
      objectType: "IZigbeeContactSensorStateSchema"
    }
  },
  embedded: true
};
const IKeusScheduleNotificationData = exports.IKeusScheduleNotificationData = {
  name: "IKeusScheduleNotificationData",
  properties: {
    scheduleId: {
      type: "string",
      optional: true
    },
    scheduleName: {
      type: "string",
      optional: true
    },
    scheduleType: {
      type: "int",
      optional: true
    },
    scheduleActionType: {
      type: "int",
      optional: true
    },
    scheduleSection: {
      type: "string",
      optional: true
    },
    scheduleRoom: {
      type: "string",
      optional: true
    }
  },
  embedded: true
};
const IKeusGeyserNotificationData = exports.IKeusGeyserNotificationData = {
  name: "IKeusGeyserNotificationData",
  properties: {
    deviceId: {
      type: "string",
      optional: true
    },
    geyserName: {
      type: "string",
      optional: true
    },
    deviceRoom: {
      type: "string",
      optional: true
    },
    geyserId: {
      type: "string",
      optional: true
    },
    deviceCategory: {
      type: "string",
      optional: true
    },
    timeToSend: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
const IKeusGeyserGroupNotificationData = exports.IKeusGeyserGroupNotificationData = {
  name: "IKeusGeyserGroupNotificationData",
  properties: {
    groupId: {
      type: "int",
      optional: true
    },
    groupName: {
      type: "string",
      optional: true
    },
    groupSection: {
      type: "string",
      optional: true
    },
    groupRoom: {
      type: "string",
      optional: true
    },
    timeToSend: {
      type: "int",
      optional: true
    }
  },
  embedded: true
};
class Methods {
  static async importGatewayData(realm) {
    try {
      console.log("============");
      //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });

      const MongoClient = require('mongodb').MongoClient;
      const uri = 'mongodb://192.168.0.198:27017';
      const dbName = 'brijeshSir';
      const collectionName = 'notifications';
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
          let groupTransformOptions = ["notificationData"];
          //console.log(groupTransformOptions);
          let transformValues = ["notificationType"];
          const realmActivity = realm.create(BaseSchemaName, {
            transformValues: transformValues,
            transformOptions: groupTransformOptions,
            notificationId: doc.notificationId,
            processing: [true],
            notificationSource: doc.notificationSource,
            notificationBy: doc.notificationBy,
            notificationUsername: doc.notificationUsername,
            notificationTime: doc.notificationTime,
            notificationType: doc.notificationType,
            notificationStatus: doc.notificationStatus,
            notificationData: {
              ['T' + doc.notificationType]: doc.notificationData
            }
          });
          //console.log(realmActivity)
        });
      });
    } catch (e) {
      return e;
    }
  }
  static async insertNotification(realm, doc) {
    let groupTransformOptions = ["notificationData"];
    let transformValues = ["notificationType"];
    realm.write(() => {
      const realmActivity = realm.create(BaseSchemaName, {
        transformValues: transformValues,
        transformOptions: groupTransformOptions,
        notificationId: doc.notificationId,
        processing: [true],
        notificationSource: doc.notificationSource,
        notificationBy: doc.notificationBy,
        notificationUsername: doc.notificationUsername,
        notificationTime: doc.notificationTime,
        notificationType: doc.notificationType,
        notificationStatus: doc.notificationStatus,
        notificationData: {
          ['T' + doc.notificationType]: doc.notificationData
        }
      });
      console.log(realmActivity);
    });
  }
  static async updateNotificationStatus(realm, data) {
    realm.write(() => {
      const notification = realm.objectForPrimaryKey(BaseSchemaName, data.notificationId);
      notification.notificationStatus = data.status;
    });
  }
  static async getAllNotification(realm) {
    try {
      console.time('Execution time');
      const startMemoryUsage = process.memoryUsage().heapUsed;
      let res = realm.objects(BaseSchemaName);
      //res=res.toJSON()
      const endMemoryUsage = process.memoryUsage().heapUsed;
      const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

      console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

      // End execution time
      console.timeEnd('Execution time');
      return realm.objects(BaseSchemaName);
    } catch (e) {
      throw e;
    }
  }
  static async getNotificationByType(realm, notificationType) {
    return realm.objects(BaseSchemaName).filtered('notificationType == $0', notificationType);
  }
  static async getTopNNotification(realm, n) {
    return realm.objects(BaseSchemaName).sorted('notificationTime', true).slice(0, n);
  }
  static async deleteAllNotification(realm) {
    realm.write(() => {
      realm.delete(realm.objects(BaseSchemaName));
    });
  }
  static async deleteNotificationById(realm, notificationId) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(BaseSchemaName, notificationId));
    });
  }
  static async getTopNNotificationInTimeRange(realm, data) {
    return realm.objects(BaseSchemaName).filtered('notificationTime >= $0 AND notificationTime < $1', data.startTime, data.endTime).sorted("notificationTime", true).slice(0, data.numberOfEntries);
  }
  static async getTopNNotificationByNotificationType(realm, data) {
    return realm.objects(BaseSchemaName).filtered('notificationType == $0', data.notificationType).sorted("notificationTime", true).slice(0, data.numberOfEntries);
  }
  static async getTopNNotificationByDeviceId(realm, data) {
    return realm.objects(BaseSchemaName).filtered(`notificationData.T0.deviceId == $0 OR notificationData.T2.deviceId == $0`, data.deviceId).sorted("notificationTime", true).slice(0, data.numberOfEntries);
  }
}
exports.Methods = Methods;
const ModelsList = exports.ModelsList = [IKeusNotificationSchema, IKeusGeyserGroupNotificationData, IKeusGeyserNotificationData, IKeusScheduleNotificationData, IKeusContactSensorNotificationData, notificationDataCollection, _zigbeeContactSensor.IZigbeeContactSensorStateSchema, _unificamera.IUnifiCameraNotificationDataSchema, _UNIFICCTV.IUnifiCameraEventInfoSchema];