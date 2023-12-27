import { IAngularTiltTraitPropertiesSchema, IAngularTiltTraitStateSchema } from "../trait-types/angulartilt"
import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose"
import { IOpenCloseRelayTraitPropertiesSchema, IOpenCloseRelayTraitStateSchema } from "../trait-types/opencloserelay"
import { IPercentOpenTraitPropertiesSchema, IPercentOpenTraitStateSchema } from "../trait-types/percentopen"
import { ITiltRelayTraitPropertiesSchema, ITiltRelayTraitStateSchema } from "../trait-types/tiltrelay"
import Realm from "realm";
export class IBlindsTiltRelayApplianceStateSchema extends Realm.Object<IBlindsTiltRelayApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema;
    openCloseRelayState?: IOpenCloseRelayTraitStateSchema;
    percentOpenState?: IPercentOpenTraitStateSchema;
    angularTiltState?: IAngularTiltTraitStateSchema;
    tiltRelayState?: ITiltRelayTraitStateSchema;


}

export class IBlindsTiltRelayAppliancePropertiesSchema extends Realm.Object<IBlindsTiltRelayAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema
    openCloseRelayProperties?: IOpenCloseRelayTraitPropertiesSchema
    percentOpenProperties?: IPercentOpenTraitPropertiesSchema
    angularTiltProperties?: IAngularTiltTraitPropertiesSchema
    tiltRelayProperties?: ITiltRelayTraitPropertiesSchema


}

export class IKZBlindsTiltRelayApplianceControlInfoSchema extends Realm.Object<IKZBlindsTiltRelayApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;


}
