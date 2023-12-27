import Realm from "realm";

export class IModeControlTraitStateSchema extends Realm.Object<IModeControlTraitStateSchema> {
    static embedded?: boolean = true;


    mode?: string;


}

export class IModeControlTraitPropertiesSchema extends Realm.Object<IModeControlTraitPropertiesSchema> {
    static embedded?: boolean = true;

    modesList: Realm.Types.List<string>;
    defaultMode?: IModeControlTraitStateSchema;


}

export const ModelsList = [IModeControlTraitStateSchema, IModeControlTraitPropertiesSchema]
