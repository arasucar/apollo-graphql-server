import { Launch, LaunchDto, LaunchesResponse, LaunchQueryResponse } from "./models"
export const mapLaunch = (launch: LaunchDto): Launch => ({
  id: launch.id,
  name: launch.name,
  details: launch.details,
  flightNumber: launch.flight_number,
  date: launch.date_utc,
  upcoming: launch.upcoming,
  success: launch.success,
  recovered: launch.fairings?.recovered,
  failures: launch.failures,
  rocket: {
    id: launch.rocket?.id,
    name: launch.rocket?.name,
    description: launch.rocket?.description,
    company: launch.rocket?.company,
    country: launch.rocket?.country,
    wikipedia: launch.rocket?.wikipedia,
    images: launch.rocket?.flickr_images
  },
  links: {
    images: launch.links?.flickr?.original,
    patch: launch.links?.patch?.large,
    wikipedia: launch.links?.wikipedia
  }
})

export const mapResponse = (dto: LaunchQueryResponse): LaunchesResponse => ({
  results: dto.docs.map((doc) => mapLaunch(doc)),
  totalCount: dto.totalDocs,
  totalPages: dto.totalPages,
  page: dto.page,
  hasNextPage: dto.hasNextPage
})
