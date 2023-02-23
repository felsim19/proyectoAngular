const express = require('express')
const conectarBD = require('./config/db') 
const cors = require('cors')

const app = express()

conectarBD()
app.use(cors())
app.use(express.json()) 

app.use('/api', require('./routes/routes'))

app.listen(4000, () =>{
    console.log('servidor arriba')
})


