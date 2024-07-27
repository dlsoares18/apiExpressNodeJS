import express from 'express';

const app = express();
app.use.json();

app.get('/user', (req, res) => {
    res.send('Hello world.')
    
})

app.post('/user', async(req, res) => {
    res.statusCode(200).json
})

app.listen('3000')