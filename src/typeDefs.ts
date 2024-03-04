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
  
  "Rocket object."
  type Rocket {
    id: String!
  }
  
  "Some of the launch links provided by the SpaceX REST API."
  type LaunchLinks {
    images: [String]
    patch: String
    wikipedia: String
  }
    
  type Query {
    # Returns list of launches
    launches: [Launch]
  }
`
