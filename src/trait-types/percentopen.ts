import Realm from "realm";
export class IPercentOpenTraitStateSchema extends Realm.Object<IPercentOpenTraitStateSchema> {
    static embedded?: boolean = true;

    percentOpen?: Realm.Types.Int;


}

export class IPercentOpenTraitPropertiesSchema extends Realm.Object<IPercentOpenTraitPropertiesSchema> {
    static embedded?: boolean = true;

    maxPercentValue?: Realm.Types.Int;
    minPercentValue?: Realm.Types.Int;
    defaultPercentopenState?: IPercentOpenTraitStateSchema;


}

export const ModelsList = [IPercentOpenTraitStateSchema, IPercentOpenTraitPropertiesSchema]