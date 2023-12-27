const { FastJson } = require('fast-json');

const data = {
  ireland: {
    people: [{ name: {
        innername:"Alex"
    } }, { name: 'John' }, { name: 'Cian' }],
  },
  spain: {
    people: [{ name: 'Antonio' }, { name: 'Juan' }, { name: 'Pedro' }],
  },
};

const fastJson = new FastJson();
var sample:any
// Path is a string representing a javascript object path
fastJson.on("ireland", (value) => {
    
   sample=value;
   console.log(sample)

});
console.log(sample)



// Paths can be also an array of keys
// fastJson.on(['spain', 'people', '1', 'name'], (value) => {
//   console.log(['spain', 'people', '1', 'name'], '->', value);
// });

// Wildcards can be used to match all items in object or array
// fastJson.on('spain.people[*].name', (value) => {
//   console.log('spain.people[*].name ->', value);
// });

// fastJson.on('*.people[*].name', (value) => {
//   console.log('*.people[*].name ->', value);
// });

fastJson.write(data);
// The JSON can be string or Buffer
// fastJson.write(Buffer.from(data))