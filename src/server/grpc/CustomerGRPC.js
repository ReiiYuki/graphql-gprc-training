import grpc from 'grpc'

const PROTO_PATH = './proto/customer.proto'

const customerProto = grpc.load(PROTO_PATH).customer

export default customerProto
