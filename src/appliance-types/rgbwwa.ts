import { IBrightnessTraitPropertiesSchema, IBrightnessTraitStateSchema } from "../trait-types/brightness"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import { IRGBWWATraitPropertiesSchema, IRGBWWATraitStateSchema } from "../trait-types/rgbwwa"
import Realm from "realm";
export class IRGBWWAApplianceStateSchema extends Realm.Object<IRGBWWAApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema;
    brightnessState?: IBrightnessTraitStateSchema
    rgbwwaState?: IRGBWWATraitStateSchema
}

export class IRGBWWAAppliancePropertiesSchema extends Realm.Object<IRGBWWAAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema
    brightnessProperties?: IBrightnessTraitPropertiesSchema
    rgbwwaProperties?: IRGBWWATraitPropertiesSchema;

}

export class IKZRGBWWAApplianceControlInfoSchema extends Realm.Object<IKZRGBWWAApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    redPortId?: Realm.Types.Int;
    greenPortId?: Realm.Types.Int;
    bluePortId?: Realm.Types.Int;
    warmWhitePortId?: Realm.Types.Int;
    coolWhitePortId?: Realm.Types.Int;
    amberPortId?: Realm.Types.Int;

}

