import { RESTDataSource } from "@apollo/datasource-rest"
import { LaunchQueryResponse } from "./models"

export class LaunchAPI extends RESTDataSource {
  override baseURL = "https://api.spacexdata.com/v5/"
  async queryLaunches(queryJSON, options): Promise<LaunchQueryResponse> {
    const body = {
      query: JSON.parse(queryJSON),
      options
    }
    return await this.post<LaunchQueryResponse>("launches/query", { body })
  }
}
