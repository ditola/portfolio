require('dotenv').config();
const { MongoClient } = require('mongodb');
const { DATABASE_URL } = process.env;

let db = null;
let collection = null;

async function connectDB() {
    const client = await MongoClient.connect(DATABASE_URL);
    console.log("Connected successfully to db server");
    db = client.db('myproject');
    collection = db.collection('users');
}

// Register account
async function register(name, email, password) {
    try {
        const doc = { name, email, password, balance: 0 };
        await collection.insertOne(doc);
        const user = await collection.findOne({ email: email, password: password })
        return user;
    } catch (err) {
        console.error("Error in registration:", err);
        throw err;
    }
}

// Get user
async function getUser(email) {
    try {
        const user = await collection.findOne({ email: email });
        console.log("User found:", user);
        if (!user) {
            throw new Error('Email does not exist');
        }
        return user;
    } catch (err) {
        console.error("Error login in:", err);
        throw err;
    }
}

// Login user
async function login(email, password) {
    try {
        const user = await collection.findOne({ email: email, password: password });
        console.log("User found:", user);
        if (!user) {
            return null;
        }
        return user;
    } catch (err) {
        console.error("Error logging in:", err);
        throw err;
    }
}

// Deposit
async function deposit(email, amount) {
    try {
        const depositAmount = parseFloat(amount);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            throw new Error('Invalid deposit amount');
        }

        const user = await collection.findOne({ email: email });
        if (!user) {
            throw new Error('User not found');
        }

        user.balance += depositAmount;
        await collection.updateOne({ email: email }, { $set: { balance: user.balance } });
        
        return user;
    } catch (err) {
        console.error("Error in deposit function:", err);
        throw err;
    }
}


// Withdraw
async function withdraw(email, amount) {
    try {
        const user = await collection.findOne({ email: email });
        if (user.balance < parseInt(amount)) {
            console.log("Insufficient funds");
            return user;
        }
        user.balance -= parseInt(amount);
        await collection.updateOne({ email: email }, { $set: { balance: user.balance } });
        const result = await collection.findOne({ email: email });
        return result;
    } catch (err) {
        console.error("Error in widthraw:", err);
        throw err;
    }
}

// Transfer
async function transfer(email1, email2, amount) {
    try {
        const user1 = await collection.findOne({ email: email1 });
        const user2 = await collection.findOne({ email: email2 });
        if (user1.balance < parseInt(amount)) {
            console.log("Insufficient funds");
            return user1;
        }
        user1.balance -= parseInt(amount);
        user2.balance += parseInt(amount);
        await collection.updateOne({ email: email1 }, { $set: { balance: user1.balance } });
        await collection.updateOne({ email: email2 }, { $set: { balance: user2.balance } });
        const result = await collection.findOne({ email: email1 });
        return result;
    } catch (err) {
        console.error("Error in transfer:", err);
        throw err;
    }
}

// Get all users
async function all() {
    try{
        const collection = db.collection('users')
        const docs = await collection.find({}).toArray();
        console.log('All users:', docs);
        return docs;
    } catch (err) {
        console.error("Error in all:", err);
        throw err;
    }
}

module.exports = { connectDB, register, login, getUser, deposit, withdraw, transfer, all };