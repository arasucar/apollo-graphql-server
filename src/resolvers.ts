import { mapLaunch } from "./mappers.js"
import { LaunchQueryResponse } from "./models"

export default {
  Query: {
    launches: async (_, __, { dataSources }) => {
      const response: LaunchQueryResponse = await dataSources.launchAPI.queryLaunches(__.queryJSON, {
        populate: "rocket",
        limit: 10,
        offset: 0,
        ...__.options
      })
      return response.docs?.map((launch) => mapLaunch(launch))
    }
  }
}
