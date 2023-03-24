const mongoose = require("mongoose")

const newNewsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: [
      {
        name: {
          type: String,
          required: true
        },
        desc: {
          type: String,
          required: true
        },
        image: {
          type: String,
          required: true
        },
        verified: {
          type: Boolean,
          required: true
        }
      },
    ],
    category: {
      type: String,
      require: true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
)

const NewNews = mongoose.model('NewNews', newNewsSchema)
module.exports = (NewNews)