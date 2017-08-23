//import grpc from 'grpc'
let grpc = require('grpc')

const PROTO_PATH = __dirname + '/protos/customer.proto'

const customerProto = grpc.load(PROTO_PATH).customer

export default customerProto
