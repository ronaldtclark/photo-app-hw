const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
  title: {type: String, required: true},
  url: String
})

module.exports = mongoose.model('Photo', photoSchema)