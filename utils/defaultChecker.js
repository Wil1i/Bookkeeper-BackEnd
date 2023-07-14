const User = require("../models/User")
const Contact = require("../models/Contact")

const defaultChecker = async () => {
    await User.sync()
    await Contact.sync()

    await User.create({
        username: "admin",
        firstName: "admin",
        lastName: "admin",
        password: "admin",
        number: "0"
    })

    await Contact.create({
        name: "admin",
        number: "0",
        description: "Admin Contact"
    })
}

module.exports = defaultChecker