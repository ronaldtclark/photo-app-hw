const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/photo-hw')

mongoose.connection.on('connected', () => {
  console.log('mongoose connected')
})

mongoose.connection.on('disconnected', () => {
  console.log('mongoose disconnected')
})

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error')
})