let Realm3 = require('realm');
(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm: any = await new Realm3();

  // ... Rest of your code
  //let devices = realm.objects('IKeusDevice')
  //const results = realm.objects('IKeusDevice').filtered('activityIdentifier != null');
  let areas = realm.objects('IKeusArea')
  const endMemoryUsage = process.memoryUsage().heapUsed;
  const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

  console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

  // End execution time
  console.timeEnd('Execution time');
  // console.log(devices[0])
  console.log(JSON.stringify(areas[0]))
  console.log(areas.length)
  //console.log(JSON.stringify(Array.from(devices)[0]));
  realm.close();
})();
