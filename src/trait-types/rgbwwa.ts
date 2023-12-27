import Realm from "realm";
export class IRGBWWAColorSchema extends Realm.Object<IRGBWWAColorSchema> {
    static embedded?: boolean = true;
    redPercent?: Realm.Types.Int;
    greenPercent?: Realm.Types.Int;
    bluePercent?: Realm.Types.Int;


}

export class IWWA2Schema extends Realm.Object<IWWA2Schema> {
    static embedded?: boolean = true;
    warmWhitePercent?: Realm.Types.Int;
    coolWhitePercent?: Realm.Types.Int;
    amberPercent?: Realm.Types.Int;


}

export class IRGBWWAPatternPropertySchema extends Realm.Object<IRGBWWAPatternPropertySchema> {
    static embedded?: boolean = true;
    patternPropertyId?: Realm.Types.Int;
    patternPropertyValue?: Realm.Types.Int;


}

export class IRGBWWATraitStateSchema extends Realm.Object<IRGBWWATraitStateSchema> {
    static embedded?: boolean = true;
    patternId?: Realm.Types.Int;
    patternProperties: Realm.Types.List<IRGBWWAPatternPropertySchema>
    rgbColor: Realm.Types.List<IRGBWWAColorSchema>
    wwa: Realm.Types.List<IWWA2Schema>


}


export class IRGBWWATraitPropertiesSchema extends Realm.Object<IRGBWWATraitPropertiesSchema> {
    static embedded?: boolean = true;
    defaultState?: IRGBWWATraitStateSchema;


}

export const ModelsList = [IRGBWWAColorSchema, IWWA2Schema, IRGBWWAPatternPropertySchema, IRGBWWATraitStateSchema, IRGBWWATraitPropertiesSchema]