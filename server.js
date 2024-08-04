const mysql = require('mysql');
const express = require('express');

const app = express();
app.use(express.json());

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})

conection.connect(err => {
    if (err) {
        console.error('Erro ao conectar a base de dados:', err);
        return;
    }
    console.log('Conexão estabelecida!');
})

app.get('/user', (req, res) => {
    conection.query('SELECT * FROM login', (err, queryRes) => {
        if (err){
            console.error('Erro ao executar a query: ', err)
            res.status(500).json({ error: 'Erro ao buscar dados.'})
            return
        }
        res.json(queryRes);
    })    
})

app.post('/user', async(req, res) => {
    const {username, password} = req.body;
    conection.query('INSERT INTO login (username, password) VALUES (?, ?)', [username, password], (err, queryRes) => {
        if (err) {
            console.error('Erro ao executar query: ', err)
            res.status(500).json({ error: 'Erro ao inserir.'})
            return
        }
        res.status(201).json({
            id: queryRes.insertId,
            username: username,
        })
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`)
})