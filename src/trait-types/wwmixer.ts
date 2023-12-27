import Realm from "realm";
export class IWWMixerTraitStateSchema extends Realm.Object<IWWMixerTraitStateSchema> {
    static embedded?: boolean = true;

    warmWhitePercentage?: Realm.Types.Int;
    coolWhitePercentage?: Realm.Types.Int;


}

export class IWWMixerTraitPropertiesSchema extends Realm.Object<IWWMixerTraitPropertiesSchema> {
    static embedded?: boolean = true;

    wwmixerDefaultState?: IWWMixerTraitStateSchema;


}

export const ModelsList = [IWWMixerTraitStateSchema, IWWMixerTraitPropertiesSchema]