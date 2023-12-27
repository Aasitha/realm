import Realm from "realm";
export class IFanSpeedControlTraitStateSchema extends Realm.Object<IFanSpeedControlTraitStateSchema> {
    static embedded?: boolean = true;

    fanSpeed?: string;


}

export class IFanSpeedControlTraitPropertiesSchema extends Realm.Object<IFanSpeedControlTraitPropertiesSchema> {
    static embedded?: boolean = true;

    fanSpeedList: Realm.Types.List<string>;
    defaultFanSpeed?: IFanSpeedControlTraitStateSchema;


}

export const ModelsList = [IFanSpeedControlTraitStateSchema, IFanSpeedControlTraitPropertiesSchema]