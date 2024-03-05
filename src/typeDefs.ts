export default `#graphql
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
  
  input QueryInput {
    name: String
    rocket: QueryRocketInput
  }
  
  input QueryRocketInput {
    name: String  
  }
  
  input SortInput {
    id: Int
    name: Int
    flight_number: Int
    date_utc: Int
    upcoming: Int
    success: Int
  }
  
  input OptionsInput {
    sort: SortInput
    limit: Int,
    offset: Int
  }
    
  type Query {
    # Returns list of launches
    launches(query: QueryInput, options: OptionsInput): [Launch]
  }
`
