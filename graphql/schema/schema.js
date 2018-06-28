import { GraphQLSchema } from 'graphql'

const graphql = require('graphql')
const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql
const Lot = require('../../db/models/lot')
const User = require('../../db/models/user')
const Organization = require('../../db/models/organization')

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return User.find({parentValue.id})
      }
    },
    lots: {
      type: new GraphQLList(LotType),
    },
    completedLotsCount: { type: GraphQLInt }
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    profile: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    userLevel: GraphQLString,
    organization: {
      type: OrganizationType,
      resolve (parentValue, args) {
        return Organization.findOne({ id: args.id })
      }
    },
    lots: {
      type: new GraphQLList(LotType)
    },
    profile: {
      type: ProfileType
    }
  })
})

const LotType = new GraphQLObjectType({
  name: 'Lot',
  fields: ()=> ({
    name: GraphQLString,
    address: GraphQLString,
    organization: {
      type: OrganizationType,
      resolve (parentValue, args){
        return Organization.findOne({id: args.id})
      }
    },
    status: {
      type: GraphQLString
    }
  })
})



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        return new Promise((resolve, reject) => {
          User.findOne({ id: args.id }, projections, (err, user) => {
            err ? reject(err) : resolve(user)
          })
        })
      }
    },
    organization: {
      type: OrganizationType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        return Organization.findOne({ id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
