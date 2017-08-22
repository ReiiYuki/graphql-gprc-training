import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import CustomerResponseType from '../types/CustomerTypes/CustomerResponseType'
import NameType from '../types/CustomerTypes/NameType'
import CustomerService from '../../grpc/CustomerService'

export default {
  name: "find"
  type: CustomerResponseType,
  args: {
    Name : {
      name : 'Name',
      type : new GraphQLNonNull(NameType)
    }
  },
  resolve (root, params, options) {
    CustomerService.find(params.Name, (err, response)=>{
      console.log(response)
    })
    return null
  }
}
