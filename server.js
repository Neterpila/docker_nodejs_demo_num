const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/number', getRandomNumber);

app.use((err, req, res, next) => {
    console.error(err.message || err);
    return res.status(500).json({ message: "Oops, seems like the server got itself in trouble" });    
});

const port = 8080;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

function getRandomNumber(req, res, next) {
    res.json({
        number: Math.floor(Math.random() * 10)
    })        
}