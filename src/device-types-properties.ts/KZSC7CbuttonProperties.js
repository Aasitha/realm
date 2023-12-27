"use strict";
// import Realm from 'realm'; 
Object.defineProperty(exports, "__esModule", { value: true });
exports.KZSC7CbuttonPropertiesSchema = exports.KZSC7CdeviceButtonPropertiesSchema = void 0;
// export const defaultSceneButtonPropertiesSchema = {
//     name: "defaultSceneButtonProperties",
//     properties: {
//         sceneId: { type: "int", default: -1 },
//         roomId: { type: "string", default: "" }
//     }
// }
// export const defaultNoPropsButtonPropertiesSchema={
//     name:"defaultNoPropsButtonProperties",
//     properties:{
//     }
// }
// export const defaultGroupButtonPropertiesSchema={
//     name:"defaultGroupButtonProperties",
//     properties:{
//         groupId:{type:"int",default:-1},
//         roomId:{type:"string",default:""}
//     }
// }
// export const KZSC7cb0Schema = {
//     name: "KZSC7cb0",
//     properties: {
//         buttonId: { type: "int", default: 0 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb1Schema = {
//     name: "KZSC7cb1",
//     properties: {
//         buttonId: { type: "int", default: 1 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb2Schema = {
//     name: "KZSC7cb2",
//     properties: {
//         buttonId: { type: "int", default: 2 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb3Schema = {
//     name: "KZSC7cb3",
//     properties: {
//         buttonId: { type: "int", default: 3 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb4Schema = {
//     name: "KZSC7cb4",
//     properties: {
//         buttonId: { type: "int", default: 4 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb5Schema = {
//     name: "KZSC7cb5",
//     properties: {
//         buttonId: { type: "int", default: 5 },
//         buttonType: "string",
//         buttopnProperties: "defaultSceneButtonProperties",
//     }
// }
// export const KZSC7cb6Schema = {
//     name: "KZSC7cb6",
//     properties: {
//         buttonId: { type: "int", default: 6 },
//         buttonType: "string",
//         buttopnProperties: "defaultNoPropsButtonProperties",
//     }
// }
// export const KZSC7cb7Schema = {
//     name: "KZSC7cb7",
//     properties: {
//         buttonId: { type: "int", default: 7 },
//         buttonType: "string",
//         buttopnProperties: "defaultNoPropsButtonProperties",
//     }
// }
// export const KZSC7cb8Schema = {
//     name: "KZSC7cb8",
//     properties: {
//         buttonId: { type: "int", default: 8 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb9Schema = {
//     name: "KZSC7cb9",
//     properties: {
//         buttonId: { type: "int", default: 9 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb10Schema = {
//     name: "KZSC7cb10",
//     properties: {
//         buttonId: { type: "int", default: 10 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb11Schema = {
//     name: "KZSC7cb11",
//     properties: {
//         buttonId: { type: "int", default: 11 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb12Schema = {
//     name: "KZSC7cb12",
//     properties: {
//         buttonId: { type: "int", default: 12 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb13Schema = {
//     name: "KZSC7cb13",
//     properties: {
//         buttonId: { type: "int", default: 13 },
//         buttonType: "string",
//         buttopnProperties: "defaultGroupButtonProperties",
//     }
// }
// export const KZSC7cb14Schema = {
//     name: "KZSC7cb14",
//     properties: {
//         buttonId: { type: "int", default: 14 },
//         buttonType: "string",
//         buttopnProperties: "defaultNoPropsButtonProperties",
//     }
// }
// export const KZSC7cb15Schema = {
//     name: "KZSC7cb15",
//     properties: {
//         buttonId: { type: "int", default: 15 },
//         buttonType: "string",
//         buttopnProperties: "defaultNoPropsButtonProperties",
//     }
// }
// console.log("= = = = = =")
// //export default new Realm({schema: [defaultSceneButtonPropertiesSchema,defaultNoPropsButtonPropertiesSchema,defaultGroupButtonPropertiesSchema,KZSC7cb0Schema]});
exports.KZSC7CdeviceButtonPropertiesSchema = {
    name: "KZSC7CdeviceButtonProperties",
    properties: {
        buttonId: "int",
        buttonType: "int",
        buttonProperties: { type: "KZSC7CbuttonProperties", optional: true }
    }
};
exports.KZSC7CbuttonPropertiesSchema = {
    name: "KZSC7CbuttonProperties",
    properties: {
        sceneId: { type: "int", optional: true },
        roomId: { type: "string", optional: true },
        relayId: { type: "int", optional: true },
        groupId: { type: "int", optional: true },
    }
};
