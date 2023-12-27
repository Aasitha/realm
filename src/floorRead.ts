let Realm4 = require('realm');
(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm: any = await new Realm4();

  // ... Rest of your code
  //let devices = realm.objects('IKeusDevice')
  //const results = realm.objects('IKeusDevice').filtered('activityIdentifier != null');
  let floors = realm.objects('IKeusFloor')
  const endMemoryUsage = process.memoryUsage().heapUsed;
  const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

  console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

  // End execution time
  console.timeEnd('Execution time');
  // console.log(devices[0])
  console.log(JSON.stringify(floors[0]))
  console.log(floors.length)
  //console.log(JSON.stringify(Array.from(devices)[0]));
  realm.close();
})();
