import { Request, Response } from 'express';
import { poolPromise } from '../config/db';
import sql from 'mssql';

// Define the shape of your data
interface Item {
    id?: number;
    name: string;
    price: number;
}

export const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query("SELECT * FROM Items");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
};

export const createItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price }: Item = req.body;
        const pool = await poolPromise;
        
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('price', sql.Decimal(10, 2), price)
            .query("INSERT INTO Items (Name, Price) VALUES (@name, @price)");

        res.status(201).json({ message: "Item added!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to create item" });
    }
};

export const removeItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params; // Usually passed in URL like /items/5
        const pool = await poolPromise;

        await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM Items WHERE Id = @id");

        res.json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Delete failed" });
    }
};