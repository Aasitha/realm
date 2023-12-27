import Realm from "realm";
import { IKeusSmartConsoleButtonSchema } from './keus-smart-console';
export class IKeusSceneWizardPropertiesSchema extends Realm.Object<IKeusSceneWizardPropertiesSchema> {
    static embedded?: boolean = true;
        buttons: Realm.Types.List<IKeusSmartConsoleButtonSchema>;
        sceneStepSize?: Realm.Types.Int;
        batteryPercentage?: Realm.Types.Int;

    

}

export class IKeusSceneWizardStateSchema extends Realm.Object<IKeusSceneWizardStateSchema> {
    static embedded?: boolean = true;
}
