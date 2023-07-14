const Contact = require("../../models/Contact")

const get = async (req, res) => {
    const allContacts = await Contact.findAll({ where: { userId: req.user.id } })

    const filteredContacts = allContacts.filter(contact => contact.name != req.body.param && contact.number != req.body.param)

    res.json(filteredContacts)
}

module.exports = {
    get
}