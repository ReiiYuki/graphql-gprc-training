import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import ResponseType from '../types/CommonTypes/ResponseType'
import GrpcCustomerType from '../types/CustomerTypes/GrpcCustomerType'
import CustomerService from '../../grpc/CustomerService'

export default {
  name: "add",
  type: ResponseType,
  args: {
    GrpcCustomer : {
      name : 'GrpcCustomer',
      type : new GraphQLNonNull(GrpcCustomerType)
    }
  },
  resolve (root, params, options) {
    CustomerService.add(params.GrpcCustomer, (err, response)=>{
      console.log(response)
    })
    return null
  }
}
