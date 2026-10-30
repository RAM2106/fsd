// Run these commands in mongosh.
use('college');

db.createCollection('students');
show dbs;
show collections;

// Destructive examples: run only when you intend to delete these objects.
db.students.drop();
// db.dropDatabase();
