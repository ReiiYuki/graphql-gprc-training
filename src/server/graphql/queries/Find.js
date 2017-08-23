import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import CustomerResponseType from '../types/CustomerTypes/CustomerResponseType'
import CustomerService from '../../grpc/CustomerService'

export default {
  name: "find",
  type: CustomerResponseType,
  args: {
    name : {
      name : 'name',
      type : new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, params, options) => new Promise(
		(resolve,reject) =>
			CustomerService.find(
				{
					value:params.name
				}, (err, response)=>{
      		if (err) reject(err)
					else resolve(response)
    })
	).then((data) => data)
	.catch((err) => err)
}
