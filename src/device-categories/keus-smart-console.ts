import Realm from "realm";
export class IKeusSmartConsoleButtonSchema extends Realm.Object<IKeusSmartConsoleButtonSchema> {
    static embedded?: boolean = true;
    buttonId?: Realm.Types.Int;
    buttonType?: Realm.Types.Int
    buttonProperties?: IKeusSmartConsoleButtonPropertiesSchema


}
export class IKeusSmartConsoleButtonPropertiesSchema extends Realm.Object<IKeusSmartConsoleButtonPropertiesSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;
    sceneId?: Realm.Types.Int;
    deviceIds: Realm.Types.List<Realm.Types.Mixed>
    applianceIds: Realm.Types.List<Realm.Types.Mixed>
    relayId?: Realm.Types.Int;
    deviceId?: string;


}
export class buttonPropertiesCollectionSchema extends Realm.Object<buttonPropertiesCollectionSchema> {
    static embedded?: boolean = true;
    iSmartConsoleGroupButtonProperties?: ISmartConsoleGroupButtonPropertiesSchema;
    iSmartConsoleSceneButtonProperties?: ISmartConsoleSceneButtonPropertiesSchema;
    iSmartConsoleCurtainButtonProperties?: ISmartConsoleCurtainButtonPropertiesSchema;
    iSmartConsoleRelayButtonProperties?: ISmartConsoleRelayButtonPropertiesSchema;
    iSmartConsoleRemoteRelayButtonProperties?: ISmartConsoleRemoteRelayButtonPropertiesSchema;
    iSmartConsoleFanButtonProperties?: ISmartConsoleFanButtonPropertiesSchema;
    iSmartConsoleNoPropsButtonProperties?: ISmartConsoleNoPropsButtonPropertiesSchema;



}

export class IKeusSmartConsoleRelaySchema extends Realm.Object<IKeusSmartConsoleRelaySchema> {
    static embedded?: boolean = true;
    relayId?: Realm.Types.Int;
    relayName?: string;
    relayState?: Realm.Types.Int;
    applianceType?: Realm.Types.Int;
    isHighPower?: Realm.Types.Bool;
    lastUpdateTime?: Realm.Types.Int;
    lastUpdateBy?: string;
    lastUpdateUser?: string;
    lastUpdateSource?: string;
    isAssigned?: Realm.Types.Bool;


}
export class KZSCdeviceButtonPropertiesSchema extends Realm.Object<KZSCdeviceButtonPropertiesSchema> {
    static embedded?: boolean = true;
    buttonId?: Realm.Types.Int;
    buttonType?: Realm.Types.Int;
    buttonProperties?: KZSCbuttonPropertiesSchema

}
export class KZSCbuttonPropertiesSchema extends Realm.Object<KZSCbuttonPropertiesSchema> {
    static embedded?: boolean = true;
    sceneId?: Realm.Types.Int;
    roomId?: string;
    relayId?: Realm.Types.Int;
    groupId?: Realm.Types.Int;
    deviceIds: Realm.Types.List<Realm.Types.Mixed>
    applianceIds: Realm.Types.List<Realm.Types.Mixed>
    deviceId?: string;

}

export class IKeusSmartConsolePropertiesSchema extends Realm.Object<IKeusSmartConsolePropertiesSchema> {
    static embedded?: boolean = true;
    buttons: Realm.Types.List<KZSCdeviceButtonPropertiesSchema>;
    relays: Realm.Types.List<IKeusSmartConsoleRelaySchema>;
    defaultFan?: string;
    defaultSceneId?: Realm.Types.Int;
    defaultSceneRoom?: string;
    sceneStepSize?: Realm.Types.Int;
    isAreaMaster?: Realm.Types.Bool;
    isDaliMaster?: Realm.Types.Bool;
    identifyStatus?: Realm.Types.Bool;
    interactionMode?: Realm.Types.Int;


}

export class ISmartConsoleRelayActionSchema extends Realm.Object<ISmartConsoleRelayActionSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    relayId?: Realm.Types.Int;
    relayState?: Realm.Types.Int;


}

export class IKeusSmartConsoleStateSchema extends Realm.Object<IKeusSmartConsoleStateSchema> {
    static embedded?: boolean = true;
}

//Button Types
export class ISmartConsoleGroupButtonPropertiesSchema extends Realm.Object<ISmartConsoleGroupButtonPropertiesSchema> {
    static embedded?: boolean = true;
    groupId?: Realm.Types.Int;
    roomId?: string;


}

export class ISmartConsoleSceneButtonPropertiesSchema extends Realm.Object<ISmartConsoleSceneButtonPropertiesSchema> {
    static embedded?: boolean = true;
    sceneId?: Realm.Types.Int;
    roomId?: string;

}


export class ISmartConsoleCurtainButtonPropertiesSchema extends Realm.Object<ISmartConsoleCurtainButtonPropertiesSchema> {
    static embedded?: boolean = true;
    deviceIds: Realm.Types.List<string>;
    applianceIds: Realm.Types.List<string>;

}


export class ISmartConsoleRelayButtonPropertiesSchema extends Realm.Object<ISmartConsoleRelayButtonPropertiesSchema> {
    static embedded?: boolean = true;
    relayId?: Realm.Types.Int;


}

export class ISmartConsoleRemoteRelayButtonPropertiesSchema extends Realm.Object<ISmartConsoleRemoteRelayButtonPropertiesSchema> {
    static embedded?: boolean = true;
    deviceId?: string;
    relayId?: Realm.Types.Int;


}

export class ISmartConsoleFanButtonPropertiesSchema extends Realm.Object<ISmartConsoleFanButtonPropertiesSchema> {
    static embedded?: boolean = true;
    deviceId?: string;


}

export class ISmartConsoleNoPropsButtonPropertiesSchema extends Realm.Object<ISmartConsoleNoPropsButtonPropertiesSchema> {
    static embedded?: boolean = true;
}