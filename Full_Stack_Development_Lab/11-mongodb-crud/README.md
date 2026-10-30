# Experiment 11 – MongoDB Installation, Configuration and CRUD

## 11(a) Installation and Atlas configuration

1. Install MongoDB Community Server and MongoDB Shell (`mongosh`), or create a MongoDB Atlas cluster.
2. Start the local MongoDB service if using Community Server.
3. Open a terminal and run `mongosh`.
4. For Atlas, connect using the connection string shown by Atlas.

## 11(b) CRUD commands

File: `11b-crud-commands.mongodb.js`

Open `mongosh` and run each command in the file (or paste the contents). Do not run it using `node`.

```javascript
use('college')
db.students.insertOne({name:'Ram', age:20})
db.students.find()
db.students.updateOne({name:'Ram'}, {$set:{age:21}})
db.students.deleteOne({name:'Ram'})
```

**Key points:** CRUD means Create, Read, Update and Delete. `insertOne()` creates; `find()` reads; `updateOne()` updates; `deleteOne()` deletes.
