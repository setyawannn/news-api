const express = require("express")
const News = require("../models/newsModel")
const router = express.Router()


// GET ALL
router.get("/news", async (req, res) => {
  try {
    const news = await News.find({})
    res.status(200).json(news)
  } catch (error) {
    req.statusCode(500).json({ message: error.message })
  }
})

// FIND BY ID
router.get("/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id)
    res.status(200).json(news)
  } catch (error) {
    req.statusCode(500).json({ message: error.message })
  }
})

// CREATE
router.post("/news", async (req, res) => {
  try {
    const news = await News.create(req.body)
    res.status(200).json(news)
  } catch (error) {
    console.log(error.message);
    req.statusCode(500).json({ message: error.message })
  }
})

// UPDATE
router.put("/news/:id", async (req, res) => {
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

// DELETE
router.delete("/news/:id", async (req, res) => {
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

module.exports = router