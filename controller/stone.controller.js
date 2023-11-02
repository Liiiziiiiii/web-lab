const db = require('../db')
class StoneController{
    async createStone(req, res) {
        const {name, carats, price} = req.body
        const newStone = await db.query(`INSERT INTO stones (name, carats, price) VALUES ($1, $2, $3) RETURNING *`, [name, carats, price])
        res.json(newStone.rows[0])

    }

    async getStones(req, res) {
        const stones = await db.query('SELECT * FROM stones')
        res.json(stones.rows)

        
    }

    async getOneStone(req, res) {
        const id = req.params.id
        const stone = await db.query('SELECT * FROM stones where id = $1', [id])
        res.json(stone.rows[0])
        
    }

    async updateStone(req, res) {
        const { id, name, carats, price } = req.body;
        const stone = await db.query('UPDATE stones SET name = $1, carats = $2, price = $3 WHERE id = $4 RETURNING *', [name, carats, price, id]);
        res.json(stone.rows[0]);
    }
    

    async deleteStone(req, res) {
        const id = req.params.id
        const stone = await db.query('DELETE FROM stones where id = $1', [id])
        res.json(stone.rows[0])
    }

    // async deleteStone(req, res) {
    // const id = req.params.id;
    // const stone = await db.query('DELETE FROM stones where id = $1', [id]);
    // res.json({ message: 'Stone deleted successfully' });
}


module.exports = new StoneController()



