// Run these commands in mongosh.
use('college');

db.students.insertMany([
    { name: 'Ram', age: 20, marks: 80 },
    { name: 'Ravi', age: 21, marks: 90 },
    { name: 'Kiran', age: 19, marks: 70 }
]);

db.students.find();
db.students.find().limit(2);
db.students.find().sort({ marks: 1 });
db.students.createIndex({ name: 1 });

db.students.aggregate([
    { $group: { _id: null, averageMarks: { $avg: '$marks' } } }
]);
