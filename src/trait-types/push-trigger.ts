import Realm from "realm";
export class IPushTriggerTraitStateSchema extends Realm.Object<IPushTriggerTraitStateSchema> {
    static embedded?: boolean = true;

}

export class IPushTriggerTraitPropertiesSchema extends Realm.Object<IPushTriggerTraitPropertiesSchema> {
    static embedded?: boolean = true;

    defaultTriggerDuration?: Realm.Types.Int;


}

export const ModelsList = [IPushTriggerTraitStateSchema, IPushTriggerTraitPropertiesSchema]