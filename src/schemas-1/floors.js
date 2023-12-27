"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floorsSchemaList = exports.Methods = exports.IKeusFloorSchema = exports.BaseSchemaVersion = exports.BaseSchemaName = void 0;
const BaseSchemaName = exports.BaseSchemaName = "IKeusFloorSchema";
const BaseSchemaVersion = exports.BaseSchemaVersion = 1;
class IKeusFloorSchema extends Realm.Object {
  static primaryKey = "floorId";
}
exports.IKeusFloorSchema = IKeusFloorSchema;
class Methods {
  static async addFloor() {}
  static async updateFloor() {}
  static async getFloorById() {}
  static async getFloorsByName() {}
  static async getAllFloors(realm) {
    return realm.objects(BaseSchemaName).toJSON();
  }
  static async deleteFloorById() {}
  static async deleteFloorByName() {}
}
exports.Methods = Methods;
const floorsSchemaList = exports.floorsSchemaList = [IKeusFloorSchema];