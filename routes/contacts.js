let { Router } = require("express")
Router = new Router()

const { isUserLoggedIn, isUserBookkeeper } = require("../middlewares/jwt")

const getContactsController = require("../controllers/contacts/getCotnactsController")
Router.get("/get", isUserLoggedIn, isUserBookkeeper, getContactsController.get)

const getContactController = require("../controllers/contacts/getContactController")
Router.get("/get/single", isUserLoggedIn, isUserBookkeeper, getContactController.get)

const addContactController = require("../controllers/contacts/addContactController")
Router.post("/add", isUserLoggedIn, isUserBookkeeper, addContactController.post)

module.exports = Router