import Realm from "realm";
export class ITemperatureControlTraitStateSchema extends Realm.Object<ITemperatureControlTraitStateSchema> {
    static embedded?: boolean = true;

    temperatureValue?: Realm.Types.Int;


}

export class ITemperatureControlTraitPropertiesSchema extends Realm.Object<ITemperatureControlTraitPropertiesSchema> {
    static embedded?: boolean = true;

    minTemperature?: Realm.Types.Int;
    maxTemperature?: Realm.Types.Int;
    defaultTemperatureState?: ITemperatureControlTraitStateSchema;


}

export const ModelsList = [ITemperatureControlTraitStateSchema, ITemperatureControlTraitPropertiesSchema]