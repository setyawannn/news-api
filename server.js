const express = require("express")
const mongoose = require("mongoose")
const newsRouter = require("./routes/news")
const newNewsRouter = require("./routes/newNews")
require("dotenv/config")

const app = express();


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