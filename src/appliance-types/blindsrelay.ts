import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose"
import { IOpenCloseRelayTraitPropertiesSchema, IOpenCloseRelayTraitStateSchema } from "../trait-types/opencloserelay"
import Realm from "realm";
export class IBlindsRelayApplianceStateSchema extends Realm.Object<IBlindsRelayApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema
    openCloseRelayState?: IOpenCloseRelayTraitStateSchema;


}

export class IBlindsRelayAppliancePropertiesSchema extends Realm.Object<IBlindsRelayAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema
    openCloseRelayProperties?: IOpenCloseRelayTraitPropertiesSchema


}

export class IKZBlindsRelayApplianceControlInfoSchema extends Realm.Object<IKZBlindsRelayApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;


}
