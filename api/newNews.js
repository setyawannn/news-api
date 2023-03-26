const express = require("express")
const NewNews = require("../models/newsNewModel")
const router = express.Router()

router.post("/news", async (req, res) => {
  try {

    const date = req.body.date
    const [day, month, year] = date.split("-")
    const dateObj = new Date(`${day} ${month}, ${year}`)
    const conDate = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

    req.body.date = conDate;
    const newNew = await NewNews.create(req.body)

    res.status(200).json(newNew)
  } catch (error) {
    console.log(error.message);
    res.statusCode(500).json({ message: error.message })
  }
})

router.get("/news", async (req, res) => {
  try {
    const search = req.query.search || ""
    const category = req.query.category || "";
    const regexSearch = new RegExp(search.replace(/\s+/g, '\\s*'), 'i');
    const regexCategory = new RegExp(category, 'i')

    let response;

    if (category === "For You") {
      response = await NewNews.find({
        title: { $regex: regexSearch }
      })
    } else {
      response = await NewNews.find({
        title: { $regex: regexSearch },
        category: { $regex: regexCategory }
      })
    }

    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    res.statusCode(500).json({ message: error.message })
  }
})

router.get("/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newNews = await NewNews.findById(id)
    res.status(200).json(newNews)
  } catch (error) {
    res.statusCode(500).json({ message: error.message })
  }
})

router.put("/news/:id", async (req, res) => {
  try {
    const date = req.body.date
    const [day, month, year] = date.split("-")
    const dateObj = new Date(`${day} ${month}, ${year}`)
    const conDate = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

    req.body.date = conDate;
    const { id } = req.params
    const newNews = await NewNews.findByIdAndUpdate(id, req.body)

    if (!newNews) {
      return res.status(404).json({ message: `Cannot find any news with ID ${id}` })
    }

    const updatedNews = await NewNews.findById(id)
    res.status(200).json(updatedNews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete("/news/:id", async (req, res) => {
  try {
    const { id } = req.params
    const newNews = await NewNews.findByIdAndDelete(id)

    if (!newNews) {
      return res.status(404).json({ message: `Cannot find any news with ID ${id}` })
    }

    res.status(200).json({ message: "Success delete news" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


module.exports = router