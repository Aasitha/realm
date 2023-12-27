import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose"
import { IPercentOpenTraitPropertiesSchema, IPercentOpenTraitStateSchema } from "../trait-types/percentopen"
import Realm from "realm";
export class IBlindsPercentApplianceStateSchema extends Realm.Object<IBlindsPercentApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema
    percentOpenState?: IPercentOpenTraitStateSchema


}

export class IBlindsPercentAppliancePropertiesSchema extends Realm.Object<IBlindsPercentAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema
    percentOpenProperties?: IPercentOpenTraitPropertiesSchema


}
export class IKZBlindsPercentApplianceControlInfoSchema extends Realm.Object<IKZBlindsPercentApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;


}
