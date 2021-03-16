
const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const app = express();
var cors = require('cors')

const accessTokenSecret = 'somerandomaccesstoken';

app.use(bodyParser.json());
app.use(cors())

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

const books = []

app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});

app.post('/books', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }


    const book = req.body;
    books.push(book);

    res.send('book added successfully');
});

app.listen(4000, () => {
    console.log('Books service started on port 4000');
});