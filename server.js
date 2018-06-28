const express = require('express')
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql')

const app = express()

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true
  })
)

// GraphiQL, a visual editor for queries
app.listen(5000, () => {
  console.log('Listening on Port 5000')
})
