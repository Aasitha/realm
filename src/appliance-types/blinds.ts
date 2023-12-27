import Realm from "realm";
import { IOpenCloseTraitPropertiesSchema, IOpenCloseTraitStateSchema } from "../trait-types/openclose";
export class IBlindsApplianceStateSchema extends Realm.Object<IBlindsApplianceStateSchema> {
    static embedded?: boolean = true;
    openCloseState?: IOpenCloseTraitStateSchema;


}

export class IBlindsAppliancePropertiesSchema extends Realm.Object<IBlindsAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    openCloseProperties?: IOpenCloseTraitPropertiesSchema


}
export class IKZBlindsApplianceControlInfoSchema extends Realm.Object<IKZBlindsApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    blindPortId?: Realm.Types.Int;


}


