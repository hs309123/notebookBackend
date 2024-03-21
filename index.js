const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const { connectDb } = require("./postgreSqlConnection")
const noteRoutes = require("./routes/noteRoutes")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connectDb()

const PORT = process.env.PORT

app.use("/v1/notes", noteRoutes)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})