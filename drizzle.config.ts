import { Drizzle } from 'drizzle-orm';
import { Pool } from 'pg';

// Crée une instance de connexion à PostgreSQL
const pool = new Pool({
  connectionString: 'postgres://<user>:<password>@<host>:<port>/<database>',
});

// Initialise Drizzle avec la connexion PostgreSQL
const drizzle = new Drizzle(pool);

export default drizzle;
