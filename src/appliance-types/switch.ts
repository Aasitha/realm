import { IOnOffTraitPropertiesSchema, IOnOffTraitStateSchema } from "../trait-types/onoff"
import Realm from "realm";
export class ISwitchApplianceStateSchema extends Realm.Object<ISwitchApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema


}

export class ISwitchAppliancePropertiesSchem extends Realm.Object<ISwitchAppliancePropertiesSchem> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema


}

export class IKZSwitchApplianceControlInfoSchema extends Realm.Object<IKZSwitchApplianceControlInfoSchema> {
    static embedded?: boolean = true;
    switchPortId?: Realm.Types.Int;

}
