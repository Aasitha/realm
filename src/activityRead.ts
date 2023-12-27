let Realm2 = require('realm');
import {activitySchema} from './activitySchema'; // Import the exported schemas

(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm = new Realm2({
    schema: [
        activitySchema
    ],

});

  // ... Rest of your code
  let activities = realm.objects('Activity')
  //const results = realm.objects('Activity').filtered('activityIdentifier != null');

  const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

    // End execution time
    console.timeEnd('Execution time');
    console.log(Array.from(activities).length);
    realm.close();
})();
