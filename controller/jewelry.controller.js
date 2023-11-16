const db = require('../db')
class JewelryController{

    async getJewelry(req, res) {
        const jewelries = await db.query('SELECT * FROM jewelrys')
        res.json(jewelries.rows)

        
    }



}


module.exports = new JewelryController()



