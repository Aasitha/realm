"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZDD01ActionSchema = exports.KZDD01StateSchema = exports.KZDD01Schema = void 0;
exports.KZDD01Schema = {
    name: "KZDD01",
    properties: {
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        maxValue: "int",
        minValue: "int",
        defaultState: "int"
    }
};
exports.KZDD01StateSchema = {
    name: "KZDD01State",
    properties: {
        driverState: "int"
    }
};
exports.KZDD01ActionSchema = {
    name: "KZDD01Action",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }
};
