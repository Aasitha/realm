import Realm from "realm";
export class IRGBAddrTraitStateSchema extends Realm.Object<IRGBAddrTraitStateSchema> {
    static embedded?: boolean = true;


}


export class IRGBAddrTraitPropertiesSchema extends Realm.Object<IRGBAddrTraitPropertiesSchema> {
    static embedded?: boolean = true;

    stripLength?: Realm.Types.Int;


}

export const ModelsList = [IRGBAddrTraitStateSchema, IRGBAddrTraitPropertiesSchema]