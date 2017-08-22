import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
  name: 'GrpcCustomer',
  fields: {
    id : {
      type: new GraphQLNonNull(GraphQLID)
    },
    primaryName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    thaiName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    englishName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})
