import Realm from 'realm';

// export class fwHealthSubObjectSchema extends Realm.Object<fwHealthSubObjectSchema> {
//     static embedded?: boolean = true
//     status?: Realm.Types.Int
//     timeFromBoot?: Realm.Types.Int
//     lastResetCause?: Realm.Types.Int
//     restartCount?: Realm.Types.Int
//     props: Realm.Types.List<fwHealthSubObjectPropsSchema>
//     restartCountErrorFlag?: Realm.Types.Int

// }

export class FwHealthSchema extends Realm.Object<FwHealthSchema> {
    static embedded = true;
    fwHealth: Realm.Types.List<string>;

}

export class IKeusDeviceSchema extends Realm.Object<IKeusDeviceSchema> {
    id: string;
    healthInfo: Realm.Types.List<FwHealthSchema>;

    static primaryKey = "id";
}