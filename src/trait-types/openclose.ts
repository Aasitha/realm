import Realm from "realm";
export class IOpenCloseTraitStateSchema extends Realm.Object<IOpenCloseTraitStateSchema> {
    static embedded?: boolean = true;

    openCloseState?: Realm.Types.Int;


}

export class IOpenCloseTraitOpenStyleSchema extends Realm.Object<IOpenCloseTraitOpenStyleSchema> {
    static embedded?: boolean = true;

    openStyleVertical?: Realm.Types.Int;
    openStyleHorizontal?: Realm.Types.Int;


}

export class IOpenCloseTraitPropertiesSchema extends Realm.Object<IOpenCloseTraitPropertiesSchema> {
    static embedded?: boolean = true;

    invertSignal?: Realm.Types.Bool;
    openDirection?: Realm.Types.Int;
    defaultOpenCloseState?: IOpenCloseTraitStateSchema
        openStyle?: IOpenCloseTraitOpenStyleSchema;


}

export const ModelsList = [IOpenCloseTraitStateSchema, IOpenCloseTraitOpenStyleSchema, IOpenCloseTraitPropertiesSchema]