import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'

const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req,res) => {
    res.send("<h1> Welcome Page </h1>")
})

app.listen(PORT, () => console.log("Server started at http://localhost:" + PORT))