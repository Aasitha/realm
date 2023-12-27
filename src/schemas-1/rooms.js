"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roomsSchemaList = exports.Methods = exports.IKeusSectionSchema = exports.IKeusRoomSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
const BaseSchemaName = exports.BaseSchemaName = "IKeusRoomSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusSectionSchema extends Realm.Object {
  static embedded = true;
}
exports.IKeusSectionSchema = IKeusSectionSchema;
class IKeusRoomSchema extends Realm.Object {
  static primaryKey = "roomId";
}
exports.IKeusRoomSchema = IKeusRoomSchema;
class Methods {
  static async getAllRooms(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async getRoomsByFloor() {}
  static async getRoomsByArea() {}
  static async addRoom() {}
  static async getRoomById() {}
  static async getRoomsInSameArea() {}
  static async deleteRoomById() {}
  static async updateRoom() {}
  static async updateRoomName() {}
  static async getRoomsByName() {}
}
exports.Methods = Methods;
const roomsSchemaList = exports.roomsSchemaList = [IKeusRoomSchema, IKeusSectionSchema];