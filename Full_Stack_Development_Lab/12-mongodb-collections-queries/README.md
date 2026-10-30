# Experiment 12 – MongoDB Databases, Collections and Records

Run commands in `mongosh`, not with Node.js.

## 12(a) Database and collection commands

File: `12a-database-collections.mongodb.js`

Open `mongosh`, then run commands one at a time:
- `use college` selects/creates the database on first write.
- `db.createCollection('students')` creates a collection.
- `show dbs` lists databases.
- `show collections` lists collections.
- `db.students.drop()` deletes the collection.
- `db.dropDatabase()` deletes the current database.

**Warning:** `drop()` and `dropDatabase()` permanently delete data. The database-drop command is commented out in the file. Do not uncomment it unless you intend to delete the database.

## 12(b) Record operations

File: `12b-record-queries.mongodb.js`

Paste commands into `mongosh` in order. It inserts three sample students, then demonstrates:
- `find()` – display records
- `limit(2)` – show two records
- `sort({marks: 1})` – sort marks ascending
- `createIndex({name: 1})` – create an index
- `aggregate()` – calculate average marks

**Key points:** MongoDB stores documents inside collections, which belong to databases.
