const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(express.static("uploads"))
// app.use(express.static(path.join(__dirname, "dist")))
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", require("./routes/admin.routes"))
app.use("/api/popular", require("./routes/popular.routes"))
app.use("/api/order", require("./routes/order.routes"))
app.use("/api/suggest", require("./routes/suggest.routes"))

app.use("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "dist", "index.html"))
    res.status(400).json({ message: "Resource Not Found" })
})
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || "Something Went Wrong" })
})
mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
    console.log("MONGO CONNECTED")

})
