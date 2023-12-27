import Realm from 'realm';
export const BaseSchemaName = "sceneSchema";
export class actionSchema extends Realm.Object<actionSchema>{
    static embedded?: boolean = true;
    actionId:string;
    actionName:string;
    sequenceNumber:Realm.Types.Int;
    deviceId:string;
    delay:Realm.Types.Int;
}
export class sceneSchema extends Realm.Object<sceneSchema>{
    static primaryKey = "sceneId";
    sceneId:string;
    sceneName:string;
    actionList:Realm.Types.List<actionSchema>
}
export class Methods{
    static async createScene(realm:Realm,doc:any){
        realm.write(()=>{
            realm.create(BaseSchemaName,{
                sceneId:doc.sceneId,
                sceneName:doc.sceneName,
                actionList:doc.actionList
            })
        })
    }
    static async deleteScene(realm:Realm,sceneId:string){
        realm.write(()=>{
            realm.objectForPrimaryKey(BaseSchemaName,sceneId);
        })
    }
    static async createAction(realm:Realm,sceneID:string,action:any){
        realm.write(()=>{
            const scene:any=realm.objectForPrimaryKey(BaseSchemaName,sceneID);
            scene.actionList.push(action);
        })
    }
    static async deleteAction(realm:Realm,actionId:string){
        
    }
    static async setSequence(realm:Realm){

    }
    static async setDelay(realm:Realm,actionId:string){

    }


}