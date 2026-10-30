# Experiment 5 – Database and RESTful APIs

## 5(a) Mongoose CRUD API

Requirements: MongoDB Community Server running locally, or update the connection string in `5a-mongoose-crud/database.js` to your own Atlas URI.

Install and run:

```bash
cd 05-database-rest-api
npm install
node 5a-mongoose-crud/database.js
```

Use Postman:
- POST `http://localhost:3000/students` with JSON body `{"name":"Ram","age":20}`
- GET `http://localhost:3000/students`
- PUT `http://localhost:3000/students/REPLACE_WITH_DOCUMENT_ID` with JSON body `{"age":21}`
- DELETE `http://localhost:3000/students/REPLACE_WITH_DOCUMENT_ID`

**Key points:** Mongoose connects Node.js to MongoDB; `create()` inserts; `find()` reads; `findByIdAndUpdate()` updates; `findByIdAndDelete()` deletes.

## 5(b) React single-page app using a REST API

This is a React component. Copy `5b-react-rest-api/App.jsx` into `src/App.jsx` of the Vite project in `06-react-basics/`, then run the Vite commands in that folder's README.

Expected: a list of names fetched from JSONPlaceholder.

**Key points:** `fetch()` requests API data; `useEffect()` runs when the component mounts; `useState()` stores the response; `map()` displays each user.

Internet is required for the JSONPlaceholder API.
