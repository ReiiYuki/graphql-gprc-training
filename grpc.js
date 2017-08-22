
const PROTO_PATH = './proto/customer.proto'

let grpc = require('grpc')
let proto = grpc.load(PROTO_PATH)

function start() {
  let client = new proto.customer.CustomerService('192.168.0.148:8983',
                                       grpc.credentials.createInsecure())
  client.add({primaryName:'A',thaiName:'ก',englishName:'C'}, (err, response) => {
    console.log(err,response)
  })
}

main()
