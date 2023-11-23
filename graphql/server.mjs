import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resumeData from './resumeData.json' assert {type: "json"};

const typeDefs = `#graphql
  type PersonalInfo {
    name: String
    email: String
  }

  type Education {
    school: String
    startDate: String
    endDate: String
    entries: [String]
  }

  type Experience {
    position: String
    company: String
    startDate: String
    endDate: String
    entries: [String]
    technologies: [String]
  }

  type Query {
    information: [PersonalInfo]
    education: [Education]
    experience: [Experience]
  }
`;

const resolvers = {
  Query: {
    information: () => resumeData.information,
    education: () => resumeData.education,
    experience: () => resumeData.experience,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);