const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LotSchema = new Schema({
  name: String,
  address: String,
  organization: {
    type: Schema.Types.ObjectId,
    ref: 'organization'
  },
  status: String
})

const Lot = mongoose.model('lot', LotSchema)

module.exports = Lot
