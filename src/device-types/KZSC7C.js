"use strict";
// import Realm from "realm";
// import { SMART_CONSOLE_BUTTON_TYPES } from "../decice_constants"
// import * as props from "../device-types-properties.ts/KZSC7CbuttonProperties"
// export class KZSC7CButtonPropertiesSchema extends Realm.Object {
//     static schema = {
//         name: "KZSC7CButtonProperties",
//         properties: {
//             props: [
//                 props.KZSC7cb0Schema.name,
//                 props.KZSC7cb1Schema.name,
//                 // propsKZSC7cb2Schema.name,
//                 // props.KZSC7cb3Schema.name,
//                 // props.KZSC7cb4Schema.name,
//                 // props.KZSC7cb5Schema.name,
//                 // props.KZSC7cb6Schema.name,
//                 // props.KZSC7cb7Schema.name,
//                 // props.KZSC7cb8Schema.name,
//                 // props.KZSC7cb9Schema.name,
//                 // props.KZSC7cb10Schema.name,
//                 // props.KZSC7cb11Schema.name,
//                 // props.KZSC7cb12Schema.name,
//                 // props.KZSC7cb13Schema.name,
//                 // props.KZSC7cb14Schema.name,
//                 // props.KZSC7cb15Schema.name
//             ],
//         }
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZSC7CSchema = void 0;
//     }
// }
exports.KZSC7CSchema = {
    name: "KZSC7C",
    properties: {
        buttons: "KZSC7CdeviceButtonProperties[]",
        relays: "IKeusSmartConsoleRelay[]",
        defaultFan: { type: "string", optional: true },
        defaultSceneId: "int",
        defaultSceneRoom: { type: "string", optional: true },
        sceneStepSize: "int",
        isAreaMaster: "bool",
        isDaliMaster: "bool",
        identifyStatus: "bool",
        interactionMode: { type: "int", optional: true }
    }
};
