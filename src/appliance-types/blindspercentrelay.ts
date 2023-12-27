import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose"
import { IOpenCloseRelayTraitPropertiesSchema, IOpenCloseRelayTraitStateSchema } from "../trait-types/opencloserelay"
import { IPercentOpenTraitPropertiesSchema, IPercentOpenTraitStateSchema } from "../trait-types/percentopen"
import Realm from "realm";
export class IBlindsPercentRelayApplianceStateSchema extends Realm.Object<IBlindsPercentRelayApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema
    openCloseRelayState?: IOpenCloseRelayTraitStateSchema
    percentOpenState?: IPercentOpenTraitStateSchema


}

export class IBlindsPercentRelayAppliancePropertiesSchema extends Realm.Object<IBlindsPercentRelayAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema
    openCloseRelayProperties?: IOpenCloseRelayTraitPropertiesSchema;
    percentOpenProperties?: IPercentOpenTraitPropertiesSchema;


}

export class IKZBlindsPercentRelayApplianceControlInfoSchema extends Realm.Object<IKZBlindsPercentRelayApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;

}


