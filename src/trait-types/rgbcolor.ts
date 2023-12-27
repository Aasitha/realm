import Realm from "realm";
export class IRGBColorSchema extends Realm.Object<IRGBColorSchema> {
    static embedded?: boolean = true;

    redPercent?: Realm.Types.Int;
    greenPercent?: Realm.Types.Int;
    bluePercent?: Realm.Types.Int;


}

export class IRGBPatternPropertiesSchema extends Realm.Object<IRGBPatternPropertiesSchema> {
    static embedded?: boolean = true;

    patternPropertyId?: Realm.Types.Int;
    patternPropertyValue?: Realm.Types.Int;


}

export class IRGBColorTraitStateSchema extends  Realm.Object<IRGBColorTraitStateSchema> {
    static embedded?: boolean = true;

    patternId?: Realm.Types.Int;
    patternProperties: Realm.Types.List<IRGBPatternPropertiesSchema>;
    rgbColor: Realm.Types.List<IRGBColorSchema>;


}

export class IRGBColorTraitPropertiesSchema extends Realm.Object<IRGBColorTraitPropertiesSchema> {
    static embedded?: boolean = true;

    defaultState?: IRGBColorTraitStateSchema;
    rgbColorDefaultState?: Realm.Types.Dictionary<Realm.Types.Mixed>;


}

export const ModelsList = [IRGBColorSchema, IRGBPatternPropertiesSchema, IRGBColorTraitStateSchema, IRGBColorTraitPropertiesSchema]
