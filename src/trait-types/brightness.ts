import Realm from "realm";
export class IBrightnessTraitStateSchema extends Realm.Object<IBrightnessTraitStateSchema> {

    static embedded?: boolean = true;

    brightnessPercent?: Realm.Types.Int;


};

export class IBrightnessTraitPropertiesSchema extends Realm.Object<IBrightnessTraitPropertiesSchema> {

    static embedded?: boolean = true;

    minValue?: Realm.Types.Int; //Percent
    maxValue?: Realm.Types.Int;// Percent
    brightnessDefaultState?: IBrightnessTraitStateSchema;
    fadeUpTime?: Realm.Types.Int; //milliseconds
    fadeDownTime?: Realm.Types.Int; //milliseconds
    fadeOffTime?: Realm.Types.Int; //milliseconds
    fadeRate?: Realm.Types.Int; //milliseconds


}

export const ModelsList = [IBrightnessTraitStateSchema, IBrightnessTraitPropertiesSchema]
