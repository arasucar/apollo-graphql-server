// Interface definition of the object returned from the API.
export interface LaunchDto {
  id: string
  name: string
  details: string
  flight_number: bigint
  date_utc: string
  rocket: string
  upcoming: boolean
  success: boolean
  failures: {
    reason: string
  }[]
  fairings: {
    recovered: boolean
  }
  links: {
    flickr: {
      original: string[]
    }
    patch: {
      large: string
    }
    wikipedia: string
  }
}

// Interface definition of the object returned by the query.
export interface Launch {
  id: string
  name: string
  details: string
  flightNumber: bigint
  date: string
  upcoming: boolean
  success: boolean
  recovered: boolean
  failures: {
    reason: string
  }[]
  rocket: {
    id: string
  }
  links: {
    images: string[]
    patch: string
    wikipedia: string
  }
}


