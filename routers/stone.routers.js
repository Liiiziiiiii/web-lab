const { Router } = require("express")

const router = new Router()
const stoneController = require(`../controller/stone.controller`)

router.post('/stone', stoneController.createStone)
router.get('/stone', stoneController.getStones)
router.get('/stone/:id', stoneController.getOneStone)
router.put('/stone', stoneController.updateStone)
router.delete('/stone/:id', stoneController.deleteStone)

module.exports = router