import Realm from "realm";
export class IZigbeeRangeExtenderStateSchema extends Realm.Object<IZigbeeRangeExtenderStateSchema> {
    static embedded?: boolean = true;

    deviceState?: Realm.Types.Bool;


}

export class IZigbeeRangeExtenderPropertiesSchema extends Realm.Object<IZigbeeRangeExtenderPropertiesSchema> {
    static embedded?: boolean = true;

}