import {
  GraphQLObjectType,
  GraphQLList 
} from 'graphql'
import GrpcCustomerType from './GrpcCustomerType'
import ResponseType from '../CommonTypes/ResponseType'

export default new GraphQLObjectType({
  name: 'CustomerResponseType',
  fields: {
    response : {
      type : new GraphQLNonNull(ResponseType)
    },
    customers: {
      type: new GraphQLList(GrpcCustomerType)
    }
  }
})
