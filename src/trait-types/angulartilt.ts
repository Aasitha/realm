import Realm from "realm";
export class IAngularTiltTraitStateSchema extends Realm.Object<IAngularTiltTraitStateSchema> {
    static embedded?: boolean = true;
    tiltAngle?: Realm.Types.Int;


};

export class IAngularTiltTraitPropertiesSchema extends Realm.Object<IAngularTiltTraitPropertiesSchema> {
    static embedded?: boolean = true;
    tiltType?: Realm.Types.Int
    fullTiltAngle?: Realm.Types.Int
    invertTilt?: Realm.Types.Bool
    defaultTiltState?: IAngularTiltTraitStateSchema;


}

export const ModelsList = [IAngularTiltTraitStateSchema, IAngularTiltTraitPropertiesSchema]
