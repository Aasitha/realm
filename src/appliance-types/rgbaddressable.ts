import { IBrightnessTraitPropertiesSchema, IBrightnessTraitStateSchema } from "../trait-types/brightness"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import { IRGBAddrTraitPropertiesSchema, IRGBAddrTraitStateSchema } from "../trait-types/rgbaddressable"
import { IRGBColorTraitPropertiesSchema, IRGBColorTraitStateSchema } from "../trait-types/rgbcolor"
import Realm from "realm";
export class IRgbAddressableStateSchema extends Realm.Object<IRgbAddressableStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema
    brightnessState?: IBrightnessTraitStateSchema
    rgbColorState?: IRGBColorTraitStateSchema;
    rgbAddressableState?: IRGBAddrTraitStateSchema


}

export class IRgbAddressablePropertiesSchema extends Realm.Object<IRgbAddressablePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema
    brightnessProperties?: IBrightnessTraitPropertiesSchema
    rgbColorProperties?: IRGBColorTraitPropertiesSchema
    rgbAddressableProperties?: IRGBAddrTraitPropertiesSchema


}

export class IKZRGBAddressableApplianceControlInfoSchema extends Realm.Object<IKZRGBAddressableApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    addressablePortId?: Realm.Types.Int;


}