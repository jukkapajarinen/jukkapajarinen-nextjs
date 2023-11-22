import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resumeData from './resumeData.json' assert {type: "json"};

const typeDefs = `#graphql
  type Experience {
    position: String
    company: String
    startDate: String
    endDate: String
    responsibilities: [String]
  }

  type Query {
    experience: [Experience]
  }
`;

const resolvers = {
  Query: {
    experience: () => resumeData.experience,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);