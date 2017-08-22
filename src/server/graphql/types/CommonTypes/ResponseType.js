import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Response',
  fields: {
    statusCode : {
      type: new GraphQLNonNull(GraphQLInt)
    },
    desc: {
      type: new GraphQLNonNull(GraphQLString)
    }
})
