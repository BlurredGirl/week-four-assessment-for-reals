import Database from "better-sqlite3";

// Connect to the database
const db = new Database("database.db");


// Create messages table
db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        message TEXT
    )
`);

// Insert initial data into the messages table
const insertStatement = db.prepare('INSERT INTO messages (name, message) VALUES (?, ?)');

insertStatement.run("Tim", "This is amazing")
insertStatement.run("Emma", "This is quite the guestbook")
insertStatement.run("Dorian", "Wow")
insertStatement.run("Bob", "Get in the bin")

console.log('Data added successfully.');
