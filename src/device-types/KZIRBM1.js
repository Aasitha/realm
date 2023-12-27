"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZIRBM1ActionSchema = exports.KZIRBM1StateSchema = exports.KZIRBM1Schema = void 0;
exports.KZIRBM1Schema = {
    name: "KZIRBM1",
    properties: {
        blastSignalDelay: "int",
    }
};
exports.KZIRBM1StateSchema = {
    name: "KZIRBM1State",
    properties: {}
};
exports.KZIRBM1ActionSchema = {
    name: "KZIRBM1Action",
    properties: {
        remoteId: "string",
        remoteType: "int",
        irDevice: "string",
        irBlastAction: "object",
    }
};
