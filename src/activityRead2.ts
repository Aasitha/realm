let Realm2 = require('realm');
import {
    activitySchema2, ActivityActionSchema, activitySourceInfoSchema, activityPropertiesSchema, EmbeddedActivityActionSchema, EmbeddedOnOffApplianceStateSchema, EmbeddedSingleDimmerApplianceStateSchema, EmbeddedFanApplianceStateSchema, EmbeddedColorTunableApplianceStateSchema, SmartConsoleActivityActionSchema, IRRemoteActivityActionSchema, KeusIRACBlastActionSchema, KeusIRAMPBlastActionSchema, KeusIRFANBlastActionSchema, KeusIRPRBlastActionSchema, KeusIRTVBlastActionSchema, RgbwwaActivityActionSchema, DriverActivityActionSchema, CurtainActivityActionSchema, ContactSensorActivityActionSchema, AcFancontrollerActivityActionSchema, DcFancontrollerActivityActionSchema, GMApplianceActivityIdentifierSchema, GMGroupActivityIdentifierSchema, GMSceneActivityIdentifierSchema, KeusDeviceActivityActionSchema, DaliColorTunableActivityActionSchema, DaliDimmableDriverActivityActionSchema, DaliNonDimmableDriverActivityActionSchema,
    ZigbeeDimmableDriverActivityActionSchema,
    ZigbeeNonDimmableDriverActivitySchema,
    InlineDimmerActivityActionSchema,
    OnOffApplianceActivityActionSchema,
    SingleDimmerApplianceActivityActionSchema,
    FanApplianceActivityActionSchema,
    ColorTunableApplianceActivityActionSchema,
    KeusSceneActivityActionSchema,
    KeusGroupActivityActionSchema,
    KeusActivityGroupStateObjectSchema
} from './activitySchema2'; // Import the exported schemas
// Import the exported schemas

(async () => {
    // Measure execution time
    console.time('Execution time');

    // Start memory usage
    const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

    const realm = new Realm2({
        schema: [
            activitySchema2, ActivityActionSchema, activitySourceInfoSchema, activityPropertiesSchema, EmbeddedActivityActionSchema, EmbeddedOnOffApplianceStateSchema, EmbeddedSingleDimmerApplianceStateSchema, EmbeddedFanApplianceStateSchema, EmbeddedColorTunableApplianceStateSchema, SmartConsoleActivityActionSchema, IRRemoteActivityActionSchema, KeusIRACBlastActionSchema, KeusIRAMPBlastActionSchema, KeusIRFANBlastActionSchema, KeusIRPRBlastActionSchema, KeusIRTVBlastActionSchema, RgbwwaActivityActionSchema, DriverActivityActionSchema, CurtainActivityActionSchema, ContactSensorActivityActionSchema, AcFancontrollerActivityActionSchema, DcFancontrollerActivityActionSchema, GMApplianceActivityIdentifierSchema, GMGroupActivityIdentifierSchema, GMSceneActivityIdentifierSchema, KeusDeviceActivityActionSchema, DaliColorTunableActivityActionSchema, DaliDimmableDriverActivityActionSchema, DaliNonDimmableDriverActivityActionSchema,
            ZigbeeDimmableDriverActivityActionSchema,
            ZigbeeNonDimmableDriverActivitySchema,
            InlineDimmerActivityActionSchema,
            OnOffApplianceActivityActionSchema,
            SingleDimmerApplianceActivityActionSchema,
            FanApplianceActivityActionSchema,
            ColorTunableApplianceActivityActionSchema,
            KeusSceneActivityActionSchema,
            KeusGroupActivityActionSchema,
            KeusActivityGroupStateObjectSchema
        ],

    });


    // ... Rest of your code
    let results = realm.objects('Activity2')
    //const results = realm.objects('Activity2').filtered('activityUsername != null');


    const endMemoryUsage = process.memoryUsage().heapUsed;
    const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

    console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

    // End execution time
    console.timeEnd('Execution time');
    console.log(JSON.stringify(Array.from(results)[0]));
    console.log(Array.from(results).length);

    realm.close();
})();
