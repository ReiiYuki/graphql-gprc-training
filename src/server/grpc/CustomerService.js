import grpc from 'grpc'
import CustomerGRPC from './CustomerGRPC'
import config from '../config'

const customerService = new CustomerGRPC.CustomerService(config.GRPC_PORT, grpc.credentials.createInsecure())

export default customerService
