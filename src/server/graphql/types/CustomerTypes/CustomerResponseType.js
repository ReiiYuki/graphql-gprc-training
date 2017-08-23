import {
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'
import GrpcCustomerType from './GrpcCustomerType'
import ResponseType from '../CommonTypes/ResponseType'

export default new GraphQLObjectType({
  name: 'CustomerResponseType',
  fields: {
    response : {
      type : new GraphQLNonNull(ResponseType)
    },
    customer: {
      type: new GraphQLNonNull(GrpcCustomerType)
    }
  }
})
