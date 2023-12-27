"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZIRB01ActionSchema = exports.KZIRB01StateSchema = exports.KZIRB01Schema = void 0;
exports.KZIRB01Schema = {
    name: "KZIRB01",
    properties: {
        blastSignalDelay: "int",
    }
};
exports.KZIRB01StateSchema = {
    name: "KZIRB01State",
    properties: {}
};
exports.KZIRB01ActionSchema = {
    name: "KZIRB01Action",
    properties: {
        remoteId: "string",
        remoteType: "int",
        irDevice: "string",
        irBlastAction: "object",
    }
};
