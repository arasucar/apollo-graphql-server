import {Launch, LaunchDto} from "./models"

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
    id: launch.rocket
  },
  links: {
    images: launch.links?.flickr?.original,
    patch: launch.links?.patch?.large,
    wikipedia: launch.links?.wikipedia
  }
})
