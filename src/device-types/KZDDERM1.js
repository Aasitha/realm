"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZDDERM1ActionSchema = exports.KZDDERM1StateSchema = exports.KZDDERM1Schema = void 0;
exports.KZDDERM1Schema = {
    name: "KZDDERM1",
    properties: {
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }
};
exports.KZDDERM1StateSchema = {
    name: "KZDDERM1State",
    properties: {
        driverState: "int"
    }
};
exports.KZDDERM1ActionSchema = {
    name: "KZDDERM1Action",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }
};
