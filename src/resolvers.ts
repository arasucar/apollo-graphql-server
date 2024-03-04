import { mapLaunch } from "./mappers.js"
import { LaunchDto } from "./models"

export default {
  Query: {
    launches: async (_, __, { dataSources }) => {
      const launches: LaunchDto[] = await dataSources.launchAPI.getLaunches()
      return launches.map((launch) => mapLaunch(launch))
    }
  }
}
