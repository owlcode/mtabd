USE master;  
GO  
 
CREATE DATABASE db_app
GO
 
USE db_app
GO
 
EXEC SP_ADDLOGIN @LOGINAME='db_app', @PASSWD='db_app', @DEFDB=db_app
EXEC SP_ADDUSER @LOGINAME='db_app'
EXEC SP_ADDROLEMEMBER @ROLENAME='db_owner', @MEMBERNAME='db_app'
GO
 
CREATE TABLE Dictionaries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255),
    );
GO
 
CREATE TABLE Translations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    language VARCHAR(255)
)
GO

CREATE TABLE DictionaryValues (
    id INT IDENTITY(1,1),
    dictId INT FOREIGN KEY REFERENCES Dictionaries(id),
    translationId INT FOREIGN KEY REFERENCES Translations(id),
    name VARCHAR(255),
	longName VARCHAR(255),
    );
GO
  
CREATE TABLE Users(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(255) NOT NULL UNIQUE,
    passwd VARCHAR(255) NOT NULL, /* hash */
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL CHECK(email LIKE ('[a-z,0-9,_,-]%@[a-z,0-9,_,-]%.[a-z][a-z]%')),
    birth DATETIME2,
    createdAt DATETIME2 NOT NULL DEFAULT(GETDATE())
    );
GO
 
CREATE TABLE Performers(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(255) NOT NULL UNIQUE,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL CHECK(email LIKE('[a-z,0-9,_,-]%@[a-z,0-9,_,-]%.[a-z][a-z]%')),
    age INT,
    );
GO
 
CREATE TABLE Services(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    userId INT FOREIGN KEY REFERENCES Users(id),
    performerId INT FOREIGN KEY REFERENCES Performers(id),
    createdAt DATETIME2 NOT NULL DEFAULT(GETDATE()),
    startDate DATETIME2 NOT NULL,
    finishDate DATETIME2 NOT NULL,
    description VARCHAR(255),
    );
GO

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price SMALLMONEY NOT NULL,
    );
GO

CREATE TABLE ProductsInServices (
    productId INT FOREIGN KEY REFERENCES Products(id),
    serviceId INT FOREIGN KEY REFERENCES Services(id)
    );
GO

 
CREATE TABLE Chat(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    serviceId INT FOREIGN KEY REFERENCES Services(id),
    );
GO
 
CREATE TABLE Messages(
    chatId INT FOREIGN KEY REFERENCES Chat(id),
    userId INT FOREIGN KEY REFERENCES Users(id),
    browserAgent VARCHAR(255),
    ipv4 VARCHAR(255),
    text VARCHAR(255) NOT NULL,
    createdAt DATETIME2 NOT NULL DEFAULT(GETDATE()),
    );
GO
