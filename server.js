const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Data dummy
let users = [
  { id: 1, name: 'Andri', email: 'andri@example.com' },
  { id: 2, name: 'Hakim', email: 'hakim@example.com' },
  { id: 3, name: 'Najmi', email: 'najmi@example.com' }
];

// GET
app.get('/users', (req, res) => {
  res.json(users);
});

// POST
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.json({ message: 'User berhasil ditambahkan!', user: newUser });
});

// PUT
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User tidak ditemukan!' });

  user.name = req.body.name;
  user.email = req.body.email;
  res.json({ message: 'User berhasil diupdate!', user });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});