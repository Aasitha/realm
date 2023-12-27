import Realm from "realm";
export class ISingleSwingStateSchema extends Realm.Object<ISingleSwingStateSchema> {
    static embedded?: boolean = true;
    swingState?: string;

}

export class IDoubleSwingStateSchema extends Realm.Object<IDoubleSwingStateSchema> {
    static embedded?: boolean = true;
    horizontalSwingState?: string;
    verticalSwingState?: string;


}
export class ISwingControlTraitState_swingControlStateSchema extends Realm.Object<ISwingControlTraitState_swingControlStateSchema> {
    static embedded?: boolean = true;
    swingState?: string;
    horizontalSwingState?: string;
    verticalSwingState?: string;

}
export class ISwingControlTraitStateSchema extends Realm.Object<ISwingControlTraitStateSchema> {
    static embedded?: boolean = true;
    swingType?: Realm.Types.Int;
    swingControlState?: ISwingControlTraitState_swingControlStateSchema;


}
export class ISingleSwingPropsSchema extends Realm.Object<ISingleSwingPropsSchema> {
    static embedded?: boolean = true;
    swingsList: Realm.Types.List<string>;


}
export class IDoubleSwingPropsSchema extends Realm.Object<IDoubleSwingPropsSchema> {
    static embedded?: boolean = true;
    verticalSwingEnabled?: Realm.Types.Bool;
    verticalSwingsList: Realm.Types.List<string>
    horizontalSwingEnabled?: Realm.Types.Bool;
    horizontalSwingsList: Realm.Types.List<string>



}
export class ISwingControlTraitProperties_swingInfoSchema extends Realm.Object<ISwingControlTraitProperties_swingInfoSchema> {
    static embedded?: boolean = true;
    swingsList: Realm.Types.List<string>
    verticalSwingEnabled?: Realm.Types.Bool;
    verticalSwingsList: Realm.Types.List<string>
    horizontalSwingEnabled?: Realm.Types.Bool;
    horizontalSwingsList: Realm.Types.List<string>

}
export class ISwingControlTraitPropertiesSchema extends Realm.Object<ISwingControlTraitPropertiesSchema> {
    static embedded?: boolean = true;
    swingType?: Realm.Types.Int;
    swingInfo?: ISwingControlTraitProperties_swingInfoSchema;
    defaultSwingState?: ISwingControlTraitStateSchema


}

export const ModelsList = [ISingleSwingStateSchema, IDoubleSwingStateSchema, ISwingControlTraitState_swingControlStateSchema, ISwingControlTraitStateSchema, ISingleSwingPropsSchema, IDoubleSwingPropsSchema, ISwingControlTraitProperties_swingInfoSchema, ISwingControlTraitPropertiesSchema]