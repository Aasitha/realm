
import { MongoClient } from 'mongodb';


const connectionString = 'mongodb://127.0.0.1:27017/';
const databaseName = 'keus';

(async () => {
    try {
        // Measure execution time
        console.time('Execution time');

        // Start memory usage
        const startMemoryUsage = process.memoryUsage().heapUsed;

        const client = new MongoClient(connectionString);

        await client.connect();

        const db = client.db(databaseName);
        const collectionName = 'devices';

        const collection = db.collection(collectionName);
        const result = await collection.find({}).limit(1).toArray();

        const endMemoryUsage = process.memoryUsage().heapUsed;
        const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

        console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

        // End execution time
        console.timeEnd('Execution time');
        //console.log('Total number of activities:', JSON.parse(result));
        console.log(JSON.stringify(result))
        //console.log(result[51])

        await client.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();


