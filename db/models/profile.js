const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  description: String
})

const Profile = mongoose.model('profile', ProfileSchema)

module.exports = Profile
