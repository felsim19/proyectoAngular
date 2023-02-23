const mongoose = require('mongoose')
require('dotenv').config({path: 'config.env'})

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.db_mongo,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('error')
        process.exit(1)
    }

}

module.exports = conectarBD