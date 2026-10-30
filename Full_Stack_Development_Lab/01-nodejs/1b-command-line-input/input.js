const name = process.argv[2];
const age = process.argv[3];

if (!name || !age) {
    console.log('Usage: node input.js <name> <age>');
} else {
    console.log('Hello ' + name);
    console.log('Your age is ' + age);
}
