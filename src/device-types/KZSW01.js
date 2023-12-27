"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZSW01StateSchema = exports.KZSW01Schema = void 0;
exports.KZSW01Schema = {
    name: "KZSW01",
    properties: {
        buttons: "IKeusSmartConsoleButton[]",
        sceneStepSize: "int",
        batteryPercentage: { type: "int", optional: true }
    }
};
exports.KZSW01StateSchema = {
    name: "KZSW01State",
    properties: {}
};
