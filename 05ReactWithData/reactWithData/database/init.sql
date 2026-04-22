-- Create the database if you haven't yet
CREATE DATABASE ItemDB;
GO

USE ItemDB;
GO

-- Create the Items table
CREATE TABLE Items (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);