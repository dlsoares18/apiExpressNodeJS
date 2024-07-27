import express from 'express';

const app = express();

app.get('/user', (req, res) => {
    res.send('Hello world.')
    
})

app.post('/user', async(req, res) => {
    
})

app.listen('3000')