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

Create table Translations (
	id INT IDENTITY(1,1) PRIMARY KEY,
	language VARCHAR(255)
)
GO

CREATE TABLE DictValues (
	id INT IDENTITY(1,1) primary key,
	dictId INT foreign key references Dictionaries(id),
	translationId INT foreign key references Translations(id),
	key INT,
	value VARCHAR(255),
	);
GO

CREATE TABLE Users(
	id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	username VARCHAR(255) NOT NULL UNIQUE,
	passwd VARCHAR(255) NOT NULL, /* hash */
	firstName VARCHAR(255),
	lastName VARCHAR(255),
	email VARCHAR(255) NOT NULL, /* regex mail check */
	birth VARCHAR(255),
	createdAt DATETIME2 NOT NULL
	);
GO

/* definately needs to be merged with users, add another column `userType` */
CREATE TABLE Performers(
	id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	username VARCHAR(255) NOT NULL UNIQUE,
	firstName VARCHAR(255),
	lastName VARCHAR(255),
	email VARCHAR(255) NOT NULL,
	age INT, 
	);
GO
/******************/

CREATE TABLE Services(
	id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	userId INT FOREIGN KEY REFERENCES Users(id),
	performerId INT FOREIGN KEY REFERENCES Performers(id),
	createdAt DATETIME2 NOT NULL,
	startDate DATETIME2 NOT NULL,
	finishDate DATETIME2 NOT NULL,
	description VARCHAR(255),
	);
GO

CREATE TABLE ProductsInServices (
	productId INT FOREIGN KEY REFERENCES Products(id),
	serviceId INT FOREIGN KEY REFERENCES Services(id)
	);
GO

CREATE TABLE Products (
	id INT NOT NULL IDENTITY(1,1),
	name VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	price SMALLMONEY NOT NULL,
	group VARCHAR(255)
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
	createdAt DATETIME2 NOT NULL, /* auto fill */
	);
GO
