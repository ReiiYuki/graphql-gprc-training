import express from 'express'
import graphqlHTTP from './graphql'

const server = express()

server.use('/graphql', graphqlHTTP)

export default server
