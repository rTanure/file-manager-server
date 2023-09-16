const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

const textRoute = require("./routes/textRoute")

require("dotenv").config()

app.use(express.json())
app.use(cors())

app.use("/api/text", textRoute)

app.get("/", (req, res) => {
  res.send("Funcionou!")
})

const PORT = process.env.PORT | 3333
const URI = process.env.ATLAS_URI

app.listen(PORT, () => {
  console.log(`>> Server running in ${PORT}`)
})

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(">> Connected to atlas database.") )
.catch((e) => console.log(e.message))