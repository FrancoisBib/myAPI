"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_orm_1 = require("drizzle-orm");
const pg_1 = require("pg");

const pool = new pg_1.Pool({
    connectionString: 'postgres://<user>:<password>@<host>:<port>/<database>',
});
// Initialisation de Drizzle avec la connexion PostgreSQL
const drizzle = new drizzle_orm_1.Drizzle(pool);
exports.default = drizzle;
