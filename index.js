const express = require('express');
const app = express();
const port = 3000;

// API endpoints
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/user', (req, res) => {
  res.json({ name: 'John Doe', age: 30 });
});

app.get('/api/posts', (req, res) => {
  res.json([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
});

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
