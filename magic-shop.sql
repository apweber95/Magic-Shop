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

DROP SEQUENCE cart_seq;
DROP SEQUENCE human_seq;
DROP SEQUENCE role_seq;
DROP SEQUENCE backpack_seq;
DROP SEQUENCE items_seq;
DROP SEQUENCE transaction_seq;

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
    Luck INT,
    
    CONSTRAINT RoleID_FK
    FOREIGN KEY (RoleID)
    REFERENCES Role(RoleID)
);

CREATE TABLE Items
(
    ItemID INT PRIMARY KEY,
    Name VARCHAR(100),
    ShelfPrice Number,
    Description VARCHAR(2000),
    Rarity VARCHAR(100),
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

INSERT INTO ROLE (RoleID, RoleName) VALUES(1, 'Admin');
INSERT INTO ROLE (RoleID, RoleName) VALUES(2, 'Employee');
INSERT INTO ROLE (RoleID, RoleName) VALUES(3, 'Customer');
INSERT INTO ROLE (RoleID, RoleName) VALUES(4, 'Banned');
INSERT INTO ROLE (RoleID, RoleName) VALUES(5, 'Dead');

INSERT INTO Humans(UserID, Username, Password, FirstName, Lastname, RoleID, Gold, Perception, Stealth, Luck) VALUES(1, 'admin', 'admin', 'Store', 'Owner', '1', 10000, 40, 1, 40);
INSERT INTO Humans(UserID, Username, Password, FirstName, Lastname, RoleID, Gold, Perception, Stealth, Luck) VALUES(2, 'employee', 'employee', 'work', 'er', '2', 1000, 12, 4, 17);
INSERT INTO Humans(UserID, Username, Password, FirstName, Lastname, RoleID, Gold, Perception, Stealth, Luck) VALUES(3, 'customer', 'customer', 'advent', 'ure', '3', 1000, 6, 4, 14);

INSERT INTO Items(ItemID, Name, ShelfPrice, Description, Rarity, Image) VALUES (1, 'Rusty Dagger', 1, 'Foes will wish they got that tetanus shot.', 'common', null);
INSERT INTO Items(ItemID, Name, ShelfPrice, Description, Rarity, Image) VALUES (2, 'Rusty Armor', 1, 'You will wish you got that tetanus shot.', 'common', null);
INSERT INTO Items(ItemID, Name, ShelfPrice, Description, Rarity, Image) VALUES (3, 'Battered Shield', 1, 'Better than nothing...probably.', 'common', null);
INSERT INTO Items(ItemID, Name, ShelfPrice, Description, Rarity, Image) VALUES (4, 'Creaky Bow', 1, 'Ends battles with a snap.', 'common', null);
INSERT INTO Items(ItemID, Name, ShelfPrice, Description, Rarity, Image) VALUES (5, 'Magic for Dummies', 1, 'Apparently just a book about making lively looking manequins.', 'common', null);

INSERT INTO Backpack(BackpackID, OwnerID, ItemID, Stock) VALUES (1, 1, 1, 1);
INSERT INTO Backpack(BackpackID, OwnerID, ItemID, Stock) VALUES (2, 2, 2, 2);
INSERT INTO Backpack(BackpackID, OwnerID, ItemID, Stock) VALUES (3, 3, 3, 3);
INSERT INTO Backpack(BackpackID, OwnerID, ItemID, Stock) VALUES (4, 1, 2, 2);
INSERT INTO Backpack(BackpackID, OwnerID, ItemID, Stock) VALUES (5, 1, 3, 3);

INSERT INTO Cart(CartID, UserID, ItemID, Amount) VALUES (1, 1, 1, 1);
INSERT INTO Cart(CartID, UserID, ItemID, Amount) VALUES (2, 2, 2, 2);
INSERT INTO Cart(CartID, UserID, ItemID, Amount) VALUES (3, 3, 3, 3);

INSERT INTO Transactions(TransactionID, UserID, ItemID, Amount) VALUES (1, 1, 1, 1);
INSERT INTO Transactions(TransactionID, UserID, ItemID, Amount) VALUES (2, 2, 2, 2);
INSERT INTO Transactions(TransactionID, UserID, ItemID, Amount) VALUES (3, 3, 3, 3);

CREATE SEQUENCE cart_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
CREATE SEQUENCE human_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
CREATE SEQUENCE role_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
CREATE SEQUENCE backpack_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
CREATE SEQUENCE items_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
CREATE SEQUENCE transaction_seq
    START WITH     10
    INCREMENT BY   1
    NOCACHE
    NOCYCLE;
 
commit;
