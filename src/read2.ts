let Realm2 = require('realm');
import { activitySchema } from './activitySchema';
import v8 from 'v8'; // Import the v8 module

(async () => {
  // Measure execution time
  const startTime = performance.now();

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed;

  const realm = new Realm2({
    schema: [
      activitySchema
    ],
  });

  try {
    // ... Rest of your code
    let activities = realm.objects('Activity');

    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in megabytes

    // Memory usage from v8 heap statistics
    const v8Stats = v8.getHeapStatistics();
    console.log('Memory consumed (v8 heap):', (v8Stats.used_heap_size / (1024 * 1024)).toFixed(2) + ' MB');
    console.log('Memory consumed (estimated):', memoryConsumed.toFixed(2) + ' MB');

    // End execution time
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log('Execution time:', executionTime.toFixed(2) + ' ms');
    console.log('Number of activities:', Array.from(activities).length);
  } finally {
    realm.close();
  }
})();
