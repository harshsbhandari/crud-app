const express = require("express")
const app = express()
const port = 3000
const cors = require('cors')
const productRoutes = require("./routes/product.routes")
const connectDB = require("./connectDB")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

connectDB()

app.use("/api", productRoutes)

app.get("/", (req, res) => {
    res.send("Hi from express")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
