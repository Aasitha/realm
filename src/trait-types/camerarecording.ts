import Realm from "realm";
export class ICameraRecordingTraitStateSchema extends Realm.Object<ICameraRecordingTraitStateSchema> {
    static embedded?: boolean = true;


}

export class ICameraRecordingTraitPropertiesSchema extends Realm.Object<ICameraRecordingTraitPropertiesSchema> {
    static embedded?: boolean = true;

    recordStatus: Realm.Types.Int;
    detectionType: Realm.Types.Int;
    recordingQuality: Realm.Types.Int;
    beforeRecordingTime: Realm.Types.Int;
    afterRecordingTime: Realm.Types.Int;
    notificationsEnabled: Realm.Types.Bool;
    receiveEvents: Realm.Types.Bool;
    cameraThumbnailURL: string;


}

export const ModelsList = [ICameraRecordingTraitStateSchema, ICameraRecordingTraitPropertiesSchema]
