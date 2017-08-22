import customerGRPC from './customer_grpc'
import { GRPC_PORT } from '../config'

const customerService = new customerGRPC.CustomerService(GRPC_PORT, grpc.credentials.createInsecure())

export default customerService
