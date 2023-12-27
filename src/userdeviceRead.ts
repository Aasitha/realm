let Realm2= require('realm');
async function getDevices(devices: any) {
    for (const device of devices) {
        if(device.transformOptions){
            //console.log("transformOptions exists")
            for(let i=0;i<device.transformOptions.length;i++){
                //device[device.transformOptions[i]]=device[device.transformOptions[i]][device.transformValues[i]]
                //console.log("it is: ",device[device.transformOptions[i]][device[device.transformValues[i]]])
                device[device.transformOptions[i]]=device[device.transformOptions[i]][device[device.transformValues[i]]]
                //console.log(device[device.transformOptions[i]])
            }
            delete device.transformOptions
            delete device.transformValues
        }
    }

    return devices;
}
(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm: any = await new Realm2();

  // ... Rest of your code
  //let devices = realm.objects('IKeusDevice')
  //const results = realm.objects('IKeusDevice').filtered('activityIdentifier != null');
  let schedules = realm.objects('IKeusUserDevice')
  const endMemoryUsage = process.memoryUsage().heapUsed;
  const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

  console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

  // End execution time
  console.timeEnd('Execution time');
  // console.log(devices[0])
  let res:any=await getDevices(JSON.parse(JSON.stringify(schedules)))
  console.log(JSON.stringify(res[0]))
  //console.log(JSON.stringify(gmgroups[0]))
  //console.log(JSON.stringify(Array.from(devices)[0]));

  realm.close();
})();
