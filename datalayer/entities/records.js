const mongoose = require('../dbContext')

const Schema = mongoose.Schema

const recordsSchema = new Schema({
  key: String,
  value: String,
  createdAt: Schema.Types.Date,
  counts: []
})

var records = mongoose.model('records', recordsSchema)

module.exports = records
