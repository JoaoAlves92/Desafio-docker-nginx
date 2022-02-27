import express from 'express';
import path from 'path';
import sequelize from './conn.js';
import User from './userModel.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/users', async (req, res) => {
    await sequelize.sync();
    User.findAll().then(function(users) {
        res.status(200).send(users)
    })
})

app.post('/users/', async (req, res) => {
    const { name } = req.body

    await sequelize.sync();
    const user = await User.create({
        name: name
    });
    return res.status(200).json(user.toJSON())
})

app.listen(3000, () => {
    console.log('server running')
})