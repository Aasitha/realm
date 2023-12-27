import { IAngularTiltTraitPropertiesSchema, IAngularTiltTraitStateSchema } from "../trait-types/angulartilt"
import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose"
import { IPercentOpenTraitPropertiesSchema, IPercentOpenTraitStateSchema } from "../trait-types/percentopen"
import Realm from "realm";
export class IBlindsTiltApplianceStateSchema extends Realm.Object<IBlindsTiltApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema;
    percentOpenState?: IPercentOpenTraitStateSchema;
    angularTiltState?: IAngularTiltTraitStateSchema;


}

export class IBlindsTiltAppliancePropertiesSchema extends Realm.Object<IBlindsTiltAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema
    percentOpenProperties?: IPercentOpenTraitPropertiesSchema;
    angularTiltProperties?: IAngularTiltTraitPropertiesSchema;


}

export class IKZBlindsTiltApplianceControlInfoSchema extends Realm.Object<IKZBlindsTiltApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;


}

