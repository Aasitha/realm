"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZDDSATM1ActionSchema = exports.KZDDSATM1StateSchema = exports.KZDDSATM1Schema = void 0;
exports.KZDDSATM1Schema = {
    name: "KZDDSATM1",
    properties: {
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }
};
exports.KZDDSATM1StateSchema = {
    name: "KZDDSATM1State",
    properties: {
        driverState: "int"
    }
};
exports.KZDDSATM1ActionSchema = {
    name: "KZDDSATM1Action",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }
};
