const { Router } = require("express")

const router = new Router()
const jewelryController = require(`../controller/jewelry.controller`)

router.get('/jewelry', jewelryController.getJewelry)

module.exports = router