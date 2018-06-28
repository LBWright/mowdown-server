const express = require('express')
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql')
const schema = require('./graphql/schema/schema')

mongoose.connect('mongodb://localhost:27017/mowdown')
let db = mongoose.connection
db.on('error', () => {
  console.log('---FAILED to connect to mongoose')
})
db.once('open', () => {
  console.log('+++Connected to mongoose')
})

const app = express()

app.use(
  '/graphql',
  schema,
  expressGraphQL({
    graphiql: true
  })
)

// GraphiQL, a visual editor for queries
app.listen(5000, () => {
  console.log('Listening on Port 5000')
})
