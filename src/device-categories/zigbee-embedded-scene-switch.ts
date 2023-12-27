import { string } from "fp-ts";
import Realm from "realm";
export class ISceneSwitchTypeSchema extends Realm.Object<ISceneSwitchTypeSchema> {
    static embedded?: boolean = true;

    switchId?: Realm.Types.Int;
    sceneId?: Realm.Types.Int;
    sceneRoom?: string;


}
export class IZigbeeEmbeddedSceneSwitchPropertiesSchema extends Realm.Object<IZigbeeEmbeddedSceneSwitchPropertiesSchema> {
    static embedded?: boolean = true;

    numberOfSwitches?: Realm.Types.Int;
    switches: Realm.Types.List<ISceneSwitchTypeSchema>;
    batteryPercentage?: Realm.Types.Int;


}

export class IZigbeeEmbeddedSceneSwitchStateSchema extends Realm.Object<IZigbeeEmbeddedSceneSwitchStateSchema> {
    static embedded?: boolean = true;


}