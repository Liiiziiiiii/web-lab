const express = require("express")
const cors = require("cors");
const jewelryRouter = require('./routers/jewelry.routers')

const PORT = process.env.PORT || 5500

const app = express()

app.use(cors());
app.use(express.json())
app.use('/api', jewelryRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
