import Realm from "realm";

export class ILouverControlTraitStateSchema extends Realm.Object<ILouverControlTraitStateSchema> {
    static embedded?: boolean = true;

    louverState?: string;


}

export class ILouverControlTraitPropertiesSchema extends Realm.Object<ILouverControlTraitPropertiesSchema> {
    static embedded?: boolean = true;

    louverStateList: Realm.Types.List<string>;
    defaultLouverState?: ILouverControlTraitStateSchema;


}

export const ModelsList = [ILouverControlTraitStateSchema, ILouverControlTraitPropertiesSchema]
