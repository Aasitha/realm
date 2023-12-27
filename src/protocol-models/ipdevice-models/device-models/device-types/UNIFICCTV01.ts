import Realm from "realm";
export class IUnifiCameraEventInfoSchema extends Realm.Object<IUnifiCameraEventInfoSchema>{
    static embedded?: boolean = true;
    applianceId?: string;
    eventId?: string;
    eventStartTime?:Realm.Types.Int;
    eventEndTime?: Realm.Types.Int;
    eventThumbnailUrl?: string;
    detectionType?: Realm.Types.Int;
}