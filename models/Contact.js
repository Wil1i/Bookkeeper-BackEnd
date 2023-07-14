const db = require("../configs/db")

const { DataTypes } = require("sequelize")

const Contact = db.define("contacts", {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.TEXT
    },

    number: {
        type: DataTypes.TEXT
    },

    description: {
        type: DataTypes.TEXT
    }
})

Contact.sync()

module.exports = Contact