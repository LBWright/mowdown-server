const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    } , 
    lastName: {
      type: GraphQLString
    } ,
    organization: {
      type: GraphQLString
    } ,
    lots: {
      type:
    } ,
    profile: {
      type: 
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: {type: GraphQLString } },
      resolve(parentValue, args) {
        User.findById()
      }
    }
  }
})
