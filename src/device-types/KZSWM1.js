"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZSWM1StateSchema = exports.KZSWM1Schema = void 0;
exports.KZSWM1Schema = {
    name: "KZSWM1",
    properties: {
        buttons: "IKeusSmartConsoleButton[]",
        sceneStepSize: "int",
        batteryPercentage: { type: "int", optional: true }
    }
};
exports.KZSWM1StateSchema = {
    name: "KZSWM1State",
    properties: {}
};
