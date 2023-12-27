export const localRealmSchema = {
    name: "localRealmSchema",
    embedded: false,
    properties: {
        areas: { type: "int", optional: true, default: 0 },
        floors: { type: "int", optional: true, default: 0 },
        rooms: { type: "int", optional: true, default: 0 },
        devices: { type: "int", optional: true, default: 0 },
        gmdevices: { type: "int", optional: true, default: 0 },
        gmappliances: { type: "int", optional: true, default: 0 },
        groups: { type: "int", optional: true, default: 0 },
        gmgroups: { type: "int", optional: true, default: 0 },
        scenes: { type: "int", optional: true, default: 0 },
        irremotes: { type: "int", optional: true, default: 0 },
        schedules: { type: "int", optional: true, default: 0 },
        gateways: { type: "int", optional: true, default: 0 },
        favourites: { type: "int", optional: true, default: 0 },
    }

}