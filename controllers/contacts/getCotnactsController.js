const Contact = require("../../models/Contact")

const get = async (req, res) => {
    const findContacts = await Contact.findAll({ where: { userId: req.user.id } })

    res.json(findContacts)
}

module.exports = {
    get
}