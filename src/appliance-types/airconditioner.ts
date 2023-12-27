import Realm from "realm"
import { IFanSpeedControlTraitStateSchema } from "../trait-types/fanspeedcontrol"
import { ILouverControlTraitStateSchema,ILouverControlTraitPropertiesSchema } from "../trait-types/louvercontrol"
import { IModeControlTraitStateSchema } from "../trait-types/modecontrol"
import { ITemperatureControlTraitStateSchema,ITemperatureControlTraitPropertiesSchema } from "../trait-types/temperaturecontrol"
import { IOnOffTraitStateSchema,IOnOffTraitPropertiesSchema } from "../trait-types/onoff"
import { IModeControlTraitPropertiesSchema } from "../trait-types/modecontrol"
import { IFanSpeedControlTraitPropertiesSchema } from "../trait-types/fanspeedcontrol"
export class IAirConditionerApplianceStateSchema extends Realm.Object<IAirConditionerApplianceStateSchema> {
    static embedded?: boolean = true;
    onOffState?: IOnOffTraitStateSchema;
    modeState?: IModeControlTraitStateSchema;
    fanSpeedState?: IFanSpeedControlTraitStateSchema;
    temperatureControlState?: ITemperatureControlTraitStateSchema
    louverState?: ILouverControlTraitStateSchema;


}

export class IAirConditionerAppliancePropertiesSchema extends Realm.Object<IAirConditionerAppliancePropertiesSchema> {
    static embedded?: boolean = true;
    onOffProperties?: IOnOffTraitPropertiesSchema;
    modeProperties?: IModeControlTraitPropertiesSchema;
    fanSpeedProperties?: IFanSpeedControlTraitPropertiesSchema;
    temperatureControlProperties?: ITemperatureControlTraitPropertiesSchema;
    louverProperties?: ILouverControlTraitPropertiesSchema;


}

export class IAirConditionerApplianceDeviceInfoSchema extends Realm.Object<IAirConditionerApplianceDeviceInfoSchema> {
    static embedded?: boolean = true;

    indoorUnitId?: string;


}

export class IKeusAirConditionerApplianceControlInfoSchema extends Realm.Object<IKeusAirConditionerApplianceControlInfoSchema>{
    static embedded?: boolean = true;
    indoorUnitId?: string;

}
export const ModelsList=[
    IAirConditionerApplianceStateSchema,IAirConditionerAppliancePropertiesSchema,IAirConditionerApplianceDeviceInfoSchema,IKeusAirConditionerApplianceControlInfoSchema
]

