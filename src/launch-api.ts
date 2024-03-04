import { RESTDataSource } from '@apollo/datasource-rest'
import {LaunchDto} from "./models"

export class LaunchAPI extends RESTDataSource {
  override baseURL = 'https://api.spacexdata.com/v5/'
  async getLaunches(): Promise<LaunchDto[]> {
    return await this.get<LaunchDto[]>('launches/past')
  }
}
