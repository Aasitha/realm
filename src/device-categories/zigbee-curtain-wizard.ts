import Realm from "realm";
export class IZigbeeCurtainWizardButtonSchema extends Realm.Object<IZigbeeCurtainWizardButtonSchema> {
    static embedded?: boolean = true;
        rowId?: Realm.Types.Int;
        selectAll?: Realm.Types.Bool;
        deviceId: Realm.Types.List<string>;
        applianceId: Realm.Types.List<string>;
    

}

export class IZigbeeCurtainWizardPropertiesSchema extends Realm.Object<IZigbeeCurtainWizardPropertiesSchema> {
    static embedded?: boolean = true;
        button: Realm.Types.List<IZigbeeCurtainWizardButtonSchema>;
        batteryPercentage?: Realm.Types.Int;
    

}

export class IZigbeeCurtainWizardStateSchema extends Realm.Object<IZigbeeCurtainWizardStateSchema> {
    static embedded?: boolean = true;
}

