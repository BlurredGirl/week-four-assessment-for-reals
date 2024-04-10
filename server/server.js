import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to the database
const db = new Database('./server/guestbook.db', { verbose: console.log });

// Create messages table if it doesn't exist
db.exec(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT
)`);

// Seed data
const initialMessages = [
    'Hello, welcome to the guestbook!',
    'Thanks for visiting!',
    'Feel free to leave your thoughts.'
];

const insertStatement = db.prepare('INSERT INTO messages (text) VALUES (?)');
initialMessages.forEach(message => {
    insertStatement.run(message);
});

// API routes
app.get('/api/messages', (req, res) => {
    const messages = db.prepare('SELECT * FROM messages').all();
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const { message } = req.body;
    db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
    res.json({ message: 'Message added successfully' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
