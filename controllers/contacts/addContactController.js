const Contact = require("../../models/Contact")

const post = async (req, res) => {
    if (!req.body.name || !req.body.number) return res.status(401).json({ err: "parameters undefined [name, number]" })

    const newUser = await Contact.create({
        name: req.body.name,
        number: req.body.number,
        description: req.body.description || null,
        userId: req.user.id
    })

    res.json({ user: newUser })
}

module.exports = {
    post
}