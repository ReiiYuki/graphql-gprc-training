import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Name',
  fields: {
    value: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})
