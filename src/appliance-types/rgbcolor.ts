import { IBrightnessTraitPropertiesSchema, IBrightnessTraitStateSchema } from "../trait-types/brightness"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import { IRGBColorTraitPropertiesSchema, IRGBColorTraitStateSchema } from "../trait-types/rgbcolor"
import Realm from "realm";
export class IRGBColorApplianceStateSchema extends Realm.Object<IRGBColorApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema
    brightnessState?: IBrightnessTraitStateSchema
    rgbcolorState?: IRGBColorTraitStateSchema


}

export class IRGBColorAppliancePropertiesSchema extends Realm.Object<IRGBColorAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema
    brightnessProperties?: IBrightnessTraitPropertiesSchema
    rgbcolorProperties?: IRGBColorTraitPropertiesSchema


}

export class IKZRGBColorApplianceControlInfoSchema extends Realm.Object<IKZRGBColorApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    redPortId?: Realm.Types.Int;
    greenPortId?: Realm.Types.Int;
    bluePortId?: Realm.Types.Int;


}