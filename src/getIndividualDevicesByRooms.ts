//const dogs = realm.objects('Dog').filtered('breed IN $0', breedsToFilterBy);
let Realm = require("realm")
import KeusDeviceModel from "./keus-device";
(async () => {
    console.time('Execution time');
    const startMemoryUsage = process.memoryUsage().heapUsed;
    let res: any = await KeusDeviceModel.getIndividualDevicesByRooms(["Home", "dYuFQh7abT"])
    const realm = new Realm();

    console.log(JSON.stringify(res[0]));
    realm.close();
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');
    console.timeEnd('Execution time');
    


    // End execution time
    
})();