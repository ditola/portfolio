const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./dal.js');
require('dotenv').config();
const {API_PORT} = process.env;
const {API_PORT_BACKUP} = process.env;

// Server
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// Register account (email)
app.get('/account/register/:name/:email/:password', (req, res) => {
    dal.register(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        })
        .catch((err) => {
            res.send(err);
            res.status(500).send('Internal Server Error');
        });
});

// Login user (email)
app.get('/account/login/:email/:password', async (req, res) => {
    try {
        const user = await dal.login(req.params.email, req.params.password);
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        res.send(user);
    } catch (err) {
        console.error(err);
        if (!res.headersSent) {
            res.status(500).send('Internal Server Error');
        }
    }
});

// user
app.get('/account/user/:email', (req, res) => {
    dal.getUser(req.params.email)
        .then((user) => {
            console.log(user);
            res.send(user);
        })
        .catch((err) => {
            res.send(err);
            res.status(500).send('Internal Server Error');
        });
});

// Deposit
app.post('/account/deposit', async (req, res) => {
    try {
        const { email, amount } = req.body;
        if (!email || amount == null) {
            return res.status(400).send('Email and amount are required');
        }

        const user = await dal.deposit(email, amount);
        console.log(user);
        res.json(user);
    } catch (err) {
        console.error("Error in deposit route:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Withdraw
app.post('/account/withdraw', async (req, res) => {
    try {
        const { email, amount } = req.body;
        const user = await dal.withdraw(email, amount);
        res.json(user);
    } catch (err) {
        console.error("Error in withdraw route:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Transfer
app.post('/account/transfer', async (req, res) => {
    try {
        const { fromEmail, toEmail, amount } = req.body;
        
        if (!fromEmail || !toEmail || amount == null) {
            return res.status(400).send('All fields are required');
        }

        const user = await dal.transfer(fromEmail, toEmail, amount);
        res.json(user);

    } catch (err) {
        console.error("Error in transfer route:", err);
        const statusCode = err.message === 'One or both users not found' ? 404 : 
                           err.message === 'Insufficient funds' ? 403 : 500;
        res.status(statusCode).send(err.message);
    }
});

// All
app.get('/account/all', (req, res) => {
    dal.all()
        .then((users) => {
            console.log(users);
            res.send(users);
        })
        .catch((err) => {
            res.send(err);
            res.status(500).send('Internal Server Error');
        });
});

const port = API_PORT || API_PORT_BACKUP;
dal.connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening at ${port}`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to DB', err);
    });