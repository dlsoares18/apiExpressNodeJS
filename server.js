const mysql = require('mysql');
const express = require('express');

const app = express();
app.use(express.json());

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactsanta'
})

conection.connect(err => {
    if (err) {
        console.error('Erro ao conectar a base de dados:', err);
        return;
    }
    console.log('Conexão estabelecida!');
})

app.get('/user', (req, res) => {
    res.send('Hello world.')
    
})

app.post('/user', async(req, res) => {
    res.statusCode(200).json
    return;
})

app.listen('3000')