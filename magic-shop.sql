/*******************************************************************************
   Create database
********************************************************************************/
--DROP USER Magic cascade;

--CREATE USER Magic
--IDENTIFIED BY p4ssw0rd
--DEFAULT TABLESPACE users
--TEMPORARY TABLESPACE temp
--QUOTA 20M ON users;
--
--GRANT connect to Magic;
--GRANT resource to Magic;
--GRANT create session TO Magic;
--GRANT create table TO Magic;
--GRANT create view TO Magic;
--
--conn Magic/p4ssw0rd


DROP TABLE Backpack;
DROP TABLE Cart;
DROP TABLE Transactions;
DROP TABLE Humans;
DROP TABLE Role;
DROP TABLE Items;

CREATE TABLE Role
(
    RoleID INT PRIMARY KEY,
    RoleName VARCHAR(20)
);

CREATE TABLE Humans
(
    UserID INT PRIMARY KEY,
    Username VARCHAR(20),
    Password VARCHAR(20),
    Firstname VARCHAR(20),
    Lastname VARCHAR(20),
    RoleID INT,
    Gold INT,
    Perception INT,
    Stealth INT,
    
    CONSTRAINT RoleID_FK
    FOREIGN KEY (RoleID)
    REFERENCES Role(RoleID)

);

CREATE TABLE Items
(
    ItemID INT PRIMARY KEY,
    Name VARCHAR(30),
    Price INT,
    Description VARCHAR(100),
    Rarity VARCHAR(20),
    Image VARCHAR(200)
);

CREATE TABLE Backpack
(
    BackpackID INT PRIMARY KEY,
    OwnerID INT,
    ItemID INT,
    Stock INT,
    
    CONSTRAINT Backpack_FK
    FOREIGN KEY (OwnerID)
    REFERENCES Humans(UserID),
    FOREIGN KEY (ItemID)
    REFERENCES Items(ItemID)
);

CREATE TABLE Cart
(
    CartID INT PRIMARY KEY,
    UserID INT,
    ItemID INT,
    Amount INT,
    
    CONSTRAINT Cart_FK
    FOREIGN KEY (UserID)
    REFERENCES Humans(UserID),
    FOREIGN KEY (ItemID)
    REFERENCES Items(ItemID)
);

CREATE TABLE Transactions
(
    TransactionID INT PRIMARY KEY,
    UserID INT,
    ItemID INT,
    Amount INT,
    
    CONSTRAINT Transactions_FK
    FOREIGN KEY (UserID)
    REFERENCES Humans(UserID),
    FOREIGN KEY (ItemID)
    REFERENCES Items(ItemID)
);

commit;




