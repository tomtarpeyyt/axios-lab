const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 5555;

const fizData = {
    fiz: "buz",
    foo: "bar",
    Baz: "biz"
}

const buzData = [
    {
        id: 1,
        name: "fiz"
    },
    {
        id: 2,
        name: "buz"
    },
    {
        id: 3,
        name: "foo"
    },
    {
        id: 4,
        name: "bar"
    }
]


app.use(express.json());

app.get('/', (req, res) => {
    res.json('time2code');
})

app.get('/fiz', (req, res) => {
    res.status(200).json(fizData);
})

app.get('/buz', (req, res) => {
    res.status(200).json(buzData);
})

app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
})