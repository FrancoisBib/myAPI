import { Drizzle } from 'drizzle-orm';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://<user>:<password>@<host>:<port>/<database>',
});

// Initialisation de Drizzle avec la connexion PostgreSQL
const drizzle = new Drizzle(pool);

export default drizzle;
