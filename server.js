const express = require("express")
const mongoose = require("mongoose")
const News = require("./models/newsModel")
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api/news", async (req, res) => {
  try {
    const news = await News.find({})
    res.status(200).json(news)
  } catch (error) {
    req.statusCode(500).json({ message: error.message })
  }
})
app.get("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id)
    res.status(200).json(news)
  } catch (error) {
    req.statusCode(500).json({ message: error.message })
  }
})

app.post("/api/news", async (req, res) => {
  try {
    const news = await News.create(req.body)
    res.status(200).json(news)
  } catch (error) {
    console.log(error.message);
    req.statusCode(500).json({ message: error.message })
  }
})

app.put("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params
    const news = await News.findByIdAndUpdate(id, req.body)

    if (!news) {
      return res.status(404).json({ message: `cannot find any news with ID ${id}` })
    }

    const updatedNews = await News.findById(id)
    res.status(200).json(updatedNews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.delete("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params
    const news = await News.findByIdAndDelete(id)

    if (!news) {
      return res.status(404).json({ message: `cannot find any news with ID ${id}` })
    }

    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://admin:admin123@nextjscrud.6fwp1wo.mongodb.net/NewsAPI?retryWrites=true&w=majority")
  .then(() => {
    app.listen(8000, () => {
      console.log(`Node API is Running in port 8000`);
    })
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  }) 