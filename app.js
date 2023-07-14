const express = require("express")
const bodyParser = require("body-parser")

const config = require("./configs/config.json")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./utils/defaultChecker")()

const Routes = require("./routes/index")
app.use("/", Routes)

app.listen(config.app.port || 3000, () => {
    console.log(`Project is running on port ${config.app.port || 3000}`)
})