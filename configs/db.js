const sequelize = require("sequelize")

const config = require("./config.json")

const db = new sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
)

try {
    db.authenticate()
    console.log(`Connected to DataBase ${config.database.name}`)
} catch (error) { console.log(`DataBase Error ${error}`) }

module.exports = db