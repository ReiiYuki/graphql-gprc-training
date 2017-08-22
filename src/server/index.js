import server from './server'
import config from './config'

server.listen(config.PORT, (err) => {
  if (err) console.log(err)
  else console.log('Server is working on PORT : '+config.PORT)
})
