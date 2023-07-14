const express = require("express")
const bodyParser = require("body-parser")

const config = require("./configs/config.json")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./utils/defaultChecker")()

const contactsRoutes = require("./routes/contacts")
app.use("/contacts", contactsRoutes)

const routes = require("./routes/index")
app.use("/", routes)

app.listen(config.app.port || 3000, () => {
    console.log(`Project is running on port ${config.app.port || 3000}`)
})