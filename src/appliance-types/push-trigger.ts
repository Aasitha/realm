import { IPushTriggerTraitPropertiesSchema } from "../trait-types/push-trigger"
import Realm from "realm";
export class IPushTriggerApplianceStateSchema extends Realm.Object<IPushTriggerApplianceStateSchema> {
    static embedded?: boolean = true;


}

export class IPushTriggerAppliancePropertiesSchema extends Realm.Object<IPushTriggerAppliancePropertiesSchema> {
    static embedded?: boolean = true;

    triggerProperties?: IPushTriggerTraitPropertiesSchema


}

export class IKZPushTriggerApplianceControlInfoSchema extends Realm.Object<IKZPushTriggerApplianceControlInfoSchema> {
    static embedded?: boolean = true;

    pushTriggerPortId?: Realm.Types.Int;


}