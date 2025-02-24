const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.put('/updateUser', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }


    res.status(200).send('User data updated successfully');
});

const PORT = process.env.PORT || 3000;
app.delete('/deleteUser', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    res.status(200).send('User deleted successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

