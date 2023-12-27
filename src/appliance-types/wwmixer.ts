import { IBrightnessTraitPropertiesSchema, IBrightnessTraitStateSchema } from "../trait-types/brightness"
import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import { IWWMixerTraitPropertiesSchema, IWWMixerTraitStateSchema } from "../trait-types/wwmixer"
import Realm from "realm"
export class IWWMixerApplianceStateSchema extends Realm.Object<IWWMixerApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema
    brightnessState?: IBrightnessTraitStateSchema
    wwmixerState?: IWWMixerTraitStateSchema


}

export class IWWMixerAppliancePropertiesSchema extends Realm.Object<IWWMixerAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema
    brightnessProperties?: IBrightnessTraitPropertiesSchema
    wwmixerProperties?: IWWMixerTraitPropertiesSchema


}

export class IKZWWMixerApplianceControlInfoSchema extends Realm.Object<IKZWWMixerApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    warmWhitePortId?: Realm.Types.Int;
    coolWhitePortId?: Realm.Types.Int;
}
