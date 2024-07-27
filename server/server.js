const express = require('express');
const app = express();
const port = 5001;
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    title TEXT NOT NULL
  )`);
});

app.get('/api/items', (req, res) => {
  db.all('SELECT * FROM items', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.post('/api/items', (req, res) => {
  const { text, title } = req.body;
  db.run(`INSERT INTO items (text, title) VALUES (?, ?)`, [text, title], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: { id: this.lastID, text, title } });
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
