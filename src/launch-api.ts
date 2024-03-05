import { RESTDataSource } from "@apollo/datasource-rest"
import { LaunchQueryResponse } from "./models"

export class LaunchAPI extends RESTDataSource {
  override baseURL = "https://api.spacexdata.com/v5/"
  async queryLaunches(query, options): Promise<LaunchQueryResponse> {
    return await this.post<LaunchQueryResponse>("launches/query", { body: { query, options } })
  }
}
