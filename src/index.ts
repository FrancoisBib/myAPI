import { Hono } from 'hono';
import drizzle from '../drizzle.config';
import { User } from '../models/User';

const app = new Hono();

// Route pour obtenir tous les utilisateurs
app.get('/users', async (c) => {
  try {
    const users = await drizzle.query(User).findAll();
    return c.json(users);
  } catch (error) {
    return c.json({ error: 'Erreur lors de la récupération des utilisateurs' }, 500);
  }
});

// Route pour créer un nouvel utilisateur
app.post('/users', async (c) => {
  try {
    const { username, email, password } = await c.req.json();
    const newUser = await drizzle.query(User).create({ username, email, password });
    return c.json(newUser);
  } catch (error) {
    return c.json({ error: 'Erreur lors de la création de l\'utilisateur' }, 500);
  }
});

app.fire();
