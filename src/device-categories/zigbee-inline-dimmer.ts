import Realm from "realm";
export class IZigbeeInlineDimmerStateSchema extends Realm.Object<IZigbeeInlineDimmerStateSchema> {
    static embedded?: boolean = true;

    //modes are assumed to be values of integer
    deviceState?: Realm.Types.Int;

}

export class IZigbeeInlineDimmerPropertiesSchema extends Realm.Object<IZigbeeInlineDimmerPropertiesSchema> {
    static embedded?: boolean = true;

    fadeTime?: Realm.Types.Int;
    fadeDown?: Realm.Types.Int;
    fadeOff?: Realm.Types.Int;
    maxValue?: Realm.Types.Int;
    minValue?: Realm.Types.Int;
    powerOnState?: Realm.Types.Int;


}