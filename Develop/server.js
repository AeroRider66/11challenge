const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
    console.log("foo");

    return res.sendFile(path.join(__dirname, '/views/index.html'))
});

// GET route for existing notes
app.get('/', (req, res) => {
    console.log("getting notes");

})

// POST route to add task
app.post('/', (req, res) => {

})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
