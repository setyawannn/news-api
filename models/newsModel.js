const mongoose = require("mongoose")

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a news name"]
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const News = mongoose.model('News', newsSchema)
module.exports = (News)