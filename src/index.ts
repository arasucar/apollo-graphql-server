import { ApolloServer, BaseContext } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

import { LaunchAPI } from "./launch-api.js"
import typeDefs from "./typeDefs.js"
import resolvers from "./resolvers.js"

interface ServerContext extends BaseContext {
  dataSources: {
    launchAPI: LaunchAPI
  }
}

const server = new ApolloServer<ServerContext>({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer<ServerContext>(server, {
  listen: { port: 4000 },
  context: async () => ({
    dataSources: {
      launchAPI: new LaunchAPI({ cache: server.cache })
    }
  })
})

console.log(`🚀  Server ready at ${url}`)
