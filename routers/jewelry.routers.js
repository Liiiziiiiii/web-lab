const { Router } = require("express")
const router = new Router()
const jewelryController = require("../controller/jewelry.controller")

router.get('/jewelry', jewelryController.getJewelry);  
router.get('/jewelry/:category', jewelryController.getJewelryByCategory); 
router.post('/login', jewelryController.loginUser);
router.post('/create_user', jewelryController.createUser);
router.get('/users', jewelryController.getUser)




module.exports = router;
