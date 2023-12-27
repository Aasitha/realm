import { IBrightnessTraitPropertiesSchema, IBrightnessTraitStateSchema } from "../trait-types/brightness"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import Realm from "realm";
export class IDimmerApplianceStateSchema extends Realm.Object<IDimmerApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema;
    brightnessState?: IBrightnessTraitStateSchema;


}

export class IDimmerAppliancePropertiesSchema extends Realm.Object<IDimmerAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema
    brightnessProperties?: IBrightnessTraitPropertiesSchema


}

export class IKZDimmerApplianceControlInfoSchema extends Realm.Object<IKZDimmerApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    dimmerPortId?: Realm.Types.Int;


}
