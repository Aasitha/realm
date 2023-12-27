import Realm from "realm";
export class ITiltRelayTraitStateSchema extends Realm.Object<ITiltRelayTraitStateSchema> {
    static embedded?: boolean = true;

};

export class ITiltRelayTraitPropertiesSchema extends Realm.Object<ITiltRelayTraitPropertiesSchema> {
    static embedded?: boolean = true;

    fullTiltDuration?: Realm.Types.Int;


}

export const ModelsList = [ITiltRelayTraitStateSchema, ITiltRelayTraitPropertiesSchema]