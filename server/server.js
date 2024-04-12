import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();

app.use(express.json());
app.use(cors());

// Connect to the database
const db = new Database('database.db');

// Start server
app.listen(8080, function(){
	console.log("App is running on 8080");
});

// GET
app.get("/", function (request, response) {
    console.log("/ is called");
    response.json("This is the get response");
  });

app.get('/messages', function (request, response) { 
    const messages = db.prepare('SELECT * FROM messages').all();
    response.json(messages);
});


// POST

app.post('/messages', (request, response) => {
    //Take the data from the form (body) 
const newMessage = request.body;
console.log(newMessage); // Added console log


    // Data goes into the database - change the ? for actual data (related to body)
    db.prepare(('INSERT INTO messages (name, message) VALUES (name, message)').run); // Reflected structure from seed file
    response.json({ message: 'Message added successfully' });
});



