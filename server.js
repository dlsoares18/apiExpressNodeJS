import express from 'express';

const app = express();

app.get('/user', (req, res) => {
    res.send('Hello world!')
    
})

app.listen('3000')