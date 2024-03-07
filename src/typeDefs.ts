export default `#graphql
  type LaunchesResponse {
    results: [Launch]
    totalCount: Int
    totalPages: Int
    page: Int
    hasNextPage: Boolean
  }

  "Some fields that describe Launch resource on SpaceX REST API." 
  type Launch {
    id: String!
    name: String!
    details: String
    flightNumber: Int
    date: String!
    upcoming: Boolean!
    success: Boolean
    recovered: Boolean
    failures: [Failure]
    rocket: Rocket
    links: LaunchLinks
  }
  
  "Launch failure object."
  type Failure {
    reason: String
  }
  
  "Some fields that describe Rocket."
  type Rocket {
    id: String!
    company: String
    country: String
    name: String
    description: String
    wikipedia: String
    images: [String]
  }
  
  "Some of the launch links provided by the SpaceX REST API."
  type LaunchLinks {
    images: [String]
    patch: String
    wikipedia: String
  }
  
  "Sort input object to use in API request body."
  input SortInput {
    id: Int
    name: Int
    flight_number: Int
    date_utc: Int
    upcoming: Int
    success: Int
  }
  
  "Options input object to use in API request body."
  input OptionsInput {
    sort: SortInput
    limit: Int,
    offset: Int
  }
    
  type Query {
    # Returns list of launches according to the filters.
    launches(queryJSON: String, options: OptionsInput): LaunchesResponse
  }
`
