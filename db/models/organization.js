const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrganizationSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    }
  },
  description: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  lots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'lot'
    }
  ],
  finishedLots: Integer,
  created: new Date()
})

const Organization = mongoose.model('organization', OrganizationSchema)

module.exports = Organization
