import Realm from "realm";
export class IOpenCloseRelayTraitStateSchema extends Realm.Object<IOpenCloseRelayTraitStateSchema> {
    static embedded?: boolean = true;


}

export class IOpenCloseRelayTraitPropertiesSchema extends Realm.Object<IOpenCloseRelayTraitPropertiesSchema> {
    static embedded?: boolean = true;

    fullOpenDuration?: Realm.Types.Int;


}

export const ModelsList = [IOpenCloseRelayTraitStateSchema, IOpenCloseRelayTraitPropertiesSchema]