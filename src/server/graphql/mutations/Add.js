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
    primaryName : {
      name : 'primaryName',
      type : new GraphQLNonNull(GraphQLString)
    },
    thaiName : {
      name : 'thaiName',
      type : new GraphQLNonNull(GraphQLString)
    },
    englishName : {
      name : 'englishName',
      type : new GraphQLNonNull(GraphQLString)
    }
  },
  resolve : (root, params, options) => new Promise(
		(resolve,reject) =>
			CustomerService.add(
				{
					primaryName:params.primaryName,
					thaiName:params.thaiName,
					englishName:params.englishName
				}, (err, response) => {
					if (err) reject(err)
					else resolve(response)
	    })
		).then((data)=>data)
		.catch((err)=>err)
}
