const mongoose = require('mongoose')

mongoose.connect('mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study', (error) => {
  if (error) {
    throw error
  }
})

module.exports = mongoose
