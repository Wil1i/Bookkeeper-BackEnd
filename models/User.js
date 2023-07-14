const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.TEXT
    },

    firstName: {
        type: DataTypes.TEXT
    },

    lastName: {
        type: DataTypes.TEXT
    },

    password: {
        type: DataTypes.TEXT
    },

    number: {
        type: DataTypes.TEXT
    }
})

const Contact = db.define("contacts", {
    id: {
        type: DataTypes.INTEGER,
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
    },

    userId: {
        type: DataTypes.INTEGER
    }
})

User.sync()

User.hasMany(Contact, { as: "contacts" })
Contact.belongsTo(User, {
    foreginKey: "userId",
    as: "contacts"
})

module.exports = User