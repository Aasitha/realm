import Realm from "realm";
export class IOnOffTraitStateSchema extends Realm.Object<IOnOffTraitStateSchema> {
    static embedded?: boolean = true;

    onState?: Realm.Types.Bool;


};

export class IOnOffTraitPropertiesSchema extends Realm.Object<IOnOffTraitPropertiesSchema> {
    static embedded?: boolean = true;

    onOffDefaultState?: IOnOffTraitStateSchema


}

export const ModelsList = [IOnOffTraitStateSchema, IOnOffTraitPropertiesSchema]
