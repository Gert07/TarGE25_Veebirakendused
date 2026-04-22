import sql from "mssql";

export const dbconfig: sql.config = {
    user: "LAPTOP",
    password: "",
    server: "",
    database: "",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export const poolPromise = new sql.ConnectionPool(dbconfig)
    .connect()
    .then(pool => pool);