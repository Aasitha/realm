import { string } from "fp-ts"
import Realm from "realm";
import { IUnifiCameraEventInfoSchema } from "../protocol-models/ipdevice-models/device-models/device-types/UNIFICCTV01";
export class IUnifiCameraApplianceStateSchema extends Realm.Object<IUnifiCameraApplianceStateSchema> {
    static embedded?: boolean = true;
    recordingState?: { type: "ICameraRecordingTraitState", optional: true }


}

export class IUnifiCameraAppliancePropertiesSchema extends Realm.Object<IUnifiCameraAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    recordingProperties?: { type: "ICameraRecordingTraitProperties", optional: true }


}

export class IUnifiCameraApplianceDeviceInfoSchem extends Realm.Object<IUnifiCameraApplianceDeviceInfoSchem> {
    static embedded?: boolean = true;
    cameraId?: string;


}

export class IUnifiCameraApplianceScheduleActionSchema extends Realm.Object<IUnifiCameraApplianceScheduleActionSchema> {
    static embedded?: boolean = true;
    applianceId?: string;
    notificationsEnabled?: Realm.Types.Bool;


}
export class IUnifiCameraNotificationDataSchema extends Realm.Object<IUnifiCameraNotificationDataSchema> {

    applianceName?: string;
    applianceRoom?: string;
    applianceSection?: string;
    detectionData?: IUnifiCameraEventInfoSchema;


}

export class IUnifiCameraApplianceControlInfoSchema extends Realm.Object<IUnifiCameraApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    cameraId?: string;


}
export const ModelsList=[
    IUnifiCameraEventInfoSchema,IUnifiCameraApplianceStateSchema,IUnifiCameraAppliancePropertiesSchema,IUnifiCameraApplianceDeviceInfoSchem,
    IUnifiCameraApplianceScheduleActionSchema,IUnifiCameraNotificationDataSchema,IUnifiCameraApplianceControlInfoSchema
]
