// src/config/db.ts
import sql, { ConnectionPool } from 'mssql';

const dbConfig: sql.config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'your_database',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Export a promise that resolves to a Pool
export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed:', err);
        throw err;
    });