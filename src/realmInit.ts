// realmSingleton.ts
import Realm from 'realm';
import { devicesSchemasList } from './schemas/devices';
let realmInstance: Realm | null = null;

const getRealmInstance = async (): Promise<Realm | null> => {
    console.log('Before realmInstance check:', realmInstance);
    if (!realmInstance) {
      try {
        realmInstance = await Realm.open({
          // Your schema definition here
          schema: devicesSchemasList
        });
      } catch (error) {
        console.error('Error opening Realm:', error);
        throw error;
      }
    }
    console.log('After realmInstance check:', realmInstance);
    return realmInstance;
  };
  
export default getRealmInstance;
