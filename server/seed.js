import Database from "better-sqlite3";

// Connect to the database
const db = new Database("./server/guestbook.db", { verbose: console.log });

// Create messages table
db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
    )
`);

// Seed data
const initialMessages = [
    'Hello, welcome to the guestbook!',
    'Thanks for visiting!',
    'Leave us a review...'
];

// Insert initial data into the messages table
const insertStatement = db.prepare('INSERT INTO messages (text) VALUES (?)');
initialMessages.forEach(message => {
    insertStatement.run(message);
});

console.log('Data added successfully.');

// Close the database connection
db.close();
