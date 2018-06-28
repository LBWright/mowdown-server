const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    }
  },
  email: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    }
  },
  lastName: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    }
  },
  userLevel: String,
  organization: {
    type: Schema.Types.ObjectId,
    ref: 'organization'
  },
  lots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'lot'
    }
  ],
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profile'
  },
  created: new Date()
})

const User = mongoose.model('user', UserSchema)

module.exports = User
