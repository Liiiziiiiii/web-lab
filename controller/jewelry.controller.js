const db = require('../db');

class JewelryController {
    async getJewelry(req, res) {
        const jewelries = await db.query('SELECT * FROM jewelrys')
        res.json(jewelries.rows)
    }

    async getJewelryByCategory(req, res) {
        try {
            const { category, searchTerm } = req.query;

            let query = 'SELECT * FROM jewelrys WHERE 1=1';

            if (category) {
                const categories = Array.isArray(category) ? category : [category];
                query += ` AND category IN ('${categories.join("','")}')`;
            }

            if (searchTerm) {
                query += ` AND LOWER(title) LIKE LOWER('%${searchTerm}%')`;
            }

            const jewelries = await db.query(query);
            res.json(jewelries.rows);
        } catch (error) {
            console.error('Error fetching jewelry data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    async createUser(req, res) {
        try {
            const { firstName, lastName, password, email, phoneNumber, location } = req.body;
            const result = await db.query(
                'INSERT INTO users (firstName, lastName, password, email, phoneNumber, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [firstName, lastName, password, email, phoneNumber, location]

            );

            res.json(result.rows[0]);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async loginUser(req, res) {
        const { firstName, password } = req.body; 
    
        const query = 'SELECT * FROM users WHERE firstName = $1 AND password = $2;';
        const values = [firstName, password];
    
        try {
            const result = await db.query(query, values);
    
            if (result.rows.length > 0) {
                res.json({ status: 'ok', data: result.rows[0] });
            } else {
                res.status(401).json({ status: 'error', message: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    }
    

    async getUser(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

}
module.exports = new JewelryController();
