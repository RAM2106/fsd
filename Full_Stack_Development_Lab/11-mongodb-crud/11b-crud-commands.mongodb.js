// Run these commands in mongosh, not with node.
use('college');

db.students.insertOne({ name: 'Ram', age: 20 });
db.students.find();

db.students.updateOne(
    { name: 'Ram' },
    { $set: { age: 21 } }
);

db.students.deleteOne({ name: 'Ram' });
