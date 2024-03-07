// Interface definition of a response from the SpaceX API.
export interface LaunchQueryResponse {
  docs: LaunchDto[]
  totalDocs: number
  offset: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number
  nextPage: number
}

// Interface definition of a final response that will be returned from the service.
export interface LaunchesResponse {
  results: Launch[]
  totalCount: number
  totalPages: number
  page: number
  hasNextPage: boolean
}

// Interface definition of the resulting Launch object.
export interface LaunchDto {
  id: string
  name: string
  details: string
  flight_number: number
  date_utc: string
  rocket: {
    id: string
    name: string
    description: string
    company: string
    country: string
    wikipedia: string
    flickr_images: string[]
  }
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

// Interface definition of the Launch object returned by the service.
export interface Launch {
  id: string
  name: string
  details: string
  flightNumber: number
  date: string
  upcoming: boolean
  success: boolean
  recovered: boolean
  failures: {
    reason: string
  }[]
  rocket: {
    id: string
    name: string
    description: string
    company: string
    country: string
    wikipedia: string
    images: string[]
  }
  links: {
    images: string[]
    patch: string
    wikipedia: string
  }
}
