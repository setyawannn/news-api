const express = require("express")
const mongoose = require("mongoose")
const newsRouter = require("./api/news")
const newNewsRouter = require("./api/newNews")
const cors = require("cors")
require("dotenv/config")

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// NEWS
app.use("/api", newsRouter)
app.use("/api/v2", newNewsRouter)

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Node API is Running in port ${process.env.PORT}`);
    })
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  }) 