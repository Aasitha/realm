
import { devicesSchemasList } from "./schemas/devices"
import getRealmInstance from "./realmInit";
async function getDevices(devices: any) {
  for (const device of devices) {
      if(device.transformOptions.length){
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
function isEqualArray(arr1: any[], arr2: any[]): boolean {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
function removeNullAndNegativeOneFields(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (JSON.stringify(obj) === JSON.stringify([-1])) {
    return undefined; // Remove if value is [-1]
  }

  const newObj: Record<string, any> = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = removeNullAndNegativeOneFields(obj[key]);

    if (value !== null && !(JSON.stringify(value) === JSON.stringify([-1]))) {
      newObj[key] = value;
    }
  }

  if (Array.isArray(newObj) && newObj.length === 0) {
    return [];
  }

  return Object.keys(newObj).length === 0 ? undefined : newObj;
}

/*
function removeNullFields(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => removeNullFields(item));
  }

  const newObj = {};

  for (const key in obj) {
    const value = removeNullFields(obj[key]);
    if (value !== null || (Array.isArray(value) && value.length > 0)) {
      newObj[key] = value;
    }
  }

  return newObj;
}
*/
async function getDevice(device: any) {
  let newVal: any = removeNullAndNegativeOneFields(device.deviceProperties[device.transformKeys[0]]);
  device.deviceProperties = newVal;
  device.deviceState = device.deviceState[device.transformKeys[1]];
  //let value=device.transformKeys[0];
  //console.log(value);
  //console.log("properties are: ",device.device[`${device.transformKeys}`]);
  //device.deviceState=device.transformKeys[1];
  if (device.transformKeys) {
    delete device.transformKeys
  }
  return device;
}
(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm: any = await getRealmInstance();

  // ... Rest of your code
  //let devices = realm.objects('IKeusDevice')
  //const results = realm.objects('IKeusDevice').filtered('activityIdentifier != null');
  let devices = realm.objects('IKeusDevice').filtered('deviceId=="0x00124b0021b70880"')
  const endMemoryUsage = process.memoryUsage().heapUsed;
  const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

  console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

  // End execution time
  console.timeEnd('Execution time');
  // console.log(devices[0])
  //console.log(JSON.stringify(await getDevice(JSON.parse(JSON.stringify(devices[0])))))
  let res:any=await getDevices(JSON.parse(JSON.stringify(devices)))
  console.log(JSON.stringify(res[0]))
  //console.log(JSON.stringify(Array.from(devices)[0]));
  realm.close();
})();
